import { useEffect, useState } from 'react';

const useJson = () => {
  const [menuData, setMenuData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/menu.json')
      .then((response) => response.json())
      .then((data) => {
        setMenuData(data);
        setLoading(true);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch('/reviews.json')
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return { menuData, loading, reviews };
};

export default useJson;
