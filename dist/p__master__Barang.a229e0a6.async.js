(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"40Io":function(e,a,t){"use strict";t.r(a);t("14J3");var n=t("BMrR"),r=(t("+L6B"),t("2/Rp")),c=(t("5NDa"),t("5rEg")),i=t("ODXe"),u=(t("miYZ"),t("tsqr")),o=t("q1tI"),l=t.n(o),s=t("qDqd"),d=t.n(s),b=(t("g9YV"),t("wCAj")),m=(t("P2fV"),t("NJEC")),p=(t("sRBo"),t("kaz8")),g=t("VTBJ"),f=t("sWYD"),_=t("F6Wq"),j=t("G/yU"),O=function(e){var a=e.data,t=(e.handleVisible,e.handleUpdate,e.loading),n=e.status,c=e.error,u=e.remove,s=e.update,d=Object(_["a"])(),O=Object(i["a"])(d,1),y=O[0],k=Object(o["useMemo"])((function(){return[{align:"center",title:"No",key:"id",dataIndex:"id"},Object(g["a"])({align:"center",title:"SKU/Barode",key:"sku",dataIndex:"sku"},y("sku")),Object(g["a"])({align:"center",title:"Brand",key:"brand",dataIndex:"brand"},y("brand")),Object(g["a"])({align:"center",title:"Nama Barang",key:"nama_barang",dataIndex:"nama_barang"},y("nama_barang")),Object(g["a"])({align:"center",title:"Tipe Barang",key:"type_barang",dataIndex:"type_barang"},y("type_barang")),Object(g["a"])({align:"center",title:"Expired Date",key:"expired_date",dataIndex:"expired_date",render:function(e){return l.a.createElement("span",null,e?Object(f["a"])(e,"dd/MM/yyyy"):null)}},y("expired_date")),Object(g["a"])({align:"center",title:"Satuan Stock",key:"stok_minimum",dataIndex:"stok_minimum"},y("stok_minimum")),{align:"center",title:"PPN",render:function(e){return l.a.createElement(m["a"],{title:"Apakah Anda Ingin Confirm?",onConfirm:function(){s(e.id,"1")},onCancel:function(){s(e.id,"0")},okText:"Yes",cancelText:"No"},l.a.createElement(p["a"],{checked:e.include_ppn}))}},{align:"center",render:function(e){return l.a.createElement(o["Fragment"],null,l.a.createElement(r["a"],{onClick:function(){return u(e.id)},type:"primary",danger:!0},"Delete"))}}]}),[]);return c||200!==n?l.a.createElement(j["a"],null):l.a.createElement("div",{style:{overflow:"auto"}},l.a.createElement(b["a"],{columns:k,dataSource:a,loading:t}),";")},y=O,k=(t("2qtc"),t("kLXV")),v=(t("jCWc"),t("kPKH")),x=(t("DZo9"),t("8z0m")),E=t("rePB"),h=function(e){var a=e.label,t=e.id,n=e.name,r=e.onChange,i=e.placeholder,u=e.value,o=e.disabled;return l.a.createElement("div",{className:d.a.box5},l.a.createElement("div",{className:d.a.group},l.a.createElement("label",{className:d.a.label,htmlFor:a},n),l.a.createElement(c["a"],{className:d.a.input,type:"text",id:t,placeholder:i,value:u,onChange:r,disabled:o})))},S=h,N=t("o0o1"),C=t.n(N),w=t("HaE+"),q=t("p46w"),B=t.n(q),D=t("bIAK"),I=function(e){var a=e.onChange,t=e.onDisabled,r=Object(o["useState"])([]),c=Object(i["a"])(r,2),u=c[0],s=c[1],b=Object(o["useState"])(!1),m=Object(i["a"])(b,2),g=m[0],f=m[1],_=Object(o["useState"])(""),j=Object(i["a"])(_,2),O=j[0],y=j[1];Object(o["useEffect"])((function(){var e=setTimeout((function(){k()}),0);return function(){return clearTimeout(e)}}),[]);var k=function(){var e=Object(w["a"])(C.a.mark((function e(){var a,t,n;return C.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,fetch("".concat("https://api.posarmed.id","/admin/v1/master/barang/satuanBarang"),{headers:{Authorization:String(B.a.get("token"))}});case 4:return a=e.sent,e.next=7,a.json();case 7:return t=e.sent,e.next=10,t;case 10:n=e.sent,s(n.data),f(!1),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](1),f(!1),y(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}(),v=function(){return g?l.a.createElement(D["default"],null):O?"An Error Occured":u.map((function(e){var n=e.satuan,r=e.id;return l.a.createElement("div",{className:d.a.box3,key:r},l.a.createElement("div",{className:d.a.group,style:{padding:"0.5em"}},l.a.createElement(p["a"],{id:"item_".concat(String(n).toLowerCase()),disabled:t,onChange:a},n)))}))};return l.a.createElement("div",{className:d.a.box5},l.a.createElement(n["a"],null,v()))},T=I,A=t("KQm4"),J=function(e){var a=e.itemCheckbox,t=e.setSatuan,n=a.item_box,r=a.item_karton,c=a.item_pack,i=a.item_pcs,u=a.item_unit;t(i?function(e){return Object(g["a"])(Object(g["a"])({},e),{},{satuan_pcs:1})}:function(e){return Object(g["a"])(Object(g["a"])({},e),{},{satuan_pcs:0})}),t(c?function(e){return Object(g["a"])(Object(g["a"])({},e),{},{satuan_pack:2})}:function(e){return Object(g["a"])(Object(g["a"])({},e),{},{satuan_pack:0})}),t(u?function(e){return Object(g["a"])(Object(g["a"])({},e),{},{satuan_unit:3})}:function(e){return Object(g["a"])(Object(g["a"])({},e),{},{satuan_unit:0})}),t(n?function(e){return Object(g["a"])(Object(g["a"])({},e),{},{satuan_box:4})}:function(e){return Object(g["a"])(Object(g["a"])({},e),{},{satuan_box:0})}),t(r?function(e){return Object(g["a"])(Object(g["a"])({},e),{},{satuan_karton:5})}:function(e){return Object(g["a"])(Object(g["a"])({},e),{},{satuan_karton:0})})},M=function(e){var a=e.satuanBarang,t=e.qtyBarang,n=e.setStok,r=t.qty_box,c=t.qty_pcs,u=t.qty_unit,o=t.qty_karton,l=t.qty_pack;Object._filter=function(e,a){return Object.keys(e).filter((function(t){return a(e[t])})).reduce((function(a,t){return a[t]=e[t],a}),{})};var s=Object._filter(a,(function(e){return e}));Object.entries(s).map((function(e){var a=Object(i["a"])(e,2),t=a[0],s=a[1],d={id_satuan_barang:s,min_stok:Number("")},b=function(e){var a=e.filter((function(e){return""!==e.min_stok}));return[].concat(Object(A["a"])(a),[d])};switch(t){case"satuan_box":d.min_stok=Number(r);break;case"satuan_pcs":d.min_stok=Number(c);break;case"satuan_unit":d.min_stok=Number(u);break;case"satuan_pack":d.min_stok=Number(l);break;case"satuan_karton":d.min_stok=Number(o);break;default:break}return n((function(e){return b(e)}))}))},P=t("ZS4f"),Q=t("7EWV"),U={sku:"",brand:"",nama_barang:"",name:""},F={qty_box:"",qty_pcs:"",qty_unit:"",qty_karton:"",qty_pack:""},K={item_pcs:!1,item_pack:!1,item_unit:!1,item_box:!1,item_karton:!1,include_ppn:!1},V={satuan_pcs:0,satuan_pack:0,satuan_unit:0,satuan_box:0,satuan_karton:0},L=function(e){var a=e.visible,t=e.onLoadButton,c=e.onCancel,u=e.onCreate,s=e.onError,b=Object(o["useState"])(U),m=Object(i["a"])(b,2),p=m[0],f=p.sku,_=p.brand,j=p.nama_barang,O=m[1],y=Object(o["useState"])(F),h=Object(i["a"])(y,2),N=h[0],C=h[1],w=Object(o["useState"])(K),q=Object(i["a"])(w,2),B=q[0],D=q[1],I=Object(o["useState"])(V),A=Object(i["a"])(I,2),L=A[0],z=A[1],R=Object(o["useState"])([]),W=Object(i["a"])(R,2),Y=W[0],Z=W[1],H=Object(o["useState"])(""),X=Object(i["a"])(H,2),G=X[0],$=X[1],ee=Object(o["useState"])(!1),ae=Object(i["a"])(ee,2),te=ae[0],ne=ae[1],re=Object(o["useState"])(!1),ce=Object(i["a"])(re,2),ie=ce[0],ue=ce[1],oe=B.include_ppn,le=B.item_box,se=B.item_karton,de=B.item_pack,be=B.item_pcs,me=B.item_unit,pe=N.qty_box,ge=N.qty_pcs,fe=N.qty_unit,_e=N.qty_karton,je=N.qty_pack,Oe=Object(P["a"])("1"),ye=Object(i["a"])(Oe,2),ke=ye[0],ve=ye[1],xe=Array.from(new Set(Y.map((function(e){return JSON.stringify(e)})))).map((function(e){return JSON.parse(e)})),Ee={sku:f,brand:_,nama_barang:j,id_type_barang:ke,file_gambar:G,include_ppn:Number(oe),satuan_stock:JSON.stringify(xe)};Object(o["useEffect"])((function(){J({itemCheckbox:B,setSatuan:z})}),[B]),Object(o["useEffect"])((function(){a||Z([])}),[a]),Object(o["useEffect"])((function(){return ne(!f||(!_||(!j||!G)))}),[_,G,j,f]);var he=function(e){var a=e.target,t=a.id,n=a.value;O((function(e){return Object(g["a"])(Object(g["a"])({},e),{},Object(E["a"])({},t,n))}))},Se=function(e){var a=e.target,t=a.id,n=a.value;C((function(e){return Object(g["a"])(Object(g["a"])({},e),{},Object(E["a"])({},t,n))}))},Ne=function(e){var a=e.target,t=a.id,n=a.checked;D((function(e){return Object(g["a"])(Object(g["a"])({},e),{},Object(E["a"])({},t,n))}))},Ce=function(){$("")},we=function(e){return $(e),!1},qe=function(){M({satuanBarang:L,qtyBarang:N,setStok:Z}),ue(!ie)},Be=function(){Z([]),C(Object(g["a"])({},F)),ue(!ie)},De=function(){O(Object(g["a"])({},U)),D(Object(g["a"])({},K)),C(Object(g["a"])({},F)),ue(!ie),$(""),c()},Ie=function(){u({formData:Ee,clear:De})};return l.a.createElement(k["a"],{visible:a,title:"Input Detail Barang",closable:!1,footer:null,width:700},l.a.createElement("div",{className:d.a.modal_body},l.a.createElement(v["a"],null,l.a.createElement("div",null,l.a.createElement(n["a"],{justify:"space-between"},l.a.createElement(S,{label:"sku",id:"sku",name:"SKU / Barcode",placeholder:"Isi Barcode",value:f,onChange:he}),l.a.createElement(S,{label:"brand",id:"brand",name:"Brand",placeholder:"Isi Nama Brand",value:_,onChange:he}))),l.a.createElement("div",null,l.a.createElement(n["a"],{justify:"space-between"},l.a.createElement(T,{onChange:Ne,onDisabled:ie}),l.a.createElement(S,{label:"nama_barang",id:"nama_barang",name:"Nama Barang",placeholder:"Isi Nama Barang",value:j,onChange:he}))),l.a.createElement("div",null,l.a.createElement(n["a"],{justify:"end"},le?l.a.createElement(S,{disabled:ie,label:"qty_box",id:"qty_box",name:"Minimum Quantity Box",placeholder:"0",value:String(pe).replace(/[^0-9-]/g,""),onChange:Se}):null,l.a.createElement("div",{className:d.a.box5},l.a.createElement("div",{className:d.a.group},l.a.createElement("label",{className:d.a.label,htmlFor:"type_barang"},"Tipe Barang"),l.a.createElement(Q["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/master/barang/typeBarang"),initial:"Possable",handleChange:ve}))))),l.a.createElement("div",null,l.a.createElement(n["a"],{justify:"space-between"},be?l.a.createElement(S,{disabled:ie,label:"qty_pcs",id:"qty_pcs",name:"Minimum Quantity Pcs",placeholder:"0",value:String(ge).replace(/[^0-9-]/g,""),onChange:Se}):null)),l.a.createElement("div",null,l.a.createElement(n["a"],{justify:"space-between"},me?l.a.createElement(S,{disabled:ie,label:"qty_unit",id:"qty_unit",name:"Minimum Quantity Unit",placeholder:"0",value:String(fe).replace(/[^0-9-]/g,""),onChange:Se}):null)),l.a.createElement("div",null,l.a.createElement(n["a"],{justify:"space-between"},se?l.a.createElement(S,{disabled:ie,label:"qty_karton",id:"qty_karton",name:"Minimum Quantity Karton",placeholder:"0",value:String(_e).replace(/[^0-9-]/g,""),onChange:Se}):null)),l.a.createElement("div",null,l.a.createElement(n["a"],{justify:"space-between"},de?l.a.createElement(S,{disabled:ie,label:"qty_pack",id:"qty_pack",name:"Minimum Quantity Pack",placeholder:"0",value:String(je).replace(/[^0-9-]/g,""),onChange:Se}):null)),le||se||de||be||me?l.a.createElement("div",{className:d.a.box10},l.a.createElement(r["a"],{onClick:ie?Be:qe,type:"primary"},ie&&"Reset Quantity",!ie&&"Confirm Quantity")):null,l.a.createElement("div",null,l.a.createElement(x["a"],{onRemove:Ce,beforeUpload:we},l.a.createElement("div",{className:d.a.group},l.a.createElement(r["a"],{id:"file",type:"primary",className:d.a.button,disabled:Boolean(G)},"Upload Foto Barang")))))),l.a.createElement(n["a"],{justify:"end"},s?l.a.createElement("p",{style:{color:"red"}},s):null,l.a.createElement(r["a"],{className:d.a.button,disabled:t,onClick:De,type:"primary",danger:!0},"Batal"),l.a.createElement(r["a"],{className:d.a.button,onClick:Ie,disabled:te||t,type:"primary"},"Tambah")))},z=L,R=t("io9h");function W(){var e=Object(o["useState"])([]),a=Object(i["a"])(e,2),t=a[0],n=a[1],r=Object(o["useState"])(200),c=Object(i["a"])(r,2),u=c[0],l=c[1],s=Object(o["useState"])(!1),d=Object(i["a"])(s,2),b=d[0],m=d[1],p=Object(o["useState"])(!1),g=Object(i["a"])(p,2),f=g[0],_=g[1],j=function(){var e=Object(w["a"])(C.a.mark((function e(a){var t,r,c;return C.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,fetch(a,{headers:{Authorization:String(B.a.get("token"))}});case 4:return t=e.sent,e.next=7,t.json();case 7:return r=e.sent,e.next=10,r;case 10:c=e.sent,n(c.data),l(c.status_code),m(!1),_(!1),e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](1),m(!1),_(!0);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(a){return e.apply(this,arguments)}}(),O=function(){var e=Object(w["a"])(C.a.mark((function e(a,t,r){var c,i;return C.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,R["a"].post(a,{data:t,headers:{"Content-Type":'multipart/form-data"',Authorization:String(B.a.get("token"))}});case 4:return c=e.sent,e.next=7,c.data;case 7:i=e.sent,m(!1),_(!1),l(i.status_code||200),n(i),r(),e.next=20;break;case 15:e.prev=15,e.t0=e["catch"](1),r(),m(!1),_(!0);case 20:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(a,t,n){return e.apply(this,arguments)}}();return[t,u,b,f,j,O]}var Y=W,Z=t("jC83");u["a"].config({top:100,duration:1,maxCount:1});var H=function(){var e=Object(o["useState"])(""),a=Object(i["a"])(e,2),t=a[0],s=a[1],b=Object(o["useState"])(!1),m=Object(i["a"])(b,2),p=m[0],g=m[1],f=Object(o["useState"])(!1),_=Object(i["a"])(f,2),j=_[0],O=_[1],k=Object(Z["a"])(),v=Object(i["a"])(k,3),x=v[0],E=v[1],h=v[2],S=Y(),N=Object(i["a"])(S,6),C=N[0],w=N[1],q=N[2],B=N[3],D=N[4],I=N[5];Object(o["useEffect"])((function(){var e=setTimeout((function(){D("".concat("https://api.posarmed.id","/admin/v1/master/barang/list"))}),0);return function(){return clearTimeout(e)}}),[E]);var T=Object(o["useCallback"])((function(){D("".concat("https://api.posarmed.id","/admin/v1/master/barang/list?filter=").concat(t))}),[D,t]),A=function(e){"enter"===e.key.toLowerCase()&&T()},J=function(){O(!j)},M=function(){return g(!p)},P=function(){g(!1),O(!1)},Q=function(e){var a=e.target.value;s(a)},U=function(e){var a=e.formData,t=e.clear;h("".concat("https://api.posarmed.id","/admin/v1/master/barang/create"),a,t)},F=function(e,a){var t=new FormData;t.append("include_ppn",a),I("".concat("https://api.posarmed.id","/admin/v1/master/barang/").concat(e,"/update"),t,V)},K=function(e){I("".concat("https://api.posarmed.id","/admin/v1/master/barang/").concat(e,"/delete"),JSON.stringify(null),P)},V=function(){200===w?u["a"].success("Success"):u["a"].error("Failed")};return l.a.createElement("div",null,l.a.createElement("p",{className:d.a.title},"Data Barang"),l.a.createElement("div",{className:d.a.row_box},l.a.createElement(c["a"],{className:d.a.input_title,id:"name",type:"text",placeholder:"Search Barang",onChange:Q,value:t,onKeyDown:A}),l.a.createElement(r["a"],{className:d.a.button_title,type:"primary",onClick:T},"Cari")),l.a.createElement(n["a"],{justify:"end"},l.a.createElement("p",{className:d.a.title_add,onClick:M},"+ Tambah")),l.a.createElement(y,{data:C,loading:Boolean(q),status:Number(w),error:Boolean(B),update:F,remove:K,handleVisible:M,handleUpdate:J}),p?l.a.createElement(z,{visible:p,onCancel:P,onCreate:U,onError:E,onLoadButton:Boolean(x)}):null)};a["default"]=H},qDqd:function(e,a,t){e.exports={title:"antd-pro-pages-master-barang-index-title",title_add:"antd-pro-pages-master-barang-index-title_add",row:"antd-pro-pages-master-barang-index-row",row_box:"antd-pro-pages-master-barang-index-row_box",modal_body:"antd-pro-pages-master-barang-index-modal_body",col:"antd-pro-pages-master-barang-index-col",box3:"antd-pro-pages-master-barang-index-box3",box5:"antd-pro-pages-master-barang-index-box5",box6:"antd-pro-pages-master-barang-index-box6",box10:"antd-pro-pages-master-barang-index-box10",group:"antd-pro-pages-master-barang-index-group",label:"antd-pro-pages-master-barang-index-label",input:"antd-pro-pages-master-barang-index-input",input_title:"antd-pro-pages-master-barang-index-input_title",button:"antd-pro-pages-master-barang-index-button",button_title:"antd-pro-pages-master-barang-index-button_title",area:"antd-pro-pages-master-barang-index-area",span:"antd-pro-pages-master-barang-index-span",p:"antd-pro-pages-master-barang-index-p",table:"antd-pro-pages-master-barang-index-table"}}}]);