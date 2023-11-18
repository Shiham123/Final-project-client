import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../SubSection/SectionTitle';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const UpdateItemSection = () => {
  // TODO: must be import as object because in router i am return as a object
  // const { menuData } = useLoaderData();
  // console.log(menuData);

  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [menuData, setMenuData] = useState();

  useEffect(() => {
    axiosSecure
      .get(`/menu/${id}`)
      .then((response) => {
        console.log(response);
        setMenuData(response.data);
      })
      .catch((error) => console.log(error));
  }, [id, axiosSecure]);

  return (
    <div>
      <SectionTitle heading="update item" subHeading="---Refresh info---" />
      <Helmet>
        <title>Bistro project || Update Item</title>
      </Helmet>
    </div>
  );
};

export default UpdateItemSection;
