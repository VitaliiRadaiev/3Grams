var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.5-178
*/
!function(a){window.Inputmask=a(window.dependencyLib||jQuery,window,document)}(function(a,b,c,d){function e(b,c,g){return this instanceof e?(this.el=d,this.events={},this.maskset=d,this.refreshValue=!1,void(g!==!0&&(a.isPlainObject(b)?c=b:(c=c||{},c.alias=b),this.opts=a.extend(!0,{},this.defaults,c),this.noMasksCache=c&&c.definitions!==d,this.userOptions=c||{},this.isRTL=this.opts.numericInput,f(this.opts.alias,c,this.opts)))):new e(b,c,g)}function f(b,c,g){var h=e.prototype.aliases[b];return h?(h.alias&&f(h.alias,d,g),a.extend(!0,g,h),a.extend(!0,g,c),!0):(null===g.mask&&(g.mask=b),!1)}function g(b,c){function f(b,f,g){if(null!==b&&""!==b||(b="*{*}"),1===b.length&&g.greedy===!1&&0!==g.repeat&&(g.placeholder=""),g.repeat>0||"*"===g.repeat||"+"===g.repeat){var h="*"===g.repeat?0:"+"===g.repeat?1:g.repeat;b=g.groupmarker.start+b+g.groupmarker.end+g.quantifiermarker.start+h+","+g.repeat+g.quantifiermarker.end}var i;return e.prototype.masksCache[b]===d||c===!0?(i={mask:b,maskToken:e.prototype.analyseMask(b,g),validPositions:{},_buffer:d,buffer:d,tests:{},metadata:f,maskLength:d},c!==!0&&(e.prototype.masksCache[g.numericInput?b.split("").reverse().join(""):b]=i,i=a.extend(!0,{},e.prototype.masksCache[g.numericInput?b.split("").reverse().join(""):b]))):i=a.extend(!0,{},e.prototype.masksCache[g.numericInput?b.split("").reverse().join(""):b]),i}var g;if(a.isFunction(b.mask)&&(b.mask=b.mask(b)),a.isArray(b.mask)){if(b.mask.length>1){b.keepStatic=null===b.keepStatic||b.keepStatic;var h=b.groupmarker.start;return a.each(b.numericInput?b.mask.reverse():b.mask,function(c,e){h.length>1&&(h+=b.groupmarker.end+b.alternatormarker+b.groupmarker.start),h+=e.mask===d||a.isFunction(e.mask)?e:e.mask}),h+=b.groupmarker.end,f(h,b.mask,b)}b.mask=b.mask.pop()}return g=b.mask&&b.mask.mask!==d&&!a.isFunction(b.mask.mask)?f(b.mask.mask,b.mask,b):f(b.mask,b.mask,b)}function h(f,g,i){function n(a,b,c){b=b||0;var e,f,g,h=[],j=0,k=q();V=Y!==d?Y.maxLength:d,V===-1&&(V=d);do a===!0&&o().validPositions[j]?(g=o().validPositions[j],f=g.match,e=g.locator.slice(),h.push(c===!0?g.input:c===!1?f.nativeDef:I(j,f))):(g=t(j,e,j-1),f=g.match,e=g.locator.slice(),(i.jitMasking===!1||j<k||"number"==typeof i.jitMasking&&isFinite(i.jitMasking)&&i.jitMasking>j)&&h.push(c===!1?f.nativeDef:I(j,f))),j++;while((V===d||j<V)&&(null!==f.fn||""!==f.def)||b>j);return""===h[h.length-1]&&h.pop(),o().maskLength=j+1,h}function o(){return g}function p(a){var b=o();b.buffer=d,a!==!0&&(b.validPositions={},b.p=0)}function q(a,b,c){var e=-1,f=-1,g=c||o().validPositions;a===d&&(a=-1);for(var h in g){var i=parseInt(h);g[i]&&(b||g[i].generatedInput!==!0)&&(i<=a&&(e=i),i>=a&&(f=i))}return e!==-1&&a-e>1||f<a?e:f}function r(b,c,e,f){function g(a){var b=o().validPositions[a];if(b!==d&&null===b.match.fn){var c=o().validPositions[a-1],e=o().validPositions[a+1];return c!==d&&e!==d}return!1}var h,j=b,k=a.extend(!0,{},o().validPositions),l=!1;for(o().p=b,h=c-1;h>=j;h--)o().validPositions[h]!==d&&(e!==!0&&(!o().validPositions[h].match.optionality&&g(h)||i.canClearPosition(o(),h,q(),f,i)===!1)||delete o().validPositions[h]);for(p(!0),h=j+1;h<=q();){for(;o().validPositions[j]!==d;)j++;if(h<j&&(h=j+1),o().validPositions[h]===d&&D(h))h++;else{var m=t(h);l===!1&&k[j]&&k[j].match.def===m.match.def?(o().validPositions[j]=a.extend(!0,{},k[j]),o().validPositions[j].input=m.input,delete o().validPositions[h],h++):v(j,m.match.def)?C(j,m.input||I(h),!0)!==!1&&(delete o().validPositions[h],h++,l=!0):D(h)||(h++,j--),j++}}p(!0)}function s(a,b){for(var c,e=a,f=q(),g=o().validPositions[f]||w(0)[0],h=g.alternation!==d?g.locator[g.alternation].toString().split(","):[],j=0;j<e.length&&(c=e[j],!(c.match&&(i.greedy&&c.match.optionalQuantifier!==!0||(c.match.optionality===!1||c.match.newBlockMarker===!1)&&c.match.optionalQuantifier!==!0)&&(g.alternation===d||g.alternation!==c.alternation||c.locator[g.alternation]!==d&&B(c.locator[g.alternation].toString().split(","),h)))||b===!0&&(null!==c.match.fn||/[0-9a-bA-Z]/.test(c.match.def)));j++);return c}function t(a,b,c){return o().validPositions[a]||s(w(a,b?b.slice():b,c))}function u(a){return o().validPositions[a]?o().validPositions[a]:w(a)[0]}function v(a,b){for(var c=!1,d=w(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def===b){c=!0;break}return c}function w(b,c,e){function f(c,e,g,h){function k(g,h,m){function r(b,c){var d=0===a.inArray(b,c.matches);return d||a.each(c.matches,function(a,e){if(e.isQuantifier===!0&&(d=r(b,c.matches[a-1])))return!1}),d}function s(b,c,e){var f,g;return(o().tests[b]||o().validPositions[b])&&a.each(o().tests[b]||[o().validPositions[b]],function(a,b){var h=e!==d?e:b.alternation,i=b.locator[h]!==d?b.locator[h].toString().indexOf(c):-1;(g===d||i<g)&&i!==-1&&(f=b,g=i)}),f?f.locator.slice((e!==d?e:f.alternation)+1):e!==d?s(b,c):d}function t(a,c){return null===a.match.fn&&null!==c.match.fn&&c.match.fn.test(a.match.def,o(),b,!1,i,!1)}if(l>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+o().mask;if(l===b&&g.matches===d)return n.push({match:g,locator:h.reverse(),cd:q}),!0;if(g.matches!==d){if(g.isGroup&&m!==g){if(g=k(c.matches[a.inArray(g,c.matches)+1],h))return!0}else if(g.isOptional){var u=g;if(g=f(g,e,h,m)){if(j=n[n.length-1].match,!r(j,u))return!0;p=!0,l=b}}else if(g.isAlternator){var v,w=g,x=[],y=n.slice(),z=h.length,A=e.length>0?e.shift():-1;if(A===-1||"string"==typeof A){var B,C=l,D=e.slice(),E=[];if("string"==typeof A)E=A.split(",");else for(B=0;B<w.matches.length;B++)E.push(B);for(var F=0;F<E.length;F++){if(B=parseInt(E[F]),n=[],e=s(l,B,z)||D.slice(),g=k(w.matches[B]||c.matches[B],[B].concat(h),m)||g,g!==!0&&g!==d&&E[E.length-1]<w.matches.length){var G=a.inArray(g,c.matches)+1;c.matches.length>G&&(g=k(c.matches[G],[G].concat(h.slice(1,h.length)),m),g&&(E.push(G.toString()),a.each(n,function(a,b){b.alternation=h.length-1})))}v=n.slice(),l=C,n=[];for(var H=0;H<v.length;H++){var I=v[H],J=!1;I.alternation=I.alternation||z;for(var K=0;K<x.length;K++){var L=x[K];if(("string"!=typeof A||a.inArray(I.locator[I.alternation].toString(),E)!==-1)&&(I.match.def===L.match.def||t(I,L))){J=I.match.nativeDef===L.match.nativeDef,I.alternation==L.alternation&&L.locator[L.alternation].toString().indexOf(I.locator[I.alternation])===-1&&(L.locator[L.alternation]=L.locator[L.alternation]+","+I.locator[I.alternation],L.alternation=I.alternation,null==I.match.fn&&(L.na=L.na||I.locator[I.alternation].toString(),L.na.indexOf(I.locator[I.alternation])===-1&&(L.na=L.na+","+I.locator[I.alternation])));break}}J||x.push(I)}}"string"==typeof A&&(x=a.map(x,function(b,c){if(isFinite(c)){var e,f=b.alternation,g=b.locator[f].toString().split(",");b.locator[f]=d,b.alternation=d;for(var h=0;h<g.length;h++)e=a.inArray(g[h],E)!==-1,e&&(b.locator[f]!==d?(b.locator[f]+=",",b.locator[f]+=g[h]):b.locator[f]=parseInt(g[h]),b.alternation=f);if(b.locator[f]!==d)return b}})),n=y.concat(x),l=b,p=n.length>0,e=D.slice()}else g=k(w.matches[A]||c.matches[A],[A].concat(h),m);if(g)return!0}else if(g.isQuantifier&&m!==c.matches[a.inArray(g,c.matches)-1])for(var M=g,N=e.length>0?e.shift():0;N<(isNaN(M.quantifier.max)?N+1:M.quantifier.max)&&l<=b;N++){var O=c.matches[a.inArray(M,c.matches)-1];if(g=k(O,[N].concat(h),O)){if(j=n[n.length-1].match,j.optionalQuantifier=N>M.quantifier.min-1,r(j,O)){if(N>M.quantifier.min-1){p=!0,l=b;break}return!0}return!0}}else if(g=f(g,e,h,m))return!0}else l++}for(var m=e.length>0?e.shift():0;m<c.matches.length;m++)if(c.matches[m].isQuantifier!==!0){var r=k(c.matches[m],[m].concat(g),h);if(r&&l===b)return r;if(l>b)break}}function g(b){var c=[];return a.isArray(b)||(b=[b]),b.length>0&&(b[0].alternation===d?(c=s(b.slice()).locator.slice(),0===c.length&&(c=b[0].locator.slice())):a.each(b,function(a,b){if(""!==b.def)if(0===c.length)c=b.locator.slice();else for(var d=0;d<c.length;d++)b.locator[d]&&c[d].toString().indexOf(b.locator[d])===-1&&(c[d]+=","+b.locator[d])})),c}function h(a){return i.keepStatic&&b>0&&a.length>1+(""===a[a.length-1].match.def?1:0)&&a[0].match.optionality!==!0&&a[0].match.optionalQuantifier!==!0&&null===a[0].match.fn&&!/[0-9a-bA-Z]/.test(a[0].match.def)?[s(a)]:a}var j,k=o().maskToken,l=c?e:0,m=c?c.slice():[0],n=[],p=!1,q=c?c.join(""):"";if(b>-1){if(c===d){for(var r,t=b-1;(r=o().validPositions[t]||o().tests[t])===d&&t>-1;)t--;r!==d&&t>-1&&(m=g(r),q=m.join(""),l=t)}if(o().tests[b]&&o().tests[b][0].cd===q)return h(o().tests[b]);for(var u=m.shift();u<k.length;u++){var v=f(k[u],m,[u]);if(v&&l===b||l>b)break}}return(0===n.length||p)&&n.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:"",placeholder:""},locator:[],cd:q}),c!==d&&o().tests[b]?h(a.extend(!0,[],n)):(o().tests[b]=a.extend(!0,[],n),h(o().tests[b]))}function x(){return o()._buffer===d&&(o()._buffer=n(!1,1),o().buffer===d&&(o().buffer=o()._buffer.slice())),o()._buffer}function y(a){return o().buffer!==d&&a!==!0||(o().buffer=n(!0,q(),!0)),o().buffer}function z(a,b,c){var e,f;if(a===!0)p(),a=0,b=c.length;else for(e=a;e<b;e++)delete o().validPositions[e];for(f=a,e=a;e<b;e++)if(p(!0),c[e]!==i.skipOptionalPartCharacter){var g=C(f,c[e],!0,!0);g!==!1&&(p(!0),f=g.caret!==d?g.caret:g.pos+1)}}function A(a,b,c){switch(i.casing||b.casing){case"upper":a=a.toUpperCase();break;case"lower":a=a.toLowerCase();break;case"title":var d=o().validPositions[c-1];a=0===c||d&&d.input===String.fromCharCode(e.keyCode.SPACE)?a.toUpperCase():a.toLowerCase()}return a}function B(b,c,e){for(var f,g=i.greedy?c:c.slice(0,1),h=!1,j=e!==d?e.split(","):[],k=0;k<j.length;k++)(f=b.indexOf(j[k]))!==-1&&b.splice(f,1);for(var l=0;l<b.length;l++)if(a.inArray(b[l],g)!==-1){h=!0;break}return h}function C(b,c,f,g,h){function j(a){var b=Z?a.begin-a.end>1||a.begin-a.end===1:a.end-a.begin>1||a.end-a.begin===1;return b&&0===a.begin&&a.end===o().maskLength?"full":b}function k(c,e,f){var h=!1;return a.each(w(c),function(k,l){for(var m=l.match,s=e?1:0,t="",u=m.cardinality;u>s;u--)t+=G(c-(u-1));if(e&&(t+=e),y(!0),h=null!=m.fn?m.fn.test(t,o(),c,f,i,j(b)):(e===m.def||e===i.skipOptionalPartCharacter)&&""!==m.def&&{c:I(c,m,!0)||m.def,pos:c},h!==!1){var v=h.c!==d?h.c:e;v=v===i.skipOptionalPartCharacter&&null===m.fn?I(c,m,!0)||m.def:v;var w=c,x=y();if(h.remove!==d&&(a.isArray(h.remove)||(h.remove=[h.remove]),a.each(h.remove.sort(function(a,b){return b-a}),function(a,b){r(b,b+1,!0)})),h.insert!==d&&(a.isArray(h.insert)||(h.insert=[h.insert]),a.each(h.insert.sort(function(a,b){return a-b}),function(a,b){C(b.pos,b.c,!0,g)})),h.refreshFromBuffer){var B=h.refreshFromBuffer;if(z(B===!0?B:B.start,B.end,x),h.pos===d&&h.c===d)return h.pos=q(),!1;if(w=h.pos!==d?h.pos:c,w!==c)return h=a.extend(h,C(w,v,!0,g)),!1}else if(h!==!0&&h.pos!==d&&h.pos!==c&&(w=h.pos,z(c,w,y().slice()),w!==c))return h=a.extend(h,C(w,v,!0)),!1;return(h===!0||h.pos!==d||h.c!==d)&&(k>0&&p(!0),n(w,a.extend({},l,{input:A(v,m,w)}),g,j(b))||(h=!1),!1)}}),h}function l(b,c,e){var f,h,j,k,l,m,n,r,s=a.extend(!0,{},o().validPositions),t=!1,u=q();for(k=o().validPositions[u];u>=0;u--)if(j=o().validPositions[u],j&&j.alternation!==d){if(f=u,h=o().validPositions[f].alternation,k.locator[j.alternation]!==j.locator[j.alternation])break;k=j}if(h!==d){r=parseInt(f);var v=k.locator[k.alternation||h]!==d?k.locator[k.alternation||h]:n[0];v.length>0&&(v=v.split(",")[0]);var x=o().validPositions[r],y=o().validPositions[r-1];a.each(w(r,y?y.locator:d,r-1),function(f,j){n=j.locator[h]?j.locator[h].toString().split(","):[];for(var k=0;k<n.length;k++){var u=[],w=0,y=0,z=!1;if(v<n[k]&&(j.na===d||a.inArray(n[k],j.na.split(","))===-1)){o().validPositions[r]=a.extend(!0,{},j);var A=o().validPositions[r].locator;for(o().validPositions[r].locator[h]=parseInt(n[k]),null==j.match.fn?(x.input!==j.match.def&&(z=!0,x.generatedInput!==!0&&u.push(x.input)),y++,o().validPositions[r].generatedInput=!/[0-9a-bA-Z]/.test(j.match.def),o().validPositions[r].input=j.match.def):o().validPositions[r].input=x.input,l=r+1;l<q(d,!0)+1;l++)m=o().validPositions[l],m&&m.generatedInput!==!0&&/[0-9a-bA-Z]/.test(m.input)?u.push(m.input):l<b&&w++,delete o().validPositions[l];for(z&&u[0]===j.match.def&&u.shift(),p(!0),t=!0;u.length>0;){var B=u.shift();if(B!==i.skipOptionalPartCharacter&&!(t=C(q(d,!0)+1,B,!1,g,!0)))break}if(t){o().validPositions[r].locator=A;var D=q(b)+1;for(l=r+1;l<q()+1;l++)m=o().validPositions[l],(m===d||null==m.match.fn)&&l<b+(y-w)&&y++;b+=y-w,t=C(b>D?D:b,c,e,g,!0)}if(t)return!1;p(),o().validPositions=a.extend(!0,{},s)}}})}return t}function m(b,c){var e=o().validPositions[c];if(e)for(var f=e.locator,g=f.length,h=b;h<c;h++)if(o().validPositions[h]===d&&!D(h,!0)){var i=w(h).slice(),j=s(i,!0),l=-1;""===i[i.length-1].match.def&&i.pop(),a.each(i,function(a,b){for(var c=0;c<g;c++){if(b.locator[c]===d||!B(b.locator[c].toString().split(","),f[c].toString().split(","),b.na)){var e=f[c],h=j.locator[c],i=b.locator[c];e-h>Math.abs(e-i)&&(j=b);break}l<c&&(l=c,j=b)}}),j=a.extend({},j,{input:I(h,j.match,!0)||j.match.def}),j.generatedInput=!0,n(h,j,!0),o().validPositions[c]=d,k(c,e.input,!0)}}function n(b,c,e,f){if(f||i.insertMode&&o().validPositions[b]!==d&&e===d){var g,h=a.extend(!0,{},o().validPositions),j=q(d,!0);for(g=b;g<=j;g++)delete o().validPositions[g];o().validPositions[b]=a.extend(!0,{},c);var k,l=!0,m=o().validPositions,n=!1,r=o().maskLength;for(g=k=b;g<=j;g++){var s=h[g];if(s!==d)for(var t=k;t<o().maskLength&&(null===s.match.fn&&m[g]&&(m[g].match.optionalQuantifier===!0||m[g].match.optionality===!0)||null!=s.match.fn);){if(t++,n===!1&&h[t]&&h[t].match.def===s.match.def)o().validPositions[t]=a.extend(!0,{},h[t]),o().validPositions[t].input=s.input,u(t),k=t,l=!0;else if(v(t,s.match.def)){var w=C(t,s.input,!0,!0);l=w!==!1,k=w.caret||w.insert?q():t,n=!0}else if(l=s.generatedInput===!0,!l&&t>=o().maskLength-1)break;if(o().maskLength<r&&(o().maskLength=r),l)break}if(!l)break}if(!l)return o().validPositions=a.extend(!0,{},h),p(!0),!1}else o().validPositions[b]=a.extend(!0,{},c);return p(!0),!0}function u(b){for(var c=b-1;c>-1&&!o().validPositions[c];c--);var e,f;for(c++;c<b;c++)o().validPositions[c]===d&&(i.jitMasking===!1||i.jitMasking>c)&&(f=w(c,t(c-1).locator,c-1).slice(),""===f[f.length-1].match.def&&f.pop(),e=s(f),e&&(e.match.def===i.radixPointDefinitionSymbol||!D(c,!0)||a.inArray(i.radixPoint,y())<c&&e.match.fn&&e.match.fn.test(I(c),o(),c,!1,i))&&(F=k(c,I(c,e.match,!0)||(null==e.match.fn?e.match.def:""!==I(c)?I(c):y()[c]),!0),F!==!1&&(o().validPositions[F.pos||c].generatedInput=!0)))}f=f===!0;var x=b;b.begin!==d&&(x=Z&&!j(b)?b.end:b.begin);var F=!0,H=a.extend(!0,{},o().validPositions);if(a.isFunction(i.preValidation)&&!f&&g!==!0&&(F=i.preValidation(y(),x,c,j(b),i)),F===!0){if(u(x),j(b)&&(P(d,e.keyCode.DELETE,b),x=o().p),x<o().maskLength&&(F=k(x,c,f),(!f||g===!0)&&F===!1)){var J=o().validPositions[x];if(!J||null!==J.match.fn||J.match.def!==c&&c!==i.skipOptionalPartCharacter){if((i.insertMode||o().validPositions[E(x)]===d)&&!D(x,!0))for(var K=x+1,L=E(x);K<=L;K++)if(F=k(K,c,f),F!==!1){m(x,F.pos!==d?F.pos:K),x=K;break}}else F={caret:E(x)}}F===!1&&i.keepStatic&&!f&&h!==!0&&(F=l(x,c,f)),F===!0&&(F={pos:x})}if(a.isFunction(i.postValidation)&&F!==!1&&!f&&g!==!0){var M=i.postValidation(y(!0),F,i);if(M.refreshFromBuffer&&M.buffer){var N=M.refreshFromBuffer;z(N===!0?N:N.start,N.end,M.buffer)}F=M===!0?F:M}return F.pos===d&&(F.pos=x),F===!1&&(p(!0),o().validPositions=a.extend(!0,{},H)),F}function D(a,b){var c=t(a).match;if(""===c.def&&(c=u(a).match),null!=c.fn)return c.fn;if(b!==!0&&a>-1){var d=w(a);return d.length>1+(""===d[d.length-1].match.def?1:0)}return!1}function E(a,b){var c=o().maskLength;if(a>=c)return c;for(var d=a;++d<c&&(b===!0&&(u(d).match.newBlockMarker!==!0||!D(d))||b!==!0&&!D(d)););return d}function F(a,b){var c,d=a;if(d<=0)return 0;for(;--d>0&&(b===!0&&u(d).match.newBlockMarker!==!0||b!==!0&&!D(d)&&(c=w(d),c.length<2||2===c.length&&""===c[1].match.def)););return d}function G(a){return o().validPositions[a]===d?I(a):o().validPositions[a].input}function H(b,c,e,f,g){if(f&&a.isFunction(i.onBeforeWrite)){var h=i.onBeforeWrite(f,c,e,i);if(h){if(h.refreshFromBuffer){var j=h.refreshFromBuffer;z(j===!0?j:j.start,j.end,h.buffer||c),c=y(!0)}e!==d&&(e=h.caret!==d?h.caret:e)}}b!==d&&(b.inputmask._valueSet(c.join("")),e===d||f!==d&&"blur"===f.type?R(b,c,e):m&&"input"===f.type?setTimeout(function(){L(b,e)},0):L(b,e),g===!0&&(_=!0,a(b).trigger("input")))}function I(b,c,e){if(c=c||u(b).match,c.placeholder!==d||e===!0)return a.isFunction(c.placeholder)?c.placeholder(i):c.placeholder;if(null===c.fn){if(b>-1&&o().validPositions[b]===d){var f,g=w(b),h=[];if(g.length>1+(""===g[g.length-1].match.def?1:0))for(var j=0;j<g.length;j++)if(g[j].match.optionality!==!0&&g[j].match.optionalQuantifier!==!0&&(null===g[j].match.fn||f===d||g[j].match.fn.test(f.match.def,o(),b,!0,i)!==!1)&&(h.push(g[j]),null===g[j].match.fn&&(f=g[j]),h.length>1&&/[0-9a-bA-Z]/.test(h[0].match.def)))return i.placeholder.charAt(b%i.placeholder.length)}return c.def}return i.placeholder.charAt(b%i.placeholder.length)}function J(b,f,g,h,j){function k(a,b){var c=x().slice(a,E(a)).join("").indexOf(b);return c!==-1&&!D(a)&&u(a).match.nativeDef===b.charAt(b.length-1)}var l=h.slice(),m="",n=0,r=d;if(p(),o().p=E(-1),!g)if(i.autoUnmask!==!0){var s=x().slice(0,E(-1)).join(""),v=l.join("").match(new RegExp("^"+e.escapeRegex(s),"g"));v&&v.length>0&&(l.splice(0,v.length*s.length),n=E(n))}else n=E(n);if(a.each(l,function(c,e){if(e!==d){var f=new a.Event("_checkval");f.which=e.charCodeAt(0),m+=e;var h=q(d,!0),j=o().validPositions[h],l=t(h+1,j?j.locator.slice():d,h);if(!k(n,m)||g||i.autoUnmask){var s=g?c:null==l.match.fn&&l.match.optionality&&h+1<o().p?h+1:o().p;r=da.keypressEvent.call(b,f,!0,!1,g,s),n=s+1,m=""}else r=da.keypressEvent.call(b,f,!0,!1,!0,h+1);if(!g&&a.isFunction(i.onBeforeWrite)){var u=r.forwardPosition;if(r=i.onBeforeWrite(f,y(),r.forwardPosition,i),r.forwardPosition=u,r&&r.refreshFromBuffer){var v=r.refreshFromBuffer;z(v===!0?v:v.start,v.end,r.buffer),p(!0),r.caret&&(o().p=r.caret,r.forwardPosition=r.caret)}}}}),f){var w=d;c.activeElement===b&&r&&(w=i.numericInput?F(r.forwardPosition):r.forwardPosition),H(b,y(),w,j||new a.Event("checkval"))}}function K(b){if(b){if(b.inputmask===d)return b.value;b.inputmask&&b.inputmask.refreshValue&&da.setValueEvent.call(b)}var c=[],e=o().validPositions;for(var f in e)e[f].match&&null!=e[f].match.fn&&c.push(e[f].input);var g=0===c.length?"":(Z?c.reverse():c).join("");if(a.isFunction(i.onUnMask)){var h=(Z?y().slice().reverse():y()).join("");g=i.onUnMask(h,g,i)}return g}function L(a,e,f,g){function h(a){if(g!==!0&&Z&&"number"==typeof a&&(!i.greedy||""!==i.placeholder)){var b=y().join("").length;a=b-a}return a}var k;if("number"!=typeof e)return a.setSelectionRange?(e=a.selectionStart,f=a.selectionEnd):b.getSelection?(k=b.getSelection().getRangeAt(0),k.commonAncestorContainer.parentNode!==a&&k.commonAncestorContainer!==a||(e=k.startOffset,f=k.endOffset)):c.selection&&c.selection.createRange&&(k=c.selection.createRange(),e=0-k.duplicate().moveStart("character",-a.inputmask._valueGet().length),f=e+k.text.length),{begin:h(e),end:h(f)};e=h(e),f=h(f),f="number"==typeof f?f:e;var l=parseInt(((a.ownerDocument.defaultView||b).getComputedStyle?(a.ownerDocument.defaultView||b).getComputedStyle(a,null):a.currentStyle).fontSize)*f;if(a.scrollLeft=l>a.scrollWidth?l:0,j||i.insertMode!==!1||e!==f||f++,a.setSelectionRange)a.selectionStart=e,a.selectionEnd=f;else if(b.getSelection){if(k=c.createRange(),a.firstChild===d||null===a.firstChild){var m=c.createTextNode("");a.appendChild(m)}k.setStart(a.firstChild,e<a.inputmask._valueGet().length?e:a.inputmask._valueGet().length),k.setEnd(a.firstChild,f<a.inputmask._valueGet().length?f:a.inputmask._valueGet().length),k.collapse(!0);var n=b.getSelection();n.removeAllRanges(),n.addRange(k)}else a.createTextRange&&(k=a.createTextRange(),k.collapse(!0),k.moveEnd("character",f),k.moveStart("character",e),k.select());R(a,d,{begin:e,end:f})}function M(b){var c,e,f=y(),g=f.length,h=q(),i={},j=o().validPositions[h],k=j!==d?j.locator.slice():d;for(c=h+1;c<f.length;c++)e=t(c,k,c-1),k=e.locator.slice(),i[c]=a.extend(!0,{},e);var l=j&&j.alternation!==d?j.locator[j.alternation]:d;for(c=g-1;c>h&&(e=i[c],(e.match.optionality||e.match.optionalQuantifier||l&&(l!==i[c].locator[j.alternation]&&null!=e.match.fn||null===e.match.fn&&e.locator[j.alternation]&&B(e.locator[j.alternation].toString().split(","),l.toString().split(","))&&""!==w(c)[0].def))&&f[c]===I(c,e.match));c--)g--;return b?{l:g,def:i[g]?i[g].match:d}:g}function N(a){for(var b,c=M(),d=a.length;c<d&&!D(c+1)&&(b=u(c+1))&&b.match.optionality!==!0&&b.match.optionalQuantifier!==!0;)c++;for(;(b=u(c-1))&&b.match.optionality&&b.input===i.skipOptionalPartCharacter;)c--;return a.splice(c),a}function O(b){if(a.isFunction(i.isComplete))return i.isComplete(b,i);if("*"===i.repeat)return d;var c=!1,e=M(!0),f=F(e.l);if(e.def===d||e.def.newBlockMarker||e.def.optionality||e.def.optionalQuantifier){c=!0;for(var g=0;g<=f;g++){var h=t(g).match;if(null!==h.fn&&o().validPositions[g]===d&&h.optionality!==!0&&h.optionalQuantifier!==!0||null===h.fn&&b[g]!==I(g,h)){c=!1;break}}}return c}function P(b,c,f,g){function h(){if(i.keepStatic){for(var c=[],e=q(-1,!0),f=a.extend(!0,{},o().validPositions),g=o().validPositions[e];e>=0;e--){var h=o().validPositions[e];if(h){if(h.generatedInput!==!0&&/[0-9a-bA-Z]/.test(h.input)&&c.push(h.input),delete o().validPositions[e],h.alternation!==d&&h.locator[h.alternation]!==g.locator[h.alternation])break;g=h}}if(e>-1)for(o().p=E(q(-1,!0));c.length>0;){var j=new a.Event("keypress");j.which=c.pop().charCodeAt(0),da.keypressEvent.call(b,j,!0,!1,!1,o().p)}else o().validPositions=a.extend(!0,{},f)}}if((i.numericInput||Z)&&(c===e.keyCode.BACKSPACE?c=e.keyCode.DELETE:c===e.keyCode.DELETE&&(c=e.keyCode.BACKSPACE),Z)){var j=f.end;f.end=f.begin,f.begin=j}c===e.keyCode.BACKSPACE&&(f.end-f.begin<1||i.insertMode===!1)?(f.begin=F(f.begin),o().validPositions[f.begin]===d||o().validPositions[f.begin].input!==i.groupSeparator&&o().validPositions[f.begin].input!==i.radixPoint||f.begin--):c===e.keyCode.DELETE&&f.begin===f.end&&(f.end=D(f.end,!0)?f.end+1:E(f.end)+1,o().validPositions[f.begin]===d||o().validPositions[f.begin].input!==i.groupSeparator&&o().validPositions[f.begin].input!==i.radixPoint||f.end++),r(f.begin,f.end,!1,g),g!==!0&&h();var k=q(f.begin,!0);k<f.begin?o().p=E(k):g!==!0&&(o().p=f.begin)}function Q(d){function e(a){var b,e=c.createElement("span");for(var f in h)isNaN(f)&&f.indexOf("font")!==-1&&(e.style[f]=h[f]);e.style.textTransform=h.textTransform,e.style.letterSpacing=h.letterSpacing,e.style.position="absolute",e.style.height="auto",e.style.width="auto",e.style.visibility="hidden",e.style.whiteSpace="nowrap",c.body.appendChild(e);var g,i=d.inputmask._valueGet(),j=0;for(b=0,g=i.length;b<=g;b++){if(e.innerHTML+=i.charAt(b)||"_",e.offsetWidth>=a){var k=a-j,l=e.offsetWidth-a;e.innerHTML=i.charAt(b),k-=e.offsetWidth/3,b=k<l?b-1:b;break}j=e.offsetWidth}return c.body.removeChild(e),b}function f(){W.style.position="absolute",W.style.top=g.top+"px",W.style.left=g.left+"px",W.style.width=parseInt(d.offsetWidth)-parseInt(h.paddingLeft)-parseInt(h.paddingRight)-parseInt(h.borderLeftWidth)-parseInt(h.borderRightWidth)+"px",W.style.height=parseInt(d.offsetHeight)-parseInt(h.paddingTop)-parseInt(h.paddingBottom)-parseInt(h.borderTopWidth)-parseInt(h.borderBottomWidth)+"px",W.style.lineHeight=W.style.height,W.style.zIndex=isNaN(h.zIndex)?-1:h.zIndex-1,W.style.webkitAppearance="textfield",W.style.mozAppearance="textfield",W.style.Appearance="textfield"}var g=a(d).position(),h=(d.ownerDocument.defaultView||b).getComputedStyle(d,null);d.parentNode;W=c.createElement("div"),c.body.appendChild(W);for(var j in h)isNaN(j)&&"cssText"!==j&&j.indexOf("webkit")==-1&&(W.style[j]=h[j]);d.style.backgroundColor="transparent",d.style.color="transparent",d.style.webkitAppearance="caret",d.style.mozAppearance="caret",d.style.Appearance="caret",f(),a(b).on("resize",function(c){g=a(d).position(),h=(d.ownerDocument.defaultView||b).getComputedStyle(d,null),f()}),a(d).on("click",function(a){return L(d,e(a.clientX)),da.clickEvent.call(this,[a])}),a(d).on("keydown",function(a){a.shiftKey||i.insertMode===!1||setTimeout(function(){R(d)},0)})}function R(a,b,e){function f(){h||null!==k.fn&&l.input!==d?h&&null!==k.fn&&l.input!==d&&(h=!1,g+="</span>"):(h=!0,g+="<span class='im-static''>")}if(W!==d){b=b||y(),e===d?e=L(a):e.begin===d&&(e={begin:e,end:e});var g="",h=!1;if(""!=b){var j,k,l,m=0,n=q();do m===e.begin&&c.activeElement===a&&(g+="<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"),o().validPositions[m]?(l=o().validPositions[m],k=l.match,j=l.locator.slice(),f(),g+=l.input):(l=t(m,j,m-1),k=l.match,j=l.locator.slice(),(i.jitMasking===!1||m<n||"number"==typeof i.jitMasking&&isFinite(i.jitMasking)&&i.jitMasking>m)&&(f(),g+=I(m,k))),m++;while((V===d||m<V)&&(null!==k.fn||""!==k.def)||n>m)}W.innerHTML=g}}function S(b){function e(b,e){function f(b){function f(b){if(a.valHooks&&(a.valHooks[b]===d||a.valHooks[b].inputmaskpatch!==!0)){var c=a.valHooks[b]&&a.valHooks[b].get?a.valHooks[b].get:function(a){return a.value},f=a.valHooks[b]&&a.valHooks[b].set?a.valHooks[b].set:function(a,b){return a.value=b,a};a.valHooks[b]={get:function(a){if(a.inputmask){if(a.inputmask.opts.autoUnmask)return a.inputmask.unmaskedvalue();var b=c(a);return q(d,d,a.inputmask.maskset.validPositions)!==-1||e.nullable!==!0?b:""}return c(a)},set:function(b,c){var d,e=a(b);return d=f(b,c),b.inputmask&&e.trigger("setvalue"),d},inputmaskpatch:!0}}}function g(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():q()!==-1||e.nullable!==!0?c.activeElement===this&&e.clearMaskOnLostFocus?(Z?N(y().slice()).reverse():N(y().slice())).join(""):j.call(this):"":j.call(this)}function h(b){k.call(this,b),this.inputmask&&a(this).trigger("setvalue")}function i(b){ca.on(b,"mouseenter",function(b){var c=a(this),d=this,e=d.inputmask._valueGet();e!==y().join("")&&c.trigger("setvalue")})}var j,k;if(!b.inputmask.__valueGet){if(e.noValuePatching!==!0){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"==typeof"test".__proto__?function(a){return a.__proto__}:function(a){return a.constructor.prototype});var l=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b),"value"):d;l&&l.get&&l.set?(j=l.get,k=l.set,Object.defineProperty(b,"value",{get:g,set:h,configurable:!0})):"INPUT"!==b.tagName&&(j=function(){return this.textContent},k=function(a){this.textContent=a},Object.defineProperty(b,"value",{get:g,set:h,configurable:!0}))}else c.__lookupGetter__&&b.__lookupGetter__("value")&&(j=b.__lookupGetter__("value"),k=b.__lookupSetter__("value"),b.__defineGetter__("value",g),b.__defineSetter__("value",h));b.inputmask.__valueGet=j,b.inputmask.__valueSet=k}b.inputmask._valueGet=function(a){return Z&&a!==!0?j.call(this.el).split("").reverse().join(""):j.call(this.el)},b.inputmask._valueSet=function(a,b){k.call(this.el,null===a||a===d?"":b!==!0&&Z?a.split("").reverse().join(""):a)},j===d&&(j=function(){return this.value},k=function(a){this.value=a},f(b.type),i(b))}}var g=b.getAttribute("type"),h="INPUT"===b.tagName&&a.inArray(g,e.supportsInputType)!==-1||b.isContentEditable||"TEXTAREA"===b.tagName;if(!h)if("INPUT"===b.tagName){var i=c.createElement("input");i.setAttribute("type",g),h="text"===i.type,i=null}else h="partial";return h!==!1&&f(b),h}ca.off(b);var f=e(b,i);if(f!==!1&&(Y=b,U=a(Y),("rtl"===Y.dir||i.rightAlign)&&(Y.style.textAlign="right"),("rtl"===Y.dir||i.numericInput)&&(Y.dir="ltr",Y.removeAttribute("dir"),Y.inputmask.isRTL=!0,Z=!0),i.colorMask===!0&&Q(Y),m&&(Y.hasOwnProperty("inputmode")&&(Y.inputmode=i.inputmode,Y.setAttribute("inputmode",i.inputmode)),"rtfm"===i.androidHack&&(i.colorMask!==!0&&Q(Y),Y.type="password")),f===!0&&(ca.on(Y,"submit",da.submitEvent),ca.on(Y,"reset",da.resetEvent),ca.on(Y,"mouseenter",da.mouseenterEvent),ca.on(Y,"blur",da.blurEvent),ca.on(Y,"focus",da.focusEvent),ca.on(Y,"mouseleave",da.mouseleaveEvent),i.colorMask!==!0&&ca.on(Y,"click",da.clickEvent),ca.on(Y,"dblclick",da.dblclickEvent),ca.on(Y,"paste",da.pasteEvent),ca.on(Y,"dragdrop",da.pasteEvent),ca.on(Y,"drop",da.pasteEvent),ca.on(Y,"cut",da.cutEvent),ca.on(Y,"complete",i.oncomplete),ca.on(Y,"incomplete",i.onincomplete),ca.on(Y,"cleared",i.oncleared),m||i.inputEventOnly===!0||(ca.on(Y,"keydown",da.keydownEvent),ca.on(Y,"keypress",da.keypressEvent)),ca.on(Y,"compositionstart",a.noop),ca.on(Y,"compositionupdate",a.noop),ca.on(Y,"compositionend",a.noop),ca.on(Y,"keyup",a.noop),ca.on(Y,"input",da.inputFallBackEvent),ca.on(Y,"beforeinput",a.noop)),ca.on(Y,"setvalue",da.setValueEvent),x(),""!==Y.inputmask._valueGet(!0)||i.clearMaskOnLostFocus===!1||c.activeElement===Y)){var g=a.isFunction(i.onBeforeMask)?i.onBeforeMask(Y.inputmask._valueGet(!0),i)||Y.inputmask._valueGet(!0):Y.inputmask._valueGet(!0);""!==g&&J(Y,!0,!1,Z?g.split("").reverse():g.split(""));var h=y().slice();T=h.join(""),O(h)===!1&&i.clearIncomplete&&p(),i.clearMaskOnLostFocus&&c.activeElement!==Y&&(q()===-1?h=[]:N(h)),H(Y,h),c.activeElement===Y&&L(Y,E(q()))}}g=g||this.maskset,i=i||this.opts;var T,U,V,W,X,Y=this.el,Z=this.isRTL,$=!1,_=!1,aa=!1,ba=!1,ca={on:function(b,c,f){var g=function(b){if(this.inputmask===d&&"FORM"!==this.nodeName){var c=a.data(this,"_inputmask_opts");c?new e(c).mask(this):ca.off(this)}else{if("setvalue"===b.type||"FORM"===this.nodeName||!(this.disabled||this.readOnly&&!("keydown"===b.type&&b.ctrlKey&&67===b.keyCode||i.tabThrough===!1&&b.keyCode===e.keyCode.TAB))){switch(b.type){case"input":if(_===!0)return _=!1,b.preventDefault();break;case"keydown":$=!1,_=!1;break;case"keypress":if($===!0)return b.preventDefault();$=!0;break;case"click":if(k||l){var g=this,h=arguments;return setTimeout(function(){f.apply(g,h)},0),!1}}var j=f.apply(this,arguments);return j===!1&&(b.preventDefault(),b.stopPropagation()),j}b.preventDefault()}};b.inputmask.events[c]=b.inputmask.events[c]||[],b.inputmask.events[c].push(g),a.inArray(c,["submit","reset"])!==-1?null!=b.form&&a(b.form).on(c,g):a(b).on(c,g)},off:function(b,c){if(b.inputmask&&b.inputmask.events){var d;c?(d=[],d[c]=b.inputmask.events[c]):d=b.inputmask.events,a.each(d,function(c,d){for(;d.length>0;){var e=d.pop();a.inArray(c,["submit","reset"])!==-1?null!=b.form&&a(b.form).off(c,e):a(b).off(c,e)}delete b.inputmask.events[c]})}}},da={keydownEvent:function(b){function d(a){var b=c.createElement("input"),d="on"+a,e=d in b;return e||(b.setAttribute(d,"return;"),e="function"==typeof b[d]),b=null,e}var f=this,g=a(f),h=b.keyCode,j=L(f);if(h===e.keyCode.BACKSPACE||h===e.keyCode.DELETE||l&&h===e.keyCode.BACKSPACE_SAFARI||b.ctrlKey&&h===e.keyCode.X&&!d("cut"))b.preventDefault(),P(f,h,j),H(f,y(!0),o().p,b,f.inputmask._valueGet()!==y().join("")),f.inputmask._valueGet()===x().join("")?g.trigger("cleared"):O(y())===!0&&g.trigger("complete");else if(h===e.keyCode.END||h===e.keyCode.PAGE_DOWN){b.preventDefault();var k=E(q());i.insertMode||k!==o().maskLength||b.shiftKey||k--,L(f,b.shiftKey?j.begin:k,k,!0)}else h===e.keyCode.HOME&&!b.shiftKey||h===e.keyCode.PAGE_UP?(b.preventDefault(),L(f,0,b.shiftKey?j.begin:0,!0)):(i.undoOnEscape&&h===e.keyCode.ESCAPE||90===h&&b.ctrlKey)&&b.altKey!==!0?(J(f,!0,!1,T.split("")),g.trigger("click")):h!==e.keyCode.INSERT||b.shiftKey||b.ctrlKey?i.tabThrough===!0&&h===e.keyCode.TAB?(b.shiftKey===!0?(null===u(j.begin).match.fn&&(j.begin=E(j.begin)),j.end=F(j.begin,!0),j.begin=F(j.end,!0)):(j.begin=E(j.begin,!0),j.end=E(j.begin,!0),j.end<o().maskLength&&j.end--),j.begin<o().maskLength&&(b.preventDefault(),L(f,j.begin,j.end))):b.shiftKey||i.insertMode===!1&&(h===e.keyCode.RIGHT?setTimeout(function(){var a=L(f);L(f,a.begin)},0):h===e.keyCode.LEFT&&setTimeout(function(){var a=L(f);L(f,Z?a.begin+1:a.begin-1)},0)):(i.insertMode=!i.insertMode,L(f,i.insertMode||j.begin!==o().maskLength?j.begin:j.begin-1));i.onKeyDown.call(this,b,y(),L(f).begin,i),aa=a.inArray(h,i.ignorables)!==-1},keypressEvent:function(b,c,f,g,h){
var j=this,k=a(j),l=b.which||b.charCode||b.keyCode;if(!(c===!0||b.ctrlKey&&b.altKey)&&(b.ctrlKey||b.metaKey||aa))return l===e.keyCode.ENTER&&T!==y().join("")&&(T=y().join(""),setTimeout(function(){k.trigger("change")},0)),!0;if(l){46===l&&b.shiftKey===!1&&""!==i.radixPoint&&(l=i.radixPoint.charCodeAt(0));var m,n=c?{begin:h,end:h}:L(j),q=String.fromCharCode(l);o().writeOutBuffer=!0;var r=C(n,q,g);if(r!==!1&&(p(!0),m=r.caret!==d?r.caret:c?r.pos+1:E(r.pos),o().p=m),f!==!1){var s=this;if(setTimeout(function(){i.onKeyValidation.call(s,l,r,i)},0),o().writeOutBuffer&&r!==!1){var t=y();H(j,t,i.numericInput&&r.caret===d?F(m):m,b,c!==!0),c!==!0&&setTimeout(function(){O(t)===!0&&k.trigger("complete")},0)}}if(b.preventDefault(),c)return r.forwardPosition=m,r}},pasteEvent:function(c){var d,e=this,f=c.originalEvent||c,g=a(e),h=e.inputmask._valueGet(!0),j=L(e);Z&&(d=j.end,j.end=j.begin,j.begin=d);var k=h.substr(0,j.begin),l=h.substr(j.end,h.length);if(k===(Z?x().reverse():x()).slice(0,j.begin).join("")&&(k=""),l===(Z?x().reverse():x()).slice(j.end).join("")&&(l=""),Z&&(d=k,k=l,l=d),b.clipboardData&&b.clipboardData.getData)h=k+b.clipboardData.getData("Text")+l;else{if(!f.clipboardData||!f.clipboardData.getData)return!0;h=k+f.clipboardData.getData("text/plain")+l}var m=h;if(a.isFunction(i.onBeforePaste)){if(m=i.onBeforePaste(h,i),m===!1)return c.preventDefault();m||(m=h)}return J(e,!1,!1,Z?m.split("").reverse():m.toString().split("")),H(e,y(),E(q()),c,T!==y().join("")),O(y())===!0&&g.trigger("complete"),c.preventDefault()},inputFallBackEvent:function(b){var c=this,d=c.inputmask._valueGet();if(y().join("")!==d){var f=L(c);if("."===d.charAt(f.begin-1)&&""!==i.radixPoint&&(d=d.split(""),d[f.begin-1]=i.radixPoint.charAt(0),d=d.join("")),d.charAt(f.begin-1)===i.radixPoint&&d.length>y().length){var g=new a.Event("keypress");return g.which=i.radixPoint.charCodeAt(0),da.keypressEvent.call(c,g,!0,!0,!1,f.begin),!1}if(d=d.replace(new RegExp("("+e.escapeRegex(x().join(""))+")*"),""),k){var h=d.replace(y().join(""),"");if(1===h.length){var g=new a.Event("keypress");return g.which=h.charCodeAt(0),da.keypressEvent.call(c,g,!0,!0,!1,o().validPositions[f.begin-1]?f.begin:f.begin-1),!1}}if(f.begin>d.length&&(L(c,d.length),f=L(c)),y().length-d.length!==1||d.charAt(f.begin)===y()[f.begin]||d.charAt(f.begin+1)===y()[f.begin]||D(f.begin)){var j=[],l=n(!0,1).join("");for(j.push(d.substr(0,f.begin)),j.push(d.substr(f.begin));null===d.match(e.escapeRegex(l)+"$");)l=l.slice(1);d=d.replace(l,""),a.isFunction(i.onBeforeMask)&&(d=i.onBeforeMask(d,i)||d),J(c,!0,!1,d.split(""),b);var p=L(c).begin,q=c.inputmask._valueGet(),r=q.indexOf(j[0]);if(0===r&&p!==j[0].length)L(c,j[0].length),m&&setTimeout(function(){L(c,j[0].length)},0);else{for(;null===q.match(e.escapeRegex(j[1])+"$");)j[1]=j[1].substr(1);var s=q.indexOf(j[1]);s!==-1&&""!==j[1]&&p>s&&s>r&&(L(c,s),m&&setTimeout(function(){L(c,s)},0))}O(y())===!0&&a(c).trigger("complete")}else b.keyCode=e.keyCode.BACKSPACE,da.keydownEvent.call(c,b);b.preventDefault()}},setValueEvent:function(b){this.inputmask.refreshValue=!1;var c=this,d=c.inputmask._valueGet(!0);a.isFunction(i.onBeforeMask)&&(d=i.onBeforeMask(d,i)||d),d=d.split(""),J(c,!0,!1,Z?d.reverse():d),T=y().join(""),(i.clearMaskOnLostFocus||i.clearIncomplete)&&c.inputmask._valueGet()===x().join("")&&c.inputmask._valueSet("")},focusEvent:function(a){var b=this,c=b.inputmask._valueGet();i.showMaskOnFocus&&(!i.showMaskOnHover||i.showMaskOnHover&&""===c)&&(b.inputmask._valueGet()!==y().join("")?H(b,y(),E(q())):ba===!1&&L(b,E(q()))),i.positionCaretOnTab===!0&&ba===!1&&da.clickEvent.apply(b,[a,!0]),T=y().join("")},mouseleaveEvent:function(a){var b=this;if(ba=!1,i.clearMaskOnLostFocus&&c.activeElement!==b){var d=y().slice(),e=b.inputmask._valueGet();e!==b.getAttribute("placeholder")&&""!==e&&(q()===-1&&e===x().join("")?d=[]:N(d),H(b,d))}},clickEvent:function(b,e){function f(b){if(""!==i.radixPoint){var c=o().validPositions;if(c[b]===d||c[b].input===I(b)){if(b<E(-1))return!0;var e=a.inArray(i.radixPoint,y());if(e!==-1){for(var f in c)if(e<f&&c[f].input!==I(f))return!1;return!0}}}return!1}var g=this;setTimeout(function(){if(c.activeElement===g){var a=L(g);if(e&&(Z?a.end=a.begin:a.begin=a.end),a.begin===a.end)switch(i.positionCaretOnClick){case"none":break;case"radixFocus":if(f(a.begin)){var b=y().join("").indexOf(i.radixPoint);L(g,i.numericInput?E(b):b);break}default:var d=a.begin,h=q(d,!0),j=E(h);if(d<j)L(g,D(d)||D(d-1)?d:E(d));else{var k=I(j);(""!==k&&y()[j]!==k&&u(j).match.optionalQuantifier!==!0||!D(j)&&u(j).match.def===k)&&(j=E(j)),L(g,j)}}}},0)},dblclickEvent:function(a){var b=this;setTimeout(function(){L(b,0,E(q()))},0)},cutEvent:function(d){var f=this,g=a(f),h=L(f),i=d.originalEvent||d,j=b.clipboardData||i.clipboardData,k=Z?y().slice(h.end,h.begin):y().slice(h.begin,h.end);j.setData("text",Z?k.reverse().join(""):k.join("")),c.execCommand&&c.execCommand("copy"),P(f,e.keyCode.DELETE,h),H(f,y(),o().p,d,T!==y().join("")),f.inputmask._valueGet()===x().join("")&&g.trigger("cleared")},blurEvent:function(b){var c=a(this),e=this;if(e.inputmask){var f=e.inputmask._valueGet(),g=y().slice();T!==g.join("")&&setTimeout(function(){c.trigger("change"),T=g.join("")},0),""!==f&&(i.clearMaskOnLostFocus&&(q()===-1&&f===x().join("")?g=[]:N(g)),O(g)===!1&&(setTimeout(function(){c.trigger("incomplete")},0),i.clearIncomplete&&(p(),g=i.clearMaskOnLostFocus?[]:x().slice())),H(e,g,d,b))}},mouseenterEvent:function(a){var b=this;ba=!0,c.activeElement!==b&&i.showMaskOnHover&&b.inputmask._valueGet()!==y().join("")&&H(b,y())},submitEvent:function(a){T!==y().join("")&&U.trigger("change"),i.clearMaskOnLostFocus&&q()===-1&&Y.inputmask._valueGet&&Y.inputmask._valueGet()===x().join("")&&Y.inputmask._valueSet(""),i.removeMaskOnSubmit&&(Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(),!0),setTimeout(function(){H(Y,y())},0))},resetEvent:function(a){Y.inputmask.refreshValue=!0,setTimeout(function(){U.trigger("setvalue")},0)}};if(f!==d)switch(f.action){case"isComplete":return Y=f.el,O(y());case"unmaskedvalue":return Y!==d&&f.value===d||(X=f.value,X=(a.isFunction(i.onBeforeMask)?i.onBeforeMask(X,i)||X:X).split(""),J(d,!1,!1,Z?X.reverse():X),a.isFunction(i.onBeforeWrite)&&i.onBeforeWrite(d,y(),0,i)),K(Y);case"mask":S(Y);break;case"format":return X=(a.isFunction(i.onBeforeMask)?i.onBeforeMask(f.value,i)||f.value:f.value).split(""),J(d,!0,!1,Z?X.reverse():X),f.metadata?{value:Z?y().slice().reverse().join(""):y().join(""),metadata:h.call(this,{action:"getmetadata"},g,i)}:Z?y().slice().reverse().join(""):y().join("");case"isValid":f.value?(X=f.value.split(""),J(d,!0,!0,Z?X.reverse():X)):f.value=y().join("");for(var ea=y(),fa=M(),ga=ea.length-1;ga>fa&&!D(ga);ga--);return ea.splice(fa,ga+1-fa),O(ea)&&f.value===y().join("");case"getemptymask":return x().join("");case"remove":if(Y&&Y.inputmask){U=a(Y),Y.inputmask._valueSet(i.autoUnmask?K(Y):Y.inputmask._valueGet(!0)),ca.off(Y);var ha;Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(ha=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y),"value"),ha&&Y.inputmask.__valueGet&&Object.defineProperty(Y,"value",{get:Y.inputmask.__valueGet,set:Y.inputmask.__valueSet,configurable:!0})):c.__lookupGetter__&&Y.__lookupGetter__("value")&&Y.inputmask.__valueGet&&(Y.__defineGetter__("value",Y.inputmask.__valueGet),Y.__defineSetter__("value",Y.inputmask.__valueSet)),Y.inputmask=d}return Y;case"getmetadata":if(a.isArray(g.metadata)){var ia=n(!0,0,!1).join("");return a.each(g.metadata,function(a,b){if(b.mask===ia)return ia=b,!1}),ia}return g.metadata}}var i=navigator.userAgent,j=/mobile/i.test(i),k=/iemobile/i.test(i),l=/iphone/i.test(i)&&!k,m=/android/i.test(i)&&!k;return e.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:a.noop,onBeforeMask:null,onBeforePaste:function(b,c){return a.isFunction(c.onBeforeMask)?c.onBeforeMask(b,c):b},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:a.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:d,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,canClearPosition:a.noop,preValidation:null,postValidation:null,staticDefinitionSymbol:d,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,androidHack:!1},definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:function(){return!0},cardinality:1}},aliases:{},masksCache:{},mask:function(i){function j(c,e,g,h){function i(a,e){e=e!==d?e:c.getAttribute(h+"-"+a),null!==e&&("string"==typeof e&&(0===a.indexOf("on")?e=b[e]:"false"===e?e=!1:"true"===e&&(e=!0)),g[a]=e)}var j,k,l,m,n=c.getAttribute(h);if(n&&""!==n&&(n=n.replace(new RegExp("'","g"),'"'),k=JSON.parse("{"+n+"}")),k){l=d;for(m in k)if("alias"===m.toLowerCase()){l=k[m];break}}i("alias",l),g.alias&&f(g.alias,g,e);for(j in e){if(k){l=d;for(m in k)if(m.toLowerCase()===j.toLowerCase()){l=k[m];break}}i(j,l)}return a.extend(!0,e,g),e}var k=this;return"string"==typeof i&&(i=c.getElementById(i)||c.querySelectorAll(i)),i=i.nodeName?[i]:i,a.each(i,function(b,c){var f=a.extend(!0,{},k.opts);j(c,f,a.extend(!0,{},k.userOptions),k.dataAttribute);var i=g(f,k.noMasksCache);i!==d&&(c.inputmask!==d&&c.inputmask.remove(),c.inputmask=new e(d,d,(!0)),c.inputmask.opts=f,c.inputmask.noMasksCache=k.noMasksCache,c.inputmask.userOptions=a.extend(!0,{},k.userOptions),c.inputmask.isRTL=k.isRTL,c.inputmask.el=c,c.inputmask.maskset=i,a.data(c,"_inputmask_opts",f),h.call(c.inputmask,{action:"mask"}))}),i&&i[0]?i[0].inputmask||this:this},option:function(b,c){return"string"==typeof b?this.opts[b]:"object"==typeof b?(a.extend(this.userOptions,b),this.el&&c!==!0&&this.mask(this.el),this):void 0},unmaskedvalue:function(a){return this.maskset=this.maskset||g(this.opts,this.noMasksCache),h.call(this,{action:"unmaskedvalue",value:a})},remove:function(){return h.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||g(this.opts,this.noMasksCache),h.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||g(this.opts,this.noMasksCache),h.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||g(this.opts,this.noMasksCache),h.call(this,{action:"getmetadata"})},isValid:function(a){return this.maskset=this.maskset||g(this.opts,this.noMasksCache),h.call(this,{action:"isValid",value:a})},format:function(a,b){return this.maskset=this.maskset||g(this.opts,this.noMasksCache),h.call(this,{action:"format",value:a,metadata:b})},analyseMask:function(b,c){function f(a,b,c,d){this.matches=[],this.openGroup=a||!1,this.isGroup=a||!1,this.isOptional=b||!1,this.isQuantifier=c||!1,this.isAlternator=d||!1,this.quantifier={min:1,max:1}}function g(a,b,f){var g=(c.definitions?c.definitions[b]:d)||e.prototype.definitions[b];f=f!==d?f:a.matches.length;var h=a.matches[f-1];if(g&&!s){for(var i=g.prevalidator,j=i?i.length:0,k=1;k<g.cardinality;k++){var l=j>=k?i[k-1]:[],m=l.validator,n=l.cardinality;a.matches.splice(f++,0,{fn:m?"string"==typeof m?new RegExp(m):new function(){this.test=m}:new RegExp("."),cardinality:n?n:1,optionality:a.isOptional,newBlockMarker:h===d||h.def!==(g.definitionSymbol||b),casing:g.casing,def:g.definitionSymbol||b,placeholder:g.placeholder,nativeDef:b}),h=a.matches[f-1]}a.matches.splice(f++,0,{fn:g.validator?"string"==typeof g.validator?new RegExp(g.validator):new function(){this.test=g.validator}:new RegExp("."),cardinality:g.cardinality,optionality:a.isOptional,newBlockMarker:h===d||h.def!==(g.definitionSymbol||b),casing:g.casing,def:g.definitionSymbol||b,placeholder:g.placeholder,nativeDef:b})}else a.matches.splice(f++,0,{fn:null,cardinality:0,optionality:a.isOptional,newBlockMarker:h===d||h.def!==b,casing:null,def:c.staticDefinitionSymbol||b,placeholder:c.staticDefinitionSymbol!==d?b:d,nativeDef:b}),s=!1}function h(b){b&&b.matches&&a.each(b.matches,function(a,e){var f=b.matches[a+1];(f===d||f.matches===d||f.isQuantifier===!1)&&e&&e.isGroup&&(e.isGroup=!1,g(e,c.groupmarker.start,0),e.openGroup!==!0&&g(e,c.groupmarker.end)),h(e)})}function i(){if(u.length>0){if(n=u[u.length-1],g(n,l),n.isAlternator){o=u.pop();for(var a=0;a<o.matches.length;a++)o.matches[a].isGroup=!1;u.length>0?(n=u[u.length-1],n.matches.push(o)):t.matches.push(o)}}else g(t,l)}function j(a){function b(a){return a===c.optionalmarker.start?a=c.optionalmarker.end:a===c.optionalmarker.end?a=c.optionalmarker.start:a===c.groupmarker.start?a=c.groupmarker.end:a===c.groupmarker.end&&(a=c.groupmarker.start),a}a.matches=a.matches.reverse();for(var e in a.matches)if(a.matches.hasOwnProperty(e)){var f=parseInt(e);if(a.matches[e].isQuantifier&&a.matches[f+1]&&a.matches[f+1].isGroup){var g=a.matches[e];a.matches.splice(e,1),a.matches.splice(f+1,0,g)}a.matches[e].matches!==d?a.matches[e]=j(a.matches[e]):a.matches[e]=b(a.matches[e])}return a}for(var k,l,m,n,o,p,q,r=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,s=!1,t=new f,u=[],v=[];k=r.exec(b);)if(l=k[0],s)i();else switch(l.charAt(0)){case c.escapeChar:s=!0;break;case c.optionalmarker.end:case c.groupmarker.end:if(m=u.pop(),m.openGroup=!1,m!==d)if(u.length>0){if(n=u[u.length-1],n.matches.push(m),n.isAlternator){o=u.pop();for(var w=0;w<o.matches.length;w++)o.matches[w].isGroup=!1;u.length>0?(n=u[u.length-1],n.matches.push(o)):t.matches.push(o)}}else t.matches.push(m);else i();break;case c.optionalmarker.start:u.push(new f((!1),(!0)));break;case c.groupmarker.start:u.push(new f((!0)));break;case c.quantifiermarker.start:var x=new f((!1),(!1),(!0));l=l.replace(/[{}]/g,"");var y=l.split(","),z=isNaN(y[0])?y[0]:parseInt(y[0]),A=1===y.length?z:isNaN(y[1])?y[1]:parseInt(y[1]);if("*"!==A&&"+"!==A||(z="*"===A?0:1),x.quantifier={min:z,max:A},u.length>0){var B=u[u.length-1].matches;k=B.pop(),k.isGroup||(q=new f((!0)),q.matches.push(k),k=q),B.push(k),B.push(x)}else k=t.matches.pop(),k.isGroup||(q=new f((!0)),q.matches.push(k),k=q),t.matches.push(k),t.matches.push(x);break;case c.alternatormarker:u.length>0?(n=u[u.length-1],p=n.matches.pop()):p=t.matches.pop(),p.isAlternator?u.push(p):(o=new f((!1),(!1),(!1),(!0)),o.matches.push(p),u.push(o));break;default:i()}for(;u.length>0;)m=u.pop(),t.matches.push(m);return t.matches.length>0&&(h(t),v.push(t)),c.numericInput&&j(v[0]),v}},e.extendDefaults=function(b){a.extend(!0,e.prototype.defaults,b)},e.extendDefinitions=function(b){a.extend(!0,e.prototype.definitions,b)},e.extendAliases=function(b){a.extend(!0,e.prototype.aliases,b)},e.format=function(a,b,c){return e(b).format(a,c)},e.unmask=function(a,b){return e(b).unmaskedvalue(a)},e.isValid=function(a,b){return e(b).isValid(a)},e.remove=function(b){a.each(b,function(a,b){b.inputmask&&b.inputmask.remove()})},e.escapeRegex=function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},e.keyCode={ALT:18,BACKSPACE:8,BACKSPACE_SAFARI:127,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91,X:88},e}),function(a){a(jQuery,window.Inputmask)}(function(a,b){return void 0===a.fn.inputmask&&(a.fn.inputmask=function(c,d){var e,f=this[0];if(void 0===d&&(d={}),"string"==typeof c)switch(c){case"unmaskedvalue":return f&&f.inputmask?f.inputmask.unmaskedvalue():a(f).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return f&&f.inputmask?f.inputmask.getemptymask():"";case"hasMaskedValue":return!(!f||!f.inputmask)&&f.inputmask.hasMaskedValue();case"isComplete":return!f||!f.inputmask||f.inputmask.isComplete();case"getmetadata":return f&&f.inputmask?f.inputmask.getmetadata():void 0;case"setvalue":a(f).val(d),f&&void 0===f.inputmask&&a(f).triggerHandler("setvalue");break;case"option":if("string"!=typeof d)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(d)});if(f&&void 0!==f.inputmask)return f.inputmask.option(d);break;default:return d.alias=c,e=new b(d),this.each(function(){e.mask(this)})}else{if("object"==typeof c)return e=new b(c),void 0===c.mask&&void 0===c.alias?this.each(function(){return void 0!==this.inputmask?this.inputmask.option(c):void e.mask(this)}):this.each(function(){e.mask(this)});if(void 0===c)return this.each(function(){e=new b(d),e.mask(this)})}}),a.fn.inputmask}),function(a,b){}(jQuery,Inputmask),function(a){a(window.dependencyLib||jQuery,window.Inputmask)}(function(a,b){function c(a){return isNaN(a)||29===new Date(a,2,0).getDate()}return b.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+c+"[01])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9])"+c+"(0[1-9]|1[012]))|(30"+c+"(0[13-9]|1[012]))|(31"+c+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(a,b,c){if(isNaN(a))return!1;var d=parseInt(a.concat(b.toString().slice(a.length))),e=parseInt(a.concat(c.toString().slice(a.length)));return!isNaN(d)&&(b<=d&&d<=c)||!isNaN(e)&&(b<=e&&e<=c)},determinebaseyear:function(a,b,c){var d=(new Date).getFullYear();if(a>d)return a;if(b<d){for(var e=b.toString().slice(0,2),f=b.toString().slice(2,4);b<e+c;)e--;var g=e+f;return a>g?a:g}if(a<=d&&d<=b){for(var h=d.toString().slice(0,2);b<h+c;)h--;var i=h+c;return i<a?a:i}return d},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getDate().toString()+(h.getMonth()+1).toString()+h.getFullYear().toString()),g.trigger("setvalue")}},getFrontValue:function(a,b,c){for(var d=0,e=0,f=0;f<a.length&&"2"!==a.charAt(f);f++){var g=c.definitions[a.charAt(f)];g?(d+=e,e=g.cardinality):e++}return b.join("").substr(d,e)},postValidation:function(a,b,d){var e,f,g=a.join("");return 0===d.mask.indexOf("y")?(f=g.substr(0,4),e=g.substr(4,11)):(f=g.substr(6,11),e=g.substr(0,6)),b&&(e!==d.leapday||c(f))},definitions:{1:{validator:function(a,b,c,d,e){var f=e.regex.val1.test(a);return d||f||a.charAt(1)!==e.separator&&"-./".indexOf(a.charAt(1))===-1||!(f=e.regex.val1.test("0"+a.charAt(0)))?f:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=a;isNaN(b.buffer[c+1])||(f+=b.buffer[c+1]);var g=1===f.length?e.regex.val1pre.test(f):e.regex.val1.test(f);if(!d&&!g){if(g=e.regex.val1.test(a+"0"))return b.buffer[c]=a,b.buffer[++c]="0",{pos:c,c:"0"};if(g=e.regex.val1.test("0"+a))return b.buffer[c]="0",c++,{pos:c}}return g},cardinality:1}]},2:{validator:function(a,b,c,d,e){var f=e.getFrontValue(b.mask,b.buffer,e);f.indexOf(e.placeholder[0])!==-1&&(f="01"+e.separator);var g=e.regex.val2(e.separator).test(f+a);return d||g||a.charAt(1)!==e.separator&&"-./".indexOf(a.charAt(1))===-1||!(g=e.regex.val2(e.separator).test(f+"0"+a.charAt(0)))?g:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){isNaN(b.buffer[c+1])||(a+=b.buffer[c+1]);var f=e.getFrontValue(b.mask,b.buffer,e);f.indexOf(e.placeholder[0])!==-1&&(f="01"+e.separator);var g=1===a.length?e.regex.val2pre(e.separator).test(f+a):e.regex.val2(e.separator).test(f+a);return d||g||!(g=e.regex.val2(e.separator).test(f+"0"+a))?g:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},y:{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:4,prevalidator:[{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,1);if(f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),b.buffer[c++]=g.charAt(1),{pos:c}}return f},cardinality:1},{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2);if(f=e.isInYearRange(a[0]+g[1]+a[1],e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(1),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c-1]=g.charAt(0),b.buffer[c++]=g.charAt(1),b.buffer[c++]=a.charAt(0),{refreshFromBuffer:{start:c-3,end:c},pos:c}}return f},cardinality:2},{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.trigger("setvalue")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getFullYear().toString()+(h.getMonth()+1).toString()+h.getDate().toString()),g.trigger("setvalue")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(a,b,c,d,e){if("24"===e.hourFormat&&24===parseInt(a,10))return b.buffer[c-1]="0",b.buffer[c]="0",{refreshFromBuffer:{start:c-1,end:c},c:"0"};var f=e.regex.hrs.test(a);if(!d&&!f&&(a.charAt(1)===e.timeseparator||"-.:".indexOf(a.charAt(1))!==-1)&&(f=e.regex.hrs.test("0"+a.charAt(0))))return b.buffer[c-1]="0",b.buffer[c]=a.charAt(0),c++,{refreshFromBuffer:{start:c-2,end:c},pos:c,c:e.timeseparator};if(f&&"24"!==e.hourFormat&&e.regex.hrs24.test(a)){var g=parseInt(a,10);return 24===g?(b.buffer[c+5]="a",b.buffer[c+6]="m"):(b.buffer[c+5]="p",b.buffer[c+6]="m"),g-=12,g<10?(b.buffer[c]=g.toString(),b.buffer[c-1]="0"):(b.buffer[c]=g.toString().charAt(1),b.buffer[c-1]=g.toString().charAt(0)),{refreshFromBuffer:{start:c-1,end:c+6},c:b.buffer[c]}}return f},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.hrspre.test(a);return d||f||!(f=e.regex.hrs.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.mspre.test(a);return d||f||!(f=e.regex.ms.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},t:{validator:function(a,b,c,d,e){return e.regex.ampm.test(a+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.trigger("setvalue")}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"[0-3])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+c+"30)|((0[1-6])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0},"yyyy-mm-dd hh:mm:ss":{mask:"y-1-2 h:s:s",placeholder:"yyyy-mm-dd hh:mm:ss",alias:"datetime",separator:"-",leapday:"-02-29",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},onKeyDown:function(a,b,c,d){}}}),b}),function(a){a(window.dependencyLib||jQuery,window.Inputmask)}(function(a,b){return b.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),b.extendAliases({url:{definitions:{i:{validator:".",cardinality:1}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(a,b,c,d,e){return c-1>-1&&"."!==b.buffer[c-1]?(a=b.buffer[c-1]+a,a=c-2>-1&&"."!==b.buffer[c-2]?b.buffer[c-2]+a:"0"+a):a="00"+a,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a)},cardinality:1}},onUnMask:function(a,b,c){return a},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(a,b){return a=a.toLowerCase(),a.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"},"-":{validator:"[0-9A-Za-z-]",cardinality:1,casing:"lower"}},onUnMask:function(a,b,c){return a},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",cardinality:1,casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),b}),function(a){a(window.dependencyLib||jQuery,window.Inputmask)}(function(a,b,c){function d(a,b){for(var c="",d=0;d<a.length;d++)c+=b.definitions[a.charAt(d)]||b.optionalmarker.start===a.charAt(d)||b.optionalmarker.end===a.charAt(d)||b.quantifiermarker.start===a.charAt(d)||b.quantifiermarker.end===a.charAt(d)||b.groupmarker.start===a.charAt(d)||b.groupmarker.end===a.charAt(d)||b.alternatormarker===a.charAt(d)?"\\"+a.charAt(d):a.charAt(d);return c}return b.extendAliases({numeric:{mask:function(a){if(0!==a.repeat&&isNaN(a.integerDigits)&&(a.integerDigits=a.repeat),a.repeat=0,a.groupSeparator===a.radixPoint&&("."===a.radixPoint?a.groupSeparator=",":","===a.radixPoint?a.groupSeparator=".":a.groupSeparator="")," "===a.groupSeparator&&(a.skipOptionalPartCharacter=c),a.autoGroup=a.autoGroup&&""!==a.groupSeparator,a.autoGroup&&("string"==typeof a.groupSize&&isFinite(a.groupSize)&&(a.groupSize=parseInt(a.groupSize)),isFinite(a.integerDigits))){var b=Math.floor(a.integerDigits/a.groupSize),e=a.integerDigits%a.groupSize;a.integerDigits=parseInt(a.integerDigits)+(0===e?b-1:b),a.integerDigits<1&&(a.integerDigits="*")}a.placeholder.length>1&&(a.placeholder=a.placeholder.charAt(0)),"radixFocus"===a.positionCaretOnClick&&""===a.placeholder&&a.integerOptional===!1&&(a.positionCaretOnClick="lvp"),a.definitions[";"]=a.definitions["~"],a.definitions[";"].definitionSymbol="~",a.numericInput===!0&&(a.positionCaretOnClick="radixFocus"===a.positionCaretOnClick?"lvp":a.positionCaretOnClick,a.digitsOptional=!1,isNaN(a.digits)&&(a.digits=2),a.decimalProtect=!1);var f="[+]";if(f+=d(a.prefix,a),f+=a.integerOptional===!0?"~{1,"+a.integerDigits+"}":"~{"+a.integerDigits+"}",a.digits!==c){a.radixPointDefinitionSymbol=a.decimalProtect?":":a.radixPoint;var g=a.digits.toString().split(",");isFinite(g[0]&&g[1]&&isFinite(g[1]))?f+=a.radixPointDefinitionSymbol+";{"+a.digits+"}":(isNaN(a.digits)||parseInt(a.digits)>0)&&(f+=a.digitsOptional?"["+a.radixPointDefinitionSymbol+";{1,"+a.digits+"}]":a.radixPointDefinitionSymbol+";{"+a.digits+"}")}return f+=d(a.suffix,a),f+="[-]",a.greedy=!1,f},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",preValidation:function(b,d,e,f,g){if("-"===e||e==g.negationSymbol.front)return g.allowMinus===!0&&(g.isNegative=g.isNegative===c||!g.isNegative,""===b.join("")||{caret:d,dopost:!0});if(f===!1&&e===g.radixPoint&&g.digits!==c&&(isNaN(g.digits)||parseInt(g.digits)>0)){var h=a.inArray(g.radixPoint,b);if(h!==-1)return g.numericInput===!0?d===h:{caret:h+1}}return!0},postValidation:function(d,e,f){function g(a,b){var c="";if(c+="("+b.groupSeparator+"*{"+b.groupSize+"}){*}",""!==b.radixPoint){var d=a.join("").split(b.radixPoint);d[1]&&(c+=b.radixPoint+"*{"+d[1].match(/^\d*\??\d*/)[0].length+"}")}return c}var h=f.suffix.split(""),i=f.prefix.split("");if(e.pos==c&&e.caret!==c&&e.dopost!==!0)return e;var j=e.caret!=c?e.caret:e.pos,k=d.slice();f.numericInput&&(j=k.length-j-1,k=k.reverse());var l=k[j];if(l===f.groupSeparator&&(j+=1,l=k[j]),j==k.length-f.suffix.length-1&&l===f.radixPoint)return e;
l!==c&&l!==f.radixPoint&&l!==f.negationSymbol.front&&l!==f.negationSymbol.back&&(k[j]="?",f.prefix.length>0&&j>=(f.isNegative===!1?1:0)&&j<f.prefix.length-1+(f.isNegative===!1?1:0)?i[j-(f.isNegative===!1?1:0)]="?":f.suffix.length>0&&j>=k.length-f.suffix.length-(f.isNegative===!1?1:0)&&(h[j-(k.length-f.suffix.length-(f.isNegative===!1?1:0))]="?")),i=i.join(""),h=h.join("");var m=k.join("").replace(i,"");if(m=m.replace(h,""),m=m.replace(new RegExp(b.escapeRegex(f.groupSeparator),"g"),""),m=m.replace(new RegExp("[-"+b.escapeRegex(f.negationSymbol.front)+"]","g"),""),m=m.replace(new RegExp(b.escapeRegex(f.negationSymbol.back)+"$"),""),isNaN(f.placeholder)&&(m=m.replace(new RegExp(b.escapeRegex(f.placeholder),"g"),"")),m.length>1&&1!==m.indexOf(f.radixPoint)&&("0"==l&&(m=m.replace(/^\?/g,"")),m=m.replace(/^0/g,"")),m.charAt(0)===f.radixPoint&&f.numericInput!==!0&&(m="0"+m),""!==m){if(m=m.split(""),!f.digitsOptional&&isFinite(f.digits)){var n=a.inArray(f.radixPoint,m),o=a.inArray(f.radixPoint,k);n===-1&&(m.push(f.radixPoint),n=m.length-1);for(var p=1;p<=f.digits;p++)f.digitsOptional||m[n+p]!==c&&m[n+p]!==f.placeholder.charAt(0)?o!==-1&&k[o+p]!==c&&(m[n+p]=m[n+p]||k[o+p]):m[n+p]=e.placeholder||f.placeholder.charAt(0)}f.autoGroup!==!0||""===f.groupSeparator||l===f.radixPoint&&e.pos===c&&!e.dopost?m=m.join(""):(m=b(g(m,f),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(m.join("")),m.charAt(0)===f.groupSeparator&&m.substr(1))}if(f.isNegative&&"blur"===e.event&&(f.isNegative="0"!==m),m=i+m,m+=h,f.isNegative&&(m=f.negationSymbol.front+m,m+=f.negationSymbol.back),m=m.split(""),l!==c)if(l!==f.radixPoint&&l!==f.negationSymbol.front&&l!==f.negationSymbol.back)j=a.inArray("?",m),j>-1?m[j]=l:j=e.caret||0;else if(l===f.radixPoint||l===f.negationSymbol.front||l===f.negationSymbol.back){var q=a.inArray(l,m);q!==-1&&(j=q)}f.numericInput&&(j=m.length-j-1,m=m.reverse());var r={caret:l===c||e.pos!==c?j+(f.numericInput?-1:1):j,buffer:m,refreshFromBuffer:e.dopost||d.join("")!==m.join("")};return r.refreshFromBuffer?r:e},onBeforeWrite:function(d,e,f,g){function h(a){a.parseMinMaxOptions===c&&(null!==a.min&&(a.min=a.min.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(a.min=a.min.replace(a.radixPoint,".")),a.min=isFinite(a.min)?parseFloat(a.min):NaN,isNaN(a.min)&&(a.min=Number.MIN_VALUE)),null!==a.max&&(a.max=a.max.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(a.max=a.max.replace(a.radixPoint,".")),a.max=isFinite(a.max)?parseFloat(a.max):NaN,isNaN(a.max)&&(a.max=Number.MAX_VALUE)),a.parseMinMaxOptions="done")}if(d)switch(d.type){case"keydown":return g.postValidation(e,{caret:f,dopost:!0},g);case"blur":case"checkval":var i;if(h(g),null!==g.min||null!==g.max){if(i=g.onUnMask(e.join(""),c,a.extend({},g,{unmaskAsNumber:!0})),null!==g.min&&i<g.min)return g.isNegative=g.min<0,g.postValidation(g.min.toString().replace(".",g.radixPoint).split(""),{caret:f,dopost:!0,placeholder:"0"},g);if(null!==g.max&&i>g.max)return g.isNegative=g.max<0,g.postValidation(g.max.toString().replace(".",g.radixPoint).split(""),{caret:f,dopost:!0,placeholder:"0"},g)}return g.postValidation(e,{caret:f,dopost:!0,placeholder:"0",event:"blur"},g);case"_checkval":return{caret:f}}},regex:{integerPart:function(a,c){return c?new RegExp("["+b.escapeRegex(a.negationSymbol.front)+"+]?"):new RegExp("["+b.escapeRegex(a.negationSymbol.front)+"+]?\\d+")},integerNPart:function(a){return new RegExp("[\\d"+b.escapeRegex(a.groupSeparator)+b.escapeRegex(a.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function(a,d,e,f,g,h){var i=f?new RegExp("[0-9"+b.escapeRegex(g.groupSeparator)+"]").test(a):new RegExp("[0-9]").test(a);if(i===!0){if(g.numericInput!==!0&&d.validPositions[e]!==c&&"~"===d.validPositions[e].match.def&&!h){var j=d.buffer.join("");j=j.replace(new RegExp("[-"+b.escapeRegex(g.negationSymbol.front)+"]","g"),""),j=j.replace(new RegExp(b.escapeRegex(g.negationSymbol.back)+"$"),""),j=j.replace(/0/g,g.placeholder.charAt(0));var k=d._buffer.join("");for(j===g.radixPoint&&(j=k);null===j.match(b.escapeRegex(k)+"$");)k=k.slice(1);j=j.replace(k,""),j=j.split(""),i=j[e]===c?{pos:e,remove:e}:{pos:e}}}else f||a!==g.radixPoint||d.validPositions[e-1]!==c||(d.buffer[e]="0",i={pos:e+1});return i},cardinality:1},"+":{validator:function(a,b,c,d,e){return e.allowMinus&&("-"===a||a===e.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function(a,b,c,d,e){return e.allowMinus&&a===e.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function(a,c,d,e,f){var g="["+b.escapeRegex(f.radixPoint)+"]";return isValid=new RegExp(g).test(a),isValid&&c.validPositions[d]&&c.validPositions[d].match.placeholder===f.radixPoint&&(isValid={caret:d+1}),isValid},cardinality:1,placeholder:function(a){return a.radixPoint}}},onUnMask:function(a,c,d){if(""===c&&d.nullable===!0)return c;var e=a.replace(d.prefix,"");return e=e.replace(d.suffix,""),e=e.replace(new RegExp(b.escapeRegex(d.groupSeparator),"g"),""),""!==d.placeholder.charAt(0)&&(e=e.replace(new RegExp(d.placeholder.charAt(0),"g"),"0")),d.unmaskAsNumber?(""!==d.radixPoint&&e.indexOf(d.radixPoint)!==-1&&(e=e.replace(b.escapeRegex.call(this,d.radixPoint),".")),Number(e)):e},isComplete:function(a,c){var d=a.join(""),e=a.slice();if(e.join("")!==d)return!1;var f=d.replace(c.prefix,"");return f=f.replace(c.suffix,""),f=f.replace(new RegExp(b.escapeRegex(c.groupSeparator),"g"),""),","===c.radixPoint&&(f=f.replace(b.escapeRegex(c.radixPoint),".")),isFinite(f)},onBeforeMask:function(a,d){if(d.isNegative=c,a=a.toString().charAt(a.length-1)===d.radixPoint?a.toString().substr(0,a.length-1):a.toString(),""!==d.radixPoint&&isFinite(a)){var e=a.split("."),f=""!==d.groupSeparator?parseInt(d.groupSize):0;2===e.length&&(e[0].length>f||e[1].length>f||e[0].length<f&&e[1].length<f)&&(a=a.replace(".",d.radixPoint))}var g=a.match(/,/g),h=a.match(/\./g);if(h&&g?h.length>g.length?(a=a.replace(/\./g,""),a=a.replace(",",d.radixPoint)):g.length>h.length?(a=a.replace(/,/g,""),a=a.replace(".",d.radixPoint)):a=a.indexOf(".")<a.indexOf(",")?a.replace(/\./g,""):a=a.replace(/,/g,""):a=a.replace(new RegExp(b.escapeRegex(d.groupSeparator),"g"),""),0===d.digits&&(a.indexOf(".")!==-1?a=a.substring(0,a.indexOf(".")):a.indexOf(",")!==-1&&(a=a.substring(0,a.indexOf(",")))),""!==d.radixPoint&&isFinite(d.digits)&&a.indexOf(d.radixPoint)!==-1){var i=a.split(d.radixPoint),j=i[1].match(new RegExp("\\d*"))[0];if(parseInt(d.digits)<j.toString().length){var k=Math.pow(10,parseInt(d.digits));a=a.replace(b.escapeRegex(d.radixPoint),"."),a=Math.round(parseFloat(a)*k)/k,a=a.toString().replace(".",d.radixPoint)}}return a},canClearPosition:function(a,b,c,d,e){var f=a.validPositions[b],g=f.input!==e.radixPoint||null!==a.validPositions[b].match.fn&&e.decimalProtect===!1||f.input===e.radixPoint&&a.validPositions[b+1]&&null===a.validPositions[b+1].match.fn||isFinite(f.input)||b===c||f.input===e.groupSeparator||f.input===e.negationSymbol.front||f.input===e.negationSymbol.back;return!g||"+"!=f.match.nativeDef&&"-"!=f.match.nativeDef||(e.isNegative=!1),g},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey)switch(c.keyCode){case b.keyCode.UP:g.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(f.step)),g.trigger("setvalue");break;case b.keyCode.DOWN:g.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(f.step)),g.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}}),b}),function(a){a(window.dependencyLib||jQuery,window.Inputmask)}(function(a,b){function c(a,b){var c=(a.mask||a).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),d=(b.mask||b).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),e=(a.mask||a).split("#")[0],f=(b.mask||b).split("#")[0];return 0===f.indexOf(e)?-1:0===e.indexOf(f)?1:c.localeCompare(d)}var d=b.prototype.analyseMask;return b.prototype.analyseMask=function(b,c){function e(a,c,d){c=c||"",d=d||g,""!==c&&(d[c]={});for(var f="",h=d[c]||d,i=a.length-1;i>=0;i--)b=a[i].mask||a[i],f=b.substr(0,1),h[f]=h[f]||[],h[f].unshift(b.substr(1)),a.splice(i,1);for(var j in h)h[j].length>500&&e(h[j].slice(),j,h)}function f(b){var d="",e=[];for(var g in b)a.isArray(b[g])?1===b[g].length?e.push(g+b[g]):e.push(g+c.groupmarker.start+b[g].join(c.groupmarker.end+c.alternatormarker+c.groupmarker.start)+c.groupmarker.end):e.push(g+f(b[g]));return d+=1===e.length?e[0]:c.groupmarker.start+e.join(c.groupmarker.end+c.alternatormarker+c.groupmarker.start)+c.groupmarker.end}var g={};c.phoneCodes&&(c.phoneCodes&&c.phoneCodes.length>1e3&&(b=b.substr(1,b.length-2),e(b.split(c.groupmarker.end+c.alternatormarker+c.groupmarker.start)),b=f(g)),b=b.replace(/9/g,"\\9"));var h=d.call(this,b,c);return h},b.extendAliases({abstractphone:{groupmarker:{start:"<",end:">"},countrycode:"",phoneCodes:[],mask:function(a){return a.definitions={"#":b.prototype.definitions[9]},a.phoneCodes.sort(c)},keepStatic:!0,onBeforeMask:function(a,b){var c=a.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(c.indexOf(b.countrycode)>1||c.indexOf(b.countrycode)===-1)&&(c="+"+b.countrycode+c),c},onUnMask:function(a,b,c){return b},inputmode:"tel"}}),b}),function(a){a(window.dependencyLib||jQuery,window.Inputmask)}(function(a,b){return b.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(a,b){return new RegExp(b.regex,b.casing?"i":"").test(a.join(""))},definitions:{r:{validator:function(b,c,d,e,f){function g(a,b){this.matches=[],this.isGroup=a||!1,this.isQuantifier=b||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function h(){var a,b,c=new g,d=[];for(f.regexTokens=[];a=f.tokenizer.exec(f.regex);)switch(b=a[0],b.charAt(0)){case"(":d.push(new g((!0)));break;case")":k=d.pop(),d.length>0?d[d.length-1].matches.push(k):c.matches.push(k);break;case"{":case"+":case"*":var e=new g((!1),(!0));b=b.replace(/[{}]/g,"");var h=b.split(","),i=isNaN(h[0])?h[0]:parseInt(h[0]),j=1===h.length?i:isNaN(h[1])?h[1]:parseInt(h[1]);if(e.quantifier={min:i,max:j},d.length>0){var l=d[d.length-1].matches;a=l.pop(),a.isGroup||(k=new g((!0)),k.matches.push(a),a=k),l.push(a),l.push(e)}else a=c.matches.pop(),a.isGroup||(k=new g((!0)),k.matches.push(a),a=k),c.matches.push(a),c.matches.push(e);break;default:d.length>0?d[d.length-1].matches.push(b):c.matches.push(b)}c.matches.length>0&&f.regexTokens.push(c)}function i(b,c){var d=!1;c&&(m+="(",o++);for(var e=0;e<b.matches.length;e++){var g=b.matches[e];if(g.isGroup===!0)d=i(g,!0);else if(g.isQuantifier===!0){var h=a.inArray(g,b.matches),k=b.matches[h-1],l=m;if(isNaN(g.quantifier.max)){for(;g.repeaterPart&&g.repeaterPart!==m&&g.repeaterPart.length>m.length&&!(d=i(k,!0)););d=d||i(k,!0),d&&(g.repeaterPart=m),m=l+g.quantifier.max}else{for(var n=0,p=g.quantifier.max-1;n<p&&!(d=i(k,!0));n++);m=l+"{"+g.quantifier.min+","+g.quantifier.max+"}"}}else if(void 0!==g.matches)for(var q=0;q<g.length&&!(d=i(g[q],c));q++);else{var r;if("["==g.charAt(0)){r=m,r+=g;for(var s=0;s<o;s++)r+=")";var t=new RegExp("^("+r+")$",f.casing?"i":"");d=t.test(j)}else for(var u=0,v=g.length;u<v;u++)if("\\"!==g.charAt(u)){r=m,r+=g.substr(0,u+1),r=r.replace(/\|$/,"");for(var s=0;s<o;s++)r+=")";var t=new RegExp("^("+r+")$",f.casing?"i":"");if(d=t.test(j))break}m+=g}if(d)break}return c&&(m+=")",o--),d}var j,k,l=c.buffer.slice(),m="",n=!1,o=0;null===f.regexTokens&&h(),l.splice(d,0,b),j=l.join("");for(var p=0;p<f.regexTokens.length;p++){var q=f.regexTokens[p];if(n=i(q,q.isGroup))break}return n},cardinality:1}}}}),b});; //подключение маски
//FORMS
function forms(){
	//SELECT
	if($('select').length>0){
		function selectscrolloptions(){
				var scs=100;
				var mss=50;
			if(isMobile.any()){
				scs=10;
				mss=1;
			}
			var opt={
				cursorcolor:"#9B4E7C",
				cursorwidth: "12px",
				background: "",
				autohidemode:false,
				bouncescroll:false,
				cursorborderradius: "10px",
				scrollspeed:scs,
				mousescrollstep:mss,
				directionlockdeadzone:0,
				cursorborder: "0px solid #fff",
			};
			return opt;
		}

		function select(){
			$.each($('select'), function(index, val) {
					var ind=index;
				$(this).hide();
				if($(this).parent('.select-block').length==0){
					$(this).wrap("<div class='select-block "+$(this).attr('class')+"-select-block'></div>");
				}else{
					$(this).parent('.select-block').find('.select').remove();
				}
					let cl='';
					var milti='';
					var check='';
					var sblock=$(this).parent('.select-block');
					var soptions="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";
				if($(this).attr('multiple')=='multiple'){
					milti='multiple';
					check='check';
				}
				$.each($(this).find('option'), function(index, val) {
					if($(this).attr('class')!='' && $(this).attr('class')!=null){
						let cl=$(this).attr('class');
					}
					if($(this).attr('value')!=''){
						if($(this).attr('data-icon')!='' && $(this).attr('data-icon')!=null){
							soptions=soptions+"<div data-value='"+$(this).attr('value')+"' class='select-options__value_"+ind+" select-options__value value_"+$(this).val()+" "+cl+" "+check+"'><div><img src="+$(this).attr('data-icon')+" alt=\"\"></div><div>"+$(this).html()+"</div></div>";
						}else{
							soptions=soptions+"<div data-value='"+$(this).attr('value')+"' class='select-options__value_"+ind+" select-options__value value_"+$(this).val()+" "+cl+" "+check+"'>"+$(this).html()+"</div>";
						}
					}else if($(this).parent().attr('data-label')=='on'){
						if(sblock.find('.select__label').length==0){
							sblock.prepend('<div class="select__label">'+$(this).html()+'</div>');
						}
					}
				});
					soptions=soptions+"</div></div></div>";
				if($(this).attr('data-type')=='search'){
						sblock.append("<div data-type='search' class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
												"<div class='select-title'>"+
													"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
													"<input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"' />"+
												"</div>"+
												soptions+
											"</div>");
						$('.select_'+ind).find('input.select-title__value').jcOnPageFilter({
							parentSectionClass:'select-options_'+ind,
							parentLookupClass:'select-options__value_'+ind,
							childBlockClass:'select-options__value_'+ind
						});
				}else if($(this).attr('data-icon')=='true'){
					sblock.append("<div class='select_"+ind+" select"+" "+$(this).attr('class')+"__select icon "+milti+"'>"+
											"<div class='select-title'>"+
												"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
												"<div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'><div><img src="+$(this).find('option[selected="selected"]').attr('data-icon')+" alt=\"\"></div><div>"+$(this).find('option[selected="selected"]').html()+"</div></div>"+
											"</div>"+
											soptions+
										"</div>");
				}else{
					sblock.append("<div class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
											"<div class='select-title'>"+
												"<div class='select-title__arrow ion-ios-arrow-down'></div>"+
												"<div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'>"+$(this).find('option[selected="selected"]').html()+"</div>"+
											"</div>"+
											soptions+
										"</div>");
				}
				if($(this).find('option[selected="selected"]').val()!=''){
					sblock.find('.select').addClass('focus');
				}

				if(sblock.find('.select-options__value').length==1){
					sblock.find('.select').addClass('one');
				}

				if($(this).attr('data-req')=='on'){
					$(this).addClass('req');
				}
				$(".select_"+ind+" .select-options-scroll").niceScroll('.select-options-list',selectscrolloptions());
			});
		}
			select();

		$('body').on('keyup','input.select-title__value',function() {
			$('.select').not($(this).parents('.select')).removeClass('active').find('.select-options').slideUp(50);
			$(this).parents('.select').addClass('active');
			$(this).parents('.select').find('.select-options').slideDown(50,function() {
				$(this).find(".select-options-scroll").getNiceScroll().resize();
			});
			$(this).parents('.select-block').find('select').val('');
		});
		$('body').on('click','.select',function(){
			if(!$(this).hasClass('disabled') && !$(this).hasClass('one')){
				$('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
				$(this).toggleClass('active');
				$(this).find('.select-options').slideToggle(50,function() {
					$(this).find(".select-options-scroll").getNiceScroll().resize();
				});

				//	var input=$(this).parent().find('select');
				//removeError(input);

				if($(this).attr('data-type')=='search'){
					if(!$(this).hasClass('active')){
						searchselectreset();
					}
					$(this).find('.select-options__value').show();
				}


				var cl=$.trim($(this).find('.select-title__value').attr('class').replace('select-title__value',''));
					$(this).find('.select-options__value').show().removeClass('hide').removeClass('last');
				if(cl!=''){
					$(this).find('.select-options__value.'+cl).hide().addClass('hide');
				}
				if($(this).find('.select-options__value').last().hasClass('hide')){
					$(this).find('.select-options__value').last().prev().addClass('last');
				}
			}
		});
		$('body').on('click','.select-options__value',function() {
			if($(this).parents('.select').hasClass('multiple')){
				if($(this).hasClass('active')){
					if($(this).parents('.select').find('.select-title__value span').length>0){
						$(this).parents('.select').find('.select-title__value').append('<span data-value="'+$(this).data('value')+'">, '+$(this).html()+'</span>');
					}else{
						$(this).parents('.select').find('.select-title__value').data('label',$(this).parents('.select').find('.select-title__value').html());
						$(this).parents('.select').find('.select-title__value').html('<span data-value="'+$(this).data('value')+'">'+$(this).html()+'</span>');
					}
					$(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', true);
					$(this).parents('.select').addClass('focus');
				}else{
					$(this).parents('.select').find('.select-title__value').find('span[data-value="'+$(this).data('value')+'"]').remove();
					if($(this).parents('.select').find('.select-title__value span').length==0){
						$(this).parents('.select').find('.select-title__value').html($(this).parents('.select').find('.select-title__value').data('label'));
						$(this).parents('.select').removeClass('focus');
					}
					$(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', false);
				}
				return false;
			}


			if($(this).parents('.select').attr('data-type')=='search'){
				$(this).parents('.select').find('.select-title__value').val($(this).html());
				$(this).parents('.select').find('.select-title__value').attr('data-value',$(this).html());
			}else{
				$(this).parents('.select').find('.select-title__value').attr('class','select-title__value value_'+$(this).data('value'));
				$(this).parents('.select').find('.select-title__value').html($(this).html());

			}

				$(this).parents('.select-block').find('select').find('option').removeAttr("selected");
			if($.trim($(this).data('value'))!=''){
				$(this).parents('.select-block').find('select').val($(this).data('value'));
				$(this).parents('.select-block').find('select').find('option[value="'+$(this).data('value')+'"]').attr('selected','selected');
			}else{
				$(this).parents('.select-block').find('select').val($(this).html());
				$(this).parents('.select-block').find('select').find('option[value="'+$(this).html()+'"]').attr('selected','selected');
			}


			if($(this).parents('.select-block').find('select').val()!=''){
				$(this).parents('.select-block').find('.select').addClass('focus');
			}else{
				$(this).parents('.select-block').find('.select').removeClass('focus');

				$(this).parents('.select-block').find('.select').removeClass('err');
				$(this).parents('.select-block').parent().removeClass('err');
				$(this).parents('.select-block').removeClass('err').find('.form__error').remove();
			}
			if(!$(this).parents('.select').data('tags')!=""){
				if($(this).parents('.form-tags').find('.form-tags__item[data-value="'+$(this).data('value')+'"]').length==0){
					$(this).parents('.form-tags').find('.form-tags-items').append('<a data-value="'+$(this).data('value')+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>');
				}
			}
			$(this).parents('.select-block').find('select').change();

			if($(this).parents('.select-block').find('select').data('update')=='on'){
				select();
			}
		});
		$(document).on('click touchstart',function(e) {
			if (!$(e.target).is(".select *") && !$(e.target).is(".select")) {
				$('.select').removeClass('active');
				$('.select-options').slideUp(50,function() {});
				searchselectreset();
			};
		});
		$(document).on('keydown',function(e) {
			if(e.which==27){
				$('.select').removeClass('active');
				$('.select-options').slideUp(50,function() {});
				searchselectreset();
			}
		});
	}
	//FIELDS
	$('input,textarea').focus(function(){
		if($(this).val() == $(this).attr('data-value')){
				$(this).addClass('focus');
				$(this).parent().addClass('focus');
			if($(this).attr('data-type')=='pass'){
				$(this).attr('type','password');
			};
			$(this).val('');
		};
		removeError($(this));
	});
	$('input[data-value], textarea[data-value]').each(function() {
		if (this.value == '' || this.value == $(this).attr('data-value')) {
			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
			}else{
				this.value = $(this).attr('data-value');
			}
		}
		if(this.value!=$(this).attr('data-value') && this.value!=''){
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
			}
		}

		$(this).click(function() {
			if (this.value == $(this).attr('data-value')) {
				if($(this).attr('data-type')=='pass'){
					$(this).attr('type','password');
				};
				this.value = '';
			};
		});
		$(this).blur(function() {
			if (this.value == '') {
				if(!$(this).hasClass('l')){
					this.value = $(this).attr('data-value');
				}
					$(this).removeClass('focus');
					$(this).parent().removeClass('focus');
				if($(this).attr('data-type')=='pass'){
					$(this).attr('type','text');
				};
			};
			if($(this).hasClass('vn')){
				formValidate($(this));
			}
		});
	});
	$('.form-input__viewpass').click(function(event) {
		if($(this).hasClass('active')){
			$(this).parent().find('input').attr('type','password');
		}else{
			$(this).parent().find('input').attr('type','text');
		}
		$(this).toggleClass('active');
	});

	//$('textarea').autogrow({vertical: true, horizontal: false});
	

	//MASKS//
	//'+7(999) 999 9999'
	//'+38(999) 999 9999'
	//'+375(99)999-99-99'
	//'a{3,1000}' только буквы минимум 3
	//'9{3,1000}' только цифры минимум 3
	$.each($('input.phone'), function(index, val) {
		$(this).attr('type','tel');
		$(this).focus(function(){
			$(this).inputmask('+7(999) 999 9999',{clearIncomplete: true,clearMaskOnLostFocus: true,
				"onincomplete": function(){maskclear($(this));}
			});
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
	});
	$('input.phone').focusout(function(event) {
		maskclear($(this));
	});
	$.each($('input.num'), function(index, val) {
		$(this).focus(function(){
			$(this).inputmask('9{1,1000}',{clearIncomplete: true,placeholder:"",clearMaskOnLostFocus: true,"onincomplete": function(){maskclear($(this));}});
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
	});
	$('input.num').focusout(function(event) {
		maskclear($(this));
	});
	/*
	$.each($('input.date'), function(index, val) {
		$(this).focus(function(){
			$(this).inputmask('dd.mm.yyyy',{
				clearIncomplete: true,
				placeholder:"_",
				//yearrange:{'minyear':n-40,'maxyear':n},
				clearMaskOnLostFocus: true,
				"onincomplete": function(){maskclear($(this));},
				"oncomplete": function(){
					$(this).datepicker("setDate",$(this).val());
				}
			});
			$(this).addClass('focus');
			$(this).parents('.form-column').addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
		$(this).focusout(function(event) {
			maskclear($(this));
		});
		$(this).datepicker({
			dateFormat : "dd.mm.yy",
			//yearRange: "1915:2015",
			//defaultDate: '-18Y', 
			//inDate: '-85Y', 
			//maxDate: "0Y",
			beforeShow :function(event){
				$('.ui-datepicker').show();
			},
			onSelect:function(event){
				if($(this).val()!=$(this).attr('data-value') && $(this).val()!=''){
					$(this).addClass('focus');
					$(this).parent().addClass('focus');
					if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
						$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
					}
				}
			}
		});
	});
	*/

	//CHECK
	$.each($('.check'), function(index, val) {
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$('body').off('click','.check',function(event){});
	$('body').on('click','.check',function(event){
		if(!$(this).hasClass('disable')){
				var target = $(event.target);
			if (!target.is("a")){
					$(this).toggleClass('active');
				if($(this).hasClass('active')){
					$(this).find('input').prop('checked', true);
				}else{
					$(this).find('input').prop('checked', false);
				}
			}
		}
	});

	//OPTION
	$.each($('.option.active'), function(index, val) {
		$(this).find('input').prop('checked', true);
	});
	$('.option').click(function(event) {
		if(!$(this).hasClass('disable')){
				var target = $(event.target);
			if (!target.is("a")){
				if($(this).hasClass('active') && $(this).hasClass('order') ){
					$(this).toggleClass('orderactive');
				}
					$(this).parents('.options').find('.option').removeClass('active');
					$(this).toggleClass('active');
					$(this).children('input').prop('checked', true);
			}
		}
	});
	//RATING
	$('.rating.edit .star').hover(function() {
			var block=$(this).parents('.rating');
		block.find('.rating__activeline').css({width:'0%'});
			var ind=$(this).index()+1;
			var linew=ind/block.find('.star').length*100;
		setrating(block,linew);
	},function() {
			var block=$(this).parents('.rating');
		block.find('.star').removeClass('active');
			var ind=block.find('input').val();
			var linew=ind/block.find('.star').length*100;
		setrating(block,linew);
	});
	$('.rating.edit .star').click(function(event) {
			var block=$(this).parents('.rating');
			var re=$(this).index()+1;
			block.find('input').val(re);
			var linew=re/block.find('.star').length*100;
		setrating(block,linew);
	});
	$.each($('.rating'), function(index, val) {
			var ind=$(this).find('input').val();
			var linew=ind/$(this).parent().find('.star').length*100;
		setrating($(this),linew);
	});
	function setrating(th,val) {
		th.find('.rating__activeline').css({width:val+'%'});
	}
	//QUANTITY
	$('.quantity__btn').click(function(event) {
			var n=parseInt($(this).parent().find('.quantity__input').val());
		if($(this).hasClass('dwn')){
			n=n-1;
			if(n<1){n=1;}
		}else{
			n=n+1;
		}
			$(this).parent().find('.quantity__input').val(n);
		return false;
	});
	//RANGE
	if($("#range" ).length>0){
		$("#range" ).slider({
			range: true,
			min: 0,
			max: 5000,
			values: [0, 5000],
			slide: function( event, ui ){
				$('#rangefrom').val(ui.values[0]);
				$('#rangeto').val(ui.values[1]);
				$(this).find('.ui-slider-handle').eq(0).html('<span>'+ui.values[0]+'</span>');
				$(this).find('.ui-slider-handle').eq(1).html('<span>'+ui.values[1]+'</span>');
			},
			change: function( event, ui ){
				if(ui.values[0]!=$( "#range" ).slider( "option","min") || ui.values[1]!=$( "#range" ).slider( "option","max")){
					$('#range').addClass('act');
				}else{
					$('#range').removeClass('act');
				}
			}
		});
		$('#rangefrom').val($( "#range" ).slider( "values", 0 ));
		$('#rangeto').val($( "#range" ).slider( "values", 1 ));

		$("#range" ).find('.ui-slider-handle').eq(0).html('<span>'+$( "#range" ).slider( "option","min")+'</span>');
		$("#range" ).find('.ui-slider-handle').eq(1).html('<span>'+$( "#range" ).slider( "option","max")+'</span>');
		
		$( "#rangefrom" ).bind("change", function(){
			if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
				$(this).val($( "#range" ).slider( "option","max"));
			}
			if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
				$(this).val($( "#range" ).slider( "option","min"));
			}
			$("#range" ).slider( "values",0,$(this).val());
		});
		$( "#rangeto" ).bind("change", function(){
			if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
				$(this).val($( "#range" ).slider( "option","max"));
			}
			if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
				$(this).val($( "#range" ).slider( "option","min"));
			}
			$("#range" ).slider( "values",1,$(this).val());
		});
		$("#range" ).find('.ui-slider-handle').eq(0).addClass('left');
		$("#range" ).find('.ui-slider-handle').eq(1).addClass('right');
	}
	//ADDFILES
	$('.form-addfile__input').change(function(e){
		if($(this).val()!=''){
					var ts=$(this);
				ts.parents('.form-addfile').find('ul.form-addfile-list').html('');
			$.each(e.target.files, function(index, val) {
				if(ts.parents('.form-addfile').find('ul.form-addfile-list>li:contains("'+e.target.files[index].name+'")').length==0){
					ts.parents('.form-addfile').find('ul.form-addfile-list').append('<li>'+e.target.files[index].name+'</li>');
				}
			});
		}
	});
}
forms();

function digi(str){
	var r=str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	return r;
}

//VALIDATE FORMS
$('form button[type=submit]').click(function(){
		var er=0;
		var form=$(this).parents('form');
		var ms=form.data('ms');
	$.each(form.find('.req'), function(index, val) {
		er+=formValidate($(this));
	});
	if(er==0){
		removeFormError(form);
		/*
			var messagehtml='';
		if(form.hasClass('editprofile')){
			var messagehtml='';
		}
		formLoad();
		*/

		//ОПТРАВКА ФОРМЫ
		/*
		function showResponse(html){
			if(!form.hasClass('nomessage')){
				showMessage(messagehtml);
			}
			if(!form.hasClass('noclear')){
				clearForm(form);
			}
		}
		var options={
			success:showResponse
		};
			form.ajaxForm(options);
		

		setTimeout(function(){
			if(!form.hasClass('nomessage')){
				//showMessage(messagehtml);
				showMessageByClass(ms);
			}
			if(!form.hasClass('noclear')){
				clearForm(form);
			}
		},0);

		return false;
		*/
		if(ms!=null && ms!=''){
			showMessageByClass(ms);
			return false;
		}
	}else{
		return false;
	}
});
function formValidate(input){
		var er=0;
		var form=input.parents('form');
	if(input.attr('name')=='email' || input.hasClass('email')){
		if(input.val()!=input.attr('data-value')){
			var em=input.val().replace(" ","");
			input.val(em);
		}
		if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.val())) || input.val()==input.attr('data-value')){
				er++;
			addError(input);
		}else{
			removeError(input);
		}
	}else{
		if(input.val()=='' || input.val()==input.attr('data-value')){
			er++;
			addError(input);
		}else{
			removeError(input);
		}
	}
	if(input.attr('type')=='checkbox'){
		if(input.prop('checked') == true){
			input.removeClass('err').parent().removeClass('err');
		}else{
			er++;
			input.addClass('err').parent().addClass('err');
		}
	}
	if(input.hasClass('name')){
		if(!(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(input.val()))){
				er++;
			addError(input);
		}
	}
	if(input.hasClass('pass-2')){
		if(form.find('.pass-1').val()!=form.find('.pass-2').val()){
			addError(input);
		}else{
			removeError(input);
		}
	}
		return er;
}
function formLoad(){
	$('.popup').hide();
	$('.popup-message-body').hide();
	$('.popup-message .popup-body').append('<div class="popup-loading"><div class="popup-loading__title">Идет загрузка...</div><div class="popup-loading__icon"></div></div>');
	$('.popup-message').addClass('active').fadeIn(300);
}
function showMessageByClass(ms){
	$('.popup').hide();
	popupOpen('message.'+ms,'');
}
function showMessage(html){
	$('.popup-loading').remove();
	$('.popup-message-body').show().html(html);
}
function clearForm(form){
	$.each(form.find('.input'), function(index, val) {
			$(this).removeClass('focus').val($(this).data('value'));
			$(this).parent().removeClass('focus');
		if($(this).hasClass('phone')){
			maskclear($(this));
		}
	});
}
function addError(input){
		input.addClass('err');
		input.parent().addClass('err');
		input.parent().find('.form__error').remove();
	if(input.hasClass('email')){
			var error='';
		if(input.val()=='' || input.val()==input.attr('data-value')){
			error=input.data('error');
		}else{
			error=input.data('error');
		}
		if(error!=null){
			input.parent().append('<div class="form__error">'+error+'</div>');
		}
	}else{
		if(input.data('error')!=null && input.parent().find('.form__error').length==0){
			input.parent().append('<div class="form__error">'+input.data('error')+'</div>');
		}
	}
	if(input.parents('.select-block').length>0){
		input.parents('.select-block').parent().addClass('err');
		input.parents('.select-block').find('.select').addClass('err');
	}
}
function addErrorByName(form,input__name,error_text){
		var input=form.find('[name="'+input__name+'"]');
	input.attr('data-error',error_text);
	addError(input);
}
function addFormError(form, error_text){
	form.find('.form__generalerror').show().html(error_text);
}
function removeFormError(form){
	form.find('.form__generalerror').hide().html('');
}
function removeError(input){
	input.removeClass('err');
	input.parent().removeClass('err');
	input.parent().find('.form__error').remove();

	if(input.parents('.select-block').length>0){
		input.parents('.select-block').parent().removeClass('err');
		input.parents('.select-block').find('.select').removeClass('err').removeClass('active');
		//input.parents('.select-block').find('.select-options').hide();
	}
}
function removeFormErrors(form){
	form.find('.err').removeClass('err');
	form.find('.form__error').remove();
}
function maskclear(n){
	if(n.val()==""){
		n.inputmask('remove');
		if(!n.hasClass('l')){
			n.val(n.attr('data-value'));
		}
		n.removeClass('focus');
		n.parent().removeClass('focus');
	}
}
function searchselectreset() {
	$.each($('.select[data-type="search"]'), function(index, val){
			var block=$(this).parent();
			var select=$(this).parent().find('select');
		if($(this).find('.select-options__value:visible').length==1){
			$(this).addClass('focus');
			$(this).parents('.select-block').find('select').val($('.select-options__value:visible').data('value'));
			$(this).find('.select-title__value').val($('.select-options__value:visible').html());
			$(this).find('.select-title__value').attr('data-value',$('.select-options__value:visible').html());
		}else if(select.val()==''){
			$(this).removeClass('focus');
			block.find('input.select-title__value').val(select.find('option[selected="selected"]').html());
			block.find('input.select-title__value').attr('data-value',select.find('option[selected="selected"]').html());
		}
	});
};

$(document).ready(function() {
	// === Burger Handler =====================================================================
	function burgerBtnAnimation(e) {
		$('.burger span:nth-child(1)').toggleClass('first');
		$('.burger span:nth-child(2)').toggleClass('second');
		$('.burger span:nth-child(3)').toggleClass('third');
		$('.burger span:nth-child(4)').toggleClass('fourth');
		let classNameElem = document.querySelector('.burger').dataset.activel;
		document.querySelector(`.${classNameElem}`).classList.toggle('open');

		$('.' + classNameElem).slideToggle(300);
	}
	$('.burger').click((e) => burgerBtnAnimation(e));
// === Burger Handler =====================================================================	;

// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

// === // Проверка, поддержка браузером формата webp ==================================================================

// ==== accordion =======================================================
if ($('.accordion').length>0) {
	$.each($('.spoller.active'), function (index, val) {
		$(this).next().show();
	});
	$('body').on('click', '.spoller', function (event) {
		if ($(this).hasClass('mob') && !isMobile.any()) {
			return false;
		}

		if ($(this).parents('.one').length > 0) {
			$(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
			$(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
		}

		if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
			$.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
				$(this).removeClass('active');
				$(this).next().slideUp(300);
			});
		}
		$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
			if ($(this).parent().find('.slick-slider').length > 0) {
				$(this).parent().find('.slick-slider').slick('setPosition');
			}
		});
		return false;
	});
}

// ==== // accordion =======================================================


// ====  main-slider =======================================================
if($('.main-slider').length>0) {
	let progressBarSlider = document.querySelector('.progress-bar__slider');
	let controllerCurrentSlider = document.querySelector('.main-slider-controller__current-slider');

	$('.main-slider')
	.on('init', function(event, slick) {
		let totalSider = document.querySelector('.main-slider-controller__total-slider');

		totalSider.innerText = slick.slideCount;
		progressBarSlider.style.width = (100 / slick.slideCount) + '%';
	})
	.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
	})
	.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		progressBarSlider.style.left = (100 / slick.slideCount * (nextSlide)) + '%';
		controllerCurrentSlider.innerText = nextSlide + 1;
	})

	$('.main-slider-controller__arrow_left').on('click', function() {
		$('.main-slider').slick('slickPrev');
	});

	$('.main-slider-controller__arrow_right').on('click', function() {
		$('.main-slider').slick('slickNext');
	});
}
// ==== //  main-slider =======================================================


// ====  on-discounts__slider =======================================================
if($('.on-discounts__slider').length>0) {
	let controllerCurrentSlider = document.querySelector('.on-discounts-slider-controller__current-slider');
	let progressBarSlider = document.querySelector('.progress-bar__slider-2');
	$('.on-discounts__slider')
	.on('init', function(event, slick) {
		let totalSider = document.querySelector('.on-discounts-slider-controller__total-slider');

		totalSider.innerText = slick.slideCount;
		progressBarSlider.style.width = (100 / slick.slideCount) + '%';
	})
	.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		  {
		    breakpoint: 992,
		    settings: {
		      slidesToShow: 2,
		      slidesToScroll: 1,
		    }
		  },
		  {
		    breakpoint: 576,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1,
		    }
		  },
		]
	})
	.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		controllerCurrentSlider.innerText = nextSlide + 1;
		progressBarSlider.style.left = (100 / slick.slideCount * (nextSlide)) + '%';
	})

	$('.on-discounts-slider-controller__arrow_left').on('click', function() {
		$('.on-discounts__slider').slick('slickPrev');
	});

	$('.on-discounts-slider-controller__arrow_right').on('click', function() {
		$('.on-discounts__slider').slick('slickNext');
	});
}
// ==== //  on-discounts__slider =======================================================



});