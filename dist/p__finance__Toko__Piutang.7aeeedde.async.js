(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"2Hem":function(a,e,t){"use strict";t.r(e);t("+L6B");var n=t("2/Rp"),l=(t("14J3"),t("BMrR")),c=t("o0o1"),r=t.n(c),i=t("HaE+"),o=t("ODXe"),s=t("q1tI"),m=t.n(s),u=t("p46w"),d=t.n(u),b=t("he0M"),p=t.n(b),g=(t("g9YV"),t("wCAj")),E=t("VTBJ"),f=t("F6Wq"),v=t("G/yU"),h=function(a){var e=a.data,t=a.handleVisibleUpdate,c=a.handleVisibleEdit,r=a.cancel,i=a.loading,u=a.status,d=a.error,b=Object(f["a"])(),h=Object(o["a"])(b,1),j=h[0],x=Object(s["useMemo"])((function(){return[Object(E["a"])({align:"center",title:"Tanggal",key:"tanggal",dataIndex:"tanggal",render:function(a){return m.a.createElement("span",null,a)}},j("tanggal")),Object(E["a"])({align:"center",title:"Nama Toko",key:"nama_suplier",dataIndex:"nama_suplier"},j("nama_suplier")),Object(E["a"])({align:"center",title:"Nama Pengambil",key:"nama_pengambil",dataIndex:"nama_pengambil"},j("nama_pengambil")),Object(E["a"])({align:"center",title:"Nama Barang",key:"nama_barang",dataIndex:"nama_barang"},j("nama_barang")),Object(E["a"])({align:"center",title:"Qtc / Satuan",key:"qty",dataIndex:"qty"},j("qty")),Object(E["a"])({align:"center",title:"Harga / Satuan",key:"harga",dataIndex:"harga"},j("harga")),Object(E["a"])({align:"center",title:"Harga Total",key:"total",dataIndex:"total"},j("total")),Object(E["a"])({align:"center",title:"Nama Sales",key:"nama_sales",dataIndex:"nama_sales"},j("nama_sales")),{key:"id",align:"center",render:function(a){return m.a.createElement(m.a.Fragment,null,0===a.status?m.a.createElement(l["a"],{justify:"space-around"},m.a.createElement(n["a"],{className:p.a.button,onClick:function(){return t(a.id)},type:"primary"},"Selesai"),m.a.createElement(n["a"],{className:p.a.button,onClick:function(){return c(a.id)},type:"primary"},"Edit"),m.a.createElement(n["a"],{className:p.a.button,onClick:function(){return r(a.id)},type:"primary",danger:!0},"Batal")):null,1===a.status?m.a.createElement("p",{style:{color:"#1890ff"}},"Selesai"):null,2===a.status?m.a.createElement("p",{style:{color:"#ff4d4f"}},"Batal"):null)}}]}),[]);return d||200!==u?m.a.createElement(v["a"],null):m.a.createElement("div",{style:{overflow:"auto"}},m.a.createElement(g["a"],{columns:x,dataSource:e.reverse(),loading:i}),";")},j=h,x=(t("2qtc"),t("kLXV")),N=(t("jCWc"),t("kPKH")),O=(t("5NDa"),t("5rEg")),y=t("rePB"),_=t("sWYD"),k=t("ZS4f"),S=t("CzAe"),C=t("R277"),T=t("LuAL"),w=t("MRut"),B=t("P5uD"),F={nama_sales:"",nama_pengambil:""},I=function(a){var e=a.visible,t=a.onError,c=a.onCancel,r=a.onCreate,i=a.onLoadButton,u=Object(s["useState"])(F),d=Object(o["a"])(u,2),b=d[0],g=b.nama_sales,f=b.nama_pengambil,v=d[1],h=Object(s["useState"])(!1),j=Object(o["a"])(h,2),I=j[0],q=j[1],P=Object(C["a"])(""),M=Object(o["a"])(P,3),A=M[0],H=M[1],V=M[2],J=Object(C["a"])(""),U=Object(o["a"])(J,3),D=U[0],L=U[1],R=U[2],Q=Object(k["a"])(0),W=Object(o["a"])(Q,3),K=W[0],z=W[1],X=W[2],Y=Object(S["a"])(),G=Object(S["a"])(),Z=JSON.stringify({nama_sales:g,nama_pengambil:f,qty:A,harga:D,nama_barang:G.text,id_suplier:Y.id,id_satuan_barang:K});Object(s["useEffect"])((function(){return A&&D&&g&&f&&K&&G.text&&Y.text?q(!1):q(!0)}),[D,G.text,Y.text,f,g,A,K]),Object(s["useEffect"])((function(){X()}),[G.text]);var $=function(a){var e=a.target,t=e.id,n=e.value;v((function(a){return Object(E["a"])(Object(E["a"])({},a),{},Object(y["a"])({},t,n))}))},aa=function(){v(Object(E["a"])({},F)),X(),R(),G.clearText(),V(),c()},ea=function(){r({url:"".concat("https://api.posarmed.id","/admin/v1/finance/piutang"),json:Z,clear:aa})};return m.a.createElement(x["a"],{visible:e,title:"Tambah Daftar Piutang",width:1e3,closable:!1,footer:null},m.a.createElement("div",{className:p.a.modal_body},m.a.createElement(N["a"],null,m.a.createElement(l["a"],null,m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"tanggal"},"Tanggal"),m.a.createElement(O["a"],{className:p.a.input,type:"text",id:"tanggal",value:Object(_["a"])(new Date,"dd/MM/yyyy"),disabled:!0}))),m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"nama_sales"},"Nama Sales"),m.a.createElement(O["a"],{className:p.a.input,type:"text",id:"nama_sales",placeholder:"Isi Nama Sales",value:g,onChange:$}))),m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"nama_pengambil"},"Nama Pengambil"),m.a.createElement(O["a"],{className:p.a.input,type:"text",id:"nama_pengambil",placeholder:"Isi Nama Pengambil",value:f,onChange:$})))),m.a.createElement(l["a"],null,m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"nama_barang"},"Nama Barang"),m.a.createElement(B["a"],{id:"barang",value:G.text,onChange:G.changeText,onSelect:G.selectText}))),m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"toko"},"Toko / Suplier"),m.a.createElement(w["a"],{id:"toko",value:Y.text,onChange:Y.changeText,onSelect:Y.selectText}))),m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"qty"},"Qty"),m.a.createElement(O["a"],{className:p.a.input,id:"qty",placeholder:"Isi Qty",value:A,onChange:H})))),m.a.createElement(l["a"],null,G.text?m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"qty_satuan"},"Satuan"),m.a.createElement(T["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/master/barang/selectgroup?nama_barang=").concat(G.text),select_id:"qty_satuan",handleChange:z}))):null,m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"harga"},"Harga Satuan"),m.a.createElement(O["a"],{className:p.a.input,id:"harga",placeholder:"Isi Harga",value:D,onChange:L})))))),m.a.createElement(l["a"],{justify:"end"},t?m.a.createElement("p",{style:{color:"red"}},t):null,m.a.createElement(n["a"],{className:p.a.button,disabled:i,onClick:aa,type:"primary",danger:!0},"Batal"),m.a.createElement(n["a"],{className:p.a.button,onClick:ea,disabled:I||i,type:"primary"},"Simpan")))},q=I,P=t("Pt6z");function M(a){var e=Object(s["useState"])(0),t=Object(o["a"])(e,2),n=t[0],l=t[1];Object(s["useEffect"])((function(){var e=setTimeout((function(){l(a)}),0);return function(){return clearTimeout(e)}}),[a]);var c=function(a,e){l(e.key)},r=function(a){l(a)};return[n,c,r]}var A=M;function H(a){var e=a.idSelect,t=a.textSelect,n=Object(s["useState"])(""),l=Object(o["a"])(n,2),c=l[0],r=l[1],i=Object(s["useState"])(0),m=Object(o["a"])(i,2),u=m[0],d=m[1];Object(s["useEffect"])((function(){var a=setTimeout((function(){r(t),d(e)}),0);return function(){return clearTimeout(a)}}),[e,t]);var b=function(a){r(a)},p=function(a,e){r(e.children),d(a)},g=function(){r("")};return{text:c,id:u,changeText:b,selectText:p,clearText:g}}var V=H,J=t("bIAK"),U={nama_sales:"",nama_pengambil:""},D=function(a){var e=a.visible,t=a.onCancel,c=a.onCreate,r=a.id_edit,i=Object(P["a"])(),u=Object(o["a"])(i,5),d=u[0],b=u[1],g=u[2],f=u[3],h=u[4],j=Object(s["useState"])(U),_=Object(o["a"])(j,2),k=_[0],S=_[1],F=Object(s["useState"])(""),I=Object(o["a"])(F,2),q=I[0],M=I[1],H=Object(s["useState"])(!1),D=Object(o["a"])(H,2),L=D[0],R=D[1],Q=Object(C["a"])(d.qty),W=Object(o["a"])(Q,3),K=W[0],z=W[1],X=W[2],Y=Object(C["a"])(d.harga&&d.harga.split("Rp").join("").split(".").join("").trim()),G=Object(o["a"])(Y,3),Z=G[0],$=G[1],aa=G[2],ea=A(d.id_satuan_barang),ta=Object(o["a"])(ea,3),na=ta[0],la=ta[1],ca=ta[2],ra=V({idSelect:d.id_suplier,textSelect:d.nama_suplier}),ia=V({idSelect:d.id_barang,textSelect:d.nama_barang}),oa=k.nama_sales,sa=k.nama_pengambil,ma=JSON.stringify({nama_sales:oa,nama_pengambil:sa,qty:K,harga:Z,nama_barang:ia.text,id_suplier:ra.id,id_satuan_barang:na});Object(s["useEffect"])((function(){var a=setTimeout((function(){h("".concat("https://api.posarmed.id","/admin/v1/finance/piutang/").concat(r,"/select"))}),0);return function(){return clearTimeout(a)}}),[r]),Object(s["useEffect"])((function(){return K&&Z&&oa&&sa&&na&&ia.text&&ra.text?R(!1):R(!0)}),[Z,ia.text,ra.text,sa,oa,K,na]),Object(s["useEffect"])((function(){d&&d.harga&&(S({nama_pengambil:d.nama_pengambil,nama_sales:d.nama_sales}),M(d.tanggal))}),[d]);var ua=function(a){var e=a.target,t=e.id,n=e.value;S((function(a){return Object(E["a"])(Object(E["a"])({},a),{},Object(y["a"])({},t,n))}))},da=function(){S(Object(E["a"])({},U)),ca(0),ia.clearText(),X(),aa(),t()},ba=function(){c({url:"".concat("https://api.posarmed.id","/admin/v1/finance/piutang/").concat(r,"/update"),json:ma,clear:da})};return m.a.createElement(x["a"],{visible:e,title:"Edit Daftar Piutang",width:1e3,closable:!1,footer:null},200!==b||f?m.a.createElement(v["a"],null):null,g?m.a.createElement(J["a"],null):m.a.createElement("div",{className:p.a.modal_body},m.a.createElement(N["a"],null,m.a.createElement(l["a"],null,m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"tanggal"},"Tanggal"),m.a.createElement(O["a"],{className:p.a.input,type:"text",id:"tanggal",value:q,disabled:!0}))),m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"nama_sales"},"Nama Sales"),m.a.createElement(O["a"],{className:p.a.input,type:"text",id:"nama_sales",placeholder:"Isi Nama Sales",value:oa,onChange:ua}))),m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"nama_pengambil"},"Nama Pengambil"),m.a.createElement(O["a"],{className:p.a.input,type:"text",id:"nama_pengambil",placeholder:"Isi Nama Pengambil",value:sa,onChange:ua})))),m.a.createElement(l["a"],null,m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"nama_barang"},"Nama Barang"),m.a.createElement(B["a"],{id:"barang",value:ia.text,onChange:ia.changeText,onSelect:ia.selectText}))),m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"toko"},"Toko / Suplier"),m.a.createElement(w["a"],{id:"toko",value:ra.text,onChange:ra.changeText,onSelect:ra.selectText}))),m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"qty"},"Qty"),m.a.createElement(O["a"],{className:p.a.input,id:"qty",placeholder:"Isi Qty",value:K,onChange:z})))),m.a.createElement(l["a"],null,ia.text?m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"qty_satuan"},"Satuan"),m.a.createElement(T["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/master/barang/selectgroup?nama_barang=").concat(ia.text),select_id:"qty_satuan",initial:d.satuan_barang,handleChange:la}))):null,m.a.createElement("div",{className:p.a.box3},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"harga"},"Harga Satuan"),m.a.createElement(O["a"],{className:p.a.input,id:"harga",placeholder:"Isi Harga",value:Z,onChange:$})))))),m.a.createElement(l["a"],{justify:"end"},m.a.createElement(n["a"],{className:p.a.button,disabled:Boolean(g),onClick:da,type:"primary",danger:!0},"Batal"),m.a.createElement(n["a"],{className:p.a.button,disabled:L||Boolean(g),onClick:ba,type:"primary"},"Simpan")))},L=D,R=(t("OaEy"),t("2fM7")),Q=R["a"].Option,W=[{id:1,value:"BCA"},{id:2,value:"BNI"},{id:3,value:"BRI"},{id:4,value:"Mandiri"}],K=function(a){var e=a.initial,t=a.handleChange;return m.a.createElement(R["a"],{labelInValue:!0,defaultValue:{key:e||"Mohon Pilih"},style:{width:"100%",minHeight:"2em"},onChange:t},W.map((function(a,e){return m.a.createElement(Q,{key:a.value,value:a.value},a.value)})))},z=K,X=t("7EWV"),Y={keterangan:""},G=O["a"].TextArea,Z=function(a){var e=a.id_row,t=a.visible,c=a.onCancel,r=a.onUpdate,i=Object(P["a"])(),u=Object(o["a"])(i,5),d=u[0],b=u[1],g=u[2],f=u[3],v=u[4],h=Object(s["useState"])(Y),j=Object(o["a"])(h,2),N=j[0].keterangan,O=j[1],_=Object(k["a"])(""),S=Object(o["a"])(_,3),C=S[0],T=S[1],w=S[2],B=Object(k["a"])(d.nama_bank?d.nama_bank:"BCA"),F=Object(o["a"])(B,3),I=F[0],q=F[1],M=F[2];Object(s["useEffect"])((function(){var a=setTimeout((function(){v("".concat("https://api.posarmed.id","/admin/v1/finance/piutang/").concat(e,"/select"))}),0);return function(){return clearTimeout(a)}}),[e]);var A=function(a){var e=a.target,t=e.id,n=e.value;O((function(a){return Object(E["a"])(Object(E["a"])({},a),{},Object(y["a"])({},t,n))}))},H=function(){O(Object(E["a"])({},Y)),w(),M(),c()},V=function(){r({url:"".concat("https://api.posarmed.id","/admin/v1/finance/piutang/").concat(e,"/update"),json:JSON.stringify({status:1,nama_bank:"3"==C?I:"",keterangan:N,id_type_pembayaran:C}),clear:H})};function U(){switch(C){case"1":return;case"3":return m.a.createElement(s["Fragment"],null,m.a.createElement("div",{className:p.a.box10},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"bank"},"Nama Bank"),m.a.createElement(z,{handleChange:q,select_id:"bank",initial:I}))));case"4":return;case"5":return;default:return null}}return m.a.createElement(x["a"],{visible:t,title:"Ubah Status",width:500,closable:!1,footer:null},m.a.createElement("div",{className:p.a.modal_body},200!==b||f?m.a.createElement("h1",null,"Something went wrong"):null,g?m.a.createElement(J["a"],null):m.a.createElement(s["Fragment"],null,m.a.createElement("p",{style:{textAlign:"center",fontWeight:"bold"}},"Jika anda yakin ingin merubah status masukan jenis pembayaran yang digunakan"),m.a.createElement("div",{className:p.a.box10},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"pembayaran"},"Metode Pembayaran"),m.a.createElement(X["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/sales/typePembayaran?id_suplier=").concat(d.id_suplier),select_id:"pembayaran",initial:C,handleChange:T}))),U(),m.a.createElement("div",{className:p.a.box10},m.a.createElement("div",{className:p.a.group},m.a.createElement("label",{className:p.a.label,htmlFor:"keterangan"},"Keterangan:"," "),m.a.createElement(G,{className:p.a.area,id:"keterangan",value:N,onChange:A,placeholder:"Masukkan Keterangan..."}))),m.a.createElement(l["a"],{justify:"space-around"},m.a.createElement(n["a"],{type:"primary",onClick:V},"Ubah"),m.a.createElement(n["a"],{type:"primary",danger:!0,onClick:H},"Batal")))))},$=Z,aa=t("h/CO"),ea=function(){var a=Object(s["useState"])(!1),e=Object(o["a"])(a,2),t=e[0],c=e[1],u=Object(s["useState"])(!1),b=Object(o["a"])(u,2),g=b[0],E=b[1],f=Object(s["useState"])(!1),v=Object(o["a"])(f,2),h=v[0],x=v[1],N=Object(s["useState"])(0),O=Object(o["a"])(N,2),y=O[0],_=O[1],k=Object(s["useState"])(0),S=Object(o["a"])(k,2),C=S[0],T=S[1],w=Object(s["useState"])(["",""]),B=Object(o["a"])(w,2),F=B[0],I=B[1],M=Object(s["useState"])(!1),A=Object(o["a"])(M,2),H=A[0],V=A[1],J=Object(P["a"])(),U=Object(o["a"])(J,6),D=U[0],R=U[1],Q=U[2],W=U[3],K=U[4],z=U[5];Object(s["useEffect"])((function(){var a=setTimeout((function(){K("".concat("https://api.posarmed.id","/admin/v1/finance/piutang"))}),0);return function(){return clearTimeout(a)}}),[]);var X=function(){return c(!t)},Y=function(a){E(!g),_(Number(a))},G=function(a){x(!h),T(Number(a))},Z=function(){x(!1),T(0)},ea=function(){E(!1),_(0)},ta=function(a,e){I([e[0]||"",e[1]||""])},na=function(a){var e=a.url,t=a.json,n=a.clear;z(e,t,n)},la=function(a){var e=a.url,t=a.json,n=a.clear;z(e,t,n)},ca=function(a){var e=a.url,t=a.json,n=a.clear;z(e,t,n)},ra=function(a){z("".concat("https://api.posarmed.id","/admin/v1/finance/piutang/").concat(a,"/update"),JSON.stringify({status:2}),Z)},ia=function(){var a=Object(i["a"])(r.a.mark((function a(){var e,t,n,l;return r.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return V(!0),a.prev=1,a.next=4,fetch("".concat("https://api.posarmed.id","/admin/v1/finance/piutang/excel/?start_date=").concat(F[0],"&end_date=").concat(F[1]),{headers:{"Content-Type":"application/json",Authorization:String(d.a.get("token"))}});case 4:return e=a.sent,a.next=7,e.blob();case 7:t=a.sent,n=t,l=document.createElement("a"),l.href=window.URL.createObjectURL(n),l.download="Piutang-Toko-".concat(F[0],".xlsx"),document.body.appendChild(l),l.click(),document.body.removeChild(l),I(["",""]),V(!1),a.next=22;break;case 19:a.prev=19,a.t0=a["catch"](1),V(!1);case 22:case"end":return a.stop()}}),a,null,[[1,19]])})));return function(){return a.apply(this,arguments)}}();return m.a.createElement("div",null,m.a.createElement("p",{className:p.a.title},"Piutang Toko"),m.a.createElement(l["a"],{justify:"space-between"},m.a.createElement("p",{className:p.a.title},"Piutang Antar Toko"),m.a.createElement("p",{className:p.a.title_add,onClick:X},"+ Tambah")),m.a.createElement(l["a"],{style:{marginBottom:"1em"}},m.a.createElement(aa["a"],{handleChange:ta}),m.a.createElement(n["a"],{type:"primary",className:p.a.button_convert,onClick:ia,disabled:!Boolean(F[0])&&!Boolean(F[1])},H&&"Downloading excel...",!H&&"Convert to Excel")),m.a.createElement(j,{data:D,loading:Boolean(Q),status:Number(R),error:W,cancel:ra,handleVisibleUpdate:Y,handleVisibleEdit:G}),m.a.createElement(q,{visible:t,onError:W,onCancel:X,onCreate:na,onLoadButton:Boolean(Q)}),h?m.a.createElement(L,{visible:h,onCreate:la,onCancel:Z,id_edit:C}):null,g?m.a.createElement($,{id_row:y,visible:g,onCancel:ea,onUpdate:ca}):null)};e["default"]=ea},he0M:function(a,e,t){a.exports={title:"antd-pro-pages-finance-toko-piutang-index-title",title_add:"antd-pro-pages-finance-toko-piutang-index-title_add",row_box:"antd-pro-pages-finance-toko-piutang-index-row_box",modal_body:"antd-pro-pages-finance-toko-piutang-index-modal_body",col:"antd-pro-pages-finance-toko-piutang-index-col",box3:"antd-pro-pages-finance-toko-piutang-index-box3",box5:"antd-pro-pages-finance-toko-piutang-index-box5",box10:"antd-pro-pages-finance-toko-piutang-index-box10",group:"antd-pro-pages-finance-toko-piutang-index-group",label:"antd-pro-pages-finance-toko-piutang-index-label",input:"antd-pro-pages-finance-toko-piutang-index-input",input_title:"antd-pro-pages-finance-toko-piutang-index-input_title",button:"antd-pro-pages-finance-toko-piutang-index-button",button_convert:"antd-pro-pages-finance-toko-piutang-index-button_convert",button_title:"antd-pro-pages-finance-toko-piutang-index-button_title",area:"antd-pro-pages-finance-toko-piutang-index-area",p:"antd-pro-pages-finance-toko-piutang-index-p",number:"antd-pro-pages-finance-toko-piutang-index-number"}}}]);