(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{TX3M:function(e,a,t){e.exports={title:"antd-pro-pages-list_harga-index-title",row_box:"antd-pro-pages-list_harga-index-row_box",button:"antd-pro-pages-list_harga-index-button",input:"antd-pro-pages-list_harga-index-input",modal_body:"antd-pro-pages-list_harga-index-modal_body",col:"antd-pro-pages-list_harga-index-col",box3:"antd-pro-pages-list_harga-index-box3",box5:"antd-pro-pages-list_harga-index-box5",box6:"antd-pro-pages-list_harga-index-box6",box10:"antd-pro-pages-list_harga-index-box10"}},jMEI:function(e,a,t){"use strict";t.r(a);t("+L6B");var n=t("2/Rp"),r=(t("5NDa"),t("5rEg")),l=t("ODXe"),i=t("q1tI"),o=t.n(i),c=t("TX3M"),u=t.n(c),s=t("Pt6z"),d=(t("g9YV"),t("wCAj")),p=(t("+BJd"),t("mr32")),m=t("VTBJ"),b=t("F6Wq"),g=t("G/yU"),f=function(e){var a=e.data,t=e.loading,r=e.status,c=e.error,u=e.handleVisible,s=Object(b["a"])(),f=Object(l["a"])(s,1),h=f[0],E=Object(i["useMemo"])((function(){return[{align:"center",title:"No",dataIndex:"id"},Object(m["a"])({align:"center",title:"Nama Barang",dataIndex:"nama_barang"},h("nama_barang")),{align:"center",title:"Qty Display",render:function(e){var a=e.qty_display;return o.a.createElement("span",null,a.map((function(e,a){return o.a.createElement(p["a"],{color:"blue",key:a},e.toUpperCase())})))}},{align:"center",title:"Qty Gudang",render:function(e){var a=e.qty_gudang;return o.a.createElement("span",null,a.map((function(e,a){return o.a.createElement(p["a"],{color:"blue",key:a},e.toUpperCase())})))}},Object(m["a"])(Object(m["a"])({align:"center",title:"Harga Rata-rata"},h("avg_harga")),{},{render:function(e){var a=e.avg_harga;return o.a.createElement("span",null,a.map((function(e,a){return o.a.createElement(p["a"],{color:"blue",key:a},e.toUpperCase())})))}}),{align:"center",title:"Foto Produk",render:function(e){var a=e.id_barang;return o.a.createElement(n["a"],{onClick:function(){return u(a)},type:"primary"},"Lihat")}}]}),[]);return c||200!==r?o.a.createElement(g["a"],null):o.a.createElement("div",{style:{overflow:"auto"}},o.a.createElement(d["a"],{columns:E,dataSource:a,loading:t}),";")},h=f,E=(t("2qtc"),t("kLXV")),v=(t("14J3"),t("BMrR")),_=t("bIAK"),x=function(e){var a=e.id_produk,t=e.visible,n=e.onCancel,r=Object(s["a"])(),c=Object(l["a"])(r,5),d=c[0],p=c[1],m=c[2],b=c[3],f=c[4];return Object(i["useEffect"])((function(){var e=setTimeout((function(){f("".concat("https://api.posarmed.id","/admin/v1/harga/list/").concat(a,"/detail"))}),0);return function(){return clearTimeout(e)}}),[]),o.a.createElement(E["a"],{visible:t,title:"Foto Produk",width:600,onCancel:n,closable:!1,footer:null},200!==p||b?o.a.createElement(g["a"],null):null,m?o.a.createElement(_["default"],null):o.a.createElement("div",{className:u.a.modal_body},o.a.createElement(v["a"],null,o.a.createElement("div",{className:u.a.box10},o.a.createElement("img",{alt:d.nama_barang,src:d.file_img,style:{width:"100%",height:"100%"}})))))},y=x,j=function(){var e=Object(i["useState"])(""),a=Object(l["a"])(e,2),t=a[0],c=a[1],d=Object(i["useState"])(0),p=Object(l["a"])(d,2),m=p[0],b=p[1],g=Object(i["useState"])(!1),f=Object(l["a"])(g,2),E=f[0],v=f[1],_=Object(s["a"])(),x=Object(l["a"])(_,5),j=x[0],O=x[1],w=x[2],k=x[3],C=x[4];Object(i["useEffect"])((function(){var e=setTimeout((function(){C("".concat("https://api.posarmed.id","/admin/v1/harga/list"))}),0);return function(){return clearTimeout(e)}}),[]);var N=Object(i["useCallback"])((function(){C("".concat("https://api.posarmed.id","/admin/v1/harga/list?filter=").concat(t)),c("")}),[C,t]),B=function(e){"enter"===e.key.toLowerCase()&&N()},T=function(e){b(Number(e)),v(!E)},S=function(e){c(e.target.value)},q=function(){b(0),v(!1)};return o.a.createElement("div",null,o.a.createElement("p",{className:u.a.title},"List Harga"),o.a.createElement("div",{className:u.a.row_box},o.a.createElement(r["a"],{className:u.a.input,id:"name",type:"text",placeholder:"Search Nama Barang",onChange:S,value:t,onKeyDown:B}),o.a.createElement(n["a"],{className:u.a.button,type:"primary",onClick:N},"Cari")),o.a.createElement(h,{data:j,loading:Boolean(w),status:Number(O),error:k,handleVisible:T}),E?o.a.createElement(y,{visible:E,id_produk:String(m),onCancel:q}):null)};a["default"]=j}}]);