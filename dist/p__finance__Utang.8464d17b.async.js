(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{e2pJ:function(a,e,t){"use strict";t.r(e);t("14J3");var n=t("BMrR"),l=(t("+L6B"),t("2/Rp")),c=(t("5NDa"),t("5rEg")),r=t("ODXe"),i=t("q1tI"),s=t.n(i),o=t("wqSk"),u=t.n(o),m=(t("g9YV"),t("wCAj")),d=t("VTBJ"),b=t("F6Wq"),g=t("G/yU"),p=function(a){var e=a.data,t=a.handleVisibleUpdate,c=a.handleVisibleEdit,o=a.cancel,p=a.loading,E=a.status,f=a.error,v=Object(b["a"])(),N=Object(r["a"])(v,1),j=N[0],h=Object(i["useMemo"])((function(){return[{align:"center",title:"Tanggal",key:"tanggal",render:function(a){return s.a.createElement("span",null,a.tanggal)}},Object(d["a"])({align:"center",title:"Nama Sales",key:"nama_sales",dataIndex:"nama_sales"},j("nama_sales")),Object(d["a"])({align:"center",title:"Nama Barang",key:"nama_barang",dataIndex:"nama_barang"},j("nama_barang")),Object(d["a"])({align:"center",title:"Toko / Supplier",key:"suplier",dataIndex:"suplier"},j("suplier")),Object(d["a"])({align:"center",title:"Qty / Pcs",key:"qty",dataIndex:"qty"},j("qty")),Object(d["a"])({align:"center",title:"Satuan Barang",key:"satuan_barang",dataIndex:"satuan_barang"},j("satuan_barang")),Object(d["a"])({align:"center",title:"Harga / Satuan",qty:"harga",dataIndex:"harga"},j("harga")),Object(d["a"])({align:"center",title:"Total",key:"total",dataIndex:"total"},j("total")),{key:"id",align:"center",render:function(a){return s.a.createElement(s.a.Fragment,null,0===a.status?s.a.createElement(n["a"],{justify:"space-around"},s.a.createElement(l["a"],{className:u.a.button,id:a.id,onClick:function(){return t(a.id)},type:"primary"},"Selesai"),s.a.createElement(l["a"],{className:u.a.button,id:a.id,onClick:function(){return c(a.id)},type:"primary"},"Edit"),s.a.createElement(l["a"],{className:u.a.button,onClick:function(){return o(a.id)},type:"primary",danger:!0},"Batal")):null,1===a.status?s.a.createElement("p",{style:{color:"#1890ff"}},"Selesai"):null,2===a.status?s.a.createElement("p",{style:{color:"#ff4d4f"}},"Batal"):null)}}]}),[]);return f||200!==E?s.a.createElement(g["a"],null):s.a.createElement("div",{style:{overflow:"auto"}},s.a.createElement(m["a"],{columns:h,dataSource:e,loading:p}),";")},E=p,f=(t("2qtc"),t("kLXV")),v=(t("jCWc"),t("kPKH")),N=t("sWYD"),j=t("6yvu"),h=t("LuAL"),y=t("MRut"),x=t("ZS4f"),O=t("CzAe"),_=t("R277"),S=function(a){var e=a.visible,t=a.onError,o=a.onCancel,m=a.onCreate,d=a.onLoadButton,b=Object(i["useState"])(""),g=Object(r["a"])(b,2),p=g[0],E=g[1],S=Object(i["useState"])(!1),k=Object(r["a"])(S,2),C=k[0],T=k[1],w=Object(_["a"])(""),q=Object(r["a"])(w,3),B=q[0],F=q[1],I=q[2],U=Object(_["a"])(""),A=Object(r["a"])(U,3),J=A[0],M=A[1],D=A[2],L=Object(O["a"])(),V=Object(x["a"])(""),H=Object(r["a"])(V,3),K=H[0],Q=H[1],R=H[2],W=Object(x["a"])("0"),Y=Object(r["a"])(W,3),P=Y[0],z=Y[1],X=Y[2],G=JSON.stringify({nama_sales:p,qty:B,harga:J,nama_barang:K,id_suplier:L.text,id_satuan_barang:P});Object(i["useEffect"])((function(){return J&&p&&K&&B&&P&&L.text?T(!1):T(!0)}),[J,P,L.text,K,p,B]),Object(i["useEffect"])((function(){X()}),[K]);var Z=function(a){var e=a.target.value;E(e)},$=function(){E(""),D(),I(),R(),X(),o()},aa=function(){m({url:"".concat("https://api.posarmed.id","/admin/v1/finance/utang"),json:G,clear:$})};return s.a.createElement(f["a"],{visible:e,title:"Tambah Daftar Utang",width:1e3,closable:!1,footer:null},s.a.createElement("div",{className:u.a.modal_body},s.a.createElement(v["a"],null,s.a.createElement(n["a"],null,s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"tanggal"},"Tanggal"),s.a.createElement(c["a"],{className:u.a.input,type:"text",id:"tanggal",value:Object(N["a"])(new Date,"dd/MM/yyyy"),disabled:!0}))),s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"nama_sales"},"Nama Sales"),s.a.createElement(c["a"],{className:u.a.input,type:"text",id:"nama_sales",placeholder:"Isi Nama Sales",value:p,onChange:Z}))),s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"nama_barang"},"Nama Barang"),s.a.createElement(j["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/master/barang/listgroup"),select_id:"nama_barang",handleChange:Q})))),s.a.createElement(n["a"],null,s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"toko"},"Toko / Suplier"),s.a.createElement(y["a"],{id:"toko",value:L.text,onChange:L.changeText,onSelect:L.selectText}))),s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"qty"},"Qty"),s.a.createElement(c["a"],{className:u.a.input,id:"qty",placeholder:"Isi Qty",value:B,onChange:F}))),K?s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"qty_satuan"},"Satuan"),s.a.createElement(h["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/master/barang/selectgroup?nama_barang=").concat(K),select_id:"qty_satuan",handleChange:z}))):null),s.a.createElement(n["a"],null,s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"harga"},"Harga Satuan"),s.a.createElement(c["a"],{className:u.a.input,id:"harga",placeholder:"Isi Harga",value:J,onChange:M})))))),s.a.createElement(n["a"],{justify:"end"},t?s.a.createElement("p",{style:{color:"red"}},t):null,s.a.createElement(l["a"],{className:u.a.button,disabled:d,onClick:$,type:"primary",danger:!0},"Batal"),s.a.createElement(l["a"],{className:u.a.button,onClick:aa,disabled:C||d,type:"primary"},"Simpan")))},k=S,C=t("Pt6z");function T(a){var e=Object(i["useState"])(0),t=Object(r["a"])(e,2),n=t[0],l=t[1];Object(i["useEffect"])((function(){var e=setTimeout((function(){l(a)}),0);return function(){return clearTimeout(e)}}),[a]);var c=function(a,e){l(e.key)},s=function(a){l(a)};return[n,c,s]}var w=T;function q(a){var e=a.idSelect,t=a.textSelect,n=Object(i["useState"])(""),l=Object(r["a"])(n,2),c=l[0],s=l[1],o=Object(i["useState"])(0),u=Object(r["a"])(o,2),m=u[0],d=u[1];Object(i["useEffect"])((function(){var a=setTimeout((function(){s(t),d(e)}),0);return function(){return clearTimeout(a)}}),[e,t]);var b=function(a){s(a)},g=function(a,e){s(a),d(a)},p=function(){s("")};return{text:c,id:m,changeText:b,selectText:g,clearText:p}}var B=q,F=t("bIAK"),I=function(a){var e=a.visible,t=a.onCancel,o=a.onCreate,m=a.id_edit,d=Object(C["a"])(),b=Object(r["a"])(d,5),p=b[0],E=b[1],N=b[2],x=b[3],O=b[4],S=Object(i["useState"])(""),k=Object(r["a"])(S,2),T=k[0],q=k[1],I=Object(i["useState"])(!1),U=Object(r["a"])(I,2),A=U[0],J=U[1],M=w(p.nama_barang),D=Object(r["a"])(M,3),L=D[0],V=D[1],H=D[2],K=w(p.id_satuan_barang),Q=Object(r["a"])(K,3),R=Q[0],W=Q[1],Y=Q[2],P=Object(_["a"])(p.qty),z=Object(r["a"])(P,3),X=z[0],G=z[1],Z=z[2],$=Object(_["a"])(p.harga&&p.harga.split("Rp").join("").split(".").join("").trim()),aa=Object(r["a"])($,3),ea=aa[0],ta=aa[1],na=aa[2],la=B({idSelect:p.id_suplier,textSelect:p.nama_suplier}),ca=JSON.stringify({nama_sales:T,nama_barang:L,qty:X,harga:ea,id_suplier:la.text,id_satuan_barang:R});Object(i["useEffect"])((function(){var a=setTimeout((function(){O("".concat("https://api.posarmed.id","/admin/v1/finance/utang/").concat(m,"/select"))}),0);return function(){return clearTimeout(a)}}),[m]),Object(i["useEffect"])((function(){p&&q(p.nama_sales)}),[p]),Object(i["useEffect"])((function(){return X&&ea&&T&&R&&L&&la.text?J(!1):J(!0)}),[ea,L,la.text,T,X,R]),Object(i["useEffect"])((function(){Y(0)}),[L]);var ra=function(a){var e=a.target.value;q(e)},ia=function(){q(""),Y(0),H(""),Z(),na(),t()},sa=function(){o({url:"".concat("https://api.posarmed.id","/admin/v1/finance/utang/").concat(m,"/update"),json:ca,clear:ia})};return s.a.createElement(f["a"],{visible:e,title:"Edit Daftar Utang",width:1e3,closable:!1,footer:null},200!==E||x?s.a.createElement(g["a"],null):null,N?s.a.createElement(F["default"],null):s.a.createElement("div",{className:u.a.modal_body},s.a.createElement(v["a"],null,s.a.createElement(n["a"],null,s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"tanggal"},"Tanggal"),s.a.createElement(c["a"],{className:u.a.input,type:"text",id:"tanggal",disabled:!0}))),s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"nama_sales"},"Nama Sales"),s.a.createElement(c["a"],{className:u.a.input,type:"text",id:"nama_sales",placeholder:"Isi Nama Sales",value:T,onChange:ra}))),s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"nama_barang"},"Nama Barang"),s.a.createElement(j["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/master/barang/listgroup"),initial:p.nama_barang,handleChange:V})))),s.a.createElement(n["a"],null,s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"toko"},"Toko / Suplier"),s.a.createElement(y["a"],{id:"toko",value:la.text,onChange:la.changeText,onSelect:la.selectText}))),s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"qty"},"Qty"),s.a.createElement(c["a"],{className:u.a.input,id:"qty",placeholder:"Isi Qty",value:X,onChange:G}))),L?s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"qty_satuan"},"Satuan"),s.a.createElement(h["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/master/barang/selectgroup?nama_barang=").concat(L),handleChange:W}))):null),s.a.createElement(n["a"],null,s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"harga"},"Harga Satuan"),s.a.createElement(c["a"],{className:u.a.input,id:"harga",placeholder:"Isi Harga",value:ea,onChange:ta})))))),s.a.createElement(n["a"],{justify:"end"},s.a.createElement(l["a"],{className:u.a.button,disabled:Boolean(N),onClick:ia,type:"primary",danger:!0},"Batal"),s.a.createElement(l["a"],{className:u.a.button,disabled:A||Boolean(N),onClick:sa,type:"primary"},"Simpan")))},U=I,A=c["a"].TextArea,J=function(a){var e=a.visible,t=a.onUpdate,c=a.onCancel,o=a.id_row,m=Object(i["useState"])(""),d=Object(r["a"])(m,2),b=d[0],g=d[1],p=function(a){g(a.target.value)},E=function(){g(""),c()},v=function(){t({url:"".concat("https://api.posarmed.id","/admin/v1/finance/utang/").concat(o,"/update"),json:JSON.stringify({status:1,keterangan:b}),clear:E})};return s.a.createElement(f["a"],{visible:e,title:"Ubah Status",width:450,closable:!1,footer:null},s.a.createElement("div",{className:u.a.modal_body},s.a.createElement("p",{style:{textAlign:"center",fontWeight:"bold"}},"Apakah Anda Yakin Ingin Merubah Status Menjadi Selesai?"),s.a.createElement("div",{className:u.a.box10},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"keterangan"},"Keterangan:"),s.a.createElement(A,{className:u.a.area,id:"keterangan",value:b,onChange:p,placeholder:"Masukkan Keterangan..."}))),s.a.createElement(n["a"],{justify:"space-around"},s.a.createElement(l["a"],{className:u.a.button,type:"primary",onClick:v,disabled:!b},"Ya"),s.a.createElement(l["a"],{className:u.a.button,type:"primary",danger:!0,onClick:E},"Batal"))))},M=J,D=function(){var a=Object(i["useState"])(""),e=Object(r["a"])(a,2),t=e[0],o=e[1],m=Object(i["useState"])(!1),d=Object(r["a"])(m,2),b=d[0],g=d[1],p=Object(i["useState"])(!1),f=Object(r["a"])(p,2),v=f[0],N=f[1],j=Object(i["useState"])(!1),h=Object(r["a"])(j,2),y=h[0],x=h[1],O=Object(i["useState"])(0),_=Object(r["a"])(O,2),S=_[0],T=_[1],w=Object(i["useState"])(0),q=Object(r["a"])(w,2),B=q[0],F=q[1],I=Object(C["a"])(),A=Object(r["a"])(I,6),J=A[0],D=A[1],L=A[2],V=A[3],H=A[4],K=A[5];Object(i["useEffect"])((function(){var a=setTimeout((function(){H("".concat("https://api.posarmed.id","/admin/v1/finance/utang"))}),0);return function(){return clearTimeout(a)}}),[]);var Q=Object(i["useCallback"])((function(){H("".concat("https://api.posarmed.id","/admin/v1/finance/utang?filter=").concat(t)),o("")}),[H,t]),R=function(a){"enter"===a.key.toLowerCase()&&Q()},W=function(a){o(a.target.value)},Y=function(){return g(!b)},P=function(a){N(!v),T(Number(a))},z=function(a){x(!y),F(Number(a))},X=function(){x(!1),F(0)},G=function(){N(!1),T(0)},Z=function(a){var e=a.url,t=a.json,n=a.clear;K(e,t,n)},$=function(a){var e=a.url,t=a.json,n=a.clear;K(e,t,n)},aa=function(a){var e=a.url,t=a.json,n=a.clear;K(e,t,n)},ea=function(a){K("".concat("https://api.posarmed.id","/admin/v1/finance/utang/").concat(a,"/update"),JSON.stringify({status:2}),G)};return s.a.createElement("div",null,s.a.createElement("p",{className:u.a.title},"Utang Toko"),s.a.createElement("div",{className:u.a.row_box},s.a.createElement(c["a"],{className:u.a.input_title,id:"name",type:"text",placeholder:"Search Utang Toko",onChange:W,value:t,onKeyDown:R}),s.a.createElement(l["a"],{className:u.a.button_title,type:"primary",onClick:Q},"Cari")),s.a.createElement(n["a"],{justify:"space-between"},s.a.createElement("p",{className:u.a.title},"Utang Antar Toko"),s.a.createElement("p",{className:u.a.title_add,onClick:Y},"+ Tambah")),s.a.createElement(E,{data:J,loading:Boolean(L),status:Number(D),error:V,cancel:ea,handleVisibleUpdate:P,handleVisibleEdit:z}),s.a.createElement(k,{visible:b,onError:V,onCancel:Y,onCreate:Z,onLoadButton:Boolean(L)}),y?s.a.createElement(U,{visible:y,onCreate:$,onCancel:X,id_edit:B}):null,v?s.a.createElement(M,{visible:v,onCancel:G,onUpdate:aa,id_row:S}):null)};e["default"]=D},wqSk:function(a,e,t){a.exports={title:"antd-pro-pages-finance-utang-index-title",title_add:"antd-pro-pages-finance-utang-index-title_add",row_box:"antd-pro-pages-finance-utang-index-row_box",modal_body:"antd-pro-pages-finance-utang-index-modal_body",col:"antd-pro-pages-finance-utang-index-col",box3:"antd-pro-pages-finance-utang-index-box3",box5:"antd-pro-pages-finance-utang-index-box5",box10:"antd-pro-pages-finance-utang-index-box10",group:"antd-pro-pages-finance-utang-index-group",label:"antd-pro-pages-finance-utang-index-label",input:"antd-pro-pages-finance-utang-index-input",input_title:"antd-pro-pages-finance-utang-index-input_title",button:"antd-pro-pages-finance-utang-index-button",button_title:"antd-pro-pages-finance-utang-index-button_title",area:"antd-pro-pages-finance-utang-index-area",p:"antd-pro-pages-finance-utang-index-p"}}}]);