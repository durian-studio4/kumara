import { useState, useEffect } from 'react';

function App(number: number) {
  const [angka, setAngka] = useState(0);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAngka(number);
    }, 0);
    return () => clearTimeout(timeOut);
  }, [number]);

  const handleChangeSelect = (value: any, option: any) => {
    setAngka(option.key);
  };

  const handleClearSelect = (args: number) => {
    setAngka(args);
  };

  return [angka, handleChangeSelect, handleClearSelect];
}

export default App;
