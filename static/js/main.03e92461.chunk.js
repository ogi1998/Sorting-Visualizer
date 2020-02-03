(this["webpackJsonpreact-visualizer"]=this["webpackJsonpreact-visualizer"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),s=n.n(r),l=(n(13),n(3)),i=n(4),u=n(6),c=n(5),d=n(7),m=(n(14),function(e){var t,n=e.type,a=e.title,r=e.max,s=e.changeLength,l=e.resetAll,i=e.bubbleSort,u=e.selectionSort,c=e.insertionSort;return"header"===n?t=o.a.createElement("header",null,o.a.createElement("h3",null,a),o.a.createElement("div",{className:"length-container"},o.a.createElement("label",null,"Length: "),o.a.createElement("input",{value:r,onChange:function(e){s(e.target.value)},type:"text",id:"length-input"})),o.a.createElement("div",{className:"speed-container"},o.a.createElement("label",{htmlFor:"speed"},"Speed: "),o.a.createElement("label",{htmlFor:"speed"},"Slow"),o.a.createElement("input",{type:"radio",value:"1000",name:"speed",id:"speed1"}),o.a.createElement("label",{htmlFor:"speed"},"Fast"),o.a.createElement("input",{type:"radio",value:"100",name:"speed",id:"speed1"}),o.a.createElement("label",{htmlFor:"speed"},"Very Fast"),o.a.createElement("input",{defaultChecked:!0,type:"radio",value:"10",name:"speed",id:"speed1"})),o.a.createElement("button",{className:"btn",onClick:l},"Generate New Options"),o.a.createElement("button",{className:"btn",onClick:i},"Bubble Sort"),o.a.createElement("button",{className:"btn",onClick:u},"Selection Sort"),o.a.createElement("button",{className:"btn",onClick:c},"Insertion Sort")):"footer"===n&&(t=o.a.createElement("footer",null,o.a.createElement("address",null,"Developed and designed by Ognjen Vujasinovic. All rights reserved \xa9"))),t}),h=function(e,t,n,a,o,r,s,l,i){0===e.length&&(setTimeout((function(){v(r,o)}),100),setTimeout((function(){i()}),2e3));for(var u=function(u){setTimeout((function(){var c=e[u].indices,d=c.firstIndex,m=c.secondIndex,h=e[u].values,g=h.firstValue,y=h.secondValue;b(d,m,t,a,s,l,n,e[u].swap),e[u].swap&&f(d,m,g,y,t),e[u].color&&("bubble"===n?setTimeout((function(){e[u].swap?document.getElementById(m).style.backgroundColor=o:document.getElementById(d).style.backgroundColor=o}),t):"insertion"===n?setTimeout((function(){e[u].swap&&(document.getElementById(d).style.backgroundColor=o,document.getElementById(m).style.backgroundColor=o)}),t):"selection"===n&&setTimeout((function(){e[u].swap&&(document.getElementById(m).style.backgroundColor=o)}),t)),u===e.length-1&&(setTimeout((function(){v(r,o)}),t),setTimeout((function(){i()}),2e3))}),u*t)},c=0;c<e.length;c++)u(c)},b=function(e,t,n,a,o,r,s,l){var i=1;n<=100?i=10:n<=1e3&&(i=100);var u=document.getElementsByClassName("arr-el");l?"insertion"!==s&&setTimeout((function(){u[e].style.backgroundColor=a,u[t].style.backgroundColor=a}),n):"bubble"===s&&setTimeout((function(){u[e].style.backgroundColor=a}),n),l?setTimeout((function(){u[e].style.backgroundColor=o,u[t].style.backgroundColor=r}),n-5*i):setTimeout((function(){"bubble"===s&&(u[e].style.backgroundColor=o)}),n-5*i)},f=function(e,t,n,a,o){setTimeout((function(){document.getElementById(t).style.height="".concat(n/2,"px"),document.getElementById(e).style.height="".concat(a/2,"px")}),o)},v=function(e,t){for(var n=document.getElementsByClassName("arr-el"),a=function(a){setTimeout((function(){setTimeout((function(){n[a].style.backgroundColor=e}),10*a)}),1e3),setTimeout((function(){n[a].style.backgroundColor=t}),10*a)},o=0;o<n.length;o++)a(o)},g=(n(15),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={array:[100,200,300,400,600,500],max:50,speed:10},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.resetArray(),this.setSpeed()}},{key:"resetArray",value:function(){var e=this.state.max;if(""===e||isNaN(e))return alert("Length must be a number!!!"),this.setState({max:5}),!1;if(e<5||e>200)return alert("Length must be a number between 5 and 200!"),this.setState({max:5}),!1;for(var t=[],n=e,a=0;a<n;a++)t.push(this.randomIntFromInterval(5,950));this.setState({array:t});for(var o=document.getElementsByClassName("arr-el"),r=0;r<o.length;r++)o[r].style.backgroundColor="#e87e04"}},{key:"setSpeed",value:function(){for(var e=document.getElementsByName("speed"),t=0;t<e.length;t++)e[t].checked&&this.setState({speed:e[t].defaultValue})}},{key:"resetAll",value:function(){this.resetArray(),this.setSpeed()}},{key:"bubbleSort",value:function(){var e=this.state.speed;this.disableButtons();var t=function(e){for(var t=[],n=e.length,a={},o=!1,r=0;r<n;r++)for(var s=0;s<n-r;s++){if(e[s]>e[s+1]){o=!0,a={indices:{firstIndex:s,secondIndex:s+1},values:{firstValue:e[s],secondValue:e[s+1]},swap:!0,color:!1};var l=e[s];e[s]=e[s+1],e[s+1]=l}else o=!0,a={indices:{firstIndex:s,secondIndex:s+1},values:{firstValue:e[s],secondValue:e[s+1]},swap:!1,color:!1};s===n-r-1&&(a.color=!0),o&&t.push(a)}return t}(this.state.array);h(t,e,"bubble","#e87e04","#27ae60","#2980b9","#F22613","#9A12B3",this.enableButtons)}},{key:"selectionSort",value:function(){var e=this.state.speed;this.disableButtons();for(var t=document.getElementsByClassName("btn"),n=0;n<t.length;n++)t[n].disabled=!0;var a=function(e){for(var t=[],n={},a=0;a<e.length;a++){for(var o=a,r=a+1;r<e.length;r++)e[o]>e[r]&&(o=r);if(n={indices:{firstIndex:o,secondIndex:a},values:{firstValue:e[o],secondValue:e[a]},swap:!0,color:!0},o!==a){var s=e[a];e[a]=e[o],e[o]=s}a===e.length-a-1&&(n.color=!0),t.push(n)}return t}(this.state.array);h(a,e,"selection","#e87e04","#27ae60","#2980b9","#F22613","#9A12B3",this.enableButtons)}},{key:"insertionSort",value:function(){var e=this.state.speed;this.disableButtons();for(var t=document.getElementsByClassName("btn"),n=0;n<t.length;n++)t[n].disabled=!0;var a=function(e){for(var t=[],n={},a=1;a<e.length;a++)for(;e[a]<e[a-1];){n={indices:{firstIndex:a,secondIndex:a-1},values:{firstValue:e[a],secondValue:e[a-1]},swap:!0,color:!0};var o=e[a];e[a]=e[a-1],e[a-1]=o,t.push(n),a--}return t}(this.state.array);h(a,e,"insertion","#e87e04","#27ae60","#2980b9","#F22613","#9A12B3",this.enableButtons)}},{key:"randomIntFromInterval",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}},{key:"disableButtons",value:function(){for(var e=document.getElementsByClassName("btn"),t=0;t<e.length;t++)e[t].disabled=!0}},{key:"enableButtons",value:function(){for(var e=document.getElementsByClassName("btn"),t=0;t<e.length;t++)e[t].disabled=!1}},{key:"changeLength",value:function(e){this.setState({max:e})}},{key:"render",value:function(){var e=this.state,t=e.array,n=e.max;return o.a.createElement("div",null,o.a.createElement(m,{type:"header",title:"SORTING VISUALIZER",max:n,changeLength:this.changeLength.bind(this),resetAll:this.resetAll.bind(this),bubbleSort:this.bubbleSort.bind(this),selectionSort:this.selectionSort.bind(this),insertionSort:this.insertionSort.bind(this)}),o.a.createElement("main",null,o.a.createElement("div",{className:"array-container"},t.map((function(e,n){return o.a.createElement("div",{className:"arr-el",key:n,id:n,style:{height:"".concat(e/2,"px"),width:"".concat(1e3/t.length,"px")}})})))),o.a.createElement(m,{type:"footer"}))}}]),t}(a.Component));n(16);var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.03e92461.chunk.js.map