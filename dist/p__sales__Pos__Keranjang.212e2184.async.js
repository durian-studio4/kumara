(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{"4gyL":function(e,a,t){"use strict";t.r(a);var n=t("ODXe"),l=(t("miYZ"),t("tsqr")),r=t("q1tI"),s=t.n(r),c=t("WHYC"),o=t("b1st"),m=t.n(o),u=(t("IzEo"),t("bx4M")),i=(t("14J3"),t("BMrR")),d=(t("+L6B"),t("2/Rp")),p=t("G/yU"),g=t("bIAK"),b=function(e){var a=e.data,t=e.status,n=e.isLoading_data,l=e.isError_data,r=e.onSubmit,c=e.onDelete;return s.a.createElement(u["a"],{style:{marginTop:"2em"}},s.a.createElement("p",{className:m.a.title},"Keranjang Belanja"),200!==t||l?s.a.createElement(p["a"],null):null,n?s.a.createElement(g["a"],null):s.a.createElement("table",{className:m.a.table},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Nama Barang"),s.a.createElement("th",null,"Unit"),s.a.createElement("th",null,"Satuan"),s.a.createElement("th",null,"Harga"),s.a.createElement("th",null,"Jumlah"),s.a.createElement("th",null,"Diskon"),s.a.createElement("th",null,"-"),s.a.createElement("th",null,"Tax 10%"),s.a.createElement("th",null))),s.a.createElement("tbody",null,a.barang&&a.barang.map((function(e,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",null,e.nama_barang),s.a.createElement("td",null,e.qty),s.a.createElement("td",null,e.satuan_barang),s.a.createElement("td",null,e.harga),s.a.createElement("td",null,e.jumlah),s.a.createElement("td",null,Math.ceil(e.diskon).toLocaleString("id")),s.a.createElement("td",null,e.t11),s.a.createElement("td",null,e.tax),s.a.createElement("td",null,s.a.createElement(d["a"],{onClick:function(){return c(e.no)},type:"primary",danger:!0},"Hapus")))})),s.a.createElement("tr",null,s.a.createElement("td",{style:{fontWeight:"bold"}},"Pengiriman"),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null,Number(a.ongkir).toLocaleString("id")),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null)),s.a.createElement("tr",null,s.a.createElement("td",{style:{fontWeight:"bold"}},"Total"),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null,a.total_harga),s.a.createElement("td",null,a.total_diskon),s.a.createElement("td",null,a.total_t11),s.a.createElement("td",null,a.total_tax)))),s.a.createElement(i["a"],{justify:"end",style:{marginTop:"1em"}},s.a.createElement(d["a"],{type:"primary",onClick:r},"Bayar")))},E=b,v=(t("5NDa"),t("5rEg")),h=(t("T2oS"),t("W9HT")),f=t("aZ9c"),j=t("CzAe"),k=t("Pt6z"),N=t("ZS4f");function y(e){var a=Object(r["useState"])(),t=Object(n["a"])(a,2),l=t[0],s=t[1];Object(r["useEffect"])((function(){var a=setTimeout((function(){s(e)}),0);return function(){return clearTimeout(a)}}),[e]);var c=function(e){s(e.value)},o=function(){s(e)};return[l,c,o]}var x=t("P5uD"),O=t("LuAL"),S=function(e){var a=e.onCreate,t=e.onLoading,l=Object(r["useState"])(!1),c=Object(n["a"])(l,2),o=c[0],b=c[1],E=Object(k["a"])(),S=Object(n["a"])(E,5),_=S[0],C=S[1],T=S[2],B=S[3],L=S[4],D=Object(k["a"])(),w=Object(n["a"])(D,5),q=w[0],J=w[1],G=w[2],H=w[3],M=w[4],P=Object(N["a"])(""),F=Object(n["a"])(P,3),I=F[0],A=F[1],R=F[2],V=y(""),W=Object(n["a"])(V,3),z=W[0],K=W[1],Z=W[2],U=y(""),Y=Object(n["a"])(U,3),X=Y[0],Q=Y[1],$=Y[2],ee=y(""),ae=Object(n["a"])(ee,3),te=ae[0],ne=ae[1],le=ae[2],re=Object(j["a"])();Object(r["useEffect"])((function(){var e=setTimeout((function(){re.values&&L("".concat("https://api.posarmed.id","/admin/v1/master/barang/selectgroup?nama_barang=").concat(re.values))}),0);return function(){return clearTimeout(e)}}),[re.values]),Object(r["useEffect"])((function(){var e=setTimeout((function(){re.values&&I&&M("".concat("https://api.posarmed.id","/admin/v1/master/barang/hargacheck?nama_barang=").concat(re.values,"&id_satuan_barang=").concat(I))}),0);return function(){return clearTimeout(e)}}),[re.values,I]),Object(r["useEffect"])((function(){R()}),[re.values]),Object(r["useEffect"])((function(){return z&&te&&re.values?b(!1):b(!0)}),[re.values,z,te]);var se=JSON.stringify({nama_barang:re.values,qty_barang:te,harga:z,id_satuan_barang:I,diskon:X||0}),ce=function(){le(),$(),Z(),R(),re.clearText()},oe=function(){a({json:se,clear:ce})},me=function(){return G?null:200!==J||H?s.a.createElement("i",{style:{color:"red"}},"can't get harga avg"):s.a.createElement("div",{style:{textAlign:"center"}},q.avg?s.a.createElement("span",null,"Harga Rata-rata ".concat(Math.floor(q.avg).toLocaleString())):null)};return s.a.createElement(u["a"],null,s.a.createElement("p",{className:m.a.title},"Input Barang"),200!==C||B?s.a.createElement(p["a"],{status:C}):null,t?s.a.createElement(g["a"],null):s.a.createElement(r["Fragment"],null,s.a.createElement(i["a"],null,s.a.createElement("div",{className:m.a.box3},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"barang"},"Nama Barang"),s.a.createElement(x["a"],{id:"barang",value:re.text,onChange:re.changeText,onSelect:re.selectText}))),s.a.createElement("div",{className:m.a.box3},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label},"Stok Gudang"),T?s.a.createElement("div",null,s.a.createElement(h["a"],null)):s.a.createElement(v["a"],{className:m.a.input,disabled:!0,value:re.values?_.qty_gudang:0}))),s.a.createElement("div",{className:m.a.box3},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label},"Stok Display"),T?s.a.createElement("div",null,s.a.createElement(h["a"],null)):s.a.createElement(v["a"],{className:m.a.input,disabled:!0,value:re.values?_.qty_display:0})))),s.a.createElement(i["a"],null,s.a.createElement("div",{className:m.a.box3},s.a.createElement(i["a"],{justify:"space-between"},s.a.createElement("div",{className:m.a.box5},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label},"Banyak Barang"),s.a.createElement(f["a"],{className:m.a.number,thousandSeparator:!0,thousandsGroupStyle:"thousand",onValueChange:ne,value:String(te)}))),s.a.createElement("div",{className:m.a.box5},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label},"Satuan Barang"),re.values?s.a.createElement(O["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/master/barang/selectgroup?nama_barang=").concat(re.values),select_id:"qty_barang",initial:"Mohon Pilih",handleChange:A}):null)))),s.a.createElement("div",{className:m.a.box3},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"harga"},"Harga Satuan"),s.a.createElement(f["a"],{style:{borderColor:Number(z)<Number(q&&q.avg)?"#be1e2d":"#d9d9d9"},className:m.a.number,thousandSeparator:!0,thousandsGroupStyle:"thousand",onValueChange:K,value:String(z)}),re.values&&I?me():null)),s.a.createElement("div",{className:m.a.box3},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"diskon"},"Diskon"),s.a.createElement(f["a"],{placeholder:"%",className:m.a.number,thousandSeparator:!0,thousandsGroupStyle:"thousand",onValueChange:Q,value:String(X)}))))),s.a.createElement(i["a"],{justify:"end",style:{marginTop:"1em"}},s.a.createElement(d["a"],{type:"primary",onClick:oe,disabled:o,style:{marginRight:"1em"}},"Tambahkan ke keranjang")))},_=S,C=function(e){var a=e.ongkir,t=e.nama_ekspedisi,n=e.isDisabled_ekspedisi,l=e.onChangeOngkir,r=e.onChangeState,c=e.onCreate;return s.a.createElement(u["a"],{style:{marginTop:"2em"}},s.a.createElement("p",{className:m.a.title},"Pengiriman (Optional) "),s.a.createElement(i["a"],null,s.a.createElement("div",{className:m.a.box3},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"nama_ekspedisi"},"Nama Ekspedisi"),s.a.createElement(v["a"],{type:"text",className:m.a.input,id:"nama_ekspedisi",placeholder:"Isi Nama Ekspedisi",value:t,onChange:r}))),s.a.createElement("div",{className:m.a.box3},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label},"Ongkos Kirim"),s.a.createElement(f["a"],{className:m.a.number,thousandSeparator:!0,thousandsGroupStyle:"thousand",onValueChange:l,value:String(a)})))),s.a.createElement(i["a"],{justify:"end",style:{marginTop:"1em"}},s.a.createElement(d["a"],{type:"primary",onClick:c,disabled:n},"Tambahkan ke keranjang")))},T=C;l["b"].config({top:100,duration:3,maxCount:1});var B=function(){var e=Object(r["useState"])(""),a=Object(n["a"])(e,2),t=a[0],o=a[1],u=Object(r["useState"])(!1),i=Object(n["a"])(u,2),d=i[0],p=i[1],g=y(""),b=Object(n["a"])(g,3),v=b[0],h=b[1],f=b[2],j=Object(c["l"])().id,N=Object(c["j"])(),x=Object(k["a"])(),O=Object(n["a"])(x,6),S=O[0],C=O[1],B=O[2],L=O[3],D=O[4],w=O[5];Object(r["useEffect"])((function(){var e=setTimeout((function(){D("".concat("https://api.posarmed.id","/admin/v1/sales/pos/").concat(j,"/select"))}),0);return function(){return clearTimeout(e)}}),[]),Object(r["useEffect"])((function(){return p(!v||!t)}),[t,v]);var q=JSON.stringify({ongkir:v,nama_ekspedisi:t}),J=function(e){var a=e.target.value;o(a)},G=function(){o(""),f()},H=function(){return S.barang.length?N.push("/sales/pos/".concat(j,"/pembayaran")):(l["b"].error("Mohon lengkapi keranjang"),!1)},M=function(e){var a=e.json,t=e.clear;w("".concat("https://api.posarmed.id","/admin/v1/sales/pos/").concat(j,"/update"),a,t)},P=function(){w("".concat("https://api.posarmed.id","/admin/v1/sales/pos/").concat(j,"/update"),q,G)},F=function(e){w("".concat("https://api.posarmed.id","/admin/v1/sales/pos/").concat(j,"/delete"),JSON.stringify({no:e}),G)};return(L||200!==C)&&l["b"].error(L),s.a.createElement("div",null,s.a.createElement("p",{className:m.a.title},"Point of Sales"),s.a.createElement(_,{onCreate:M,onLoading:Boolean(B)}),s.a.createElement(T,{ongkir:String(v),nama_ekspedisi:t,isDisabled_ekspedisi:d,onChangeOngkir:h,onChangeState:J,onCreate:P}),s.a.createElement(E,{data:S,status:Number(C),isLoading_data:Boolean(B),isError_data:L,onSubmit:H,onDelete:F}))};a["default"]=B},b1st:function(e,a,t){e.exports={title:"antd-pro-pages-sales-pos-keranjang-index-title",row:"antd-pro-pages-sales-pos-keranjang-index-row",modal_body:"antd-pro-pages-sales-pos-keranjang-index-modal_body",col:"antd-pro-pages-sales-pos-keranjang-index-col",box3:"antd-pro-pages-sales-pos-keranjang-index-box3",box5:"antd-pro-pages-sales-pos-keranjang-index-box5",box10:"antd-pro-pages-sales-pos-keranjang-index-box10",group:"antd-pro-pages-sales-pos-keranjang-index-group",label:"antd-pro-pages-sales-pos-keranjang-index-label",input:"antd-pro-pages-sales-pos-keranjang-index-input",button:"antd-pro-pages-sales-pos-keranjang-index-button",span:"antd-pro-pages-sales-pos-keranjang-index-span",area:"antd-pro-pages-sales-pos-keranjang-index-area",table:"antd-pro-pages-sales-pos-keranjang-index-table",number:"antd-pro-pages-sales-pos-keranjang-index-number"}}}]);