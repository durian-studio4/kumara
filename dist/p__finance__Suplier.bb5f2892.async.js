(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{GBMO:function(e,a,n){"use strict";n.r(a);n("+L6B");var t=n("2/Rp"),i=(n("5NDa"),n("5rEg")),r=n("ODXe"),l=n("q1tI"),c=n.n(l),o=n("IZNH"),d=n.n(o),s=(n("g9YV"),n("wCAj")),u=(n("14J3"),n("BMrR")),p=(n("sRBo"),n("kaz8")),m=n("VTBJ"),f=n("F6Wq"),b=n("G/yU"),g=function(e){var a=e.data,n=e.status,i=e.loading,o=e.error,g=e.handleVisibleConfirm,_=e.handleVisibleUpdate,v=Object(f["a"])(),x=Object(r["a"])(v,1),y=x[0],O=[];for(var j in a)O.push({id_order:j,id:a[j][0].id,tanggal:a[j][0].tanggal,nama_suplier:a[j][0].nama_suplier,nama_barang:a[j][0].nama_barang,satuan_barang:a[j][0].satuan_barang,total:a[j][0].total,confirm_sales:a[j][0].confirm_sales,confirm_finance:a[j][0].confirm_finance});var E=Object(l["useMemo"])((function(){return[{align:"center",title:"No",dataIndex:"id"},Object(m["a"])({align:"center",title:"Tanggal",dataIndex:"tanggal"},y("tanggal")),Object(m["a"])({align:"center",title:"Nama Suplier",dataIndex:"nama_suplier"},y("nama_suplier")),Object(m["a"])({align:"center",title:"Nama Barang",dataIndex:"nama_barang"},y("nama_barang")),Object(m["a"])({align:"center",title:"Satuan Barang",dataIndex:"satuan_barang"},y("satuan_barang")),Object(m["a"])({align:"center",title:"Total",dataIndex:"total"},y("total")),{align:"center",title:"Detail Barang",render:function(e){var a=e.id;return c.a.createElement(t["a"],{type:"primary",onClick:function(){return _(a)}},"Detail")}},{align:"center",title:"Penerima",render:function(e){return c.a.createElement("span",null,c.a.createElement(p["a"],{checked:e.confirm_sales,disabled:!0}))}},{align:"center",title:"Finance",render:function(e){return c.a.createElement(p["a"],{checked:e.confirm_finance,disabled:e.confirm_finance,id:String(e.id),onClick:g})}}]}),[]);return o||200!==n?c.a.createElement(b["a"],null):c.a.createElement("div",null,c.a.createElement(u["a"],{justify:"space-between"},c.a.createElement("p",{className:d.a.title},"Suplier"),c.a.createElement("p",{className:d.a.title_add},"Approve")),c.a.createElement("div",{style:{overflow:"auto"}},c.a.createElement(s["a"],{columns:E,dataSource:O,loading:i})))},_=g,v=(n("2qtc"),n("kLXV")),x=function(e){var a=e.visible,n=e.onConfirmOrder,i=e.onCancel,r=e.id_confirm,l=function(){n({url:"".concat("https://api.posarmed.id","/admin/v1/finance/order/").concat(r,"/update"),json:JSON.stringify({confirm_finance:1}),clear:i})};return c.a.createElement(v["a"],{visible:a,title:"Ubah Status",width:450,closable:!1,footer:null},c.a.createElement("div",{className:d.a.modal_body},c.a.createElement("p",{style:{textAlign:"center",fontWeight:"bold"}},"Apakah Anda Yakin Ingin Merubah Status Menjadi Selesai?"),c.a.createElement(u["a"],{style:{marginTop:"2em"},justify:"space-around"},c.a.createElement(t["a"],{type:"primary",onClick:l},"Confirmasi"),c.a.createElement(t["a"],{type:"primary",danger:!0,onClick:i},"Batal"))))},y=x,O=n("Pt6z"),j=function(e){var a=e.visible,n=e.id_suplier,i=e.onCancelOrder,o=e.onConfirmOrder,u=e.onCancel,p=Object(O["a"])(),m=Object(r["a"])(p,5),f=m[0],b=m[1],g=m[2],_=m[3],x=m[4];Object(l["useEffect"])((function(){var e=setTimeout((function(){x("".concat("https://api.posarmed.id","/admin/v1/inventory/barang/").concat(n,"/select"))}),0);return function(){return clearTimeout(e)}}),[n]);var y=function(){o({url:"".concat("https://api.posarmed.id","/admin/v1/finance/order/").concat(n,"/update"),json:JSON.stringify({confirm_finance:1}),clear:u})},j=function(){i({url:"".concat("https://api.posarmed.id","/admin/v1/inventory/order/").concat(n,"/batal"),json:JSON.stringify({}),clear:u})},E=Object(l["useMemo"])((function(){return[{align:"center",title:"Qty Req",dataIndex:"qty_gudang"},{align:"center",title:"Qty Conf",dataIndex:"qty_display"},{align:"center",title:"Nama Barang",dataIndex:"nama_barang"},{align:"center",title:"Expired Date",dataIndex:"expired_date"}]}),[]);return c.a.createElement(v["a"],{visible:a,title:"Detail Suplier",onCancel:u,footer:null,width:600},c.a.createElement("div",{className:d.a.modal_body},200!==b||_?c.a.createElement("h1",null,"Something went wrong"):null,f?c.a.createElement(s["a"],{columns:E,loading:Boolean(g),dataSource:[f]}):null),c.a.createElement(t["a"],{style:{width:"100%"},className:d.a.button,type:"primary",danger:!0,id:"cancel",onClick:j},"Cancel Order"),c.a.createElement(t["a"],{style:{width:"100%"},className:d.a.button,type:"primary",id:"confirm",onClick:y},"Confirm Order"))},E=j,C=function(){var e=Object(l["useState"])(""),a=Object(r["a"])(e,2),n=a[0],o=a[1],s=Object(l["useState"])(!1),u=Object(r["a"])(s,2),p=u[0],m=u[1],f=Object(l["useState"])(!1),b=Object(r["a"])(f,2),g=b[0],v=b[1],x=Object(l["useState"])(0),j=Object(r["a"])(x,2),C=j[0],h=j[1],N=Object(l["useState"])(0),S=Object(r["a"])(N,2),w=S[0],k=S[1],I=Object(O["a"])(),B=Object(r["a"])(I,6),T=B[0],D=B[1],J=B[2],V=B[3],q=B[4],M=B[5];Object(l["useEffect"])((function(){var e=setTimeout((function(){q("".concat("https://api.posarmed.id","/admin/v1/inventory/order/list"))}),0);return function(){return clearTimeout(e)}}),[]);var A=Object(l["useCallback"])((function(){q("".concat("https://api.posarmed.id","/admin/v1/inventory/order/list?filter=").concat(n)),o("")}),[q,n]),R=function(e){var a=e.target.id;k(a),m(!p)},U=function(e){h(Number(e)),v(!g)},L=function(e){"enter"===e.key.toLowerCase()&&A()},z=function(){k(0),m(!1)},F=function(){h(0),v(!1)},G=function(e){o(e.target.value)},H=function(e){var a=e.url,n=e.json,t=e.clear;M(a,n,t)},P=function(e){var a=e.url,n=e.json,t=e.clear;M(a,n,t)};return c.a.createElement("div",null,c.a.createElement("p",{className:d.a.title},"Suplier"),c.a.createElement("div",{className:d.a.row_box},c.a.createElement(i["a"],{className:d.a.input_title,id:"name",type:"text",placeholder:"Search Suplier",onChange:G,value:n,onKeyDown:L}),c.a.createElement(t["a"],{className:d.a.button_title,type:"primary",onClick:A},"Cari")),c.a.createElement(_,{data:T,status:Number(D),loading:Boolean(J),error:Boolean(V),handleVisibleConfirm:R,handleVisibleUpdate:U}),p?c.a.createElement(y,{visible:p,onCancel:z,onConfirmOrder:H,id_confirm:w}):null,g?c.a.createElement(E,{visible:g,id_suplier:C,onConfirmOrder:H,onCancelOrder:P,onCancel:F}):null)};a["default"]=C},IZNH:function(e,a,n){e.exports={title:"antd-pro-pages-finance-suplier-index-title",title_add:"antd-pro-pages-finance-suplier-index-title_add",row_box:"antd-pro-pages-finance-suplier-index-row_box",modal_body:"antd-pro-pages-finance-suplier-index-modal_body",col:"antd-pro-pages-finance-suplier-index-col",box3:"antd-pro-pages-finance-suplier-index-box3",box5:"antd-pro-pages-finance-suplier-index-box5",box10:"antd-pro-pages-finance-suplier-index-box10",group:"antd-pro-pages-finance-suplier-index-group",label:"antd-pro-pages-finance-suplier-index-label",input:"antd-pro-pages-finance-suplier-index-input",input_title:"antd-pro-pages-finance-suplier-index-input_title",button:"antd-pro-pages-finance-suplier-index-button",button_title:"antd-pro-pages-finance-suplier-index-button_title",area:"antd-pro-pages-finance-suplier-index-area",p:"antd-pro-pages-finance-suplier-index-p"}}}]);