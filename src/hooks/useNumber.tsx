import { useState, useEffect } from 'react';

export default function App(args: any) {
  const [number, setNumber] = useState('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setNumber(args);
    }, 0);
    return () => clearTimeout(timeOut);
  }, [args]);

  const onChange = (e: { target: HTMLInputElement }) => {
    setNumber(e.target.value);
  };

  const onClear = () => {
    setNumber(args);
  };

  return [number, onChange, onClear];
}
