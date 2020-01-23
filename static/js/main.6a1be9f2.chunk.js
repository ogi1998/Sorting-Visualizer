(this["webpackJsonpreact-visualizer"]=this["webpackJsonpreact-visualizer"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),l=n.n(o),s=(n(13),n(3)),i=n(4),u=n(6),c=n(5),d=n(7),m=function e(t){if(1===t.length)return t;for(var n=Math.floor(t.length/2),a=e(t.slice(0,n)),r=e(t.slice(n)),o=[],l=0,s=0;l<a.length&&s<r.length;)a[l]<r[s]?o.push(a[l++]):o.push(r[s++]);for(;l<a.length;)o.push(a[l++]);for(;s<r.length;)o.push(r[s++]);return o},h=function(e,t,n,a,r,o,l,s,i){for(var u=function(u){setTimeout((function(){var c=e[u].indices,d=c.firstIndex,m=c.secondIndex,h=e[u].values,b=h.firstValue,y=h.secondValue;e[u].swap&&(f(d,m,t,a,l,s),v(d,m,b,y,t)),e[u].color&&("bubble"===n?setTimeout((function(){e[u].swap?document.getElementById(m).style.backgroundColor=r:document.getElementById(d).style.backgroundColor=r}),t/4):"insertion"===n?setTimeout((function(){e[u].swap&&(document.getElementById(d).style.backgroundColor=r,document.getElementById(m).style.backgroundColor=r)}),t):"selection"===n&&setTimeout((function(){e[u].swap&&(document.getElementById(m).style.backgroundColor=r)}),t)),u===e.length-1&&(setTimeout((function(){g(o,r)}),100),setTimeout((function(){i()}),2e3))}),u*t)},c=0;c<e.length;c++)u(c)},f=function(e,t,n,a,r,o){var l=1;n<=100?l=10:n<=1e3&&(l=100);var s=document.getElementsByClassName("arr-el");setTimeout((function(){s[e].style.backgroundColor=a,s[t].style.backgroundColor=a}),n),setTimeout((function(){s[e].style.backgroundColor=r,s[t].style.backgroundColor=o}),n-5*l)},v=function(e,t,n,a,r){setTimeout((function(){document.getElementById(t).style.height="".concat(n/2,"px"),document.getElementById(e).style.height="".concat(a/2,"px")}),r)},g=function(e,t){for(var n=document.getElementsByClassName("arr-el"),a=function(a){setTimeout((function(){setTimeout((function(){n[a].style.backgroundColor=e}),10*a)}),1e3),setTimeout((function(){n[a].style.backgroundColor=t}),10*a)},r=0;r<n.length;r++)a(r)},b=(n(14),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={array:[100,500,200,300,600,400],max:5,speed:10},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.resetArray(),this.setSpeed()}},{key:"resetArray",value:function(){var e=this.state.max;if(""===e||isNaN(e))return alert("Length must be a number!!!"),this.setState({max:5}),!1;if(e<5||e>200)return alert("Length must be a number between 5 and 300!"),this.setState({max:5}),!1;for(var t=[],n=e,a=0;a<n;a++)t.push(this.randomIntFromInterval(5,950));this.setState({array:t});for(var r=document.getElementsByClassName("arr-el"),o=0;o<r.length;o++)r[o].style.backgroundColor="#e87e04"}},{key:"setSpeed",value:function(){for(var e=document.getElementsByName("speed"),t=0;t<e.length;t++)e[t].checked&&this.setState({speed:e[t].defaultValue})}},{key:"resetAll",value:function(){this.resetArray(),this.setSpeed()}},{key:"bubbleSort",value:function(){var e=this.state.speed;this.disableButtons();var t=function(e){for(var t=[],n=e.length,a={},r=!1,o=0;o<n;o++)for(var l=0;l<n-o;l++){if(e[l]>e[l+1]){r=!0,a={indices:{firstIndex:l,secondIndex:l+1},values:{firstValue:e[l],secondValue:e[l+1]},swap:!0,color:!1};var s=e[l];e[l]=e[l+1],e[l+1]=s}else r=!0,a={indices:{firstIndex:l,secondIndex:l+1},values:{firstValue:e[l],secondValue:e[l+1]},swap:!1,color:!1};l===n-o-1&&(a.color=!0),r&&t.push(a)}return t}(this.state.array);h(t,e,"bubble","#e87e04","#27ae60","#2980b9","#F22613","#9A12B3",this.enableButtons)}},{key:"selectionSort",value:function(){var e=this.state.speed;this.disableButtons();for(var t=document.getElementsByClassName("btn"),n=0;n<t.length;n++)t[n].disabled=!0;var a=function(e){for(var t=[],n={},a=0;a<e.length;a++){for(var r=a,o=a+1;o<e.length;o++)e[r]>e[o]&&(r=o);if(n={indices:{firstIndex:r,secondIndex:a},values:{firstValue:e[r],secondValue:e[a]},swap:!0,color:!0},r!==a){var l=e[a];e[a]=e[r],e[r]=l}a===e.length-a-1&&(n.color=!0),t.push(n)}return t}(this.state.array);h(a,e,"selection","#e87e04","#27ae60","#2980b9","#F22613","#9A12B3",this.enableButtons)}},{key:"insertionSort",value:function(){var e=this.state.speed;this.disableButtons();for(var t=document.getElementsByClassName("btn"),n=0;n<t.length;n++)t[n].disabled=!0;var a=function(e){for(var t=[],n={},a=1;a<e.length;a++)for(;e[a]<e[a-1];){n={indices:{firstIndex:a,secondIndex:a-1},values:{firstValue:e[a],secondValue:e[a-1]},swap:!0,color:!0};var r=e[a];e[a]=e[a-1],e[a-1]=r,t.push(n),a--}return t}(this.state.array);h(a,e,"insertion","#e87e04","#27ae60","#2980b9","#F22613","#9A12B3",this.enableButtons)}},{key:"arraysAreEqual",value:function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}},{key:"testSortingAlgorithms",value:function(){for(var e=[],t=this.randomIntFromInterval(5,1e3),n=0;n<100;n++){for(var a=0;a<t;a++)e.push(this.randomIntFromInterval(5,1e3));var r=m(e),o=e.slice().sort((function(e,t){return e-t}));console.log(this.arraysAreEqual(o,r))}}},{key:"randomIntFromInterval",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}},{key:"disableButtons",value:function(){for(var e=document.getElementsByClassName("btn"),t=0;t<e.length;t++)e[t].disabled=!0}},{key:"enableButtons",value:function(){for(var e=document.getElementsByClassName("btn"),t=0;t<e.length;t++)e[t].disabled=!1}},{key:"changeLength",value:function(e){this.setState({max:e})}},{key:"render",value:function(){var e=this,t=this.state.array;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h3",null,"SORTING VISUALIZER"),r.a.createElement("div",{className:"length"},r.a.createElement("label",null,"Length: "),r.a.createElement("input",{value:this.state.max,onChange:function(t){e.changeLength(t.target.value)},type:"text",id:"length-input"})),r.a.createElement("div",{className:"speed"},r.a.createElement("label",{htmlFor:"speed"},"Speed: "),r.a.createElement("label",{htmlFor:"speed"},"1s"),r.a.createElement("input",{type:"radio",value:"1000",name:"speed",id:"speed1"}),r.a.createElement("label",{htmlFor:"speed"},"100ms"),r.a.createElement("input",{type:"radio",value:"100",name:"speed",id:"speed1"}),r.a.createElement("label",{htmlFor:"speed"},"10ms"),r.a.createElement("input",{defaultChecked:!0,type:"radio",value:"10",name:"speed",id:"speed1"})),r.a.createElement("button",{className:"btn",onClick:function(){return e.resetAll()}},"Generate New Array"),r.a.createElement("button",{className:"btn",onClick:function(){return e.bubbleSort()}},"Bubble Sort"),r.a.createElement("button",{className:"btn",onClick:function(){return e.selectionSort()}},"Selection Sort"),r.a.createElement("button",{className:"btn",onClick:function(){return e.insertionSort()}},"Insertion Sort")),r.a.createElement("main",null,r.a.createElement("div",{className:"array-container"},t.map((function(e,n){return r.a.createElement("div",{className:"arr-el",key:n,id:n,style:{height:"".concat(e/2,"px"),width:"".concat(1e3/t.length,"px")}})})))),r.a.createElement("footer",null,r.a.createElement("address",null,"Developed by Ognjen Vujasinovic. All rights reserved \xa9")))}}]),t}(a.Component));n(15);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.6a1be9f2.chunk.js.map