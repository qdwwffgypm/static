!function(a,b){"undefined"!=typeof module?module.exports=b(a):(b(a),"function"==typeof define&&(define.amd||define.cmd)&&define("imgModule",function(){return b(a)}))}(window||this,function(a){var c,b,d,e;return!a.CY&&(a.CY={}),a.CY.imgModule?a.CY.imgModule:(b=document,e=function(a){return a+(Math.random()+"").slice(9)},c=function(){var c,f,g,h,i,a=[];return a.push('<div class="l-item">'),a.push('    <a data-spm="{id}" href="{adUrl}">'),a.push("        <article>"),a.push('            <span class="l-img">'),a.push('                <img alt="{positionName}" src="{adContent}" title="{positionName}"/>'),a.push("            </span>"),a.push('            <span class="l-title" title="{positionName}">{positionName}</span>'),a.push("        </article>"),a.push("    </a>"),a.push("</div>"),a=a.join(""),c=function(){var c,a=[];a.push(".imgModule["+d+"]{overflow: hidden;}"),a.push(".imgModule["+d+"] .l-item {font-size:0.28rem;}"),a.push(".imgModule["+d+"] .l-item article {width: 100%;height: 100%;position: relative;}"),a.push(".imgModule["+d+"] .l-item .l-title{display:none;position: absolute;bottom: 0.1rem;left: 0;right: 0;text-align: center;color: #333;font-size: 0.36rem;}"),a.push(".imgModule["+d+"] .l-item .l-img{min-height: 0.5rem;display: block;position: relative;}"),a.push(".minHeight.imgModule["+d+"] .l-item .l-img{min-height: 0.75rem;}"),a.push(".imgModule["+d+"] .l-item .l-img img{width: 100%;display: block;height: 100%;}"),a.push(".imgModule2["+d+"]{}"),a.push(".imgModule2["+d+"] .l-item{float:left;width:50%;}"),a.push(".imgModule3["+d+"]{}"),a.push(".imgModule3["+d+"] .l-item{width:33.3%;float:left;}"),c=b.createElement("style"),c.type="text/css",c.innerHTML=a.join(""),b.getElementsByTagName("head")[0].appendChild(c)},f=function(a,b){return a&&a instanceof Object?a:a?(b||document).querySelector(a):null},g=function(a){return Object.prototype.toString.call(a).split(/\s(\w+)/)[1].toLowerCase()},h=function(a,b){for(var c in b)b.hasOwnProperty(c)&&("object"!=g(b[c])?void 0!=b[c]&&(a[c]=b[c]):a[c]=h(a[c]||{},b[c]));return a},i=function(a,b){return b&&"object"==g(b)?a.replace(/\{([^{}]+)\}/g,function(a,c){var d=b[c];return void 0!==d?""+d:""}):a.toString()},function(b,j){var k,l,m,n,o,p,q,s,t,u,v,w,x,y,z,A,B,C;b=f(b),j=h({teml:a,css:"",data:null,onBefore:function(){},onAfter:function(){}},j),k="px ",l=void 0,m=j.id,d=m||e("imgModule"),n=j.teml,o=j.adContent,p=j.adUrl,q=j.column||"1",s=function(a,b){return isNaN(parseFloat(a))?b:parseFloat(a)},t=s(j.paddingLeft,5),u=s(j.paddingRight,5),v=s(j.paddingTop,0),w=s(j.paddingBottom,0),x=j.moduleSpm,y=j.moduleName||"",z=j.backgroundColor,A=function(a){if(!a||!a.length)return h(b.style,{display:"none"});var c=[];j.onBefore(a,j,b),a&&a.length>0&&(a.sort(function(a,b){return b.sort-a.sort}),a.map(function(a){("https://www.changyoyo.com"==a.adUrl||!a.adUrl)&&(a.adUrl="javascript:void(0)",a.id="no"),a.adUrl=a.adUrl.replace(/(http.*?.jfmore.com)(\/.*)/,"$2"),c.push(i(n,a))})),b.innerHTML=c.join(""),setTimeout(function(){b.classList.remove("minHeight")},2e3),j.onAfter(a,j,b)},b.setAttribute(d,""),b.classList.add("imgModule"),!b.id&&b.setAttribute("id",d),b.setAttribute("title",y),b.classList.add("minHeight"),b.classList.add("imgModule"+q),l!=t&&h(b.style,{paddingLeft:t+k}),l!=u&&h(b.style,{paddingRight:u+k}),l!=v&&(/-/.test(v)?h(b.style,{marginTop:v+k}):h(b.style,{paddingTop:v+k})),l!=w&&(/-/.test(w)?h(b.style,{marginBottom:w+k}):h(b.style,{paddingBottom:w+k})),z&&h(b.style,{backgroundColor:z}),x&&(b.setAttribute("data-spm",x),b.setAttribute("data-spm-type","all")),j.data?(C=g(j.data),"array"==C?B=j.data:"object"==C&&(B=[j.data]),B&&A(B)):A([{id:1,sort:0,adUrl:p,adContent:o}]),c()}}(),a.CY.imgModule=c,c)});