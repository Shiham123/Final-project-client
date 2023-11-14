import axios from 'axios';
import { useEffect, useState } from 'react';

const useJson = () => {
  const [menuData, setMenuData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/menu')
      .then((response) => {
        setMenuData(response.data);
        setLoading(true);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:5000/reviews')
      .then((response) => {
        setReviews(response.data);
        setLoading(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return { menuData, loading, reviews };
};

export default useJson;
