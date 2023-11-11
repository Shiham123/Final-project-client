import { useEffect, useState } from 'react';

const useJson = () => {
  const [menuData, setMenuData] = useState([]);
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

  return { menuData, loading };
};

export default useJson;
