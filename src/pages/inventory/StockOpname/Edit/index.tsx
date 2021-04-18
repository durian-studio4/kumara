import React, { useState, useEffect } from 'react';
import { Button, Input, DatePicker } from 'antd';
import { history, useParams } from 'umi';
import Cookie from 'js-cookie';
import Table from './Table';
import axios from 'axios'
import { format } from 'date-fns';
import moment from 'moment';


interface Props {}

const StokBarangComponent: React.FC<Props> = () => {
  const {id} = useParams();

  const [products, setStockProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [draftDate, setDraftDate] = useState("")
  const [draftNote, setDraftNote] = useState("")
  const [draftOperator, setDraftOperator] = useState("")
  const [updatedProducts, setUpdatedProducts] = useState([])

  useEffect(() => {
    if(id){
      loadAPI()
    }
  }, [id]);

  const loadAPI = async () =>{
    setIsLoadingProducts(true);
    await axios.get(`${REACT_APP_ENV}/admin/v1/inventory/stock-opname/${id}`,
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
      products?.stock_opname_details?.length && !isLoadingProducts
    )
  }

  const onClickSaveDraft = async () =>{
    setIsLoadingProducts(true);
    const data = {
      status:"pending",
      stock_opname_details: updatedProducts
    }
    console.log(`data`, data)
    await axios.post(`${REACT_APP_ENV}/admin/v1/inventory/stock-opname/${id}`,
    data,
    {
      headers:{
        Authorization: String(Cookie.get('token'))
      }
    }).then(res=>{
      // history.push('/inventory/stok-opname')
    }).catch(error=>{
      console.log(`error`, error);
    })
    setIsLoadingProducts(false);
  }

  const onClickVerifyStockOpname = async () =>{
    setIsLoadingProducts(true);
    const data = {
      status:"approved",
      stock_opname_details: updatedProducts
    }
    console.log(`data`, data)
    await axios.post(`${REACT_APP_ENV}/admin/v1/inventory/stock-opname/${id}`,
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
          <div style={{fontWeight:"bold"}}>Verifikasi Stok Opname</div>
          <div>Konfirmasi Stock Opname yang telah dimasukkan</div>
        </div>
        <div style={{margin:"10px"}}/>
        <div style={{display:'flex', gap:"5px"}}>
          <Input style={{flex:1}} disabled value={products?.cabang?.nama_cabang || ""} />
          <Input style={{flex:1}} disabled value={`REFERENCE NO: ${id}`} />
        </div>
        <div style={{margin:"10px"}}/>
        <div style={{display:'flex', gap:"5px"}}>
          <DatePicker style={{flex:1}} disabled value={moment(products?.date, 'YYYY-MM-DD')}/>
          <Input style={{flex:1}} disabled value={products?.note || ""}/>
        </div>
      </div>
      <div style={{margin:"10px"}}/>
      <Table
        data={products?.stock_opname_details || []}
        loading={isLoadingProducts}
        onChangeData={(value)=>setUpdatedProducts(value)}
      />
      <div style={{display:'flex', gap:"5px"}}>
        <Button disabled={!canSubmit()} onClick={onClickSaveDraft} style={{width:"100%"}}>Simpan Draft</Button>
        <Button disabled={!canSubmit()} onClick={onClickVerifyStockOpname} style={{width:"100%"}}>Verifikasi Stok Opname</Button>
      </div>
    </div>
  );
};

export default StokBarangComponent;
