import e from"lodash";import t from"chance";import n from"slugify";import i from"md5";import{format as r}from"date-fns";import a from"numeral";import s from"marked";import l from"prob.js";import o from"pluralize";import u from"faker";import d from"json-stringify-pretty-compact";var f=function(e,t){var n=e,i=t-e+1;return Math.floor(Math.random()*i)+n},p=function(e){for(var t;!t;)t=e[f(0,e.length-1)];return t},h=function(e){var t="a";return e.match(/^(a|e|i|o)/)&&(t="an"),t+" "+e},c=["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","lion","lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal","shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra","apple","apricot","banana","blackberry","blueberry","cherry","cranberry","currant","fig","grape","grapefruit","grapes","kiwi","kumquat","lemon","lime","melon","nectarine","orange","peach","pear","persimmon","pineapple","plum","pomegranate","prune","raspberry","strawberry","tangerine","watermelon"],g=["adaptable","adventurous","affable","affectionate","agreeable","alert","alluring","ambitious","ambitious","amiable","amicable","amused","amusing","boundless","brave","brave","bright","bright","broad-minded","calm","calm","capable","careful","charming","charming","cheerful","coherent","comfortable","communicative","compassionate","confident","conscientious","considerate","convivial","cooperative","courageous","courageous","courteous","creative","credible","cultured","dashing","dazzling","debonair","decisive","decisive","decorous","delightful","detailed","determined","determined","diligent","diligent","diplomatic","discreet","discreet","dynamic","dynamic","eager","easygoing","efficient","elated","eminent","emotional","enchanting","encouraging","endurable","energetic","energetic","entertaining","enthusiastic","enthusiastic","excellent","excited","exclusive","exuberant","exuberant","fabulous","fair","fair-minded","faithful","faithful","fantastic","fearless","fearless","fine","forceful","frank","frank","friendly","friendly","funny","funny","generous","generous","gentle","gentle","glorious","good","good","gregarious","happy","hard-working","harmonious","helpful","helpful","hilarious","honest","honorable","humorous","imaginative","impartial","impartial","independent","industrious","instinctive","intellectual","intelligent","intuitive","inventive","jolly","joyous","kind","kind","kind-hearted","knowledgeable","level","likeable","lively","lovely","loving","loving","loyal","lucky","mature","modern","modest","neat","nice","nice","obedient","optimistic","painstaking","passionate","patient","peaceful","perfect","persistent","philosophical","pioneering","placid","placid","plausible","pleasant","plucky","plucky","polite","powerful","practical","pro-active","productive","protective","proud","punctual","quick-witted","quiet","quiet","rational","receptive","reflective","reliable","relieved","reserved","resolute","resourceful","responsible","rhetorical","righteous","romantic","romantic","sedate","seemly","selective","self-assured","self-confident","self-disciplined","sensible","sensitive","sensitive","shrewd","shy","silly","sincere","sincere","skillful","smiling","sociable","splendid","steadfast","stimulating","straightforward","successful","succinct","sympathetic","talented","thoughtful","thoughtful","thrifty","tidy","tough","tough","trustworthy","unassuming","unbiased","understanding","unusual","upbeat","versatile","vigorous","vivacious","warm","warmhearted","willing","willing","wise","witty","witty","wonderful"],m=["a","e","i","o","u","y"],v=["the {{noun}} is {{a_noun}}","{{a_noun}} is {{an_adjective}} {{noun}}","the first {{adjective}} {{noun}} is, in its own way, {{a_noun}}","their {{noun}} was, in this moment, {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}} from the right perspective","the literature would have us believe that {{an_adjective}} {{noun}} is not but {{a_noun}}","{{an_adjective}} {{noun}} is {{a_noun}} of the mind","the {{adjective}} {{noun}} reveals itself as {{an_adjective}} {{noun}} to those who look","authors often misinterpret the {{noun}} as {{an_adjective}} {{noun}}, when in actuality it feels more like {{an_adjective}} {{noun}}","we can assume that any instance of {{a_noun}} can be construed as {{an_adjective}} {{noun}}","they were lost without the {{adjective}} {{noun}} that composed their {{noun}}","the {{adjective}} {{noun}} comes from {{an_adjective}} {{noun}}","{{a_noun}} can hardly be considered {{an_adjective}} {{noun}} without also being {{a_noun}}","few can name {{an_adjective}} {{noun}} that isn't {{an_adjective}} {{noun}}","some posit the {{adjective}} {{noun}} to be less than {{adjective}}","{{a_noun}} of the {{noun}} is assumed to be {{an_adjective}} {{noun}}","{{a_noun}} sees {{a_noun}} as {{an_adjective}} {{noun}}","the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}}'s {{noun}}","{{a_noun}} is the {{noun}} of {{a_noun}}","{{an_adjective}} {{noun}}'s {{noun}} comes with it the thought that the {{adjective}} {{noun}} is {{a_noun}}","{{nouns}} are {{adjective}} {{nouns}}","{{adjective}} {{nouns}} show us how {{nouns}} can be {{nouns}}","before {{nouns}}, {{nouns}} were only {{nouns}}","those {{nouns}} are nothing more than {{nouns}}","some {{adjective}} {{nouns}} are thought of simply as {{nouns}}","one cannot separate {{nouns}} from {{adjective}} {{nouns}}","the {{nouns}} could be said to resemble {{adjective}} {{nouns}}","{{an_adjective}} {{noun}} without {{nouns}} is truly a {{noun}} of {{adjective}} {{nouns}}"],y=["to be more specific, ","in recent years, ","however, ","by the way","of course, ","some assert that ","if this was somewhat unclear, ","unfortunately, that is wrong; on the contrary, ","it's very tricky, if not impossible, ","this could be, or perhaps ","this is not to discredit the idea that ","we know that ","it's an undeniable fact, really; ","framed in a different way, ","what we don't know for sure is whether or not ","as far as we can estimate, ","as far as he is concerned, ","the zeitgeist contends that ","though we assume the latter, ","far from the truth, ","extending this logic, ","nowhere is it disputed that ","in modern times ","in ancient times ","recent controversy aside, ","washing and polishing the car,","having been a gymnast, ","after a long day at school and work, ","waking to the buzz of the alarm clock, ","draped neatly on a hanger, ","shouting with happiness, "],b=["noun","a_noun","nouns","adjective","an_adjective"],w={noun:function(){return p(c)},a_noun:function(){return h(p(c))},nouns:function(){return(e=p(c)).endsWith("s")?e:(e.match(/(ss|ish|ch|x|us)$/)?e+="e":e.endsWith("y")&&!m.includes(e.charAt(e.length-2))&&(e=e.slice(0,e.length-1),e+="ie"),e+"s");var e},adjective:function(){return p(g)},an_adjective:function(){return h(p(g))}},M=function(){return function(e){var t=e,n=e.match(/\{\{(.+?)\}\}/g);if(n&&n.length)for(var i=0;i<n.length;i++){var r=n[i].replace("{{","").replace("}}","").replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "),a=void 0;b.includes(r)&&(a=w[r]()),t=t.replace(n[i],a)}return t}(p(v))},j=function(){var e,t=(Math.random()<.33?p(y):"")+M();if(t=t.charAt(0).toUpperCase()+t.slice(1),t+=(e=".......!?!?;...".split(""),p(e)),Math.random()>=.9){t=p(["He said","She said","In his own words","In her own words","Yelling","Wispering","Quoting with intend"])+': "'+t+'"'}return t},_=function(e){void 0===e&&(e=0),e||(e=f(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=j();n.push(i)}return n.join(" ")},k=function(e){void 0===e&&(e=0),e||(e=f(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=_();n.push(i)}return n.join("\n\n")},x=new t;function N(e,t){var n=new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())),i=""+(n.getMonth()+1),r=""+n.getDate(),a=n.getFullYear(),s=""+n.getHours(),l=""+n.getMinutes(),o=""+n.getSeconds();return i.length<2&&(i="0"+i),r.length<2&&(r="0"+r),s.length<2&&(s="0"+s),l.length<2&&(l="0"+l),o.length<2&&(o="0"+o),[a,i,r].join("-")+"T"+[s,l,o].join(":")+"+01:00"}function T(e){var t,n=Math.min.apply(Math,e),i=Math.max.apply(Math,e),r=[];for(t=n;t<=i;t++)-1==e.indexOf(t)&&r.push(t);return r.length>0&&{start:Math.min.apply(Math,r),end:Math.max.apply(Math,r)}}function W(e){if(!isFinite(e))return 0;for(var t=1,n=0;Math.round(e*t)/t!==e;)t*=10,n++;return n}function O(e){for(var t=0,n=0,i=e;n<i.length;n+=1){var r=W(i[n]);r>t&&(t=r)}return t}function D(e){for(var t,n=!0,i=0,r=e;i<r.length;i+=1)if(Q(t=r[i])!==t){n=!1;break}return n}function F(e){return Math.min.apply(Math,e)}function C(e){return Math.max.apply(Math,e)}function z(e){for(var t,n,i=999999999,r=0,a=e;r<a.length;r+=1){t=a[r];for(var s=0,l=e;s<l.length;s+=1)t!==(n=l[s])&&Math.abs(t-n)<i&&(i=Math.abs(t-n))}return i}function E(e,t,n){var i,r;return arguments.length<2&&(t=e,e=0),n||(n=1),i=(t-e)/n,r=Math.random(),r*=i,r=Math.floor(r),r*=n,r+=e}function q(e,t){var n=Math.abs((l.normal(0,1)()+3)/6),i=Math.floor(n*(t-e)+e);return i<e&&(i=e),i>t&&(i=t),i}function S(e){return Math.max.apply(Math,e.map(function(e){return e.length}))}function $(e){return Math.min.apply(Math,e.map(function(e){return e.split(" ").length}))}function A(e){return Math.max.apply(Math,e.map(function(e){return e.split(" ").length}))}function I(t){return Math.min.apply(Math,t.map(function(t){return e.compact(t.split(/[\.\!\?]+/)).length}))}function U(t){return Math.max.apply(Math,t.map(function(t){return e.compact(t.split(/[\.\!\?]+/)).length}))}function L(t){return Math.min.apply(Math,t.map(function(t){return e.compact(t.replace(/\n$/gm,"").split(/\n/)).length}))}function J(t){return Math.max.apply(Math,t.map(function(t){return e.compact(t.replace(/\n$/gm,"").split(/\n/)).length}))}function Y(e){return new Date(Math.min.apply(null,e))}function H(e){return new Date(Math.max.apply(null,e))}function P(e){for(var t=[],n=0,i=e;n<i.length;n+=1)t.push(new Date(i[n]));return t}function Q(e){return e.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})}function B(e,t){for(var n,i={},r=[],a=0,s=e;a<s.length;a+=1)void 0===i[n=s[a]]?i[n]=1:i[n]++;for(var l=0,o=t;l<o.length;l+=1)r.push(i[n=o[l]]);return r}function G(e){for(var t,n=null,i=null,r=!1,a=0,s=e;a<s.length;a+=1){if(t=s[a],null!==i&&t>i){if("desc"===n){r=!0;break}n="asc"}if(null!==i&&t<i){if("asc"===n){r=!0;break}n="desc"}i=t}return!r&&null!==n&&n}function K(e){for(var t=null,n=null,i=!1,r=0,a=e;r<a.length;r+=1){var s=new Date(a[r]);if(null!==n&&s>n){if("desc"===t){i=!0;break}t="asc"}if(null!==n&&s<n){if("asc"===t){i=!0;break}t="desc"}n=s}return!i&&null!==t&&t}function R(t,l){if(t.constructor!==Array){t=String(t);var u=Number(t);if("slug"===l)return n(t,{lower:!0});if("lower"===l)return t.toLowerCase();if("uppper"===l)return t.toLowerCase();if("md5"===l)return i(t);if("capitalize"===l)return Q(t);if("plural"===l)return o.plural(t);if("singular"===l)return o.singular(t);if("trim"===l)return t.replace(/\s/g,"");if("md"===l)return s(t);if(NaN!==u&&"round"===l)return Math.round(t);if(NaN!==u&&"floor"===l)return Math.floor(t);if(NaN!==u&&"ceil"===l)return Math.ceil(t);if(NaN!==u&&"plus:"===l.substring(0,5)){var d=l.split(":");return u+Number(d[1])}if(NaN!==u&&"minus:"===l.substring(0,6)){var f=l.split(":");return u-Number(f[1])}if(NaN!==u&&"times:"===l.substring(0,6)){var p=l.split(":");return u*Number(p[1])}if(NaN!==u&&"max:"===l.substring(0,4)){var h=l.split(":"),c=Number(h[1]);return u>c?c:u}if(NaN!==u&&"min:"===l.substring(0,4)){var g=l.split(":"),m=Number(g[1]);return u<m?m:u}if(NaN!==u&&"num:"===l.substring(0,4)){var v=l.split(":");return a(u).format(v[1])}if("optional"===l&&Math.random()>=.5)return"";if("date:"===l.substring(0,5)){var y=l.split(":");return r(new Date(t),y[1])}return t}return"count"===l?t.length:"max"===l?C(t):"min"===l?F(t):"sum"===l?e.sum(t):"avg"===l?e.mean(t):"rand"===l?e.sample(t):t}function V(e,t){for(var n=R(e,t[1]),i=2;t.length>i;)n=R(n,t[i]),i++;return n}function X(e,t,n,i){var r=e[0];if(void 0!==i[r]){for(var a,s=[],l=0,o=i[r];l<o.length;l+=1)(a=o[l])[t+"_id"]===n&&s.push(e.length>1?a[e[1]]:a.id);return s}return[]}function Z(e,t,n){var i=!1,r=t.slice(0),a=e;if(0===t.length)return null;for(;!i;){var s=r.shift();if(void 0===a[s+"_id"])return void 0!==a[s]?void 0!==a[s][t[t.length-1]]?a[s][t[t.length-1]]:"object"!=typeof a[s]?a[s]:null:null;var l=void 0,u=o.plural(s);if(void 0!==n[u])for(l in n[u])n[u][l].id===a[s+"_id"]&&(a=n[u][l]);0===r.length&&(i=!0)}return null}function ee(e){var t="undefined",n=!1;return"boolean"==typeof e?t="boolean":"number"==typeof e?t=Math.round(e)===e?"int":"float":"string"==typeof e?/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(e)?t="date":!function(e){return/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\+[0-9]{2}:[0-9]{2}$/.test(e)}(e)?!function(e){return/^[0-9]{2}:[0-9]{2}:[0-9]{2}$|^[0-9]{2}:[0-9]{2}$/.test(e)}(e)?1===e.length?t="char":(/{{\s*([\w\.\?\|\:]+)\s*}}/.test(e)&&(n=!0),t="string"):t="time":t="datetime":"object"==typeof e&&(t=Array.isArray(e)?"array":"JSON"),{fieldType:t,containsTemplate:n}}function te(e,t,n){return t==n?e:(e.hasOwnProperty(t)&&(e[n]=e[t],delete e[t]),e)}function ne(e,t,n,i){for(var r=[],a=0,s=i;a<s.length;a+=1)if(prevField=s[a],"int"!==n&&"float"!==n||"int"!==prevField.type&&"float"!==prevField.type){if("date"===n&&"date"===prevField.type||"datetime"===n&&"datetime"===prevField.type){var l=new Date(t),o=new Date(prevField.value);r.push(l>o?e+">"+prevField.key:l<o?e+"<"+prevField.key:e+"="+prevField.key)}}else t>prevField.value?r.push(e+">"+prevField.key):t<prevField.value?r.push(e+"<"+prevField.key):r.push(e+"="+prevField.key);return r}function ie(e){for(var t,n=[],i=0,r=e;i<r.length;i+=1){var a=(t=r[i]).split(/>|<|=/);t.indexOf("<")>-1&&-1===e.indexOf(a[0]+">"+a[1])&&-1===e.indexOf(a[0]+"="+a[1])&&n.push(t),t.indexOf(">")>-1&&-1===e.indexOf(a[0]+"<"+a[1])&&-1===e.indexOf(a[0]+"="+a[1])&&n.push(t),t.indexOf("=")>-1&&-1===e.indexOf(a[0]+">"+a[1])&&-1===e.indexOf(a[0]+"<"+a[1])&&n.push(t)}return n}function re(e,t,n,i){if(0===t.length)return!0;if(""===e)return!1;for(var r,a=0,s=t;a<s.length;a+=1){var l=(r=s[a]).split(/>|<|=/);if(void 0!==n[l[1]]&&""!==n[l[1]])if("int"===i||"float"===i){if(r.indexOf("<")>-1&&e>=n[l[1]])return!1;if(r.indexOf(">")>-1&&e<=n[l[1]])return!1;if(r.indexOf("=")>-1&&e!==n[l[1]])return!1}else if("date"===i||"datetime"===i){var o=new Date(e),u=new Date(n[l[1]]);if(r.indexOf("<")>-1&&o>=u)return!1;if(r.indexOf(">")>-1&&o<=u)return!1;if(r.indexOf("=")>-1&&o!==u)return!1}}return!0}function ae(e,t,n){var i;for(i in t)if(e.indexOf(n+"="+i)>-1)return t[i];return null}var se,le=new t;se=v.concat(["congratulations to the {{noun}} that won the {{adjective}} {{noun}} with {{a_noun}}","incomprehensibilities of a {{adjective}} {{noun}} and {{a_noun}} made {{a_noun}} {{adjective}}"]),v=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(se),module.exports=function(t){var n,i,r,a,s,l,f,p,h,c,g,m,v,y=!1,b={},M=[],W={},R=[];for(n in"string"==typeof b?(b=JSON.parse(t),y=!0):b=t,b)for(a in b[n])for(r in b[n][a]){var se=r.split("__");"__"!==r.substr(0,2)?se.length>1&&(W[n+"."+se[1]]=n+"."+se[0],te(b[n][a],r,se[1])):(R.push(n+"."+r.substr(2)),te(b[n][a],r,r.substr(2)))}for(n in b){var oe={key:n,minID:1,maxID:1,totalCount:0,fields:{}};for(a in b[n]){var ue=[];for(r in b[n][a]){var de=b[n][a][r],fe=ee(de),pe=fe.fieldType,he=fe.containsTemplate;if(void 0===oe.fields[r]?oe.fields[r]={types:[pe],entries:[de],allEntries:[de],containsTemplate:he,rules:[],cnt:1}:(oe.fields[r].types.push(pe),oe.fields[r].types=e.uniq(oe.fields[r].types),oe.fields[r].entries.push(de),oe.fields[r].entries=e.uniq(oe.fields[r].entries),oe.fields[r].allEntries.push(de),oe.fields[r].cnt++,he&&(oe.fields[r].containsTemplate=!0)),"JSON"===pe){var ce=void 0;for(ce in de){var ge=de[ce],me=ee(ge),ve=me.fieldType,ye=me.containsTemplate;void 0===oe.fields[r+"."+ce]?oe.fields[r+"."+ce]={types:[ve],entries:[ge],allEntries:[ge],containsTemplate:ye,cnt:1}:(oe.fields[r+"."+ce].types.push(ve),oe.fields[r+"."+ce].types=e.uniq(oe.fields[r+"."+ce].types),oe.fields[r+"."+ce].entries.push(ge),oe.fields[r+"."+ce].entries=e.uniq(oe.fields[r+"."+ce].entries),oe.fields[r+"."+ce].allEntries.push(ge),oe.fields[r+"."+ce].cnt++,ye&&(oe.fields[r+"."+ce].objContainsTemplate=!0))}}if(ue.length>0&&"id"!==r&&!r.endsWith("_id")&&!r.endsWith("_ids")){var be=ne(r,de,pe,ue);be.length>0&&(oe.fields[r].rules=oe.fields[r].rules.concat(be))}"id"===r||r.endsWith("_id")||r.endsWith("_ids")||ue.push({key:r,value:de,type:pe})}}for(r in oe.fields)"id"===r&&(oe.totalCount=oe.fields[r].cnt),oe.fields[r].type=1===oe.fields[r].types.length?oe.fields[r].types[0]:2==oe.fields[r].types.length&&oe.fields[r].types.indexOf("int")>-1&&oe.fields[r].types.indexOf("float")>-1?"float":"string",oe.fields[r].entries.length<oe.fields[r].cnt||oe.fields[r].containsTemplate?(oe.fields[r].repeatEntries=!0,oe.fields[r].weights=B(oe.fields[r].allEntries,oe.fields[r].entries)):oe.fields[r].repeatEntries=!1,oe.fields[r].required=!(oe.fields[r].cnt<oe.totalCount),oe.fields[r].rules=ie(e.uniq(oe.fields[r].rules)),oe.fields[r].dir=!1,"int"!==oe.fields[r].type&&"float"!==oe.fields[r].type||(oe.fields[r].dir=G(oe.fields[r].entries)),"date"!==oe.fields[r].type&&"datetime"!==oe.fields[r].type||(oe.fields[r].dir=K(oe.fields[r].entries));oe.gap=T(oe.fields.id.entries),M.push(oe)}for(n in M){var we=M[n];if(we.gap){var Me=void 0,je=void 0;for(Me=we.gap.start;Me<=we.gap.end;Me++){var _e={};for(je in we.fields){var ke="";if(we.fields[je].repeatEntries||we.fields[je].containsTemplate)ke=le.weighted(we.fields[je].entries,we.fields[je].weights);else{if("id"===je&&(ke=Me),"age"!==je&&!je.endsWith(".age")||"int"!==we.fields[je].type||(ke=le.age()),"firstname"!==je&&!je.endsWith(".firstname")||"string"!==we.fields[je].type||(ke=le.first()),"lastname"!==je&&!je.endsWith(".lastname")||"string"!==we.fields[je].type||(ke=le.last()),"company"!==je&&!je.endsWith(".company")||"string"!==we.fields[je].type||(ke=le.company()),"country"!==je&&!je.endsWith(".country")||"string"!==we.fields[je].type||(ke=le.country()),"email"!==je&&!je.endsWith(".email")||"string"!==we.fields[je].type||(ke=u.internet.exampleEmail()),"color"!==je&&!je.endsWith(".color")||"string"!==we.fields[je].type||(ke=le.color()),"ip"!==je&&!je.endsWith(".ip")||"string"!==we.fields[je].type||(ke=le.ip()),"profession"!==je&&!je.endsWith(".profession")||"string"!==we.fields[je].type||(ke=le.profession()),"url"!==je&&!je.endsWith(".url")||"string"!==we.fields[je].type||(ke=le.url()),"city"!==je&&!je.endsWith(".city")||"string"!==we.fields[je].type||(ke=le.city()),"street"!==je&&!je.endsWith(".street")||"string"!==we.fields[je].type||(ke=le.street()),"zip"!==je&&!je.endsWith(".zip")||"int"!==we.fields[je].type||(ke=parseInt(le.zip())),"weekday"!==je&&!je.endsWith(".weekday")||"string"!==we.fields[je].type||(ke=le.weekday()),"year"!==je&&!je.endsWith(".year")||"int"!==we.fields[je].type||(ke=parseInt(le.year())),"password"!==je&&!je.endsWith(".password")||"string"!==we.fields[je].type||(ke=le.hash()),"guid"!==je&&!je.endsWith(".guid")||"string"!==we.fields[je].type||(ke=le.guid()),"product"!==je&&!je.endsWith(".product")||"string"!==we.fields[je].type||(ke=u.commerce.productName()),"material"!==je&&!je.endsWith(".material")||"string"!==we.fields[je].type||(ke=u.commerce.productMaterial()),"iban"!==je&&!je.endsWith(".iban")||"string"!==we.fields[je].type||(ke=u.finance.iban()),"bic"!==je&&!je.endsWith(".bic")||"string"!==we.fields[je].type||(ke=u.finance.bic()),"avatar"!==je&&!je.endsWith(".avatar")||"string"!==we.fields[je].type||(ke=u.image.avatar()),"username"!==je&&!je.endsWith(".username")||"string"!==we.fields[je].type||(ke=u.internet.userName()),"homepage"!==je&&!je.endsWith(".homepage")||"string"!==we.fields[je].type||(ke=u.internet.url()),"job"!==je&&!je.endsWith(".job")||"string"!==we.fields[je].type||(ke=u.name.jobTitle()),"mimetype"!==je&&!je.endsWith(".mimetype")||"string"!==we.fields[je].type||(ke=u.system.mimeType()),""===ke&&"JSON"===we.fields[je].type&&(ke={}),""===ke&&"array"===we.fields[je].type){for(var xe=null,Ne=null,Te=0,We=0,Oe=we.fields[je].entries;We<Oe.length;We+=1){arrEntry=Oe[We];var De=F(arrEntry),Fe=C(arrEntry),Ce=arrEntry.length;Ce>0&&(null===xe||De<xe)&&(xe=De),Ce>0&&(null===Ne||Fe>Ne)&&(Ne=Fe),Ce>Te&&(Te=Ce)}(ke=Array.from({length:Math.floor(Math.random()*Te)+1},function(){return E(xe,Ne,1)})).sort(function(e,t){return e-t})}if(""===ke&&"string"===we.fields[je].type){var ze=Math.min.apply(Math,we.fields[je].entries.map(function(e){return e.length})),Ee=S(we.fields[je].entries),qe=($(we.fields[je].entries),A(we.fields[je].entries)),Se=I(we.fields[je].entries),$e=U(we.fields[je].entries),Ae=L(we.fields[je].entries),Ie=J(we.fields[je].entries);ke=Ie>1?k(Math.floor(Math.random()*Ie)+Ae):$e>1?_(Math.floor(Math.random()*$e)+Se):qe>1?j():we.fields[je].entries[0][0].toUpperCase()===we.fields[je].entries[0][0]?le.capitalize(le.word({length:Math.floor(Math.random()*ze)+Ee})):le.string({length:Math.floor(Math.random()*ze)+Ee}),we.fields[je].entries[0]===we.fields[je].entries[0].toUpperCase()?ke=ke.toUpperCase():we.fields[je].entries[0]===we.fields[je].entries[0].toLowerCase()?ke=ke.toLowerCase():D(we.fields[je].entries)&&(ke=Q(ke))}if(""===ke&&"int"===we.fields[je].type){var Ue=F(we.fields[je].entries),Le=C(we.fields[je].entries),Je=z(we.fields[je].entries),Ye=0,He=ae(we.fields[je].rules,_e,je),Pe=(Le-Ue)/(we.gap.end-we.gap.start+1);if("asc"===we.fields[je].dir?(Le=Math.ceil(Ue+(Me-we.gap.start+1)*Pe-1),Ue=Math.floor(Ue+(Me-we.gap.start)*Pe+1)):"desc"===we.fields[je].dir&&(Ue=Math.ceil(Le-(Me-we.gap.start+1)*Pe+1),Le=Math.floor(Le-(Me-we.gap.start)*Pe-1)),je.endsWith("_id"))ke=q(Ue,Le);else if(null===He)for(;0===Ye||!re(ke,we.fields[je].rules,_e,we.fields[je].type)&&Ye<100;)ke=E(Ue,Le,Je),Ye++;else ke=He}if(""===ke&&"float"===we.fields[je].type){var Qe=F(we.fields[je].entries),Be=C(we.fields[je].entries),Ge=O(we.fields[je].entries),Ke=0,Re=ae(we.fields[je].rules,_e,je),Ve=(Be-Qe-1)/(we.gap.end-we.gap.start+1);if("asc"===we.fields[je].dir?(Be=Qe+(Me-we.gap.start+1)*Ve+1,Qe=Qe+(Me-we.gap.start)*Ve+1):"desc"===we.fields[je].dir&&(Qe=Be-(Me-we.gap.start+1)*Ve-1,Be=Be-(Me-we.gap.start)*Ve-1),null===Re)for(;0===Ke||!re(ke,we.fields[je].rules,_e,we.fields[je].type)&&Ke<100;)ke=Number(le.floating({min:Qe,max:Be}).toFixed(Ge)),Ke++;else ke=Re}if(""===ke&&"char"===we.fields[je].type&&(ke=we.fields[je].entries[0]===we.fields[je].entries[0].toUpperCase()?le.letter({casing:"upper"}):we.fields[je].entries[0]===we.fields[je].entries[0].toLowerCase()?le.letter({casing:"lower"}):le.letter()),""===ke&&"date"===we.fields[je].type){var Xe=Y(P(we.fields[je].entries)),Ze=H(P(we.fields[je].entries)),et=0,tt=ae(we.fields[je].rules,_e,je),nt=we.gap.end-we.gap.start+1,it=(Ze.getTime()-Xe.getTime()-1)/nt;if("asc"===we.fields[je].dir?(Ze=new Date(Xe.getTime()+(Me-we.gap.start+1)*it+1),Xe=new Date(Xe.getTime()+(Me-we.gap.start)*it+1)):"desc"===we.fields[je].dir&&(Xe=new Date(Ze.getTime()-(Me-we.gap.start+1)*it-1),Ze=new Date(Ze.getTime()-(Me-we.gap.start)*it-1)),null===tt)for(;0===et||!re(ke,we.fields[je].rules,_e,we.fields[je].type)&&et<100;)p=Xe,h=Ze,c=void 0,g=void 0,m=void 0,v=void 0,c=new Date(p.getTime()+Math.random()*(h.getTime()-p.getTime())),g=""+(c.getMonth()+1),m=""+c.getDate(),v=c.getFullYear(),g.length<2&&(g="0"+g),m.length<2&&(m="0"+m),ke=[v,g,m].join("-"),et++;else ke=tt}if(""===ke&&"datetime"===we.fields[je].type){var rt=Y(P(we.fields[je].entries)),at=H(P(we.fields[je].entries)),st=0,lt=ae(we.fields[je].rules,_e,je),ot=we.gap.end-we.gap.start+1,ut=(at.getTime()-rt.getTime()-1)/ot;if("asc"===we.fields[je].dir?(at=new Date(rt.getTime()+(Me-we.gap.start+1)*ut+1),rt=new Date(rt.getTime()+(Me-we.gap.start)*ut+1)):"desc"===we.fields[je].dir&&(rt=new Date(at.getTime()-(Me-we.gap.start+1)*ut-1),at=new Date(at.getTime()-(Me-we.gap.start)*ut-1)),null===lt)for(;0===st||!re(ke,we.fields[je].rules,_e,we.fields[je].type)&&st<100;)ke=N(rt,at),st++;else ke=lt}""===ke&&"time"===we.fields[je].type&&(s=void 0,l=void 0,f=void 0,s=String(x.hour({twentyfour:!0})),l=String(x.minute()),f=String(x.second()),1===s.length&&(s="0"+s),1===l.length&&(l="0"+l),1===f.length&&(f="0"+f),ke=Math.random()>=.5?[s,l,f].join(":"):[s,l].join(":")),""===ke&&"boolean"===we.fields[je].type&&(ke=Math.random()>=.5)}if(we.fields[je].required||Math.random()>=.5)if(je.indexOf(".")>-1){var dt=je.split(".");void 0!==_e[dt[0]]&&(_e[dt[0]][dt[1]]=ke)}else _e[je]=ke}b[we.key].push(_e)}}}for(n in b)for(i in b[n]){var ft=function(){var e,t=b[n][i][r],a=b[n][i].id;"string"==typeof t&&(b[n][i][r]=t.replace(/{{\s*([\w\.\?\|\:]+)\s*}}/g,function(e,t){var r=t.split("?"),s=r[0].split("|"),l=s[0].split(".");if("number"===l[0]&&1===l.length)return Math.floor(10*Math.random());if("sentence"===l[0]&&1===l.length)return j();if("paragraph"===l[0]&&1===l.length)return _();if("word"===l[0]&&2===l.length){if(void 0!==w[l[1]])return s.length>1?V(w[l[1]](),s):w[l[1]]()}else{if("field"===l[0]&&2===l.length&&void 0!==b[n][i][l[1]])return s.length>1?V(b[n][i][l[1]],s):b[n][i][l[1]];if("field"===l[0]&&l.length>2){var u=l.slice(1),d=Z(b[n][i],u,b);if(null!==d)return s.length>1?V(d,s):d;if(r.length>1)return r[1]}else if("connected"===l[0]&&l.length>1){var f=X(l.slice(1),o.singular(n),a,b);if(f.length>0)return s.length>1?V(f,s):f.length>1?[f.slice(0,-1).join(", "),f.slice(-1)[0]].join(f.length<2?"":" and "):f.join(",")}else if(r.length>1)return r[1]}return e}),b[n][i][r]=b[n][i][r].replace(/  +/g," "),e=b[n][i][r],!isNaN(parseFloat(e))&&isFinite(e)&&(b[n][i][r]=Number(b[n][i][r])))};for(r in b[n][i])ft()}for(n in b)for(a in b[n])for(r in b[n][a])R.indexOf(n+"."+r)>-1&&delete b[n][a][r],void 0!==W[n+"."+r]&&te(b[n][a],r,W[n+"."+r].split(".")[1]);return y?d(b):b};
//# sourceMappingURL=blowson.m.js.map
