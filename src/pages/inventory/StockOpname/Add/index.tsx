import React, { useState, useEffect } from 'react';
import { Button, Input, DatePicker } from 'antd';
import { history } from 'umi';
import Cookie from 'js-cookie';
import Table from './Table';
import axios from 'axios'

interface Props {}


const StokBarangComponent: React.FC<Props> = () => {
  const [products, setStockProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [draftDate, setDraftDate] = useState("")
  const [draftNote, setDraftNote] = useState("")
  const [draftOperator, setDraftOperator] = useState("")

  useEffect(() => {
  }, []);

  const onClickLoadProducts = async () =>{
    setIsLoadingProducts(true);
    await axios.get(`${REACT_APP_ENV}/admin/v1/inventory/barang/list`,
    {
      headers:{
        Authorization: String(Cookie.get('token'))
      }
    }).then(res=>{
      setStockProducts(res.data.data);
    }).catch(error=>{
      console.log(`error`, error);
    })
    setIsLoadingProducts(false);
  }

  const canSubmit = () =>{
    return (
      draftDate && draftNote && draftOperator && products.length && !isLoadingProducts
    )
  }

  const onClickAddDrafOpname = async () =>{
    setIsLoadingProducts(true);
    const data = {
      operator_name: draftOperator,
      status:"pending",
      date:draftDate,
      note:draftNote,
      stock_opname_details: products
    }
    console.log(`data`, data)
    await axios.post(`${REACT_APP_ENV}/admin/v1/inventory/stock-opname`,
    data,
    {
      headers:{
        Authorization: String(Cookie.get('token'))
      }
    }).then(res=>{
      history.push('/inventory/stok-opname')
    }).catch(error=>{
      console.log(`error`, error);
    })
    setIsLoadingProducts(false);
  }

  
  return (
    <div>
      <div style={{display:'flex', margin:"0px 0px 10px 0px"}}>
        <p style={{fontWeight:"bold"}}>Stok Opname</p>
      </div>

      <div style={{backgroundColor:"white", padding: "20px"}}>
        <div style={{textAlign:'center'}}>
          <div style={{fontWeight:"bold"}}>Buat Draf Stok Opname</div>
          <div>Draf akan diperiksa dan disetujui setelah Master Inventory telah mengkonfirmasi</div>
        </div>
        <div style={{margin:"10px"}}/>
        
        <div style={{display:'flex', gap:"5px"}}>
          <Input style={{flex:1}} placeholder="Nama Operator" onChange={(e)=>setDraftOperator(e.target.value)}/>
          <DatePicker style={{flex:1}} onChange={(date, dateString)=>setDraftDate(dateString)}/>
        </div>
        <div style={{margin:"10px"}}/>
        <Input style={{flex:1}} placeholder="Note" onChange={(e)=>setDraftNote(e.target.value)}/>
        <div style={{margin:"10px"}}/>
        <Button onClick={onClickLoadProducts}>Load Data Barang</Button>
      </div>
      <div style={{margin:"10px"}}/>
      <Table
        data={products}
        loading={isLoadingProducts}
      />
      <Button disabled={!canSubmit()} onClick={onClickAddDrafOpname} style={{width:"100%"}}>Tambah Draf Opname</Button>
    </div>
  );
};

export default StokBarangComponent;
