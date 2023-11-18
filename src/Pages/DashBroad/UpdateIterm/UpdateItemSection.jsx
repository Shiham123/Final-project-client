import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../SubSection/SectionTitle';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const UpdateItemSection = () => {
  // TODO: must be import as object because in router i am return as a object
  // const { menuData } = useLoaderData();
  // console.log(menuData);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/menu/${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, [id]);

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
