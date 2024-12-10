(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4186],{868:function(s,a,e){Promise.resolve().then(e.bind(e,7887)),Promise.resolve().then(e.bind(e,8382)),Promise.resolve().then(e.bind(e,1815)),Promise.resolve().then(e.bind(e,9324)),Promise.resolve().then(e.bind(e,522)),Promise.resolve().then(e.t.bind(e,231,23))},8382:function(s,a,e){"use strict";e.r(a);var t=e(7437);e(6463);var i=e(2265);a.default=()=>{let[s,a]=(0,i.useState)(""),[e,l]=(0,i.useState)(""),[n,o]=(0,i.useState)([]),[r,d]=(0,i.useState)([]),[c,h]=(0,i.useState)([]),f=async s=>{if(!s){h([]);return}try{var a;let e=await fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(encodeURIComponent(s),"&key=").concat("e52c53280eef498eb1c0967cec4416bd","&limit=5")),t=await e.json(),i=(null===(a=t.results)||void 0===a?void 0:a.map(s=>s.formatted))||[];h(i)}catch(s){console.error("Error fetching place suggestions:",s)}};(0,i.useEffect)(()=>{let a=setTimeout(()=>{s&&f(s)},300);return()=>clearTimeout(a)},[s]);let m=async()=>{h([]);try{if(console.log("Entered Place:",s),!s){l("Please enter a valid place.");return}let a=await fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(encodeURIComponent(s),"&key=e52c53280eef498eb1c0967cec4416bd")),e=await a.json();if(e.results&&e.results.length>0){let{lat:s,lng:a}=e.results[0].geometry,t=encodeURIComponent(e.results[0].formatted);window.location.href="/tour-grid?place=".concat(t,"&lat=").concat(s,"&lon=").concat(a)}else l("No coordinates found for the entered city")}catch(s){console.error("Error fetching coordinates:",s)}};return(0,t.jsxs)("div",{className:"container container-1400",children:[(0,t.jsxs)("div",{className:"search-filter-inner","data-aos":"zoom-out-down","data-aos-duration":1500,"data-aos-offset":50,children:[(0,t.jsxs)("div",{className:"filter-item clearfix",children:[(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)("i",{className:"fal fa-map-marker-alt"})}),(0,t.jsx)("input",{type:"text",placeholder:"Enter City",value:s,onChange:s=>{a(s.target.value)}}),c.length>0&&(0,t.jsx)("ul",{style:{position:"absolute",backgroundColor:"white",border:"1px solid #ddd",listStyle:"none",padding:"8px",margin:0,zIndex:10,maxHeight:"150px",overflowY:"auto"},children:c.map((s,e)=>(0,t.jsx)("li",{style:{padding:"8px",cursor:"pointer"},onClick:()=>{a(s),h([])},children:s},e))})]}),(0,t.jsxs)("div",{className:"filter-item clearfix",children:[(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)("i",{className:"fal fa-flag"})}),(0,t.jsx)("span",{className:"title",children:"All Activity"}),(0,t.jsxs)("select",{name:"activity",id:"activity",children:[(0,t.jsx)("option",{value:"value1",children:"Choose Activity"}),(0,t.jsx)("option",{value:"value2",children:"Daily"}),(0,t.jsx)("option",{value:"value2",children:"Monthly"})]})]}),(0,t.jsxs)("div",{className:"filter-item clearfix",children:[(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)("i",{className:"fal fa-calendar-alt"})}),(0,t.jsx)("span",{className:"title",children:"Departure Date"}),(0,t.jsxs)("select",{name:"date",id:"date",children:[(0,t.jsx)("option",{value:"value1",children:"Date from"}),(0,t.jsx)("option",{value:"value2",children:"10"}),(0,t.jsx)("option",{value:"value2",children:"20"})]})]}),(0,t.jsxs)("div",{className:"filter-item clearfix",children:[(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)("i",{className:"fal fa-users"})}),(0,t.jsx)("span",{className:"title",children:"Guests"}),(0,t.jsxs)("select",{name:"cuests",id:"cuests",children:[(0,t.jsx)("option",{value:"value1",children:"0"}),(0,t.jsx)("option",{value:"value2",children:"1"}),(0,t.jsx)("option",{value:"value2",children:"2"})]})]}),(0,t.jsx)("div",{className:"search-button",children:(0,t.jsxs)("button",{className:"theme-btn",onClick:m,children:[(0,t.jsx)("span",{"data-hover":"Search",children:"Search"}),(0,t.jsx)("i",{className:"far fa-search"})]})}),r.length>0&&(0,t.jsxs)("div",{style:{marginTop:"20px"},children:[(0,t.jsx)("h2",{children:"Top Routes"}),(0,t.jsx)("ul",{children:r.map((s,a)=>(0,t.jsxs)("li",{children:[s.name," - ",s.category," - Rating: ",s.rating]},a))})]}),n.length>0&&(0,t.jsxs)("div",{style:{marginTop:"20px"},children:[(0,t.jsx)("h2",{children:"Recommendations"}),(0,t.jsx)("ul",{children:n.map((s,a)=>(0,t.jsxs)("li",{children:[s.label," - Score: ",s.score]},a))})]})]}),e]})}},1815:function(s,a,e){"use strict";var t=e(7437),i=e(7808),l=e(7138),n=e(3153);a.default=()=>(0,t.jsxs)(n.Z,{...i.b.destination,className:"destination-active",children:[(0,t.jsxs)("div",{className:"destination-item style-two","data-aos":"fade-up","data-aos-duration":1500,"data-aos-offset":50,children:[(0,t.jsx)("div",{className:"image",children:(0,t.jsx)("img",{src:"assets/images/destinations/destination-five1.jpg",alt:"Destination"})}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("h6",{children:(0,t.jsx)(l.default,{href:"destination-details",children:"Switzerland's"})}),(0,t.jsx)("span",{className:"tours",children:"258 tours"})]})]}),(0,t.jsxs)("div",{className:"destination-item style-two","data-aos":"fade-up","data-aos-delay":50,"data-aos-duration":1500,"data-aos-offset":50,children:[(0,t.jsx)("div",{className:"image",children:(0,t.jsx)("img",{src:"assets/images/destinations/destination-five2.jpg",alt:"Destination"})}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("h6",{children:(0,t.jsx)(l.default,{href:"destination-details",children:"Poland"})}),(0,t.jsx)("span",{className:"tours",children:"258 tours"})]})]}),(0,t.jsxs)("div",{className:"destination-item style-two","data-aos":"fade-up","data-aos-delay":100,"data-aos-duration":1500,"data-aos-offset":50,children:[(0,t.jsx)("div",{className:"image",children:(0,t.jsx)("img",{src:"assets/images/destinations/destination-five3.jpg",alt:"Destination"})}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("h6",{children:(0,t.jsx)(l.default,{href:"destination-details",children:"Indonesia"})}),(0,t.jsx)("span",{className:"tours",children:"258 tours"})]})]}),(0,t.jsxs)("div",{className:"destination-item style-two","data-aos":"fade-up","data-aos-delay":100,"data-aos-duration":1500,"data-aos-offset":50,children:[(0,t.jsx)("div",{className:"image",children:(0,t.jsx)("img",{src:"assets/images/destinations/destination-five4.jpg",alt:"Destination"})}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("h6",{children:(0,t.jsx)(l.default,{href:"destination-details",children:"Thailand"})}),(0,t.jsx)("span",{className:"tours",children:"258 tours"})]})]}),(0,t.jsxs)("div",{className:"destination-item style-two","data-aos":"fade-up","data-aos-delay":150,"data-aos-duration":1500,"data-aos-offset":50,children:[(0,t.jsx)("div",{className:"image",children:(0,t.jsx)("img",{src:"assets/images/destinations/destination-five5.jpg",alt:"Destination"})}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("h6",{children:(0,t.jsx)(l.default,{href:"destination-details",children:"Rome, Italy"})}),(0,t.jsx)("span",{className:"tours",children:"258 tours"})]})]}),(0,t.jsxs)("div",{className:"destination-item style-two","data-aos":"fade-up","data-aos-delay":200,"data-aos-duration":1500,"data-aos-offset":50,children:[(0,t.jsx)("div",{className:"image",children:(0,t.jsx)("img",{src:"assets/images/destinations/destination-five2.jpg",alt:"Destination"})}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("h6",{children:(0,t.jsx)(l.default,{href:"destination-details",children:"Indonesia"})}),(0,t.jsx)("span",{className:"tours",children:"258 tours"})]})]})]})},9324:function(s,a,e){"use strict";var t=e(7437),i=e(7808),l=e(7138),n=e(3153);a.default=()=>(0,t.jsxs)(n.Z,{...i.b.hotDeals,className:"hot-deals-active",children:[(0,t.jsxs)("div",{className:"destination-item style-four no-border","data-aos":"flip-left","data-aos-duration":1500,"data-aos-offset":50,children:[(0,t.jsxs)("div",{className:"image",children:[(0,t.jsx)("span",{className:"badge",children:"10% Off"}),(0,t.jsx)("a",{href:"#",className:"heart",children:(0,t.jsx)("i",{className:"fas fa-heart"})}),(0,t.jsx)("img",{src:"assets/images/destinations/hot-deal1.jpg",alt:"Hot Deal"})]}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("span",{className:"location",children:[(0,t.jsx)("i",{className:"fal fa-map-marker-alt"})," City of Venice, Italy"]}),(0,t.jsx)("h5",{children:(0,t.jsx)(l.default,{href:"destination-details",children:"Venice Grand Canal, Metropolitan Summer in Venice"})})]}),(0,t.jsxs)("div",{className:"destination-footer",children:[(0,t.jsxs)("span",{className:"price",children:[(0,t.jsx)("span",{children:"$58.00"}),"/person"]}),(0,t.jsxs)("div",{className:"ratting",children:[(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star-half-alt"})]})]}),(0,t.jsxs)(l.default,{href:"destination-details",className:"theme-btn style-three",children:[(0,t.jsx)("span",{"data-hover":"Explore",children:"Explore"}),(0,t.jsx)("i",{className:"fal fa-arrow-right"})]})]}),(0,t.jsxs)("div",{className:"destination-item style-four no-border","data-aos":"flip-left","data-aos-duration":1500,"data-aos-offset":50,children:[(0,t.jsxs)("div",{className:"image",children:[(0,t.jsx)("span",{className:"badge",children:"10% Off"}),(0,t.jsx)("a",{href:"#",className:"heart",children:(0,t.jsx)("i",{className:"fas fa-heart"})}),(0,t.jsx)("img",{src:"assets/images/destinations/hot-deal2.jpg",alt:"Hot Deal"})]}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("span",{className:"location",children:[(0,t.jsx)("i",{className:"fal fa-map-marker-alt"})," Kyoto, Japan"]}),(0,t.jsx)("h5",{children:(0,t.jsx)(l.default,{href:"destination-details",children:"Japan, Kyoto, travel, and people in Kyoto, Japan by Sorasak"})})]}),(0,t.jsxs)("div",{className:"destination-footer",children:[(0,t.jsxs)("span",{className:"price",children:[(0,t.jsx)("span",{children:"$58.00"}),"/person"]}),(0,t.jsxs)("div",{className:"ratting",children:[(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star-half-alt"})]})]}),(0,t.jsxs)(l.default,{href:"destination-details",className:"theme-btn style-three",children:[(0,t.jsx)("span",{"data-hover":"Explore",children:"Explore"}),(0,t.jsx)("i",{className:"fal fa-arrow-right"})]})]}),(0,t.jsxs)("div",{className:"destination-item style-four no-border","data-aos":"flip-left","data-aos-duration":1500,"data-aos-offset":50,children:[(0,t.jsxs)("div",{className:"image",children:[(0,t.jsx)("span",{className:"badge",children:"10% Off"}),(0,t.jsx)("a",{href:"#",className:"heart",children:(0,t.jsx)("i",{className:"fas fa-heart"})}),(0,t.jsx)("img",{src:"assets/images/destinations/hot-deal3.jpg",alt:"Hot Deal"})]}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("span",{className:"location",children:[(0,t.jsx)("i",{className:"fal fa-map-marker-alt"})," Tamnougalt, Morocco"]}),(0,t.jsx)("h5",{children:(0,t.jsx)(l.default,{href:"destination-details",children:"Camels on desert under blue sky Morocco, Sahara."})})]}),(0,t.jsxs)("div",{className:"destination-footer",children:[(0,t.jsxs)("span",{className:"price",children:[(0,t.jsx)("span",{children:"$58.00"}),"/person"]}),(0,t.jsxs)("div",{className:"ratting",children:[(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star-half-alt"})]})]}),(0,t.jsxs)(l.default,{href:"destination-details",className:"theme-btn style-three",children:[(0,t.jsx)("span",{"data-hover":"Explore",children:"Explore"}),(0,t.jsx)("i",{className:"fal fa-arrow-right"})]})]}),(0,t.jsxs)("div",{className:"destination-item style-four no-border","data-aos":"flip-left","data-aos-duration":1500,"data-aos-offset":50,children:[(0,t.jsxs)("div",{className:"image",children:[(0,t.jsx)("span",{className:"badge",children:"10% Off"}),(0,t.jsx)("a",{href:"#",className:"heart",children:(0,t.jsx)("i",{className:"fas fa-heart"})}),(0,t.jsx)("img",{src:"assets/images/destinations/hot-deal1.jpg",alt:"Hot Deal"})]}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("span",{className:"location",children:[(0,t.jsx)("i",{className:"fal fa-map-marker-alt"})," City of Venice, Italy"]}),(0,t.jsx)("h5",{children:(0,t.jsx)(l.default,{href:"destination-details",children:"Venice Grand Canal, Metropolitan Summer in Venice"})})]}),(0,t.jsxs)("div",{className:"destination-footer",children:[(0,t.jsxs)("span",{className:"price",children:[(0,t.jsx)("span",{children:"$58.00"}),"/person"]}),(0,t.jsxs)("div",{className:"ratting",children:[(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star-half-alt"})]})]}),(0,t.jsxs)(l.default,{href:"destination-details",className:"theme-btn style-three",children:[(0,t.jsx)("span",{"data-hover":"Explore",children:"Explore"}),(0,t.jsx)("i",{className:"fal fa-arrow-right"})]})]}),(0,t.jsxs)("div",{className:"destination-item style-four no-border","data-aos":"flip-left","data-aos-duration":1500,"data-aos-offset":50,children:[(0,t.jsxs)("div",{className:"image",children:[(0,t.jsx)("span",{className:"badge",children:"10% Off"}),(0,t.jsx)("a",{href:"#",className:"heart",children:(0,t.jsx)("i",{className:"fas fa-heart"})}),(0,t.jsx)("img",{src:"assets/images/destinations/hot-deal2.jpg",alt:"Hot Deal"})]}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("span",{className:"location",children:[(0,t.jsx)("i",{className:"fal fa-map-marker-alt"})," Kyoto, Japan"]}),(0,t.jsx)("h5",{children:(0,t.jsx)(l.default,{href:"destination-details",children:"Japan, Kyoto, travel, and people in Kyoto, Japan by Sorasak"})})]}),(0,t.jsxs)("div",{className:"destination-footer",children:[(0,t.jsxs)("span",{className:"price",children:[(0,t.jsx)("span",{children:"$58.00"}),"/person"]}),(0,t.jsxs)("div",{className:"ratting",children:[(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star-half-alt"})]})]}),(0,t.jsxs)(l.default,{href:"destination-details",className:"theme-btn style-three",children:[(0,t.jsx)("span",{"data-hover":"Explore",children:"Explore"}),(0,t.jsx)("i",{className:"fal fa-arrow-right"})]})]}),(0,t.jsxs)("div",{className:"destination-item style-four no-border","data-aos":"flip-left","data-aos-duration":1500,"data-aos-offset":50,children:[(0,t.jsxs)("div",{className:"image",children:[(0,t.jsx)("span",{className:"badge",children:"10% Off"}),(0,t.jsx)("a",{href:"#",className:"heart",children:(0,t.jsx)("i",{className:"fas fa-heart"})}),(0,t.jsx)("img",{src:"assets/images/destinations/hot-deal3.jpg",alt:"Hot Deal"})]}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("span",{className:"location",children:[(0,t.jsx)("i",{className:"fal fa-map-marker-alt"})," Tamnougalt, Morocco"]}),(0,t.jsx)("h5",{children:(0,t.jsx)(l.default,{href:"destination-details",children:"Camels on desert under blue sky Morocco, Sahara."})})]}),(0,t.jsxs)("div",{className:"destination-footer",children:[(0,t.jsxs)("span",{className:"price",children:[(0,t.jsx)("span",{children:"$58.00"}),"/person"]}),(0,t.jsxs)("div",{className:"ratting",children:[(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star-half-alt"})]})]}),(0,t.jsxs)(l.default,{href:"destination-details",className:"theme-btn style-three",children:[(0,t.jsx)("span",{"data-hover":"Explore",children:"Explore"}),(0,t.jsx)("i",{className:"fal fa-arrow-right"})]})]})]})},6463:function(s,a,e){"use strict";var t=e(1169);e.o(t,"useSearchParams")&&e.d(a,{useSearchParams:function(){return t.useSearchParams}})},7808:function(s,a,e){"use strict";e.d(a,{b:function(){return t}});let t={testimonials:{slidesToShow:1,slidesToScroll:1,infinite:!1,speed:400,arrows:!1,dots:!1,focusOnSelect:!0,autoplay:!1,autoplaySpeed:5e3},destination:{infinite:!0,speed:400,arrows:!1,dots:!0,focusOnSelect:!0,autoplay:!0,autoplaySpeed:5e3,slidesToShow:5,slidesToScroll:2,responsive:[{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:991,settings:{slidesToShow:3}},{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]},hotDeals:{infinite:!0,speed:400,arrows:!1,dots:!0,focusOnSelect:!0,autoplay:!0,autoplaySpeed:5e3,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:2}},{breakpoint:767,settings:{slidesToShow:1}}]},client:{infinite:!0,speed:400,arrows:!1,dots:!1,focusOnSelect:!0,autoplay:!0,autoplaySpeed:5e3,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:991,settings:{slidesToShow:3}},{breakpoint:575,settings:{slidesToShow:2}}]},gallery:{slidesToShow:4,slidesToScroll:1,infinite:!0,speed:400,arrows:!1,dots:!0,centerMode:!0,focusOnSelect:!0,autoplay:!0,autoplaySpeed:5e3,responsive:[{breakpoint:1600,settings:{slidesToShow:3}},{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:650,settings:{slidesToShow:1}}]},product:{slidesToShow:4,slidesToScroll:1,infinite:!0,speed:400,arrows:!1,dots:!0,centerMode:!1,focusOnSelect:!0,autoplay:!0,autoplaySpeed:5e3,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:991,settings:{slidesToShow:2}},{breakpoint:500,settings:{slidesToShow:1}}]}}}},function(s){s.O(0,[3844,3153,5454,2971,7023,1744],function(){return s(s.s=868)}),_N_E=s.O()}]);