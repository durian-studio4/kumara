(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"/GQI":function(e,a,t){e.exports={auto_complete:"antd-pro-pages-sales-pos-home-pembeli-index-auto_complete"}},ZVSS:function(e,a,t){"use strict";t.r(a);t("14J3");var l=t("BMrR"),n=(t("+L6B"),t("2/Rp")),c=(t("sRBo"),t("kaz8")),r=(t("5NDa"),t("5rEg")),s=t("o0o1"),o=t.n(s),m=t("HaE+"),i=t("ODXe"),p=t("q1tI"),d=t.n(p),u=t("9kvl"),b=t("p46w"),h=t.n(b),E=t("bmP4"),v=t.n(E),g=(t("O3gP"),t("lrIw")),x=t("/GQI"),N=t.n(x),f=g["a"].Option,j=function(e){var a=e.value,t=e.onSelect,l=e.onChange,n=e.id;Object(p["useEffect"])((function(){var e=setTimeout((function(){j()}),0);return function(){return clearTimeout(e)}}),[]);var c=Object(p["useState"])([]),r=Object(i["a"])(c,2),s=r[0],u=r[1],b=Object(p["useState"])(!1),E=Object(i["a"])(b,2),v=E[0],x=E[1],j=function(){var e=Object(m["a"])(o.a.mark((function e(){var a,t,l;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,fetch("".concat("http://127.0.0.1:8000","/admin/v1/master/pembeli/list"),{headers:{Authorization:String(h.a.get("token"))}});case 4:return a=e.sent,e.next=7,a.json();case 7:return t=e.sent,e.next=10,t;case 10:l=e.sent,u(l.data),x(!1),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](1),x(!1);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();return d.a.createElement("div",{className:N.a.auto_complete},d.a.createElement(g["a"],{id:n,"data-testid":n,style:{width:"100%"},value:a,filterOption:function(e,a){return a.props.children.toLowerCase().includes(e.toLowerCase())},disabled:v,onSelect:t,onChange:l,placeholder:"Isi Pembeli"},s.map((function(e){return d.a.createElement(f,{key:e.id},e.name)}))))},O=j,k=(t("2qtc"),t("kLXV")),C=(t("jCWc"),t("kPKH")),S=t("rePB"),y=t("VTBJ"),w=t("CzAe"),T=t("ZS4f"),P=t("u1pk"),F=t("Slwk"),_=t("A3dL"),I=t("+f7l"),L=t("PI94"),B=t("LfEe"),J=t("c6cn"),A=t("MRut"),K={name:"",alamat:"",npwp:"",email:"",phone:"",kode:""},z=function(e){var a=e.visible,t=e.onCancel,c=e.onCreate,s=e.onLoadButton,o=e.onError,m=Object(p["useState"])(K),u=Object(i["a"])(m,2),b=u[0],h=b.name,E=b.kode,g=b.alamat,x=b.npwp,N=b.email,f=b.phone,j=u[1],O=Object(p["useState"])(!1),z=Object(i["a"])(O,2),D=z[0],R=z[1],G=Object(w["a"])(),V=Object(w["a"])(),W=Object(w["a"])(),q=Object(w["a"])(),H=Object(P["a"])(String(W.id)),M=Object(T["a"])("0"),Q=Object(i["a"])(M,2),X=Q[0],Z=Q[1],U=Object(T["a"])("1"),Y=Object(i["a"])(U,2),$=Y[0],ee=Y[1],ae=Object(w["a"])();Object(p["useEffect"])((function(){return""===h||""===E||""===g||""===N||""===f||0===G.id||0===V.id||0===W.id||0===q.id?R(!0):R(!1)}),[g,N,E,W.id,q.id,V.id,h,f,G.id]);var te=JSON.stringify({name:h,alamat:g,npwp:x,kode:E,email:N,phone:f,gender:X,id_kelurahan:q.id,id_suplier:ae.id,id_pembeli_grup:$}),le=function(e){var a=e.target,t=a.id,l=a.value;j((function(e){return Object(y["a"])(Object(y["a"])({},e),{},Object(S["a"])({},t,l))}))},ne=function(){j(Object(y["a"])({},K)),t()},ce=function(){c({json:te,clear:ne})};return d.a.createElement(k["a"],{visible:a,onCancel:ne,title:"Tambah Daftar Pembeli",footer:null,width:700},d.a.createElement("div",{className:v.a.modal_body},d.a.createElement(C["a"],null,d.a.createElement(l["a"],null,d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"name"},"Nama"),d.a.createElement(r["a"],{className:v.a.input,type:"text",id:"name",placeholder:"Isi Nama",value:h,onChange:le}))),d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"alamat"},"Alamat"),d.a.createElement(r["a"],{className:v.a.input,type:"text",id:"alamat",placeholder:"Isi Alamat",value:g,onChange:le}))),d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"npwp"},"NPWP (Optional)"),d.a.createElement(r["a"],{className:v.a.input,type:"text",id:"npwp",placeholder:"Isi NPWP",value:x,onChange:le})))),d.a.createElement(l["a"],null,d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label},"Jenis Kelamin"),d.a.createElement(F["a"],{select_id:"gender",initial:"Laki Laki",handleChange:Z}))),d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"email"},"Email"),d.a.createElement(r["a"],{className:v.a.input,type:"text",id:"email",placeholder:"Isi Email",value:N,onChange:le}))),d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"phone"},"No. Telpon"),d.a.createElement(r["a"],{className:v.a.input,type:"text",id:"phone",placeholder:"Isi No Telepon",value:String(f).replace(/[^-0-9]/g,""),onChange:le})))),d.a.createElement(l["a"],null,d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"group"},"Group"),d.a.createElement(_["a"],{initial:"Tender",handleChange:ee}))),d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"suplier"},"Suplier (Optional)"),d.a.createElement(A["a"],{id:"suplier",value:ae.text,onSelect:ae.selectText,onChange:ae.changeText}))),d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"provinsi"},"Provinsi"),d.a.createElement(I["a"],{id:"provinsi",value:G.text,onChange:G.changeText,onSelect:G.selectText})))),d.a.createElement(l["a"],null,d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"kota"},"Kota"),d.a.createElement(L["a"],{id:"kota",value:V.text,onChange:V.changeText,onSelect:V.selectText,onClear:V.clearText,filter:G.id}))),d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"kecamatan"},"Kecamatan"),d.a.createElement(B["a"],{id:"kecamatan",value:W.text,onChange:W.changeText,onSelect:W.selectText,onClear:W.clearText,filter:V.id}))),d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"kelurahan"},"Kelurahan"),d.a.createElement(J["a"],{id:"kelurahan",value:q.text,onChange:q.changeText,onSelect:q.selectText,onClear:q.clearText,filter:W.id})))),d.a.createElement(l["a"],null,d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"kode"},"Kode Pos"),d.a.createElement(r["a"],{className:v.a.input,type:"text",id:"kode",disabled:!0,value:H.kode||0}))),d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"kode"},"Code"),d.a.createElement(r["a"],{className:v.a.input,type:"text",id:"kode",placeholder:"Isi Code Pelanggan",value:E,onChange:le})))))),d.a.createElement(l["a"],{justify:"end"},o?d.a.createElement("p",{style:{color:"red"}},o):null,d.a.createElement(n["a"],{disabled:D||s,onClick:ce,type:"primary"},"Simpan")))},D=z,R=t("jC83"),G=function(){var e=Object(p["useState"])(""),a=Object(i["a"])(e,2),t=a[0],s=a[1],b=Object(p["useState"])(!1),E=Object(i["a"])(b,2),g=E[0],x=E[1],N=Object(R["a"])(),f=Object(i["a"])(N,3),j=f[0],k=f[1],C=f[2],S=Object(p["useState"])(!1),y=Object(i["a"])(S,2),T=y[0],P=y[1],F=Object(p["useState"])(!1),_=Object(i["a"])(F,2),I=_[0],L=_[1],B=Object(p["useState"])(!1),J=Object(i["a"])(B,2),A=J[0],K=J[1],z=Object(w["a"])();Object(p["useEffect"])((function(){return t&&z.id?L(!1):L(!0)}),[t,z.id]);var G=function(){return x(!g)},V=function(e){return K(e.target.checked)},W=function(e){var a=e.target.value;s(a)},q=function(e){var a=e.json,t=e.clear;C("".concat("http://127.0.0.1:8000","/admin/v1/master/pembeli/create"),a,t)},H=function(){var e=Object(m["a"])(o.a.mark((function e(){var a,l,n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return P(!0),e.prev=1,e.next=4,fetch("".concat("http://127.0.0.1:8000","/admin/v1/sales/pos"),{method:"post",body:JSON.stringify({id_pembeli:z.id,is_tax:Number(A),nama_sales:t}),headers:{"Content-Type":"application/json",Authorization:h.a.get("token")}});case 4:return a=e.sent,e.next=7,a.json();case 7:return l=e.sent,e.next=10,l.data;case 10:return n=e.sent,P(!1),u["d"].push("/sales/pos/".concat(n.id)),e.abrupt("return",n);case 16:e.prev=16,e.t0=e["catch"](1),P(!1);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(){return e.apply(this,arguments)}}();return d.a.createElement("div",null,d.a.createElement("p",{className:v.a.title},"Point of Sales"),d.a.createElement(l["a"],null,d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"pembeli"},"Nama Pembeli"),d.a.createElement(O,{id:"pembeli",value:z.text,onChange:z.changeText,onSelect:z.selectText}),d.a.createElement("p",{style:{marginTop:"0.5em"}},"Nama Pelanggan belum terdaftar?",d.a.createElement("span",{className:v.a.span,onClick:G},"Daftarkan")))),d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group},d.a.createElement("label",{className:v.a.label,htmlFor:"nama_sales"},"Nama Sales"),d.a.createElement(r["a"],{className:v.a.input,type:"text",id:"nama_sales",placeholder:"Isi Nama Sales",value:t||"",onChange:W}),d.a.createElement(c["a"],{style:{marginTop:"0.5em"},checked:A,onChange:V},"Faktur Pajak"))),d.a.createElement("div",{className:v.a.box3},d.a.createElement("div",{className:v.a.group,style:{marginTop:"2em"}},d.a.createElement(n["a"],{type:"primary",onClick:H,disabled:I||T},"Lanjutkan")))),d.a.createElement(D,{visible:g,onCreate:q,onCancel:G,onLoadButton:Boolean(j),onError:Boolean(k)}))};a["default"]=G},bmP4:function(e,a,t){e.exports={title:"antd-pro-pages-sales-pos-home-index-title",row:"antd-pro-pages-sales-pos-home-index-row",modal_body:"antd-pro-pages-sales-pos-home-index-modal_body",col:"antd-pro-pages-sales-pos-home-index-col",box3:"antd-pro-pages-sales-pos-home-index-box3",box6:"antd-pro-pages-sales-pos-home-index-box6",box10:"antd-pro-pages-sales-pos-home-index-box10",group:"antd-pro-pages-sales-pos-home-index-group",label:"antd-pro-pages-sales-pos-home-index-label",input:"antd-pro-pages-sales-pos-home-index-input",button:"antd-pro-pages-sales-pos-home-index-button",span:"antd-pro-pages-sales-pos-home-index-span",area:"antd-pro-pages-sales-pos-home-index-area"}}}]);