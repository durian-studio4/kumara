import React, { useEffect, useMemo, useState } from 'react';
import { Table, Button, Input } from 'antd';
import { format } from 'date-fns';

interface Props {
  data: any;
  loading: boolean;
  status: number;
  error: any;
  onChangeData: any;
  handleVisible: (id: string) => void;
  handleVisibleEdit: (id: string) => void;
}

const TableComponent: React.FC<Props> = ({
  data,
  loading,
  onChangeData
}) => {
  const [currData, setCurrData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      element["no"] = i;
      tempData.push(element);
    }
    setCurrData([...tempData]);
  }, [data])

  useEffect(() => {
    onChangeData(currData)
  }, [currData])

  const onEditQtyinput = (no, qty) =>{
    currData[no].qty_input = qty;
    setCurrData([...currData]);
    console.log(`currData`, currData)
  }

  const onEditNote = (no, note) =>{
    currData[no].note = note;
    setCurrData([...currData]);
  }

  const columns = [
      {
        align: 'center',
        title: 'No',
        dataIndex: 'id',
      },
      {
        align: 'left',
        title: 'Nama Barang',
        dataIndex: 'product_name',
      },
      {
        align: 'center',
        title: 'Qty Sistem',
        dataIndex: 'operator_name',
        render: (value, item) => (
          <span>{item.qty_system}</span>
        ),
      },
      {
        align: 'center',
        title: 'Qty Input',
        dataIndex: 'qty_input',
        render: (props, item) => (
          <Input defaultValue={props} onChange={(e)=>{
            onEditQtyinput(item.no, e.target.value)
          }}/>
        ),
      },
      {
        align: 'center',
        title: 'Difference',
        dataIndex: 'operator_name',
        render: (value, item) => (
          <span>{currData[item.no].qty_input - item.qty_system}</span>
        ),
      },
      {
        align: 'center',
        title: 'Note',
        dataIndex: 'note',
        render: (props,item) => (
          <Input defaultValue={props} onChange={(e)=>{
            onEditNote(item.no, e.target.value)
          }}/>
        ),
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div style={{ overflow: 'auto' }}>
      <Table columns={columns} loading={loading} dataSource={currData} />;
    </div>
  );
};

export default TableComponent;
