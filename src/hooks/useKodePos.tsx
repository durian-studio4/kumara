import { useEffect, useState } from 'react';

function KodePos(filter: string) {
  const [text, setText] = useState('');
  const [kode, setKode] = useState(0);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (text) {
      handleFetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const fetching = await fetch(
        `${REACT_APP_ENV}/admin/v1/general/kodepos?id_kecamatan=${text}`,
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

  if (filter !== text) {
    setText(filter);
    setKode(0);
  }

  return {
    kode,
    isLoading,
  };
}

export default KodePos;
