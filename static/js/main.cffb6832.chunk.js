(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),l=a.n(r),m=(a(18),a(5)),o=a.n(m),s=a(8),i=a(3),u=(a(22),a(4)),E=(a(24),function(e){var t=e.dogs,a=[];return t.forEach(function(e){a.push(c.a.createElement("div",{key:e.chipNumber},c.a.createElement("div",{className:"card-container"},c.a.createElement("div",{className:"image-container"},c.a.createElement("img",{src:e.img,alt:""})),c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"dog-name"},c.a.createElement("h3",null,e.name)),c.a.createElement("div",{className:"dog-info"},c.a.createElement("p",null,"Age : ",e.age),c.a.createElement("p",null,"Sex : ",e.sex),c.a.createElement("p",null,"Breed : ",e.breed),c.a.createElement("p",null,"Chipnumber : ",e.chipNumber),c.a.createElement("p",null,"Dog is ",e.present?"present":"not present"))),c.a.createElement("div",{className:"btn",key:e.chipNumber},c.a.createElement(u.b,{to:"/register/".concat(e.chipNumber)},c.a.createElement("button",null,c.a.createElement("p",{className:"btn-text"},"See owner information")))))))}),c.a.createElement("div",null,c.a.createElement("h1",{className:"info-title"},"Registered dogs at daycare"),c.a.createElement("div",{className:"content"},a))}),d=a(0),p=(a(26),function(e){var t=e.dogs,a=Object(d.g)();console.log(a.chipNumber);var n=null;return t.forEach(function(e){e.chipNumber===a.chipNumber&&(n=e)}),c.a.createElement("div",{className:"owner-content"},c.a.createElement("h1",null,"Owner information for dog ",n.name),c.a.createElement("h2",null,"Info"),c.a.createElement("div",{className:"owner-info"},c.a.createElement("p",{className:"owner-name"},"Name : ",n.owner.name," "),c.a.createElement("p",{className:"owner-lastname"},"Lastname : ",n.owner.lastName),c.a.createElement("p",{className:"owner-contact"},"Contact : ",n.owner.phoneNumber),c.a.createElement("div",{className:"owner-btn"},c.a.createElement(u.b,{to:"/dogs"},c.a.createElement("button",null,c.a.createElement("p",{className:"owner-btn-text"},"Navigate back to daycare list"))))))}),f=(a(28),function(){return c.a.createElement("div",null,c.a.createElement("section",null,c.a.createElement("h1",{className:"primary"},"Welcome to the dog daycare"),c.a.createElement("h2",{className:"Secondly"},"Made by Lagos77"),c.a.createElement(u.b,{to:"/dogs"},c.a.createElement("button",{className:"enterButton"},"Enter"))))});var h=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){function e(){return(e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch("https://api.jsonbin.io/b/624ddc6f5912290c00f5af18").then(function(e){return e.json()}).then(r);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),c.a.createElement("div",{className:"App"},c.a.createElement("main",null,c.a.createElement(u.a,null,c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/",element:c.a.createElement(f,null)}),c.a.createElement(d.a,{path:"/welcome",element:c.a.createElement(f,null)}),c.a.createElement(d.a,{path:"/register/:chipNumber",element:c.a.createElement(p,{dogs:a})}),c.a.createElement(d.a,{path:"/dogs",element:c.a.createElement(E,{dogs:a})})))))},b=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,31)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null))),b()},9:function(e,t,a){e.exports=a(30)}},[[9,3,2]]]);
//# sourceMappingURL=main.cffb6832.chunk.js.map