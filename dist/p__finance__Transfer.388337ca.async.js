(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"dR+g":function(e,a,t){e.exports={title:"antd-pro-pages-finance-transfer-index-title",title_add:"antd-pro-pages-finance-transfer-index-title_add",row_box:"antd-pro-pages-finance-transfer-index-row_box",modal_body:"antd-pro-pages-finance-transfer-index-modal_body",col_list:"antd-pro-pages-finance-transfer-index-col_list",col:"antd-pro-pages-finance-transfer-index-col",box3:"antd-pro-pages-finance-transfer-index-box3",box4:"antd-pro-pages-finance-transfer-index-box4",box5:"antd-pro-pages-finance-transfer-index-box5",box6:"antd-pro-pages-finance-transfer-index-box6",box10:"antd-pro-pages-finance-transfer-index-box10",group:"antd-pro-pages-finance-transfer-index-group",label:"antd-pro-pages-finance-transfer-index-label",input:"antd-pro-pages-finance-transfer-index-input",input_title:"antd-pro-pages-finance-transfer-index-input_title",button:"antd-pro-pages-finance-transfer-index-button",button_title:"antd-pro-pages-finance-transfer-index-button_title",area:"antd-pro-pages-finance-transfer-index-area",p:"antd-pro-pages-finance-transfer-index-p",span:"antd-pro-pages-finance-transfer-index-span"}},kalU:function(e,a,t){"use strict";t.r(a);t("+L6B");var n=t("2/Rp"),l=(t("5NDa"),t("5rEg")),r=t("ODXe"),i=t("q1tI"),c=t.n(i),o=t("dR+g"),s=t.n(o),m=(t("g9YV"),t("wCAj")),d=(t("14J3"),t("BMrR")),u=t("VTBJ"),p=t("F6Wq"),g=t("G/yU"),f=function(e){var a=e.data,t=e.loading,l=e.status,o=e.error,f=e.handleVisibleUpdate,b=e.handleVisibleConfirm,E=e.cancel,y=Object(p["a"])(),x=Object(r["a"])(y,1),v=x[0],k=Object(i["useMemo"])((function(){return[Object(u["a"])({align:"center",title:"Tanggal Transaksi",key:"tanggal",dataIndex:"tanggal"},v("tanggal")),Object(u["a"])({align:"center",title:"Nama Pembeli",key:"pembeli.name",dataIndex:"pembeli.name"},v("pembeli.name")),Object(u["a"])({align:"center",title:"No. Invoice",key:"invoice",render:function(e){return c.a.createElement("span",{className:s.a.span,onClick:function(){return f(e.id)}},e.invoice)}},v("invoice")),Object(u["a"])({align:"center",title:"Nama Bank",key:"nama_bank",dataIndex:"nama_bank"},v("nama_bank")),Object(u["a"])({align:"center",title:"Nama Sales",key:"nama_sales",dataIndex:"nama_sales"},v("nama_sales")),{align:"center",title:"Status",key:"status_pembayaran",render:function(e){return c.a.createElement(c.a.Fragment,null,0===e.status_pembayaran?c.a.createElement(d["a"],{justify:"space-around"},c.a.createElement(n["a"],{className:s.a.button,id:e.id,onClick:function(){return b(e.id)},type:"primary"},"Selesai"),c.a.createElement(n["a"],{className:s.a.button,onClick:function(){return E(e.id)},type:"primary",danger:!0},"Batal")):null,1===e.status_pembayaran?c.a.createElement("p",{style:{color:"#1890ff"}},"Selesai"):null,2===e.status_pembayaran?c.a.createElement("p",{style:{color:"#ff4d4f"}},"Batal"):null)}}]}),[]);return o||200!==l?c.a.createElement(g["a"],null):c.a.createElement("div",{style:{overflow:"auto"}},c.a.createElement(m["a"],{columns:k,dataSource:a,loading:t}),";")},b=f,E=(t("2qtc"),t("kLXV")),y=function(e){var a=e.visible,t=e.onUpdate,l=e.onCancel;return c.a.createElement(E["a"],{visible:a,title:"Ubah Status",width:450,closable:!1,footer:null},c.a.createElement("div",{className:s.a.modal_body},c.a.createElement("p",{style:{textAlign:"center",fontWeight:"bold"}},"Apakah Anda Yakin Ingin Merubah Status Menjadi Selesai?"),c.a.createElement(d["a"],{style:{marginTop:"2em"},justify:"space-around"},c.a.createElement(n["a"],{className:s.a.button,type:"primary",onClick:t},"Ya"),c.a.createElement(n["a"],{className:s.a.button,type:"primary",danger:!0,onClick:function(){return l()}},"Batal"))))},x=y,v=t("Pt6z"),k=t("bIAK"),_=function(e){var a=e.data;return c.a.createElement(i["Fragment"],null,c.a.createElement("div",{className:s.a.box4},c.a.createElement("div",{className:s.a.col_list},c.a.createElement("p",{className:s.a.p,style:{textAlign:"center"}},"PT.Anugrah Tiga Berlian"),c.a.createElement("p",{style:{textAlign:"center"}},"Kumara Medical"),c.a.createElement("p",{style:{textAlign:"center"}},"Jl. Pramuka No. 11 Palmeriam-Matraman-Jakarta-Timur"),c.a.createElement("p",{style:{textAlign:"center"}},"Tel.0812 9000 9921 Fax. 021-85916797"))),c.a.createElement("div",{className:s.a.box4},c.a.createElement("div",{className:s.a.col_list},c.a.createElement("p",{className:s.a.p,style:{textAlign:"center"}},"FAKTUR ",a&&a.invoice),c.a.createElement("table",{style:{textAlign:"center",width:"100%"}},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{align:"left"},"Tanggal"),c.a.createElement("td",{align:"center"},":"),c.a.createElement("td",{align:"right"},a&&a.tanggal)),c.a.createElement("tr",null,c.a.createElement("td",{align:"left"},"Sales"),c.a.createElement("td",{align:"center"},":"),c.a.createElement("td",{align:"right"},a&&a.nama_sales)),c.a.createElement("tr",null,c.a.createElement("td",{align:"left"},"Pelanggan"),c.a.createElement("td",{align:"center"},":"),c.a.createElement("td",{align:"right"},"PT. Alternate Farma")),c.a.createElement("tr",null,c.a.createElement("td",{align:"left"},"Alamat"),c.a.createElement("td",{align:"center"},":"),c.a.createElement("td",{align:"right"},a.pembeli&&a.pembeli.alamat)),c.a.createElement("tr",null,c.a.createElement("td",{align:"left"},"Telepon"),c.a.createElement("td",{align:"center"},":"),c.a.createElement("td",{align:"right"},a.pembeli&&a.pembeli.phone)))))))},h=_,j=function(e){var a=e.data,t=Object(i["useMemo"])((function(){return[{align:"center",title:"No",dataIndex:"no"},{align:"left",title:"Nama",dataIndex:"nama_barang"},{align:"center",title:"Unit",dataIndex:"qty"},{align:"center",title:"Harga",dataIndex:"harga"},{align:"center",title:"Diskon",dataIndex:"diskon"},{align:"center",title:"Total",dataIndex:"jumlah"}]}),[]),n=Object(i["useMemo"])((function(){return[{align:"center",title:"Sub Total",dataIndex:"sub_total"},{align:"center",title:"Biaya lain-lain",dataIndex:"biaya_lain"},{align:"center",title:"Total",dataIndex:"total_harga"},{align:"center",title:"DP / Uang Muka",dataIndex:"uang_muka"},{align:"center",title:"Total Tagihan",dataIndex:"tagihan"}]}),[]);return c.a.createElement("div",{style:{border:"1px solid #d9d9d9",width:"100%"}},c.a.createElement("div",{style:{position:"relative",width:"100%"}},c.a.createElement(m["a"],{columns:t,rowKey:"id",dataSource:a.barang,pagination:{position:"none"}})),c.a.createElement("div",{style:{position:"relative",width:"100%"}},c.a.createElement(m["a"],{columns:n,rowKey:"id",dataSource:[a],pagination:{position:"none"}})))},N=j,O=function(){return c.a.createElement(i["Fragment"],null,c.a.createElement("div",{className:s.a.box3},c.a.createElement("div",{className:s.a.col_list},c.a.createElement("p",{style:{textAlign:"center"}},"Tanda Terima"))),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{style:{textAlign:"center"}},"PERHATIAN"),c.a.createElement("p",{style:{textAlign:"center"}},"Barang yang sudah dibeli tidak dapat dikembalikan"))),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{style:{textAlign:"center"}},"Hormat kami,"),c.a.createElement("p",{style:{textAlign:"center"}},"Kumara Medical"))))},T=O,w=function(e){var a=e.idParams,t=e.visible,l=e.onCancel,o=Object(v["a"])(),m=Object(r["a"])(o,5),u=m[0],p=m[1],f=m[2],b=m[3],y=m[4];return Object(i["useEffect"])((function(){var e=setTimeout((function(){y("".concat("https://api.posarmed.id","/admin/v1/finance/transfer/").concat(a,"/select"))}),0);return function(){return clearTimeout(e)}}),[a]),c.a.createElement(E["a"],{visible:t,title:"Invoice",width:700,onCancel:l,footer:null},200!==p||b?c.a.createElement(g["a"],null):null,f?c.a.createElement(k["default"],null):c.a.createElement("div",{className:s.a.modal_body},c.a.createElement(d["a"],{justify:"space-between"},c.a.createElement(h,{data:u})),c.a.createElement(d["a"],{style:{marginTop:"1em"}},c.a.createElement(N,{data:u})),c.a.createElement(d["a"],{style:{marginTop:"0.5em"}},c.a.createElement("p",null,"Keterangan :"),c.a.createElement("p",null,u.keterangan))),c.a.createElement(d["a"],{style:{marginTop:"1em"},justify:"space-between"},c.a.createElement(T,null)),c.a.createElement(d["a"],{style:{marginTop:"1em"},justify:"end"},c.a.createElement(n["a"],{disabled:Boolean(f),onClick:l,type:"primary"},"Kembali")))},A=w,I=function(){var e=Object(i["useState"])(""),a=Object(r["a"])(e,2),t=a[0],o=a[1],m=Object(i["useState"])(!1),d=Object(r["a"])(m,2),u=d[0],p=d[1],g=Object(i["useState"])(!1),f=Object(r["a"])(g,2),E=f[0],y=f[1],k=Object(i["useState"])(0),_=Object(r["a"])(k,2),h=_[0],j=_[1],N=Object(i["useState"])(0),O=Object(r["a"])(N,2),T=O[0],w=O[1],I=Object(v["a"])(),C=Object(r["a"])(I,6),S=C[0],B=C[1],P=C[2],M=C[3],U=C[4],K=C[5];Object(i["useEffect"])((function(){var e=setTimeout((function(){U("".concat("https://api.posarmed.id","/admin/v1/finance/transfer"))}),0);return function(){return clearTimeout(e)}}),[]);var J=Object(i["useCallback"])((function(){U("".concat("https://api.posarmed.id","/admin/v1/finance/transfer?filter=").concat(t)),o("")}),[U,t]),F=function(e){"enter"===e.key.toLowerCase()&&J()},V=function(e){o(e.target.value)},R=function(e){p(!u),w(Number(e))},D=function(e){y(!E),j(Number(e))},q=function(){p(!1),w(0)},H=function(){y(!1),j(0)},L=function(){K("".concat("https://api.posarmed.id","/admin/v1/finance/transfer/").concat(h,"/update"),JSON.stringify({status_pembayaran:1}),H)},Y=function(e){K("".concat("https://api.posarmed.id","/admin/v1/finance/transfer/").concat(e,"/update"),JSON.stringify({status_pembayaran:2}),H)};return c.a.createElement("div",null,c.a.createElement("p",{className:s.a.title},"Cek Transfer"),c.a.createElement("div",{className:s.a.row_box},c.a.createElement(l["a"],{className:s.a.input_title,id:"name",type:"text",placeholder:"Search Transfer",onChange:V,value:t,onKeyDown:F}),c.a.createElement(n["a"],{className:s.a.button_title,onClick:J,type:"primary"},"Cari")),c.a.createElement(b,{data:S,loading:Boolean(P),status:Number(B),error:M,cancel:Y,handleVisibleUpdate:R,handleVisibleConfirm:D}),E?c.a.createElement(x,{visible:E,onCancel:H,onUpdate:L}):null,u?c.a.createElement(A,{visible:u,onCancel:q,idParams:T}):null)};a["default"]=I}}]);