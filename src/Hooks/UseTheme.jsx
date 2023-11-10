import { useEffect, useState } from 'react';

const UseTheme = () => {
  const [mode, setMode] = useState('light');

  function changeTheme() {
    const htmlElement = document.documentElement;

    if (mode == 'light') {
      htmlElement.setAttribute('data-theme', 'dark');
      htmlElement.classList.remove('light');
      htmlElement.classList.add('dark');
      setMode('dark');
      localStorage.setItem('mode', 'dark');
    } else {
      htmlElement.setAttribute('data-theme', 'light');
      htmlElement.classList.remove('dark');
      htmlElement.classList.add('light');
      setMode('light');
      localStorage.setItem('mode', 'light');
    }
  }

  useEffect(() => {
    const localStorageValue = localStorage.getItem('mode') || 'light';
    const htmlElement = document.documentElement;
    htmlElement.classList.add(localStorageValue);
    htmlElement.setAttribute('data-theme', localStorageValue);

    setMode(localStorageValue);
  }, []);

  return { changeTheme, mode };
};

export default UseTheme;
