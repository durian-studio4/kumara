import { useState, useEffect } from 'react';

interface Props {
  idSelect: number;
  textSelect: string;
}

function App({ idSelect, textSelect }: Props) {
  const [text, setText] = useState('');
  const [values, setValues] = useState('');
  const [id, setId] = useState(0);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setText(textSelect);
      setId(idSelect);
    }, 0);
    return () => clearTimeout(timeOut);
  }, [idSelect, textSelect]);

  const changeText = (value: string) => {
    setText(value);
  };

  const selectText = (value: any, e: any) => {
    setText(value);
    setId(value);
    setValues();
  };

  const clearText = () => {
    setText('');
  };

  return { text, id, changeText, selectText, clearText };
}

export default App;
