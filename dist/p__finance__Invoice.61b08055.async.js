(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"5eFz":function(e,a,t){e.exports={title:"antd-pro-pages-finance-invoice-index-title",title_add:"antd-pro-pages-finance-invoice-index-title_add",row_box:"antd-pro-pages-finance-invoice-index-row_box",modal_body:"antd-pro-pages-finance-invoice-index-modal_body",col_list:"antd-pro-pages-finance-invoice-index-col_list",col:"antd-pro-pages-finance-invoice-index-col",box3:"antd-pro-pages-finance-invoice-index-box3",box4:"antd-pro-pages-finance-invoice-index-box4",box5:"antd-pro-pages-finance-invoice-index-box5",box6:"antd-pro-pages-finance-invoice-index-box6",box10:"antd-pro-pages-finance-invoice-index-box10",group:"antd-pro-pages-finance-invoice-index-group",label:"antd-pro-pages-finance-invoice-index-label",input:"antd-pro-pages-finance-invoice-index-input",button:"antd-pro-pages-finance-invoice-index-button",area:"antd-pro-pages-finance-invoice-index-area",p:"antd-pro-pages-finance-invoice-index-p",span:"antd-pro-pages-finance-invoice-index-span"}},"h/GU":function(e,a,t){"use strict";t.r(a);t("14J3");var n=t("BMrR"),l=(t("+L6B"),t("2/Rp")),i=t("rePB"),c=t("VTBJ"),r=t("ODXe"),o=t("q1tI"),s=t.n(o),d=t("sWYD"),m=t("5eFz"),u=t.n(m),p=(t("g9YV"),t("wCAj")),g=t("F6Wq"),b=function(e){var a=e.data,t=e.loading,n=(e.status,e.error),l=e.handleVisible,i=Object(g["a"])(),d=Object(r["a"])(i,1),m=d[0],b=Object(o["useMemo"])((function(){return[Object(c["a"])({align:"center",title:"Tanggal Transaksi",dataIndex:"tanggal",key:"tanggal"},m("tanggal")),Object(c["a"])({align:"center",title:"Nama Pembeli",dataIndex:"pembeli",key:"pembeli"},m("pembeli")),Object(c["a"])({align:"center",title:"No. Invoice",key:"invoice",render:function(e){return s.a.createElement("span",{className:u.a.span,onClick:function(){return l(e.id)}},e.invoice)}},m("invoice")),Object(c["a"])({align:"center",title:"Total Transaksi",dataIndex:"total_transaksi",key:"total_transaksi"},m("total_transaksi"))]}),[]);return n?s.a.createElement("h1",null,"Something went wrong!"):s.a.createElement("div",{style:{overflow:"auto"}},s.a.createElement(p["a"],{columns:b,dataSource:a,loading:t}),";")},E=b,v=(t("2qtc"),t("kLXV")),f=(t("5NDa"),t("5rEg")),h=(t("iQDF"),t("+eQT")),y=t("o0o1"),x=t.n(y),j=t("HaE+"),N=t("p46w"),O=t.n(N),k=function(e){var a=e.invoice,t=e.pembeli,i=e.visible,c=e.tanggal_start,d=e.tanggal_end,m=e.handleTanggalStart,p=e.handleTanggalEnd,g=e.handleVisible,b=e.handleState,E=e.handleClearState,y=Object(o["useState"])(!1),N=Object(r["a"])(y,2),k=N[0],w=N[1],C=function(){var e=Object(j["a"])(x.a.mark((function e(){var t,n,l,i;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,fetch("".concat("https://api.posarmed.id","/admin/v1/finance/pajak/excel"),{method:"post",body:JSON.stringify({invoice:a,start_date:c,end_date:d}),headers:{"Content-Type":"application/json",Authorization:String(O.a.get("token"))}});case 4:return t=e.sent,e.next=7,t.blob();case 7:return n=e.sent,e.next=10,n;case 10:l=e.sent,i=window.document.createElement("a"),i.href=window.URL.createObjectURL(l),i.download="".concat(a,".xls"),document.body.appendChild(i),i.click(),document.body.removeChild(i),w(!1),g(),E(),e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](1),w(!1);case 25:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(v["a"],{visible:i,title:"Export ke Excel",width:600,closable:!1,footer:null},s.a.createElement("div",{className:u.a.modal_body},s.a.createElement(n["a"],null,s.a.createElement("div",{className:u.a.box10},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"start_tanggal"},"Dari Tanggal"),s.a.createElement(h["a"],{id:"start_tanggal",style:{width:"100%"},onChange:m}))),s.a.createElement("div",{className:u.a.box10},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"end_tanggal"},"Sampai Tanggal"),s.a.createElement(h["a"],{id:"end_tanggal",style:{width:"100%"},onChange:p}))),s.a.createElement("div",{className:u.a.box10},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"invoice"},"No. Invoice / Faktur"),s.a.createElement(f["a"],{className:u.a.input,id:"invoice",type:"text",placeholder:"No Invoice",onChange:b,value:a}))),s.a.createElement("div",{className:u.a.box10},s.a.createElement("div",{className:u.a.group},s.a.createElement("label",{className:u.a.label,htmlFor:"pembeli"},"Nama Pembeli"),s.a.createElement(f["a"],{className:u.a.input,id:"pembeli",type:"text",placeholder:"Nama Pembeli",onChange:b,value:t}))))),s.a.createElement(n["a"],{justify:"end"},s.a.createElement(l["a"],{className:u.a.button,onClick:g,type:"primary",danger:!0},"Batal"),s.a.createElement(l["a"],{className:u.a.button,type:"primary",onClick:C,disabled:!a||k},"Export")))},w=k,C=t("KQm4"),T=t("jC83"),_=t("Pt6z"),S=t("bIAK"),I=t("G/yU"),A=function(e){var a=e.data;return s.a.createElement(o["Fragment"],null,s.a.createElement("div",{className:u.a.box4},s.a.createElement("div",{className:u.a.col_list},s.a.createElement("p",{className:u.a.p,style:{textAlign:"center"}},"PT.Anugrah Tiga Berlian"),s.a.createElement("p",{className:u.a.p,style:{textAlign:"center"}},"Kumara Medica"),s.a.createElement("p",{className:u.a.p,style:{textAlign:"center"}},"Jl. Pramuka No. 11 Palmeriam-Matraman-Jakarta-Timur"),s.a.createElement("p",{className:u.a.p,style:{textAlign:"center"}},"Tel.0812 9000 9921 Fax. 021-85916797"))),s.a.createElement("div",{className:u.a.box4},s.a.createElement("div",{className:u.a.col_list},s.a.createElement("p",{className:u.a.p,style:{textAlign:"center"}},"FAKTUR ",a&&a.invoice),s.a.createElement("table",{style:{textAlign:"center",width:"100%"}},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{align:"left"},"Tanggal"),s.a.createElement("td",{align:"center"},":"),s.a.createElement("td",{align:"right"},a.pembeli&&a.tanggal)),s.a.createElement("tr",null,s.a.createElement("td",{align:"left"},"Sales"),s.a.createElement("td",{align:"center"},":"),s.a.createElement("td",{align:"right"},a.pembeli&&a.nama_sales)),s.a.createElement("tr",null,s.a.createElement("td",{align:"left"},"Pelanggan"),s.a.createElement("td",{align:"center"},":"),s.a.createElement("td",{align:"right"},a.pembeli&&a.pembeli.name)),s.a.createElement("tr",null,s.a.createElement("td",{align:"left"},"Alamat"),s.a.createElement("td",{align:"center"},":"),s.a.createElement("td",{align:"right"},a.pembeli&&a.pembeli.alamat)),s.a.createElement("tr",null,s.a.createElement("td",{align:"left"},"NPWP"),s.a.createElement("td",{align:"center"},":"),s.a.createElement("td",{align:"right"},a.pembeli&&a.pembeli.npwp)))))))},P=A,q=function(e){var a=e.data,t=e.qty,n=e.harga,l=e.handleUnitChange,i=e.handleHargaChange,c=e.visibleEdit,r=Object(o["useMemo"])((function(){return[{align:"center",title:"No",dataIndex:"no"},{align:"left",title:"Nama",dataIndex:"nama_barang"},{align:"center",title:"Unit",key:function(e){return t[e.no-1]},render:function(e){return c?s.a.createElement(f["a"],{className:u.a.input,id:String(e.no-1),value:t[e.no-1],onChange:l,placeholder:e.qty}):e.qty}},{align:"center",title:"Harga",key:function(e){return n[e.no-1]},render:function(e){return c?s.a.createElement(f["a"],{className:u.a.input,id:String(e.no-1),value:String(n[e.no-1]).replace(/[^0-9-]/g,""),onChange:i,placeholder:e.harga}):e.harga}},{align:"center",title:"Total",dataIndex:"jumlah"},{align:"center",title:"Tax 1.1",dataIndex:"t11"},{align:"center",title:"Tax 10%",dataIndex:"tax"}]}),[i,l,n,t,c]),d=Object(o["useMemo"])((function(){return[{align:"center",title:"Sub Total",dataIndex:"sub_total"},{align:"center",title:"Biaya lain-lain",dataIndex:"biaya_lain"},{align:"center",title:"Total",dataIndex:"total"},{align:"center",title:"DP / Uang Muka",dataIndex:"dp"},{align:"center",title:"Total Tagihan",dataIndex:"total_tagihan"}]}),[]);return s.a.createElement("div",{style:{border:"1px solid #d9d9d9",width:"100%"}},s.a.createElement("div",{style:{position:"relative",width:"100%"}},s.a.createElement(p["a"],{columns:r,rowKey:"no",dataSource:a.barang,pagination:{position:"none"}})),s.a.createElement("div",{style:{position:"relative",width:"100%"}},s.a.createElement(p["a"],{columns:d,rowKey:"id",dataSource:[a],pagination:{position:"none"}})))},F=q;function B(){return s.a.createElement(o["Fragment"],null,s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.col_list},s.a.createElement("p",{className:u.a.p,style:{textAlign:"center"}},"Tanda Terima"))),s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.col_list},s.a.createElement("p",{className:u.a.p,style:{textAlign:"center"}},"PERHATIAN"),s.a.createElement("p",{className:u.a.p,style:{textAlign:"center"}},"Barang yang sudah dibeli tidak dapat dikembalikan"))),s.a.createElement("div",{className:u.a.box3},s.a.createElement("div",{className:u.a.col_list},s.a.createElement("p",{className:u.a.p,style:{textAlign:"center"}},"Hormat kami,"),s.a.createElement("p",{className:u.a.p,style:{textAlign:"center"}},"Kumara Medica"))))}var M=B,U={no:[],harga:[],qty:[]},J=function(e){var a=e.idParams,t=e.visible,d=e.onCancel,m=Object(_["a"])(),p=Object(r["a"])(m,5),g=p[0],b=p[1],E=p[2],f=p[3],h=p[4],y=Object(T["a"])(),N=Object(r["a"])(y,3),k=N[0],w=N[1],A=N[2],q=Object(o["useState"])(U),B=Object(r["a"])(q,2),J=B[0],V=J.no,K=J.harga,R=J.qty,D=B[1],H=Object(o["useState"])(!1),L=Object(r["a"])(H,2),z=L[0],W=L[1],Q=Object(o["useState"])(!1),G=Object(r["a"])(Q,2),X=G[0],Y=G[1];Object(o["useEffect"])((function(){var e=setTimeout((function(){h("".concat("https://api.posarmed.id","/admin/v1/finance/pajak/").concat(a,"/select"))}),0);return function(){return clearTimeout(e)}}),[a,w]),Object(o["useEffect"])((function(){var e=setTimeout((function(){g&&g.barang&&g.barang.map((function(e){return D((function(a){return{harga:[].concat(Object(C["a"])(a.harga),[e.harga.split(".").join("")]),qty:[].concat(Object(C["a"])(a.qty),[e.qty]),no:[].concat(Object(C["a"])(a.no),[e.no])}}))}))}),0);return function(){return clearTimeout(e)}}),[g]);var Z=function(){return W(!z)},$=function(){D(Object(c["a"])({},U)),W(!1)},ee=function(e){var a=e.target,t=a.id,n=a.value;D((function(){return{harga:Object(c["a"])(Object(c["a"])({},K),{},Object(i["a"])({},t,n)),no:V,qty:R}}))},ae=function(e){var a=e.target,t=a.id,n=a.value;D((function(){return{qty:Object(c["a"])(Object(c["a"])({},R),{},Object(i["a"])({},t,n)),no:V,harga:K}}))},te=function(){var e=Object(j["a"])(x.a.mark((function e(a){var t,n,l,i;return x.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Y(!0),e.prev=1,e.next=4,fetch("".concat("https://api.posarmed.id","/admin/v1/finance/pajak/excel"),{method:"post",body:JSON.stringify({invoice:g.no_faktur,xtype:a}),headers:{"Content-Type":"application/json",Authorization:O.a.get("token")}});case 4:return t=e.sent,e.next=7,t.blob();case 7:n=e.sent,l=n,i=document.createElement("a"),i.href=window.URL.createObjectURL(l),i.download="".concat(g.no_faktur,".xlsx"),document.body.appendChild(i),i.click(),document.body.removeChild(i),Y(!1),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](1),Y(!1);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(a){return e.apply(this,arguments)}}(),ne=V.map((function(e,a){return{no:String(e),harga:K[a],qty_barang:R[a]}})),le=function(){var e={barang:JSON.stringify(ne)};A("".concat("https://api.posarmed.id","/admin/v1/finance/pajak/").concat(a,"/update"),e,$)};return s.a.createElement(v["a"],{visible:t,width:700,title:"Invoice",closable:!1,footer:null},200!==b||f?s.a.createElement(I["a"],null):null,E?s.a.createElement(S["default"],null):s.a.createElement("div",{className:u.a.modal_body},s.a.createElement(n["a"],{justify:"space-between"},s.a.createElement(P,{data:g})),s.a.createElement(n["a"],{style:{marginTop:" 1em"}},s.a.createElement(F,{data:g,qty:R,harga:K,handleHargaChange:ee,handleUnitChange:ae,isLoadingUpdate:Boolean(k),visibleEdit:z}))),s.a.createElement(n["a"],{style:{marginTop:" 1em"},justify:"space-between"},s.a.createElement(M,null)),s.a.createElement(n["a"],{style:{marginTop:" 2em"},justify:"space-between"},z?s.a.createElement(o["Fragment"],null,s.a.createElement(l["a"],{onClick:Z,type:"default",style:{width:"45%"}},"Cancel"),s.a.createElement(l["a"],{onClick:le,disabled:Boolean(k),type:"default",style:{width:"45%"}},"Save")):s.a.createElement(o["Fragment"],null,s.a.createElement(l["a"],{onClick:d,type:"default",className:u.a.button,style:{width:"45%"}},"Kembali"),s.a.createElement(l["a"],{onClick:Z,type:"default",className:u.a.button,style:{width:"45%"}},"Edit"))),s.a.createElement(n["a"],{justify:"center"},s.a.createElement(l["a"],{onClick:function(){return te("1")},className:u.a.button,disabled:X,type:"primary",style:{width:"100%"}},"Convert Invoice ke Excel"),s.a.createElement(l["a"],{onClick:function(){return te("2")},className:u.a.button,disabled:X,type:"primary",style:{width:"100%"}},"Convert Pajak ke Excel")))},V=J,K=(t("OaEy"),t("2fM7")),R=K["a"].Option,D=function(e){var a=e.initial,t=e.handleChange,n=[{id:0,value:"Non Pajak"},{id:1,value:"Pajak"},{id:2,value:"All"}];return s.a.createElement(K["a"],{labelInValue:!0,defaultValue:{key:a||"Mohon Pilih"},style:{width:"30%",maxWidth:"8em",minHeight:"2em",marginBottom:"1em"},onChange:t},n&&n.map((function(e){return s.a.createElement(R,{key:e.id,id:e.id,value:e.value},e.value)})))},H=D,L=t("ZS4f"),z=Object(d["a"])(new Date,"yyyy-MM-dd"),W={invoice:"",pembeli:""},Q=function(){var e=Object(o["useState"])(!1),a=Object(r["a"])(e,2),t=a[0],d=a[1],m=Object(o["useState"])(!1),p=Object(r["a"])(m,2),g=p[0],b=p[1],v=Object(o["useState"])(0),f=Object(r["a"])(v,2),h=f[0],y=f[1],x=Object(L["a"])("2"),j=Object(r["a"])(x,2),N=j[0],O=j[1],k=Object(o["useState"])(W),C=Object(r["a"])(k,2),T=C[0],S=T.invoice,I=T.pembeli,A=C[1],P=Object(o["useState"])(z),q=Object(r["a"])(P,2),F=q[0],B=q[1],M=Object(o["useState"])(z),U=Object(r["a"])(M,2),J=U[0],K=U[1],R=Object(_["a"])(),D=Object(r["a"])(R,5),Q=D[0],G=D[1],X=D[2],Y=D[3],Z=D[4];Object(o["useEffect"])((function(){var e=setTimeout((function(){Z("".concat("https://api.posarmed.id","/admin/v1/finance/pajak?is_tax=").concat(N))}),0);return function(){return clearTimeout(e)}}),[N]);var $=function(){return d(!t)},ee=function(e){b(!g),y(Number(e))},ae=function(e,a){B(a)},te=function(e,a){K(a)},ne=function(e){var a=e.target,t=a.id,n=a.value;A((function(e){return Object(c["a"])(Object(c["a"])({},e),{},Object(i["a"])({},t,n))}))},le=function(){return A(Object(c["a"])({},W))},ie=function(){b(!g),y(0)};return s.a.createElement("div",null,s.a.createElement(n["a"],{justify:"space-between"},s.a.createElement("p",{className:u.a.title},"Invoice"),s.a.createElement(l["a"],{className:u.a.button,type:"primary",onClick:$},"Convert to Excel")),s.a.createElement(H,{initial:"All",handleChange:O}),s.a.createElement(E,{data:Q,loading:Boolean(X),status:Number(G),error:Y,handleVisible:ee}),s.a.createElement(w,{invoice:S,pembeli:I,visible:t,tanggal_start:F,tanggal_end:J,handleTanggalStart:ae,handleTanggalEnd:te,handleVisible:$,handleState:ne,handleClearState:le}),g?s.a.createElement(V,{idParams:h,visible:g,onCancel:ie}):null)};a["default"]=Q}}]);