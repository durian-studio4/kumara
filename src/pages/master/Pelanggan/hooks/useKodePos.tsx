import { useEffect, useState } from 'react';

function Kelurahan(filter: string) {
  const [text, setText] = useState('');
  const [kode, setKode] = useState(0);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setText(filter);
  }, [filter]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (text) {
        handleFetch();
        setKode(0);
      }
    }, 0);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const fetching = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/admin/v1/general/kodepos?id_kecamatan=${text}`,
      );
      const json = await fetching.json();
      const result = await json;
      setKode(result.data[0].kode_pos);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  return {
    kode,
    isLoading,
  };
}

export default Kelurahan;
