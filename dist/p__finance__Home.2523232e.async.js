(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{EgWv:function(e,a,t){"use strict";t.r(a);t("IzEo");var n=t("bx4M"),r=(t("14J3"),t("BMrR")),c=t("ODXe"),i=t("q1tI"),l=t.n(i),o=t("Hx5s"),d=t("sWYD"),m=t("Xm5A"),u=t.n(m),s=(t("T2oS"),t("W9HT")),g=function(){return l.a.createElement("div",{style:{paddingTop:100,textAlign:"center"}},l.a.createElement(s["a"],{size:"large"}))},b=(t("OaEy"),t("2fM7")),f=b["a"].Option,E=function(e){var a=e.handleChange,t=e.disabled,n=[{id:0,value:"Hari"},{id:2,value:"Bulan"}];return l.a.createElement(b["a"],{labelInValue:!0,defaultValue:{key:"Hari"},style:{width:"30%",maxWidth:"8em",marginRight:"1em",minHeight:"2em"},onChange:a,disabled:t},n&&n.map((function(e){return l.a.createElement(f,{key:e.id,id:e.id,value:e.value},e.value)})))},p=E,h=t("o0o1"),v=t.n(h),k=t("HaE+"),y=t("p46w"),_=t.n(y),x=t("Z6IV"),O=t.n(x),j=b["a"].Option,T=function(e){var a=e.handleChange,t=e.address,n=void 0===t?"":t,r=e.initial,o=e.disabled,d=Object(i["useState"])([]),m=Object(c["a"])(d,2),u=m[0],s=m[1],g=Object(i["useState"])(!1),f=Object(c["a"])(g,2),E=f[0],p=f[1];Object(i["useEffect"])((function(){var e=setTimeout((function(){h(n)}),0);return function(){return clearTimeout(e)}}),[n]);var h=function(){var e=Object(k["a"])(v.a.mark((function e(a){var t,n,r;return v.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,fetch(a,{headers:{Authorization:String(_.a.get("token"))}});case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,e.next=10,n.data;case 10:r=e.sent,p(!1),s(r),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](1),console.log(e.t0.message,"error"),p(!1);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(b["a"],{labelInValue:!0,defaultValue:{key:r||"Pilih Cabang"},onChange:a,loading:E,disabled:o,className:O.a.main},u&&u.map((function(e){return l.a.createElement(j,{key:e.id,id:e.id,value:e.nama_cabang},e.nama_cabang)})))},w=T,M=(t("g9YV"),t("wCAj")),I=t("hGCq"),S=t.n(I),C=t("Pt6z"),N=t("G/yU"),B=function(e){var a=e.id_cabang,t=e.id_kategori,n=e.date,r=Object(C["a"])(),o=Object(c["a"])(r,5),d=o[0],m=o[1],u=o[2],s=o[3],g=o[4],b=d.detail&&d.detail.reverse();Object(i["useEffect"])((function(){var e=setTimeout((function(){g("".concat("http://127.0.0.1:8000","/admin/v1/finance/dashboard/kategori/pengeluaran?id_cabang=").concat(a,"&kategori=").concat(t,"&start_date=").concat(n[0],"&end_date=").concat(n[1]))}),0);return function(){return clearTimeout(e)}}),[a,t,n]);var f=Object(i["useMemo"])((function(){return[{align:"center",title:"Tanggal",key:"tanggal",dataIndex:"tanggal"},{align:"center",title:"Tagihan Supplier",key:"tagihan_suplier",dataIndex:"tagihan_suplier"},{align:"center",title:"Tagihan Toko",key:"tagihan_toko",dataIndex:"tagihan_toko"},{align:"center",title:"Operational",key:"operational",dataIndex:"operational"}]}),[]);return 200!==m||s?l.a.createElement(N["a"],null):l.a.createElement("div",{style:{marginTop:"1em"}},l.a.createElement("p",{className:S.a.title},"Kategori Pengeluaran"),l.a.createElement("div",{style:{overflow:"auto"}},l.a.createElement(M["a"],{columns:f,dataSource:b,loading:Boolean(u)})))},D=B,H=function(e){var a=e.id_cabang,t=e.id_kategori,n=e.date,r=Object(C["a"])(),o=Object(c["a"])(r,5),d=o[0],m=o[1],u=o[2],s=o[3],g=o[4],b=d.detail&&d.detail.reverse();Object(i["useEffect"])((function(){var e=setTimeout((function(){g("".concat("http://127.0.0.1:8000","/admin/v1/finance/dashboard/kategori/pendapatan?id_cabang=").concat(a,"&kategori=").concat(t,"&start_date=").concat(n[0],"&end_date=").concat(n[1]))}),0);return function(){return clearTimeout(e)}}),[a,t,n]);var f=Object(i["useMemo"])((function(){return[{align:"center",title:"Tanggal",key:"tanggal",dataIndex:"tanggal"},{align:"center",title:"Debit",key:"debit",dataIndex:"debit"},{align:"center",title:"Giro",key:"giro",dataIndex:"giro"},{align:"center",title:"Cash",key:"cash",dataIndex:"cash"},{align:"center",title:"Transfer",key:"transfer",dataIndex:"transfer"},{align:"center",title:"Tempo",key:"kredit",dataIndex:"kredit"}]}),[]);return 200!==m||s?l.a.createElement(N["a"],null):l.a.createElement("div",null,l.a.createElement("p",{className:S.a.title},"Kategori Pendapatan"),l.a.createElement("div",{style:{overflow:"auto"}},l.a.createElement(M["a"],{columns:f,dataSource:b,loading:Boolean(u)})))},P=H,Y=(t("jCWc"),t("kPKH")),K=t("9kvl"),A=function(e){var a=e.data,t=e.loading,n=Object(i["useMemo"])((function(){return[{align:"center",title:"Tanggal",key:"tanggal",dataIndex:"tanggal"},{align:"center",title:"Nama Cabang",key:"nama_cabang",dataIndex:"nama_cabang"},{align:"center",title:"Total",key:"total",dataIndex:"total"}]}),[]);return l.a.createElement("div",{style:{overflow:"auto"}},l.a.createElement(M["a"],{columns:n,dataSource:a,loading:t}),";")},V=A,G=function(e){var a=e.id_cabang,t=e.id_kategori,n=e.date,r=Object(C["a"])(),o=Object(c["a"])(r,5),d=o[0],m=o[1],u=o[2],s=o[3],g=o[4];return Object(i["useEffect"])((function(){var e=setTimeout((function(){g("".concat("http://127.0.0.1:8000","/admin/v1/finance/dashboard/setoran?kategori=").concat(t,"&id_cabang=").concat(a,"&start_date=").concat(n[0],"&end_date=").concat(n[1]))}),0);return function(){return clearTimeout(e)}}),[t,a,n]),200!==m||s?l.a.createElement(N["a"],null):l.a.createElement(Y["a"],{sm:12,xs:24,style:{marginBottom:24}},l.a.createElement("div",{className:S.a.title,style:{marginBottom:"2rem"}},l.a.createElement(K["a"],{id:"setoran",defaultMessage:"Setoran"})),l.a.createElement("div",{style:{overflow:"auto"}},l.a.createElement(V,{data:d,loading:Boolean(u)})))},R=G,z=t("bIAK"),W=function(e){var a=e.id_cabang,t=e.id_kategori,n=e.date,r=Object(C["a"])(),o=Object(c["a"])(r,5),d=o[0],m=o[1],u=o[2],s=o[3],g=o[4];return Object(i["useEffect"])((function(){var e=setTimeout((function(){g("".concat("http://127.0.0.1:8000","/admin/v1/dashboard/total?id_cabang=").concat(a,"&kategori=").concat(t,"&start_date=").concat(n[0],"&end_date=").concat(n[1]))}),0);return function(){return clearTimeout(e)}}),[a,t,n]),200!==m||s?l.a.createElement(N["a"],null):l.a.createElement(Y["a"],{sm:12,xs:24,style:{marginBottom:24}},l.a.createElement("div",{className:S.a.title,style:{marginBottom:"2rem"}},l.a.createElement(K["a"],{id:"total omset",defaultMessage:"Total Omset"})),l.a.createElement("span",{className:S.a.title},"Total Omset Hari Ini"),u?l.a.createElement(z["a"],null):l.a.createElement("p",{style:{fontSize:"calc(0.5em + 1vmax)"}},d.total||"Rp. ".concat(0)))},X=W,q=t("4XXU"),F=function(e){var a=e.id_cabang,t=e.id_kategori,n=e.date,r=Object(C["a"])(),o=Object(c["a"])(r,5),d=o[0],m=o[1],u=o[2],s=o[3],g=o[4];return Object(i["useEffect"])((function(){var e=setTimeout((function(){g("".concat("http://127.0.0.1:8000","/admin/v1/finance/dashboard/chart/pengeluaran?id_cabang=").concat(a,"&kategori=").concat(t,"&start_date=").concat(n[0],"&end_date=").concat(n[1]))}),0);return function(){return clearTimeout(e)}}),[a,t,n]),200!==m||s?l.a.createElement(N["a"],null):l.a.createElement(Y["a"],{sm:12,xs:24,style:{marginBottom:24}},l.a.createElement("div",{className:S.a.title,style:{marginBottom:"2rem"}},l.a.createElement(K["a"],{id:"total pengeluaran",defaultMessage:"Total Pengeluaran"})),u?l.a.createElement(z["a"],null):l.a.createElement("div",{style:{height:300}},l.a.createElement(q["e"],{width:"100%",height:"100%"},l.a.createElement(q["b"],{data:d,margin:{top:0,right:0,left:0,bottom:0}},l.a.createElement(q["g"],{dataKey:"bulan"}),l.a.createElement(q["h"],{dataKey:"pengeluaran",domain:[0,5],padding:{left:5}}),l.a.createElement(q["c"],null),l.a.createElement(q["f"],null),l.a.createElement(q["d"],{x:"Page C",stroke:"lightblue",label:"Min PAGE"}),l.a.createElement(q["d"],{label:"Max",stroke:"red",strokeDasharray:"3 3"}),l.a.createElement(q["a"],{type:"monotone",dataKey:"pengeluaran",stroke:"lightblue",fill:"#68adfa"})))))},J=F,Q=function(e){var a=e.id_cabang,t=e.id_kategori,n=e.date,r=Object(C["a"])(),o=Object(c["a"])(r,5),d=o[0],m=o[1],u=o[2],s=o[3],g=o[4];return Object(i["useEffect"])((function(){var e=setTimeout((function(){g("".concat("http://127.0.0.1:8000","/admin/v1/finance/dashboard/chart/pendapatan?id_cabang=").concat(a,"&kategori=").concat(t,"&start_date=").concat(n[0],"&end_date=").concat(n[1]))}),0);return function(){return clearTimeout(e)}}),[a,t,n]),200!==m||s?l.a.createElement(N["a"],null):l.a.createElement(Y["a"],{sm:12,xs:24,style:{marginBottom:24}},l.a.createElement("div",{className:S.a.title,style:{marginBottom:"2rem"}},l.a.createElement(K["a"],{id:"total pendapatan",defaultMessage:"Total Pendapatan"})),u?l.a.createElement(z["a"],null):l.a.createElement("div",{style:{height:300}},l.a.createElement(q["e"],{width:"100%",height:"100%"},l.a.createElement(q["b"],{data:d,margin:{top:0,right:0,left:0,bottom:0}},l.a.createElement(q["g"],{dataKey:"bulan"}),l.a.createElement(q["h"],{dataKey:"pendapatan",domain:[0,5],padding:{left:5}}),l.a.createElement(q["c"],null),l.a.createElement(q["f"],null),l.a.createElement(q["d"],{x:"Page C",stroke:"lightblue",label:"Min PAGE"}),l.a.createElement(q["d"],{label:"Max",stroke:"red",strokeDasharray:"3 3"}),l.a.createElement(q["a"],{type:"monotone",dataKey:"pendapatan",stroke:"lightblue",fill:"#68adfa"})))))},U=Q,Z=(t("iQDF"),t("+eQT")),L=t("aRsy"),$=t.n(L),ee=Z["a"].RangePicker,ae=function(e){var a=e.handleChange,t=e.id_kategori;return l.a.createElement("div",null,"2"===t?l.a.createElement(ee,{className:$.a.main,onChange:a,format:"YYYY-MM-DD HH:mm:ss",picker:"month"}):l.a.createElement(ee,{className:$.a.main,onChange:a,format:"YYYY-MM-DD HH:mm:ss"}))},te=ae;function ne(e){var a=Object(i["useState"])(e),t=Object(c["a"])(a,2),n=t[0],r=t[1],l=function(e,a){r(a.key)},o=function(){r(e)};return[n,l,o]}var re=ne,ce=new Date,ie=ce.getFullYear(),le=ce.getMonth(),oe=Object(d["a"])(new Date(ie,le,1),"yyyy-MM-dd"),de=Object(d["a"])(new Date(ie,le+1,0),"yyyy-MM-dd"),me=function(){var e=re("1"),a=Object(c["a"])(e,2),t=a[0],d=a[1],m=re("0"),s=Object(c["a"])(m,2),b=s[0],f=s[1],E=Object(i["useState"])([oe,de]),h=Object(c["a"])(E,2),v=h[0],k=h[1],y=function(e,a){k([a[0]||"",a[1]||""])};return l.a.createElement(o["a"],null,l.a.createElement("p",{className:u.a.title},"Dashboard"),l.a.createElement("div",{className:u.a.row_box},l.a.createElement(p,{handleChange:f}),l.a.createElement(w,{address:"".concat("http://127.0.0.1:8000","/admin/v1/pengaturan/cabang/get"),handleChange:d}),l.a.createElement(te,{handleChange:y,id_kategori:String(b)})),l.a.createElement(l.a.Fragment,null,l.a.createElement(i["Suspense"],{fallback:l.a.createElement(g,null)},l.a.createElement(n["a"],{bordered:!1,style:{marginTop:"2em",marginBottom:"2em"}},l.a.createElement(r["a"],{gutter:68},l.a.createElement(X,{id_cabang:String(t),id_kategori:Number(b),date:v}),l.a.createElement(R,{id_cabang:String(t),id_kategori:Number(b),date:v})),l.a.createElement(r["a"],{gutter:68},l.a.createElement(U,{id_cabang:String(t),id_kategori:Number(b),date:v}),l.a.createElement(J,{id_cabang:String(t),id_kategori:Number(b),date:v}))))),l.a.createElement(P,{id_cabang:String(t),id_kategori:Number(b),date:v}),l.a.createElement(D,{id_cabang:String(t),id_kategori:Number(b),date:v}))};a["default"]=me},Xm5A:function(e,a,t){e.exports={title:"antd-pro-pages-finance-home-index-title",row_box:"antd-pro-pages-finance-home-index-row_box"}},Z6IV:function(e,a,t){e.exports={main:"antd-pro-pages-finance-home-components-select-cabang-index-main"}},aRsy:function(e,a,t){e.exports={main:"antd-pro-pages-finance-home-components-date-picker-index-main"}},hGCq:function(e,a,t){e.exports={title:"antd-pro-pages-finance-home-components-index-title",row_box:"antd-pro-pages-finance-home-components-index-row_box"}}}]);