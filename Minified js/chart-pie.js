import{l as i,d as _taggedTemplateLiteral,_ as _decorate,s,e,a as _get,b as _getPrototypeOf,C as Chart,c as _toConsumableArray,x,f as e$1,g as _inherits,h as _createSuper,i as _createClass,j as _classCallCheck,k as _assertThisInitialized,r as registerables}from"./chart-48d074a4.js";var _templateObject$1,_templateObject,config={controlName:"chart-pie",groupName:"Charts",fallbackDisableSubmit:!1,description:"Hello World",version:"1.0",properties:{chartData:{type:"string",title:"Data Array"},backgroundColor:{type:"string",title:"Background Color in comma separated format"},displayLegend:{type:"boolean",title:"Display Legend"}},standardProperties:{fieldLabel:!1,description:!1,defaultValue:!1,readOnly:!1}},pluginstyle=i(_templateObject$1=_templateObject$1||_taggedTemplateLiteral(["\n\t/* Add your styles here */\n\n\t:host {\n\t\tdisplay: block;\n\t}\n\n\tcanvas {\n\t\tmax-width: 100%;\n\t\theight: auto;\n\t}\n"])),styles=[pluginstyle],Piechart=_decorate([e$1("chart-pie")],function(s,t){var a=function(){_inherits(i,t);var n=_createSuper(i);function i(){var t;_classCallCheck(this,i);for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return t=n.call.apply(n,[this].concat(a)),s(_assertThisInitialized(t)),t}return _createClass(i)}();return{F:a,d:[{kind:"field",static:!0,key:"getMetaConfig",value:function(){return function(){return Promise.resolve(config)}}},{kind:"field",static:!0,key:"styles",value:function(){return styles}},{kind:"field",decorators:[e({type:String})],key:"chartData",value:void 0},{kind:"field",decorators:[e({type:String})],key:"backgroundColor",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"displayLegend",value:void 0},{kind:"field",key:"chartContainer",value:void 0},{kind:"field",key:"chartInstance",value:void 0},{kind:"method",key:"updated",value:function(t){_get(_getPrototypeOf(a.prototype),"updated",this).call(this,t),(t.has("chartData")||t.has("backgroundColor")||t.has("displayLegend"))&&this.updateChart()}},{kind:"method",key:"updateChart",value:function(){var t,e=void 0===this.displayLegend||this.displayLegend,a=(console.log(e),this.parseChartData());a&&0!==a.length&&(this.chartInstance&&this.chartInstance.destroy(),this.chartContainer=document.createElement("canvas"),null!=(t=this.shadowRoot)&&t.appendChild(this.chartContainer),this.chartInstance?(this.chartInstance.data.labels=a.map(function(t){return t.label}),this.chartInstance.data.datasets=[{data:a.map(function(t){return t.value}),backgroundColor:this.backgroundColor?this.getCustomColors(a.length):this.getDefaultColors(a.length)}],this.chartInstance.options.plugins={legend:{display:e}},this.chartInstance.update()):(Chart.register.apply(Chart,_toConsumableArray(registerables)),this.chartInstance=new Chart(this.chartContainer.getContext("2d"),{type:"pie",data:{labels:a.map(function(t){return t.label}),datasets:[{data:a.map(function(t){return t.value}),backgroundColor:this.backgroundColor?this.getCustomColors(a.length):this.getDefaultColors(a.length)}]},options:{plugins:{legend:{display:e}}}})))}},{kind:"method",key:"getDefaultColors",value:function(t){var a=["#FF0000","#00FF00","#FFFF00","#0000FF"];return Array.from({length:t},function(t,e){return a[e%a.length]})}},{kind:"method",key:"getCustomColors",value:function(t){var a=this.backgroundColor.split(",").map(function(t){return t.trim()});return Array.from({length:t},function(t,e){return a[e%a.length]})}},{kind:"method",key:"parseChartData",value:function(){var t;try{t=JSON.parse(this.chartData)}catch(t){return console.error("Error parsing JSON:",t),null}return Array.isArray(t)&&0!==t.length?t:null}},{kind:"method",key:"render",value:function(){return x(_templateObject=_templateObject||_taggedTemplateLiteral([""]))}}]}},s);export{Piechart};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtcGllLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9jaGFydC1waWUvY2hhcnQtcGllLmNvbmZpZy50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0LXBpZS9jaGFydC1waWUuc3R5bGVzLnRzIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvY2hhcnQtcGllL2NoYXJ0LXBpZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIFBsdWdpbkNvbnRyYWN0IH0gZnJvbSAnQG5pbnRleC9mb3JtLXBsdWdpbi1jb250cmFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBQbHVnaW5Db250cmFjdCA9IHtcclxuXHRjb250cm9sTmFtZTogJ19fcGx1Z2luQ29udHJvbE5hbWVfXycsXHJcblx0Z3JvdXBOYW1lOiAnX19wbHVnaW5Hcm91cE5hbWVfXycsXHJcblx0ZmFsbGJhY2tEaXNhYmxlU3VibWl0OiBmYWxzZSxcclxuXHRkZXNjcmlwdGlvbjogJ0hlbGxvIFdvcmxkJyxcclxuXHR2ZXJzaW9uOiAnMS4wJyxcclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRjaGFydERhdGE6IHtcclxuXHRcdFx0dHlwZTogJ3N0cmluZycsXHJcblx0XHRcdHRpdGxlOiAnRGF0YSBBcnJheScsXHJcblx0XHR9LFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiB7XHJcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxyXG5cdFx0XHR0aXRsZTogJ0JhY2tncm91bmQgQ29sb3IgaW4gY29tbWEgc2VwYXJhdGVkIGZvcm1hdCcsXHJcblx0XHR9LFxyXG5cdFx0ZGlzcGxheUxlZ2VuZDoge1xyXG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXHJcblx0XHRcdHRpdGxlOiAnRGlzcGxheSBMZWdlbmQnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdHN0YW5kYXJkUHJvcGVydGllczoge1xyXG5cdFx0ZmllbGRMYWJlbDogZmFsc2UsXHJcblx0XHRkZXNjcmlwdGlvbjogZmFsc2UsXHJcblx0XHRkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG5cdFx0cmVhZE9ubHk6IGZhbHNlLFxyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7XHJcblxyXG5jb25zdCBwbHVnaW5zdHlsZSA9IGNzc2BcclxuXHQvKiBBZGQgeW91ciBzdHlsZXMgaGVyZSAqL1xyXG5cclxuXHQ6aG9zdCB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblxyXG5cdGNhbnZhcyB7XHJcblx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0fVxyXG5gO1xyXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gW3BsdWdpbnN0eWxlXTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xyXG5pbXBvcnQgeyB0eXBlIFBsdWdpbkNvbnRyYWN0IH0gZnJvbSAnQG5pbnRleC9mb3JtLXBsdWdpbi1jb250cmFjdCc7XHJcbmltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuaW1wb3J0IHsgQ2hhcnQsIENoYXJ0T3B0aW9ucywgcmVnaXN0ZXJhYmxlcyB9IGZyb20gJ2NoYXJ0LmpzJztcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jaGFydC1waWUuY29uZmlnJztcclxuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9jaGFydC1waWUuc3R5bGVzJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdwbHVnaW4tZWxlbWVudG5hbWUnKVxyXG5leHBvcnQgY2xhc3MgUGllY2hhcnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuXHRzdGF0aWMgZ2V0TWV0YUNvbmZpZyA9ICgpOiBQcm9taXNlPFBsdWdpbkNvbnRyYWN0PiA9PiBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcclxuXHJcblx0c3RhdGljIG92ZXJyaWRlIHN0eWxlcyA9IHN0eWxlcztcclxuXHJcblx0QHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXHJcblx0ZGVjbGFyZSBjaGFydERhdGE6IHN0cmluZztcclxuXHJcblx0QHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXHJcblx0ZGVjbGFyZSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuXHJcblx0QHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxyXG5cdGRlY2xhcmUgZGlzcGxheUxlZ2VuZDogYm9vbGVhbjtcclxuXHJcblx0cHJpdmF0ZSBjaGFydENvbnRhaW5lcj86IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuXHRwcml2YXRlIGNoYXJ0SW5zdGFuY2U/OiBDaGFydDwncGllJywgbnVtYmVyW10sIHVua25vd24+O1xyXG5cclxuXHRvdmVycmlkZSB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBNYXA8a2V5b2YgdGhpcywgdW5rbm93bj4pOiB2b2lkIHtcclxuXHRcdHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0Y2hhbmdlZFByb3BlcnRpZXMuaGFzKCdjaGFydERhdGEnKSB8fFxyXG5cdFx0XHRjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2JhY2tncm91bmRDb2xvcicpIHx8XHJcblx0XHRcdGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnZGlzcGxheUxlZ2VuZCcpXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy51cGRhdGVDaGFydCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSB1cGRhdGVDaGFydCgpIHtcclxuXHRcdGNvbnN0IGxlZ2VuZERpc3BsYXkgPVxyXG5cdFx0XHR0aGlzLmRpc3BsYXlMZWdlbmQgIT09IHVuZGVmaW5lZCA/IHRoaXMuZGlzcGxheUxlZ2VuZCA6IHRydWU7XHJcblx0XHRjb25zb2xlLmxvZyhsZWdlbmREaXNwbGF5KTtcclxuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLnBhcnNlQ2hhcnREYXRhKCk7XHJcblx0XHRpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENsZWFyIGV4aXN0aW5nIGNoYXJ0XHJcblx0XHRpZiAodGhpcy5jaGFydEluc3RhbmNlKSB7XHJcblx0XHRcdHRoaXMuY2hhcnRJbnN0YW5jZS5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ3JlYXRlIGEgY2FudmFzIGVsZW1lbnQgZm9yIHRoZSBjaGFydFxyXG5cdFx0dGhpcy5jaGFydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cdFx0dGhpcy5zaGFkb3dSb290Py5hcHBlbmRDaGlsZCh0aGlzLmNoYXJ0Q29udGFpbmVyKTtcclxuXHJcblx0XHQvLyBJbml0aWFsaXplIENoYXJ0LmpzIGlmIG5vdCBhbHJlYWR5IGRvbmVcclxuXHRcdGlmICghdGhpcy5jaGFydEluc3RhbmNlKSB7XHJcblx0XHRcdENoYXJ0LnJlZ2lzdGVyKC4uLnJlZ2lzdGVyYWJsZXMpO1xyXG5cdFx0XHR0aGlzLmNoYXJ0SW5zdGFuY2UgPSBuZXcgQ2hhcnQ8J3BpZScsIG51bWJlcltdLCB1bmtub3duPihcclxuXHRcdFx0XHR0aGlzLmNoYXJ0Q29udGFpbmVyLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHR5cGU6ICdwaWUnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRsYWJlbHM6IGRhdGEubWFwKChpdGVtKSA9PiBpdGVtLmxhYmVsKSxcclxuXHRcdFx0XHRcdFx0ZGF0YXNldHM6IFtcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhOiBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSksXHJcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yXHJcblx0XHRcdFx0XHRcdFx0XHRcdD8gdGhpcy5nZXRDdXN0b21Db2xvcnMoZGF0YS5sZW5ndGgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdDogdGhpcy5nZXREZWZhdWx0Q29sb3JzKGRhdGEubGVuZ3RoKSxcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRcdFx0cGx1Z2luczoge1xyXG5cdFx0XHRcdFx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbGVnZW5kRGlzcGxheSxcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSBhcyBDaGFydE9wdGlvbnM8J3BpZSc+LCAvLyBDYXN0IHRvIHRoZSBjb3JyZWN0IHR5cGVcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBVcGRhdGUgdGhlIGNoYXJ0IGRhdGFcclxuXHRcdFx0dGhpcy5jaGFydEluc3RhbmNlLmRhdGEubGFiZWxzID0gZGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpO1xyXG5cdFx0XHR0aGlzLmNoYXJ0SW5zdGFuY2UuZGF0YS5kYXRhc2V0cyA9IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRkYXRhOiBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSksXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yXHJcblx0XHRcdFx0XHRcdD8gdGhpcy5nZXRDdXN0b21Db2xvcnMoZGF0YS5sZW5ndGgpXHJcblx0XHRcdFx0XHRcdDogdGhpcy5nZXREZWZhdWx0Q29sb3JzKGRhdGEubGVuZ3RoKSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdO1xyXG5cclxuXHRcdFx0Ly8gQ2FzdCB0byB0aGUgY29ycmVjdCB0eXBlXHJcblx0XHRcdCh0aGlzLmNoYXJ0SW5zdGFuY2Uub3B0aW9ucyBhcyBDaGFydE9wdGlvbnM8J3BpZSc+KS5wbHVnaW5zID0ge1xyXG5cdFx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogbGVnZW5kRGlzcGxheSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dGhpcy5jaGFydEluc3RhbmNlLnVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcclxuXHRwcml2YXRlIGdldERlZmF1bHRDb2xvcnMoY291bnQ6IG51bWJlcik6IHN0cmluZ1tdIHtcclxuXHRcdC8vIFlvdSBjYW4gY3VzdG9taXplIHRoaXMgYXJyYXkgd2l0aCB5b3VyIGRlZmF1bHQgY29sb3JzXHJcblx0XHRjb25zdCBkZWZhdWx0Q29sb3JzID0gWycjRkYwMDAwJywgJyMwMEZGMDAnLCAnI0ZGRkYwMCcsICcjMDAwMEZGJ107XHJcblx0XHQvLyBSZXBlYXQgdGhlIGRlZmF1bHQgY29sb3JzIGlmIHRoZXJlIGFyZSBtb3JlIGRhdGEgcG9pbnRzIHRoYW4gY29sb3JzXHJcblx0XHRyZXR1cm4gQXJyYXkuZnJvbShcclxuXHRcdFx0eyBsZW5ndGg6IGNvdW50IH0sXHJcblx0XHRcdChfLCBpbmRleCkgPT4gZGVmYXVsdENvbG9yc1tpbmRleCAlIGRlZmF1bHRDb2xvcnMubGVuZ3RoXVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0Q3VzdG9tQ29sb3JzKGNvdW50OiBudW1iZXIpOiBzdHJpbmdbXSB7XHJcblx0XHRjb25zdCB0ZW1wID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcblx0XHRjb25zdCBkZWZhdWx0Q29sb3JzID0gdGVtcC5zcGxpdCgnLCcpLm1hcCgoY29sb3IpID0+IGNvbG9yLnRyaW0oKSk7XHJcblx0XHQvLyBSZXBlYXQgdGhlIGRlZmF1bHQgY29sb3JzIGlmIHRoZXJlIGFyZSBtb3JlIGRhdGEgcG9pbnRzIHRoYW4gY29sb3JzXHJcblx0XHRyZXR1cm4gQXJyYXkuZnJvbShcclxuXHRcdFx0eyBsZW5ndGg6IGNvdW50IH0sXHJcblx0XHRcdChfLCBpbmRleCkgPT4gZGVmYXVsdENvbG9yc1tpbmRleCAlIGRlZmF1bHRDb2xvcnMubGVuZ3RoXVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VDaGFydERhdGEoKTogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH1bXSB8IG51bGwge1xyXG5cdFx0bGV0IGRhdGE7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRkYXRhID0gSlNPTi5wYXJzZSh0aGlzLmNoYXJ0RGF0YSk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBwYXJzaW5nIEpTT046JywgZXJyb3IpO1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQXNzdW1pbmcgeW91ciBKU09OIGhhcyBhIHN0cnVjdHVyZSBsaWtlIFt7IGxhYmVsOiAnQScsIHZhbHVlOiAxMCB9LCB7IGxhYmVsOiAnQicsIHZhbHVlOiAyMCB9LCAuLi5dXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9XHJcblxyXG5cdG92ZXJyaWRlIHJlbmRlcigpIHtcclxuXHRcdHJldHVybiBodG1sYGA7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25maWciLCJjb250cm9sTmFtZSIsImdyb3VwTmFtZSIsImZhbGxiYWNrRGlzYWJsZVN1Ym1pdCIsImRlc2NyaXB0aW9uIiwidmVyc2lvbiIsInByb3BlcnRpZXMiLCJjaGFydERhdGEiLCJ0eXBlIiwidGl0bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5TGVnZW5kIiwic3RhbmRhcmRQcm9wZXJ0aWVzIiwiZmllbGRMYWJlbCIsImRlZmF1bHRWYWx1ZSIsInJlYWRPbmx5IiwicGx1Z2luc3R5bGUiLCJjc3MiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwic3R5bGVzIiwiUGllY2hhcnQiLCJfZGVjb3JhdGUiLCJjdXN0b21FbGVtZW50IiwiX2luaXRpYWxpemUiLCJfTGl0RWxlbWVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJ0aGlzIiwiY29uY2F0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9jcmVhdGVDbGFzcyIsIkYiLCJkIiwia2luZCIsInN0YXRpYyIsImtleSIsInZhbHVlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkZWNvcmF0b3JzIiwicHJvcGVydHkiLCJTdHJpbmciLCJCb29sZWFuIiwiY2hhbmdlZFByb3BlcnRpZXMiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiaGFzIiwidXBkYXRlQ2hhcnQiLCJfdGhpcyRzaGFkb3dSb290IiwibGVnZW5kRGlzcGxheSIsInVuZGVmaW5lZCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicGFyc2VDaGFydERhdGEiLCJjaGFydEluc3RhbmNlIiwiZGVzdHJveSIsImNoYXJ0Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwibGFiZWxzIiwibWFwIiwiaXRlbSIsImxhYmVsIiwiZGF0YXNldHMiLCJnZXRDdXN0b21Db2xvcnMiLCJnZXREZWZhdWx0Q29sb3JzIiwib3B0aW9ucyIsInBsdWdpbnMiLCJsZWdlbmQiLCJkaXNwbGF5IiwidXBkYXRlIiwiQ2hhcnQiLCJyZWdpc3RlciIsIl90b0NvbnN1bWFibGVBcnJheSIsInJlZ2lzdGVyYWJsZXMiLCJnZXRDb250ZXh0IiwiY291bnQiLCJkZWZhdWx0Q29sb3JzIiwiZnJvbSIsIl8iLCJpbmRleCIsInNwbGl0IiwiY29sb3IiLCJ0cmltIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJpc0FycmF5IiwiaHRtbCIsIkxpdEVsZW1lbnQiXSwibWFwcGluZ3MiOiIyUkFFTyxzQ0FBTUEsT0FBeUIsQ0FDckNDLFlBQWEsWUFDYkMsVUFBVyxTQUNYQyxzQkFBdUIsQ0FBQSxFQUN2QkMsWUFBYSxjQUNiQyxRQUFTLE1BQ1RDLFdBQVksQ0FDWEMsVUFBVyxDQUNWQyxLQUFNLFNBQ05DLE1BQU8sWUFDUCxFQUNEQyxnQkFBaUIsQ0FDaEJGLEtBQU0sU0FDTkMsTUFBTyw0Q0FDUCxFQUNERSxjQUFlLENBQ2RILEtBQU0sVUFDTkMsTUFBTyxnQkFDUixDQUNBLEVBQ0RHLG1CQUFvQixDQUNuQkMsV0FBWSxDQUFBLEVBQ1pULFlBQWEsQ0FBQSxFQUNiVSxhQUFjLENBQUEsRUFDZEMsU0FBVSxDQUFBLENBQ1gsQ0FDRCxFQzFCTUMsWUFBY0MsRUFBR0Msa0JBQUFBLG1CQUFBQyx1QkFXdEIsQ0FBQSxzSUFBQSxDQUFBLEVBQ1lDLE9BQVMsQ0FBQ0osYUNKVkssU0FBUUMsVUFEcEJDLENBQUFBLElBQWMsV0FBb0IsR0FBQyxTQUFBQyxFQUFBQyxHQUFBLElBQ3ZCSixhQUFRSyxVQUFBTCxFQUFBSSxDQUFBLEVBQUEsSUFBQUUsRUFBQUMsYUFBQVAsQ0FBQSxFQUFBLFNBQUFBLElBQUEsSUFBQVEsRUFBQUMscUJBQUFULENBQUEsRUFBQSxJQUFBLElBQUFVLEVBQUFDLFVBQUFDLE9BQUFDLEVBQUFDLElBQUFBLE1BQUFKLENBQUEsRUFBQUssRUFBQSxFQUFBQSxFQUFBTCxFQUFBSyxDQUFBLEdBQUFGLEVBQUFFLEdBQUFKLFVBQUFJLEdBQUEsT0FBQVAs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
