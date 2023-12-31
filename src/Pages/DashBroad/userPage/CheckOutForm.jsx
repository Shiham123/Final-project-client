import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import { AppContext } from '../../../Context/context';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post('/create-payment-intent', { price: totalPrice })
        .then((response) => setClientSecret(response.data.clientSecret))
        .catch((error) => console.log(error));
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (card === null) return;

    /**
     * ! payment method
     */
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      console.log('payment method', paymentMethod);
    }

    /**
     * ! payment intent
     */
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      });

    if (confirmError) {
      console.log('confirm error', confirmError);
    } else {
      if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);

        const orderInfo = {
          email: user.email,
          price: totalPrice,
          date: new Date(),
          transactionId: paymentIntent.id,
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: 'pending',
        };

        const response = await axiosSecure.post('/payments', orderInfo);
        console.log('payment info', response.data);
        refetch();
        if (response.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thank you for the payment your food',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/dashBroad/paymentHistory');
        }
      }
    }
  };

  const cardElementStyle = {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ style: cardElementStyle }}></CardElement>
      <button
        disabled={!stripe || !clientSecret}
        className="border-2 border-formTextColor px-8 py-2 text-2xl hover:bg-formTextColor hover:text-white rounded-lg duration-300"
      >
        Pay
      </button>
      {transactionId && (
        <p className="font-poppins text-2xl text-green-500">
          Your transaction ID:{' '}
          <span className="font-semibold">{transactionId}</span>
        </p>
      )}
      {error && (
        <p className="font-poppins text-2xl text-red-500">{error.message}</p>
      )}
    </form>
  );
};

export default CheckOutForm;
