(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{knaX:function(e,a,t){"use strict";t.r(a);t("14J3");var n=t("BMrR"),l=(t("+L6B"),t("2/Rp")),r=t("o0o1"),c=t.n(r),i=t("HaE+"),o=t("ODXe"),s=t("hGi/"),m=t("q1tI"),u=t.n(m),p=t("Hx5s"),d=t("p46w"),b=t.n(d),g=t("uzi1"),E=t.n(g),f=(t("g9YV"),t("wCAj")),v=t("VTBJ"),y=t("F6Wq"),h=t("G/yU"),j=function(e){var a=e.data,t=e.loading,r=e.error,c=e.status,i=e.cancel,s=e.handleVisibleUpdate,p=e.handleVisibleConfirm,d=Object(y["a"])(),b=Object(o["a"])(d,1),g=b[0],j=[];for(var x in a)j.push({id:a[x].id,tanggal:a[x].tanggal,pembeli:a[x].pembeli.name,tempo:a[x].tempo,total_harga:a[x].total_harga,invoice:a[x].invoice,nama_sales:a[x].nama_sales,status_pembayaran:a[x].status_pembayaran});var N=Object(m["useMemo"])((function(){return[Object(v["a"])({align:"center",title:"Tanggal",key:"tanggal",dataIndex:"tanggal"},g("tanggal")),Object(v["a"])({align:"center",title:"Nama Pembeli",key:"pembeli",dataIndex:"pembeli"},g("pembeli")),Object(v["a"])({align:"center",title:"No. Invoice",key:"invoice",render:function(e){return u.a.createElement("span",{className:E.a.span,id:e.id,onClick:s},e.invoice)}},g("invoice")),Object(v["a"])({align:"center",title:"Total Harga",key:"total_harga",dataIndex:"total_harga"},g("total_harga")),Object(v["a"])({align:"center",title:"Waktu Jatuh Tempo",key:"tempo",dataIndex:"tempo"},g("tempo")),Object(v["a"])({align:"center",title:"Nama Sales",key:"nama_sales",dataIndex:"nama_sales"},g("nama_sales")),{align:"center",title:"Status Pembayaran",key:"status_pembayaran",render:function(e){return u.a.createElement(u.a.Fragment,null,0===e.status_pembayaran?u.a.createElement(n["a"],{justify:"space-around"},u.a.createElement(l["a"],{className:E.a.button,id:e.id,onClick:function(){return p(e.id)},type:"primary",disabled:!0},"Selesai"),u.a.createElement(l["a"],{className:E.a.button,onClick:function(){return i(e.id)},type:"primary",danger:!0,disabled:!0},"Batal")):null,1===e.status_pembayaran?u.a.createElement("p",{className:E.a.p,style:{color:"#1890ff"}},"Selesai"):null,2===e.status_pembayaran?u.a.createElement("p",{className:E.a.p,style:{color:"#ff4d4f"}},"Batal"):null)}}]}),[]);return r||200!==c?u.a.createElement(h["a"],null):u.a.createElement("div",null,u.a.createElement("p",{className:E.a.title},"List Pembayaran Tempo"),u.a.createElement("div",{style:{overflow:"auto"}},u.a.createElement(f["a"],{columns:N,dataSource:j,loading:t})))},x=j,N=(t("2qtc"),t("kLXV")),_=t("Pt6z"),O=t("bIAK"),k=function(e){var a=e.idParams,t=e.visible,r=e.onCancel,c=Object(_["a"])(),i=Object(o["a"])(c,5),s=i[0],p=i[1],d=i[2],b=i[3],g=i[4];return Object(m["useEffect"])((function(){var e=setTimeout((function(){g("".concat("https://api.posarmed.id","/admin/v1/sales/").concat(a,"/piutang"))}),0);return function(){return clearTimeout(e)}}),[a]),u.a.createElement(N["a"],{visible:t,title:"Detail Invoice",closable:!1,footer:null},200!==p||b?u.a.createElement(h["a"],null):null,d?u.a.createElement(O["a"],null):u.a.createElement("div",{className:E.a.modal_body},u.a.createElement("div",{className:E.a.box10},u.a.createElement("div",{className:E.a.group,style:{padding:"0.2em"}},u.a.createElement("label",{style:{color:"#bfbeba"}},"No. Invoice"),u.a.createElement("p",null,s.invoice))),u.a.createElement("div",{className:E.a.box10},u.a.createElement("div",{className:E.a.group,style:{padding:"0.2em"}},u.a.createElement("label",{style:{color:"#bfbeba"}},"Detail Barang dan Banyaknya"),s.barang&&s.barang.map((function(e){return u.a.createElement("table",{className:E.a.table},u.a.createElement("tr",null,u.a.createElement("td",null,e.nama_barang),u.a.createElement("td",null,e.qty," ",e.satuan_barang)))})))),u.a.createElement("div",{className:E.a.box10},u.a.createElement("div",{className:E.a.group,style:{padding:"0.2em"}},u.a.createElement("label",{style:{color:"#bfbeba"}},"Total"),u.a.createElement("p",null,s.total_harga))),u.a.createElement("div",{className:E.a.box10},u.a.createElement("div",{className:E.a.group,style:{padding:"0.2em"}},u.a.createElement("label",{style:{color:"#bfbeba"}},"No. Telp"),u.a.createElement("p",null,s.pembeli&&s.pembeli.phone))),u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("label",{color:"#bfbeba"},"Alamat"),u.a.createElement("p",null,s.pembeli&&s.pembeli.alamat))),u.a.createElement("div",{className:E.a.box10},u.a.createElement("div",{className:E.a.group,style:{padding:"0.2em"}},u.a.createElement("label",{style:{color:"#bfbeba"}},"Group"),u.a.createElement("p",null,s.pembeli&&s.pembeli.pembeli_grup))),u.a.createElement(n["a"],{justify:"space-between"},u.a.createElement(l["a"],{className:E.a.button,onClick:r,type:"primary",danger:!0},"Tutup"))))},C=k,S=(t("giR+"),t("fyUT")),w=(t("5NDa"),t("5rEg")),B=(t("OaEy"),t("2fM7")),T=B["a"].Option,I=[{id:1,value:"BCA"},{id:2,value:"BNI"},{id:3,value:"BRI"},{id:4,value:"Mandiri"}],A=function(e){var a=e.initial,t=e.handleChange;return u.a.createElement(B["a"],{labelInValue:!0,defaultValue:{key:a||"Mohon Pilih"},style:{width:"100%",minHeight:"2em"},onChange:t},I.map((function(e,a){return u.a.createElement(T,{key:e.value,value:e.value},e.value)})))},F=A,P=t("7EWV"),V=t("ZS4f"),J=function(e){var a=e.onChangeKeterangan,t=e.keterangan;return u.a.createElement(m["Fragment"],null,u.a.createElement("div",{className:E.a.box10},u.a.createElement("div",{className:E.a.group},u.a.createElement("label",{className:E.a.label,htmlFor:"keterangan"},"Keterangan"),u.a.createElement(M,{className:E.a.area,id:"keterangan",value:t,onChange:a,placeholder:"Masukkan Keterangan..."}))))},M=w["a"].TextArea,U=function(e){var a=e.visible,t=e.id_confirm,r=e.onLoading,c=e.onUpdate,i=e.onCancel,s=Object(m["useState"])(""),p=Object(o["a"])(s,2),d=p[0],b=p[1],g=Object(m["useState"])(0),f=Object(o["a"])(g,2),v=f[0],y=f[1],j=Object(m["useState"])(""),x=Object(o["a"])(j,2),k=x[0],C=x[1],B=Object(_["a"])(),T=Object(o["a"])(B,5),I=T[0],A=T[1],M=T[2],U=T[3],K=T[4],L=Object(V["a"])(String(I.id_type_pembayaran)),R=Object(o["a"])(L,3),D=R[0],H=R[1],W=R[2],q=Object(V["a"])(I.nama_bank?I.nama_bank:"BCA"),z=Object(o["a"])(q,3),G=z[0],X=z[1],Y=z[2],Z=I.pembeli&&I.pembeli.id_suplier;Object(m["useEffect"])((function(){var e=setTimeout((function(){K("".concat("https://api.posarmed.id","/admin/v1/sales/").concat(t,"/piutang"))}),0);return function(){return clearTimeout(e)}}),[t]),Object(m["useEffect"])((function(){var e=setTimeout((function(){if(I){var e=I.tempo,a=I.keterangan,t=I.jumlah_pb;C(String(e)),b(a),y(t||0)}}),0);return function(){return clearTimeout(e)}}),[I]);var Q=JSON.stringify({status_pembayaran:1,id_type_pembayaran:D,tempo:k,jumlah_pb:v,keterangan:d,nama_bank:G}),$=function(e){return b(e.target.value)},ee=function(e){return C(e.target.value)},ae=function(e){return y(e)},te=function(){Y(),W(),i()},ne=function(){c({json:Q,clear:te})};function le(){switch(D){case"1":return u.a.createElement(J,{onChangeKeterangan:$,keterangan:d});case"3":return u.a.createElement(m["Fragment"],null,u.a.createElement("div",{className:E.a.box10},u.a.createElement("div",{className:E.a.group},u.a.createElement("label",{className:E.a.label,htmlFor:"bank"},"Nama Bank"),u.a.createElement(F,{handleChange:X,select_id:"bank",initial:I.nama_bank?I.nama_bank:"BCA"}))),u.a.createElement(J,{onChangeKeterangan:$,keterangan:d}));case"4":return u.a.createElement(m["Fragment"],null,u.a.createElement("div",{className:E.a.box10},u.a.createElement("div",{className:E.a.group},u.a.createElement("label",{className:E.a.label,htmlFor:"tempo"},"Waktu Jatuh Tempo"),u.a.createElement(n["a"],{justify:"space-between"},u.a.createElement("div",{className:E.a.box6},u.a.createElement(w["a"],{className:E.a.input,id:"tempo",value:k,onChange:ee,placeholder:"0"})),u.a.createElement("div",{className:E.a.box3},u.a.createElement(w["a"],{className:E.a.input,value:"Hari",disabled:!0}))))),u.a.createElement(J,{onChangeKeterangan:$,keterangan:d}));case"5":return u.a.createElement(J,{onChangeKeterangan:$,keterangan:d});case"6":return u.a.createElement(m["Fragment"],null,u.a.createElement("div",{className:E.a.box10},u.a.createElement("div",{className:E.a.group},u.a.createElement("label",{className:E.a.label,htmlFor:"jumlah_pb"},"Jumlah"),u.a.createElement(S["a"],{style:{width:"100%"},id:"jumlah_pb",placeholder:"",formatter:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},value:v,onChange:ae}))));default:return null}}return u.a.createElement(N["a"],{visible:a,width:500,title:"Ubah Status",closable:!1,footer:null},200!==A||U?u.a.createElement(h["a"],null):null,Boolean(M)?u.a.createElement(O["a"],null):u.a.createElement("div",{className:E.a.modal_body},u.a.createElement("p",{className:E.a.p,style:{textAlign:"center",fontWeight:"bold"}},"Apakah Anda Yakin Ingin Merubah Status Menjadi Selesai?"),u.a.createElement("div",{className:E.a.box10},u.a.createElement("div",{className:E.a.group},u.a.createElement("label",{className:E.a.label,htmlFor:"pembayaran"},"Metode Pembayaran"),u.a.createElement(P["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/sales/typePembayaran?id_suplier=").concat(Z),select_id:"pembayaran",initial:I.type_pembayaran,handleChange:H}))),le(),u.a.createElement(n["a"],{justify:"space-around"},u.a.createElement(l["a"],{type:"primary",loading:r,onClick:ne},"Ya"),u.a.createElement(l["a"],{type:"primary",danger:!0,onClick:te},"Batal"))))},K=U,L=t("jC83"),R=t("h/CO"),D=function(e){Object(s["a"])(e);var a=Object(m["useState"])(!1),t=Object(o["a"])(a,2),r=t[0],d=t[1],g=Object(m["useState"])(!1),f=Object(o["a"])(g,2),v=f[0],y=f[1],h=Object(m["useState"])(0),j=Object(o["a"])(h,2),N=j[0],O=j[1],k=Object(m["useState"])(0),S=Object(o["a"])(k,2),w=S[0],B=S[1],T=Object(m["useState"])(["",""]),I=Object(o["a"])(T,2),A=I[0],F=I[1],P=Object(m["useState"])(!1),V=Object(o["a"])(P,2),J=V[0],M=V[1],U=Object(L["a"])(),D=Object(o["a"])(U,3),H=D[0],W=D[1],q=D[2],z=Object(_["a"])(),G=Object(o["a"])(z,5),X=G[0],Y=G[1],Z=G[2],Q=G[3],$=G[4];Object(m["useEffect"])((function(){var e=setTimeout((function(){$("".concat("https://api.posarmed.id","/admin/v1/sales/piutang"))}),0);return function(){return clearTimeout(e)}}),[W]);var ee=function(e){d(!r),O(Number(e))},ae=function(e){y(!v),B(e.target.id)},te=function(){d(!1),O(0)},ne=function(){y(!1),B(0)},le=function(e,a){F([a[0]||"",a[1]||""])},re=function(e){var a=e.json,t=e.clear;q("".concat("https://api.posarmed.id","/admin/v1/finance/transfer/").concat(N,"/update"),a,t)},ce=function(e){q("".concat("https://api.posarmed.id","/admin/v1/finance/transfer/").concat(e,"/update"),JSON.stringify({status_pembayaran:2}),te)},ie=function(){var e=Object(i["a"])(c.a.mark((function e(){var a,t,n,l;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return M(!0),e.prev=1,e.next=4,fetch("".concat("https://api.posarmed.id","/admin/v1/sales/piutang/excel/?start_date=").concat(A[0],"&end_date=").concat(A[1]),{headers:{"Content-Type":"application/json",Authorization:String(b.a.get("token"))}});case 4:return a=e.sent,e.next=7,a.blob();case 7:t=e.sent,n=t,l=document.createElement("a"),l.href=window.URL.createObjectURL(n),l.download="Piutang-Sales-".concat(A[0],".xlsx"),document.body.appendChild(l),l.click(),document.body.removeChild(l),F(["",""]),M(!1),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](1),M(!1);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(){return e.apply(this,arguments)}}();return u.a.createElement(p["a"],null,u.a.createElement("p",{className:E.a.title},"Piutang Sales"),u.a.createElement(n["a"],{style:{marginBottom:"2em"}},u.a.createElement(R["a"],{handleChange:le}),u.a.createElement(l["a"],{type:"primary",className:E.a.button_convert,onClick:ie,disabled:!Boolean(A[0])&&!Boolean(A[1])},J&&"Downloading excel...",!J&&"Convert to Excel")),u.a.createElement(x,{data:X,loading:Boolean(Z),status:Number(Y),error:Boolean(Q),cancel:ce,handleVisibleUpdate:ae,handleVisibleConfirm:ee}),v?u.a.createElement(C,{visible:v,onCancel:ne,idParams:String(w)}):null,r?u.a.createElement(K,{visible:r,id_confirm:N,onLoading:Boolean(H),onCancel:te,onUpdate:re}):null)};a["default"]=D},uzi1:function(e,a,t){e.exports={title:"antd-pro-pages-sales-piutang-index-title",row_box:"antd-pro-pages-sales-piutang-index-row_box",modal_body:"antd-pro-pages-sales-piutang-index-modal_body",col:"antd-pro-pages-sales-piutang-index-col",box3:"antd-pro-pages-sales-piutang-index-box3",box5:"antd-pro-pages-sales-piutang-index-box5",box6:"antd-pro-pages-sales-piutang-index-box6",box10:"antd-pro-pages-sales-piutang-index-box10",group:"antd-pro-pages-sales-piutang-index-group",label:"antd-pro-pages-sales-piutang-index-label",input:"antd-pro-pages-sales-piutang-index-input",button:"antd-pro-pages-sales-piutang-index-button",button_convert:"antd-pro-pages-sales-piutang-index-button_convert",p:"antd-pro-pages-sales-piutang-index-p",span:"antd-pro-pages-sales-piutang-index-span",area:"antd-pro-pages-sales-piutang-index-area",table:"antd-pro-pages-sales-piutang-index-table"}}}]);