(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(40)},34:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),o=t(16),r=t.n(o),c=(t(34),t(17)),s=t(18),i=t(25),u=t(19),m=t(26),d=t(43),p=t(47),b=t(48),h=t(45),E=t(4),T=t(46),v=T.a.Table,w=T.a.TableBody,g=T.a.TableCell,k=T.a.TableContainer,x=T.a.TableHead,y=T.a.TableHeader,f=T.a.TableRow,N=T.a.TableToolbar,C=T.a.TableToolbarAction,O=T.a.TableToolbarContent,D=T.a.TableToolbarSearch,M=[{id:"a",name:"Load Balancer 3",protocol:"HTTP",port:3e3,rule:"Round robin",attached_groups:"Kevins VM Groups",status:"Disabled"},{id:"b",name:"Load Balancer 1",protocol:"HTTP",port:443,rule:"Round robin",attached_groups:"Maureens VM Groups",status:"Starting"},{id:"c",name:"Load Balancer 2",protocol:"HTTP",port:80,rule:"DNS delegation",attached_groups:"Andrews VM Groups",status:"Active"}],L=[{key:"name",header:"Name"},{key:"protocol",header:"Protocol"},{key:"port",header:"Port"},{key:"rule",header:"Rule"},{key:"attached_groups",header:"Attached Groups"},{key:"status",header:"Status"}],P=function(){return l.a.createElement(T.a,{className:"my-data-table",rows:M,headers:L,render:function(e){var a=e.rows,t=e.headers,n=e.getHeaderProps,o=e.getRowProps,r=e.onInputChange;return l.a.createElement(k,null,l.a.createElement(N,null,l.a.createElement(D,{onChange:r,className:"data-table-search"}),l.a.createElement(O,null,l.a.createElement(C,{icon:E.h,iconDescription:"Download",onClick:null}),l.a.createElement(C,{icon:E.i,iconDescription:"Edit",onClick:null}),l.a.createElement(C,{icon:E.k,iconDescription:"Settings",onClick:null}),l.a.createElement(d.a,{onClick:null,small:!0,kind:"primary",className:"data-table-add-new"},"Add new"))),l.a.createElement(v,null,l.a.createElement(x,null,l.a.createElement(f,null,t.map(function(e){return l.a.createElement(y,n({header:e}),e.header)}))),l.a.createElement(w,null,a.map(function(e){return l.a.createElement(f,o({row:e}),e.cells.map(function(e){return l.a.createElement(g,{key:e.id},e.value)}))}))))}})},S=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App page-content"},l.a.createElement("div",{className:"bx--grid"},l.a.createElement("div",{className:"bx--row"},l.a.createElement("div",{className:"bx--col-xs-12 "},l.a.createElement("h1",null,"Some headline"),l.a.createElement("p",{className:"bx--type-gamma .bx--spacing-xl"},"Lead in subtitle"),l.a.createElement(d.a,{kind:"secondary",className:"some-class",onClick:null,onFocus:null},"Secondary button"),l.a.createElement(d.a,{className:"some-class",onClick:null,onFocus:null},"Primary button"))),l.a.createElement("div",{className:"bx--row"},l.a.createElement("div",{className:"bx--col-xs-6"},l.a.createElement(p.a,{id:"transactional-passive-modal",handleSubmit:null,className:"some-class",passiveModal:!1,buttonTriggerText:"Launch Modal",modalLabel:"Label",modalHeading:"DataTable with toolbar",selectorPrimaryFocus:".data-table-search .bx--search-input",shouldCloseAfterSubmit:!0,onBlur:null,onClick:null,onFocus:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseUp:null},l.a.createElement(P,null))),l.a.createElement("div",{className:"bx--col-xs-6"},l.a.createElement("div",{style:{minWidth:"20em"}},l.a.createElement(b.a,{className:"some-class",defaultText:"Dropdown label",value:"",selectedText:"",ariaLabel:"dropdown menu label",iconDescription:"",onChange:function(e){console.log(e)},onOpen:function(e){console.log(e)},onClose:function(e){console.log(e)}},l.a.createElement(h.a,{itemText:"Option 1",value:"option1"}),l.a.createElement(h.a,{itemText:"Option 2",value:"option2"}),l.a.createElement(h.a,{itemText:"Option 3",value:"option3"}),l.a.createElement(h.a,{itemText:"Option 4",value:"option4"}),l.a.createElement(h.a,{itemText:"Option 5",value:"option5"})))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.92278083.chunk.js.map