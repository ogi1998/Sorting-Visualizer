(this["webpackJsonpreact-visualizer"]=this["webpackJsonpreact-visualizer"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),l=n.n(a),i=(n(13),n(3)),c=n(4),s=n(6),u=n(5),f=n(7),h=function e(t){if(1===t.length)return t;for(var n=Math.floor(t.length/2),r=e(t.slice(0,n)),o=e(t.slice(n)),a=[],l=0,i=0;l<r.length&&i<o.length;)r[l]<o[i]?a.push(r[l++]):a.push(o[i++]);for(;l<r.length;)a.push(r[l++]);for(;i<o.length;)a.push(o[i++]);return a},d=function(e,t,n,r,o){for(var a=function(a){setTimeout((function(){var t=e[a].indices,l=t.firstIndex,i=t.secondIndex,c=e[a].values,s=c.firstValue,u=c.secondValue;e[a].swap&&m(l,i,s,u),e[a].color&&("bubble"===n?e[a].swap?document.getElementById(i).style.backgroundColor=o:document.getElementById(l).style.backgroundColor=o:"insertion"===n?e[a].swap&&(document.getElementById(l).style.backgroundColor=o,document.getElementById(i).style.backgroundColor=o):"selection"===n&&e[a].swap&&(document.getElementById(i).style.backgroundColor=o)),a===e.length-1&&v(r)}),a*t)},l=0;l<e.length;l++)a(l)},m=function(e,t,n,r){document.getElementById(t).style.height="".concat(n/2,"px"),document.getElementById(e).style.height="".concat(r/2,"px")},v=function(e){for(var t=document.getElementsByClassName("arr-el"),n=function(n){setTimeout((function(){t[n].style.backgroundColor=e}),10*n)},r=0;r<t.length;r++)n(r)},g=(n(14),function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={array:[500,300,400,200]},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){for(var e=[],t=this.randomIntFromInterval(5,200),n=0;n<t;n++)e.push(this.randomIntFromInterval(5,950));this.setState({array:e})}},{key:"mergeSort",value:function(){}},{key:"bubbleSort",value:function(){var e=function(e){for(var t=[],n=e.length,r={},o=!1,a=0;a<n;a++)for(var l=0;l<n-a;l++){if(e[l]>e[l+1]){o=!0,r={indices:{firstIndex:l,secondIndex:l+1},values:{firstValue:e[l],secondValue:e[l+1]},swap:!0,color:!1};var i=e[l];e[l]=e[l+1],e[l+1]=i}else o=!0,r={indices:{firstIndex:l,secondIndex:l+1},values:{firstValue:e[l],secondValue:e[l+1]},swap:!1,color:!1};l===n-a-1&&(r.color=!0),o&&t.push(r)}return t}(this.state.array,this.finish);console.log(e),d(e,10,"bubble","#2980b9","#27ae60")}},{key:"finish",value:function(){console.log("Done")}},{key:"selectionSort",value:function(){var e=function(e){for(var t=[],n={},r=0;r<e.length;r++){for(var o=r,a=r+1;a<e.length;a++)e[o]>e[a]&&(o=a);if(n={indices:{firstIndex:o,secondIndex:r},values:{firstValue:e[o],secondValue:e[r]},swap:!0,color:!0},o!==r){var l=e[r];e[r]=e[o],e[o]=l}r===e.length-r-1&&(n.color=!0),t.push(n)}return t}(this.state.array);d(e,10,"selection","#2980b9","#27ae60")}},{key:"insertionSort",value:function(){var e=function(e){for(var t=[],n={},r=1;r<e.length;r++)for(;e[r]<e[r-1];){n={indices:{firstIndex:r,secondIndex:r-1},values:{firstValue:e[r],secondValue:e[r-1]},swap:!0,color:!0};var o=e[r];e[r]=e[r-1],e[r-1]=o,t.push(n),r--}return t}(this.state.array);d(e,10,"insertion","#2980b9","#27ae60")}},{key:"arraysAreEqual",value:function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}},{key:"testSortingAlgorithms",value:function(){for(var e=[],t=this.randomIntFromInterval(5,1e3),n=0;n<100;n++){for(var r=0;r<t;r++)e.push(this.randomIntFromInterval(5,1e3));var o=h(e),a=e.slice().sort((function(e,t){return e-t}));console.log(this.arraysAreEqual(a,o))}}},{key:"randomIntFromInterval",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}},{key:"render",value:function(){var e=this,t=this.state.array;return o.a.createElement("div",{className:"array-container"},t.map((function(e,n){return o.a.createElement("div",{className:"arr-el",key:n,id:n,style:{height:"".concat(e/2,"px"),width:"".concat(500/t.length,"px")}})})),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){return e.resetArray()}},"Generate New Array"),o.a.createElement("button",{onClick:function(){return e.bubbleSort()}},"Bubble Sort"),o.a.createElement("button",{onClick:function(){return e.selectionSort()}},"Selection Sort"),o.a.createElement("button",{onClick:function(){return e.insertionSort()}},"Insertion Sort"),o.a.createElement("button",{onClick:function(){return e.testSortingAlgorithms()}},"Test Sort"))}}]),t}(r.Component));n(15);var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.7d213643.chunk.js.map