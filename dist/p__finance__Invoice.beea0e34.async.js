(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"5eFz":function(e,a,t){e.exports={title:"antd-pro-pages-finance-invoice-index-title",title_add:"antd-pro-pages-finance-invoice-index-title_add",row_box:"antd-pro-pages-finance-invoice-index-row_box",modal_body:"antd-pro-pages-finance-invoice-index-modal_body",col_list:"antd-pro-pages-finance-invoice-index-col_list",col:"antd-pro-pages-finance-invoice-index-col",box3:"antd-pro-pages-finance-invoice-index-box3",box4:"antd-pro-pages-finance-invoice-index-box4",box5:"antd-pro-pages-finance-invoice-index-box5",box6:"antd-pro-pages-finance-invoice-index-box6",box10:"antd-pro-pages-finance-invoice-index-box10",group:"antd-pro-pages-finance-invoice-index-group",label:"antd-pro-pages-finance-invoice-index-label",input:"antd-pro-pages-finance-invoice-index-input",button:"antd-pro-pages-finance-invoice-index-button",area:"antd-pro-pages-finance-invoice-index-area",p:"antd-pro-pages-finance-invoice-index-p",span:"antd-pro-pages-finance-invoice-index-span"}},"h/GU":function(e,a,t){"use strict";t.r(a);t("14J3");var n=t("BMrR"),l=(t("+L6B"),t("2/Rp")),i=t("o0o1"),c=t.n(i),r=t("HaE+"),o=t("ODXe"),d=t("q1tI"),s=t.n(d),m=t("sWYD"),u=t("p46w"),g=t.n(u),p=t("5eFz"),b=t.n(p),f=(t("g9YV"),t("wCAj")),E=t("VTBJ"),v=t("F6Wq"),h=function(e){var a=e.data,t=e.loading,i=(e.status,e.error),c=e.handleVisible,r=e.onDownloadExcel,m=e.onLoadButton,u=e.onLoadDownload,g=e.onConfirm,p=e.onCancel,h=Object(v["a"])(),y=Object(o["a"])(h,1),x=y[0],j=Object(d["useMemo"])((function(){return[Object(E["a"])({align:"center",title:"Tanggal Transaksi",dataIndex:"tanggal",key:"tanggal"},x("tanggal")),Object(E["a"])({align:"center",title:"Nama Pembeli",dataIndex:"pembeli",key:"pembeli"},x("pembeli")),Object(E["a"])({align:"center",title:"No. Invoice",key:"invoice",render:function(e){return s.a.createElement("span",{className:b.a.span,onClick:function(){return c(e.id)}},e.invoice)}},x("invoice")),Object(E["a"])({align:"center",title:"Total Transaksi",dataIndex:"total_transaksi",key:"total_transaksi"},x("total_transaksi")),{align:"center",width:200,render:function(e){return s.a.createElement(s.a.Fragment,null,0===e.confirm_finance?s.a.createElement(n["a"],{justify:"center"},s.a.createElement(l["a"],{className:b.a.button,onClick:function(){return g(e.id)},disabled:m,type:"primary",style:{width:"100%"}},"Confirm"),s.a.createElement(l["a"],{className:b.a.button,onClick:function(){return p(e.id)},disabled:m,type:"primary",danger:!0,style:{width:"100%"}},"Batal")):s.a.createElement(l["a"],{onClick:function(){return r("1",e.invoice)},className:b.a.button,disabled:u,type:"primary",style:{width:"100%"}},"Download Invoice"))}}]}),[]);return i?s.a.createElement("h1",null,"Something went wrong!"):s.a.createElement("div",{style:{overflow:"auto"}},s.a.createElement(f["a"],{columns:j,dataSource:a.reverse(),loading:t}),";")},y=h,x=(t("2qtc"),t("kLXV")),j=(t("iQDF"),t("+eQT")),O=function(e){var a=e.visible,t=e.tanggal_start,i=e.tanggal_end,m=e.handleTanggalStart,u=e.handleTanggalEnd,p=e.handleVisible,f=Object(d["useState"])(!1),E=Object(o["a"])(f,2),v=E[0],h=E[1],y=function(){var e=Object(r["a"])(c.a.mark((function e(){var a,n,l,r;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,fetch("".concat("http://127.0.0.1:8000","/admin/v1/finance/pajak/excel"),{method:"post",body:JSON.stringify({start_date:t,end_date:i}),headers:{"Content-Type":"application/json",Authorization:String(g.a.get("token"))}});case 4:return a=e.sent,e.next=7,a.blob();case 7:return n=e.sent,e.next=10,n;case 10:l=e.sent,r=window.document.createElement("a"),r.href=window.URL.createObjectURL(l),r.download="".concat(t,".xlsx"),document.body.appendChild(r),r.click(),document.body.removeChild(r),h(!1),p(),e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](1),h(!1);case 24:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(x["a"],{visible:a,title:"Export ke Excel",width:600,closable:!1,footer:null},s.a.createElement("div",{className:b.a.modal_body},s.a.createElement(n["a"],null,s.a.createElement("div",{className:b.a.box10},s.a.createElement("div",{className:b.a.group},s.a.createElement("label",{className:b.a.label,htmlFor:"start_tanggal"},"Dari Tanggal"),s.a.createElement(j["a"],{id:"start_tanggal",style:{width:"100%"},onChange:m}))),s.a.createElement("div",{className:b.a.box10},s.a.createElement("div",{className:b.a.group},s.a.createElement("label",{className:b.a.label,htmlFor:"end_tanggal"},"Sampai Tanggal"),s.a.createElement(j["a"],{id:"end_tanggal",style:{width:"100%"},onChange:u}))))),s.a.createElement(n["a"],{justify:"end"},s.a.createElement(l["a"],{className:b.a.button,onClick:p,type:"primary",danger:!0},"Batal"),s.a.createElement(l["a"],{className:b.a.button,type:"primary",onClick:y,disabled:v},"Export")))},w=O,N=t("rePB"),k=t("KQm4"),C=t("jC83"),T=t("Pt6z"),_=t("bIAK"),S=t("G/yU"),A=function(e){var a=e.data;return s.a.createElement(d["Fragment"],null,s.a.createElement("div",{className:b.a.box4},s.a.createElement("div",{className:b.a.col_list},s.a.createElement("p",{className:b.a.p,style:{textAlign:"center"}},"PT.Anugrah Tiga Berlian"),s.a.createElement("p",{className:b.a.p,style:{textAlign:"center"}},"Kumara Medica"),s.a.createElement("p",{className:b.a.p,style:{textAlign:"center"}},"Jl. Pramuka No. 11 Palmeriam-Matraman-Jakarta-Timur"),s.a.createElement("p",{className:b.a.p,style:{textAlign:"center"}},"Tel.0812 9000 9921 Fax. 021-85916797"))),s.a.createElement("div",{className:b.a.box4},s.a.createElement("div",{className:b.a.col_list},s.a.createElement("p",{className:b.a.p,style:{textAlign:"center"}},"FAKTUR ",a&&a.invoice),s.a.createElement("table",{style:{textAlign:"center",width:"100%"}},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{align:"left"},"Tanggal"),s.a.createElement("td",{align:"center"},":"),s.a.createElement("td",{align:"right"},a.pembeli&&a.tanggal)),s.a.createElement("tr",null,s.a.createElement("td",{align:"left"},"Sales"),s.a.createElement("td",{align:"center"},":"),s.a.createElement("td",{align:"right"},a.pembeli&&a.nama_sales)),s.a.createElement("tr",null,s.a.createElement("td",{align:"left"},"Pelanggan"),s.a.createElement("td",{align:"center"},":"),s.a.createElement("td",{align:"right"},a.pembeli&&a.pembeli.name)),s.a.createElement("tr",null,s.a.createElement("td",{align:"left"},"Alamat"),s.a.createElement("td",{align:"center"},":"),s.a.createElement("td",{align:"right"},a.pembeli&&a.pembeli.alamat)),s.a.createElement("tr",null,s.a.createElement("td",{align:"left"},"NPWP"),s.a.createElement("td",{align:"center"},":"),s.a.createElement("td",{align:"right"},a.pembeli&&a.pembeli.npwp)),s.a.createElement("tr",null,s.a.createElement("td",{align:"left"},"Metode Pembayaran"),s.a.createElement("td",{align:"center"},":"),s.a.createElement("td",{align:"right"},a.tempo)))))))},I=A,P=(t("5NDa"),t("5rEg")),q=function(e){var a=e.data,t=e.qty,n=e.harga,l=e.handleUnitChange,i=e.handleHargaChange,c=e.visibleEdit,r=Object(d["useMemo"])((function(){return[{align:"center",title:"No",dataIndex:"no"},{align:"left",title:"Nama",dataIndex:"nama_barang"},{align:"center",title:"Unit",key:function(e){return t[e.no-1]},render:function(e){return c?s.a.createElement(P["a"],{className:b.a.input,id:String(e.no-1),value:t[e.no-1],onChange:l,placeholder:e.qty}):e.qty}},{align:"center",title:"Harga",key:function(e){return n[e.no-1]},render:function(e){return c?s.a.createElement(P["a"],{className:b.a.input,id:String(e.no-1),value:String(n[e.no-1]).replace(/[^0-9-]/g,""),onChange:i,placeholder:e.harga}):e.harga}},{align:"center",title:"Total",dataIndex:"jumlah"},{align:"center",title:"Tax 1.1",dataIndex:"t11"},{align:"center",title:"Tax 10%",dataIndex:"tax"}]}),[i,l,n,t,c]),o=Object(d["useMemo"])((function(){return[{align:"center",title:"Sub Total",dataIndex:"sub_total"},{align:"center",title:"Biaya lain-lain",dataIndex:"biaya_lain"},{align:"center",title:"Total",dataIndex:"total"},{align:"center",title:"DP / Uang Muka",dataIndex:"dp"},{align:"center",title:"Total Tagihan",dataIndex:"total_tagihan"}]}),[]);return s.a.createElement("div",{style:{border:"1px solid #d9d9d9",width:"100%"}},s.a.createElement("div",{style:{position:"relative",width:"100%"}},s.a.createElement(f["a"],{columns:r,rowKey:"no",dataSource:a.barang,pagination:{position:"none"}})),s.a.createElement("div",{style:{position:"relative",width:"100%"}},s.a.createElement(f["a"],{columns:o,rowKey:"id",dataSource:[a],pagination:{position:"none"}})))},B=q;function F(){return s.a.createElement(d["Fragment"],null,s.a.createElement("div",{className:b.a.box3},s.a.createElement("div",{className:b.a.col_list},s.a.createElement("p",{className:b.a.p,style:{textAlign:"center"}},"Tanda Terima"))),s.a.createElement("div",{className:b.a.box3},s.a.createElement("div",{className:b.a.col_list},s.a.createElement("p",{className:b.a.p,style:{textAlign:"center"}},"PERHATIAN"),s.a.createElement("p",{className:b.a.p,style:{textAlign:"center"}},"Barang yang sudah dibeli tidak dapat dikembalikan"))),s.a.createElement("div",{className:b.a.box3},s.a.createElement("div",{className:b.a.col_list},s.a.createElement("p",{className:b.a.p,style:{textAlign:"center"}},"Hormat kami,"),s.a.createElement("p",{className:b.a.p,style:{textAlign:"center"}},"Kumara Medica"))))}var M=F,D={no:[],harga:[],qty:[]},J=function(e){var a=e.idParams,t=e.visible,i=e.onCancel,c=Object(T["a"])(),r=Object(o["a"])(c,5),m=r[0],u=r[1],g=r[2],p=r[3],f=r[4],v=Object(C["a"])(),h=Object(o["a"])(v,3),y=h[0],j=h[1],O=h[2],w=Object(d["useState"])(D),A=Object(o["a"])(w,2),P=A[0],q=P.no,F=P.harga,J=P.qty,U=A[1],L=Object(d["useState"])(!1),V=Object(o["a"])(L,2),K=V[0],R=V[1];Object(d["useEffect"])((function(){var e=setTimeout((function(){f("".concat("http://127.0.0.1:8000","/admin/v1/finance/pajak/").concat(a,"/select"))}),0);return function(){return clearTimeout(e)}}),[a,j]),Object(d["useEffect"])((function(){var e=setTimeout((function(){m&&m.barang&&m.barang.map((function(e){return U((function(a){return{harga:[].concat(Object(k["a"])(a.harga),[e.harga.split(".").join("")]),qty:[].concat(Object(k["a"])(a.qty),[e.qty]),no:[].concat(Object(k["a"])(a.no),[e.no])}}))}))}),0);return function(){return clearTimeout(e)}}),[m]);var H=function(){return R(!K)},z=function(){U(Object(E["a"])({},D)),R(!1)},W=function(e){var a=e.target,t=a.id,n=a.value;U((function(){return{harga:Object(E["a"])(Object(E["a"])({},F),{},Object(N["a"])({},t,n)),no:q,qty:J}}))},Q=function(e){var a=e.target,t=a.id,n=a.value;U((function(){return{qty:Object(E["a"])(Object(E["a"])({},J),{},Object(N["a"])({},t,n)),no:q,harga:F}}))},G=q.map((function(e,a){return{no:String(e),harga:F[a],qty_barang:J[a]}})),X=function(){var e={barang:JSON.stringify(G)};O("".concat("http://127.0.0.1:8000","/admin/v1/finance/pajak/").concat(a,"/update"),e,z)};return s.a.createElement(x["a"],{visible:t,width:700,title:"Invoice",closable:!1,footer:null},200!==u||p?s.a.createElement(S["a"],null):null,g?s.a.createElement(_["a"],null):s.a.createElement("div",{className:b.a.modal_body},s.a.createElement(n["a"],{justify:"space-between"},s.a.createElement(I,{data:m})),s.a.createElement(n["a"],{style:{marginTop:" 1em"}},s.a.createElement(B,{data:m,qty:J,harga:F,handleHargaChange:W,handleUnitChange:Q,visibleEdit:K}))),s.a.createElement(n["a"],{style:{marginTop:" 1em"},justify:"space-between"},s.a.createElement(M,null)),s.a.createElement(n["a"],{style:{marginTop:" 2em"},justify:"space-between"},K?s.a.createElement(d["Fragment"],null,s.a.createElement(l["a"],{onClick:H,type:"default",style:{width:"45%"}},"Cancel"),s.a.createElement(l["a"],{onClick:X,disabled:Boolean(y),type:"default",style:{width:"45%"}},"Save")):s.a.createElement(d["Fragment"],null,s.a.createElement(l["a"],{onClick:i,type:"default",className:b.a.button,style:{width:"45%"}},"Kembali"),s.a.createElement(l["a"],{onClick:H,type:"default",className:b.a.button,style:{width:"45%"}},"Edit"))))},U=J,L=(t("OaEy"),t("2fM7")),V=L["a"].Option,K=function(e){var a=e.initial,t=e.handleChange,n=[{id:0,value:"Non Pajak"},{id:1,value:"Pajak"},{id:2,value:"All"}];return s.a.createElement(L["a"],{labelInValue:!0,defaultValue:{key:a||"Mohon Pilih"},style:{width:"30%",maxWidth:"8em",minHeight:"2em",marginBottom:"1em"},onChange:t},n&&n.map((function(e){return s.a.createElement(V,{key:e.id,id:e.id,value:e.value},e.value)})))},R=K,H=t("ZS4f"),z=Object(m["a"])(new Date,"yyyy-MM-dd"),W=function(){var e=Object(d["useState"])(!1),a=Object(o["a"])(e,2),t=a[0],i=a[1],m=Object(d["useState"])(!1),u=Object(o["a"])(m,2),p=u[0],f=u[1],E=Object(d["useState"])(0),v=Object(o["a"])(E,2),h=v[0],x=v[1],j=Object(H["a"])("2"),O=Object(o["a"])(j,2),N=O[0],k=O[1],_=Object(d["useState"])(z),S=Object(o["a"])(_,2),A=S[0],I=S[1],P=Object(d["useState"])(z),q=Object(o["a"])(P,2),B=q[0],F=q[1],M=Object(T["a"])(),D=Object(o["a"])(M,5),J=D[0],L=D[1],V=D[2],K=D[3],W=D[4],Q=Object(C["a"])(),G=Object(o["a"])(Q,3),X=G[0],Y=G[1],Z=G[2],$=Object(d["useState"])(!1),ee=Object(o["a"])($,2),ae=ee[0],te=ee[1];Object(d["useEffect"])((function(){var e=setTimeout((function(){W("".concat("http://127.0.0.1:8000","/admin/v1/finance/pajak?is_tax=").concat(N))}),0);return function(){return clearTimeout(e)}}),[N,Y]);var ne=function(){return i(!t)},le=function(e){f(!p),x(Number(e))},ie=function(e,a){I(a)},ce=function(e,a){F(a)},re=function(){f(!p),x(0)},oe=function(){return console.log("clicked")},de=function(e){Z("".concat("http://127.0.0.1:8000","/admin/v1/finance/pajak/").concat(e,"/confirm-finance"),JSON.stringify,oe)},se=function(e){Z("".concat("http://127.0.0.1:8000","/admin/v1/finance/transfer/").concat(e,"/update"),JSON.stringify({status_pembayaran:2}),oe)},me=function(){var e=Object(r["a"])(c.a.mark((function e(a,t){var n,l,i,r;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return te(!0),e.prev=1,e.next=4,fetch("".concat("http://127.0.0.1:8000","/admin/v1/finance/pajak/excel"),{method:"post",body:JSON.stringify({invoice:t,xtype:a}),headers:{"Content-Type":"application/json",Authorization:g.a.get("token")}});case 4:return n=e.sent,e.next=7,n.blob();case 7:l=e.sent,i=l,r=document.createElement("a"),r.href=window.URL.createObjectURL(i),r.download="".concat(t,".xlsx"),document.body.appendChild(r),r.click(),document.body.removeChild(r),te(!1),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](1),te(!1);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(a,t){return e.apply(this,arguments)}}();return s.a.createElement("div",null,s.a.createElement(n["a"],{justify:"space-between"},s.a.createElement("p",{className:b.a.title},"Invoice"),s.a.createElement(l["a"],{className:b.a.button,type:"primary",onClick:ne},"Convert to Excel")),s.a.createElement(R,{initial:"All",handleChange:k}),s.a.createElement(y,{data:J,loading:Boolean(V),status:Number(L),error:K,handleVisible:le,onConfirm:de,onCancel:se,onDownloadExcel:me,onLoadButton:Boolean(X),onLoadDownload:ae}),s.a.createElement(w,{visible:t,tanggal_start:A,tanggal_end:B,handleTanggalStart:ie,handleTanggalEnd:ce,handleVisible:ne}),p?s.a.createElement(U,{idParams:h,visible:p,onCancel:re}):null)};a["default"]=W}}]);