import { useContext } from 'react';
import SectionTitle from '../../../SubSection/SectionTitle';
import { AppContext } from '../../../Context/context';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
  const { user } = useContext(AppContext);
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/payments/${user.email}`);

      return response.data;
    },
  });

  console.log(payments);

  return (
    <div>
      <SectionTitle
        heading="Payment history"
        subHeading="Here are your order food"
      />
    </div>
  );
};

export default PaymentHistory;
