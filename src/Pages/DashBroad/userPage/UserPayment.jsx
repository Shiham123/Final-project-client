import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../SubSection/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

const UserPayment = () => {
  return (
    <div>
      <SectionTitle heading="Payment" subHeading="please pay to eat" />
      <Elements stripe={stripePromise}>
        <CheckOutForm />
      </Elements>
    </div>
  );
};

export default UserPayment;
