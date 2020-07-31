interface HandleSatuan {
  itemCheckbox: any;
  setSatuan: (state: any) => void;
}

export const handleSatuan = ({ itemCheckbox, setSatuan }: HandleSatuan) => {
  const { item_box, item_karton, item_pack, item_pcs, item_unit } = itemCheckbox;

  if (item_pcs) {
    setSatuan((prevState: any) => ({ ...prevState, satuan_pcs: 1 }));
  } else {
    setSatuan((prevState: any) => ({ ...prevState, satuan_pcs: 0 }));
  }

  if (item_pack) {
    setSatuan((prevState: any) => ({ ...prevState, satuan_pack: 2 }));
  } else {
    setSatuan((prevState: any) => ({ ...prevState, satuan_pack: 0 }));
  }

  if (item_unit) {
    setSatuan((prevState: any) => ({ ...prevState, satuan_unit: 3 }));
  } else {
    setSatuan((prevState: any) => ({ ...prevState, satuan_unit: 0 }));
  }

  if (item_box) {
    setSatuan((prevState: any) => ({ ...prevState, satuan_box: 4 }));
  } else {
    setSatuan((prevState: any) => ({ ...prevState, satuan_box: 0 }));
  }

  if (item_karton) {
    setSatuan((prevState: any) => ({ ...prevState, satuan_karton: 5 }));
  } else {
    setSatuan((prevState: any) => ({ ...prevState, satuan_karton: 0 }));
  }
};

interface HandleStok {
  satuanBarang: any;
  qtyBarang: any;
  setStok: (state: any) => void;
}

export const handleStok = ({ satuanBarang, qtyBarang, setStok }: HandleStok) => {
  const { qty_box, qty_pcs, qty_unit, qty_karton, qty_pack } = qtyBarang;

  Object._filter = (obj: any, predicate: any) =>
    Object.keys(obj)
      .filter((key) => predicate(obj[key]))
      // eslint-disable-next-line no-sequences
      .reduce((res, key) => ((res[key] = obj[key]), res), {});

  let filteredSatuan = Object._filter(satuanBarang, (satuan: any) => satuan);

  Object.entries(filteredSatuan).map(function ([satuanKey, satuanValue]) {
    let barang = {
      id_satuan_barang: satuanValue,
      min_stok: Number(''),
    };

    let concate = (state: any) => {
      let filteredArray = state.filter((item: any) => item.min_stok !== '');
      return [...filteredArray, barang];
    };

    switch (satuanKey) {
      case 'satuan_box':
        barang.min_stok = Number(qty_box);
        break;
      case 'satuan_pcs':
        barang.min_stok = Number(qty_pcs);
        break;
      case 'satuan_unit':
        barang.min_stok = Number(qty_unit);
        break;
      case 'satuan_pack':
        barang.min_stok = Number(qty_pack);
        break;
      case 'satuan_karton':
        barang.min_stok = Number(qty_karton);
        break;
      default:
        break;
    }

    return setStok((state: any) => concate(state));
  });
};
