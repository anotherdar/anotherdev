(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{AgBX:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDM2IDM2Ij4NCiAgPGcgaWQ9InNjcm9sbF9kb3duX3NtYWxsIiBkYXRhLW5hbWU9InNjcm9sbCBkb3duIHNtYWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcwIC02NTkpIj4NCiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzEiIGRhdGEtbmFtZT0iRWxsaXBzZSAxIiBjeD0iMTgiIGN5PSIxOCIgcj0iMTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3MCA2NTkpIiBmaWxsPSIjZmZmIi8+DQogICAgPHBhdGggaWQ9IlBvbHlnb25fMSIgZGF0YS1uYW1lPSJQb2x5Z29uIDEiIGQ9Ik0xMywwbDEuMzY1LDEzLjlMMjYsMjIsMTMsMTYuMjA3LDAsMjJsMTEuNjM1LTguMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwMSA2OTEpIHJvdGF0ZSgxODApIiBmaWxsPSIjMjQyYzRjIi8+DQogIDwvZz4NCjwvc3ZnPg0K"},Giip:function(e,t,a){},QeBL:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),c=(a("Giip"),a("AgBX")),i=a.n(c),m=function(e){var t=e.title,a=e.id;return n.a.createElement("li",{className:"main-color-txt capitalize p-2 font-normal cursor-pointer cover-hover-transition"},n.a.createElement("a",{href:"#"+(a||t)},t))},r=function(e){var t=e.action;return n.a.createElement("div",{className:"cover-hamburger-menu w-10 h-12 pr-2",onClick:t},n.a.createElement("div",{className:"w-full h-1 m-2 main-color-bg rounded-full"}),n.a.createElement("div",{className:"w-full h-1 m-2 main-color-bg rounded-full"}),n.a.createElement("div",{className:"w-full h-1 m-2 main-color-bg rounded-full"}))},s=function(){var e=Object(l.useState)(null),t=e[0],a=e[1];Object(l.useEffect)((function(){"undefined"!=typeof window&&a(window.innerWidth)}),[]),"undefined"!=typeof window&&window.addEventListener("resize",(function(){a(window.innerWidth)}));return n.a.createElement("header",{id:"home",className:"h-screen w-full flex flex-col justify-between"},n.a.createElement("nav",{className:"h-64 w-full"},n.a.createElement("div",{className:"flex justify-between items-center p-2"},n.a.createElement("div",{className:"cover-logo"}),null!=t&&t<=768&&n.a.createElement(r,{action:function(){return alert("click")}}),null!=t&&t>786&&n.a.createElement("div",{className:"cover-menu"},n.a.createElement("ol",{className:"list-none flex"},n.a.createElement(m,{title:"home"}),n.a.createElement(m,{title:"work"}),n.a.createElement(m,{title:"about me",id:"about"}),n.a.createElement(m,{title:"contact me",id:"contact"}))))),n.a.createElement("div",{className:"cover-message w-full flex flex-col items-center"},n.a.createElement("h1",{className:"cover-message-text-color text-4xl xl:text-5xl"},n.a.createElement("span",{className:"font-light"},"Hey!, I'm")," ",n.a.createElement("span",{className:"font-medium"},"Daren")),n.a.createElement("h2",{className:"cover-message-text-color text-2xl xl:text-3xl font-medium"},"A web developer")),n.a.createElement("div",{className:"h-64 w-full flex items-end justify-center pb-12"},n.a.createElement("a",{href:"#work"},n.a.createElement("img",{className:"h-12 w-12",src:i.a,alt:"down"}))))},o=function(e){var t=e.title;return n.a.createElement("div",{className:"title"},n.a.createElement("h1",{className:"text-white capitalize font-normal cursor-pointer xl:text-xl"},t),n.a.createElement("div",{className:"h-1 bg-white w-20 rounded-full"}))},d=function(e){var t=e.title,a=e.img,l=e.content,c=e.link,i=e.hash_tag;return n.a.createElement("div",{className:"card-body main-color-border p-2 bg-white md:w-1/2 xl:w-1/3"},n.a.createElement("img",{src:a,alt:"card-image",className:"w-full bg-cover rounded-sm clip-up"}),n.a.createElement("div",{className:"card-content h-40 p-4"},n.a.createElement("div",{className:"card-content-txt h-24 "},n.a.createElement("h1",{className:"card-title text-xl font-medium main-color-txt"},t),n.a.createElement("ol",{className:"flex"},i.map((function(e){return n.a.createElement("li",{className:"mr-2 text-gray-600"},"#",e)}))),n.a.createElement("p",{className:"card-content-body text-gray-700"},l)),n.a.createElement("div",{className:"w-full flex justify-end"},n.a.createElement("a",{href:c,target:"_blank",className:"p-2 main-color-bg text-white rounded-md uppercase text-sm"},"live preview"))))},u=[{title:"App store",content:"A simple web app, to manage your digital store.",img:"https://images3.alphacoders.com/104/thumb-350-1046496.png",link:"https://www.google.com",tags:["React","GraphQL","MongoDB"]},{title:"App store",content:"A simple web app, to manage your digital store.",img:"https://images3.alphacoders.com/104/thumb-350-1046496.png",link:"https://www.google.com",tags:["React","GraphQL","MongoDB"]},{title:"App store",content:"A simple web app, to manage your digital store.",img:"https://images3.alphacoders.com/104/thumb-350-1046496.png",link:"https://www.google.com",tags:["React","GraphQL","MongoDB"]}],p=function(){return n.a.createElement("section",{id:"work",className:"xl:h-screen relative flex justify-center items-center p-4"},n.a.createElement("div",{className:"h-56 xl:h-64 w-full clip-up cover-color absolute top-0",style:{zIndex:-1}}),n.a.createElement("div",{className:" w-11/12"},n.a.createElement(o,{title:"Work"}),n.a.createElement("div",{className:"w-full flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center xl:mt-10 mt-5"},u.map((function(e){var t=e.content,a=e.img,l=e.link,c=e.title,i=e.tags;return n.a.createElement(d,{content:t,title:c,img:a,link:l,hash_tag:i})})))))},g=function(){return n.a.createElement("div",{className:"h-64 w-64 rounded-full border-2 main-color-border bg-white"})},f=function(){return n.a.createElement("section",{id:"about",className:"h-screen relative flex justify-center items-center"},n.a.createElement("div",{className:"h-56 xl:h-64 w-full clip-up cover-color p-4 absolute top-0",style:{zIndex:-1}}),n.a.createElement("div",{className:"section-panel w-11/12 section-panel sm:flex sm:flex-col sm:items-center"},n.a.createElement("div",{className:"flex flex-col items-center justify-center md:flex-row md:w-1/2"},n.a.createElement(g,null)),n.a.createElement("div",{className:"container pl-0 pr-0 pb-10 pt-10 md:w-1/2"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",{className:"text-2xl main-color-txt font-medium sm:mt-5"},"Daren A. Rosario"),n.a.createElement("h3",{className:"text-sm fot-bold capitalize leading-tight text-gray-800 mb-5"},"web developer")),n.a.createElement("div",{className:"text-center md:text-left"},n.a.createElement("p",{className:"text-lg font-normal leading-tight text-gray-800 mb-5"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam sequi nihil deserunt quod cum adipisci. Nobis ea hic reprehenderit, rerum ipsa, omnis odio ad, exercitationem vitae optio qui a!"),n.a.createElement("p",{className:"text-lg font-normal leading-tight text-gray-800"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam sequi nihil deserunt quod cum adipisci. Nobis ea hic reprehenderit, rerum ipsa, omnis odio ad, exercitationem vitae optio qui a!")))))};t.default=function(){return n.a.createElement("div",{className:"container h-screen sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full"},n.a.createElement(s,null),n.a.createElement(p,null),n.a.createElement(f,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-2883a1d29f5c6764d026.js.map