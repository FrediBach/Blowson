function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(require("lodash")),n=e(require("chance")),i=e(require("slugify")),r=e(require("md5")),a=require("date-fns"),s=e(require("numeral")),l=e(require("marked")),o=e(require("prob.js")),u=e(require("pluralize")),d=e(require("voca")),f=e(require("faker")),h=e(require("json-stringify-pretty-compact")),p=function(e,t){var n=e,i=t-e+1;return Math.floor(Math.random()*i)+n},c=function(e){for(var t;!t;)t=e[p(0,e.length-1)];return t},g=function(e){var t="a";return e.match(/^(a|e|i|o)/)&&(t="an"),t+" "+e},m=["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","lion","lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal","shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra","apple","apricot","banana","blackberry","blueberry","cherry","cranberry","currant","fig","grape","grapefruit","grapes","kiwi","kumquat","lemon","lime","melon","nectarine","orange","peach","pear","persimmon","pineapple","plum","pomegranate","prune","raspberry","strawberry","tangerine","watermelon"],v=["adaptable","adventurous","affable","affectionate","agreeable","alert","alluring","ambitious","ambitious","amiable","amicable","amused","amusing","boundless","brave","brave","bright","bright","broad-minded","calm","calm","capable","careful","charming","charming","cheerful","coherent","comfortable","communicative","compassionate","confident","conscientious","considerate","convivial","cooperative","courageous","courageous","courteous","creative","credible","cultured","dashing","dazzling","debonair","decisive","decisive","decorous","delightful","detailed","determined","determined","diligent","diligent","diplomatic","discreet","discreet","dynamic","dynamic","eager","easygoing","efficient","elated","eminent","emotional","enchanting","encouraging","endurable","energetic","energetic","entertaining","enthusiastic","enthusiastic","excellent","excited","exclusive","exuberant","exuberant","fabulous","fair","fair-minded","faithful","faithful","fantastic","fearless","fearless","fine","forceful","frank","frank","friendly","friendly","funny","funny","generous","generous","gentle","gentle","glorious","good","good","gregarious","happy","hard-working","harmonious","helpful","helpful","hilarious","honest","honorable","humorous","imaginative","impartial","impartial","independent","industrious","instinctive","intellectual","intelligent","intuitive","inventive","jolly","joyous","kind","kind","kind-hearted","knowledgeable","level","likeable","lively","lovely","loving","loving","loyal","lucky","mature","modern","modest","neat","nice","nice","obedient","optimistic","painstaking","passionate","patient","peaceful","perfect","persistent","philosophical","pioneering","placid","placid","plausible","pleasant","plucky","plucky","polite","powerful","practical","pro-active","productive","protective","proud","punctual","quick-witted","quiet","quiet","rational","receptive","reflective","reliable","relieved","reserved","resolute","resourceful","responsible","rhetorical","righteous","romantic","romantic","sedate","seemly","selective","self-assured","self-confident","self-disciplined","sensible","sensitive","sensitive","shrewd","shy","silly","sincere","sincere","skillful","smiling","sociable","splendid","steadfast","stimulating","straightforward","successful","succinct","sympathetic","talented","thoughtful","thoughtful","thrifty","tidy","tough","tough","trustworthy","unassuming","unbiased","understanding","unusual","upbeat","versatile","vigorous","vivacious","warm","warmhearted","willing","willing","wise","witty","witty","wonderful"],y=["a","e","i","o","u","y"],b=["the {{noun}} is {{a_noun}}","{{a_noun}} is {{an_adjective}} {{noun}}","the first {{adjective}} {{noun}} is, in its own way, {{a_noun}}","their {{noun}} was, in this moment, {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}} from the right perspective","the literature would have us believe that {{an_adjective}} {{noun}} is not but {{a_noun}}","{{an_adjective}} {{noun}} is {{a_noun}} of the mind","the {{adjective}} {{noun}} reveals itself as {{an_adjective}} {{noun}} to those who look","authors often misinterpret the {{noun}} as {{an_adjective}} {{noun}}, when in actuality it feels more like {{an_adjective}} {{noun}}","we can assume that any instance of {{a_noun}} can be construed as {{an_adjective}} {{noun}}","they were lost without the {{adjective}} {{noun}} that composed their {{noun}}","the {{adjective}} {{noun}} comes from {{an_adjective}} {{noun}}","{{a_noun}} can hardly be considered {{an_adjective}} {{noun}} without also being {{a_noun}}","few can name {{an_adjective}} {{noun}} that isn't {{an_adjective}} {{noun}}","some posit the {{adjective}} {{noun}} to be less than {{adjective}}","{{a_noun}} of the {{noun}} is assumed to be {{an_adjective}} {{noun}}","{{a_noun}} sees {{a_noun}} as {{an_adjective}} {{noun}}","the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}}'s {{noun}}","{{a_noun}} is the {{noun}} of {{a_noun}}","{{an_adjective}} {{noun}}'s {{noun}} comes with it the thought that the {{adjective}} {{noun}} is {{a_noun}}","{{nouns}} are {{adjective}} {{nouns}}","{{adjective}} {{nouns}} show us how {{nouns}} can be {{nouns}}","before {{nouns}}, {{nouns}} were only {{nouns}}","those {{nouns}} are nothing more than {{nouns}}","some {{adjective}} {{nouns}} are thought of simply as {{nouns}}","one cannot separate {{nouns}} from {{adjective}} {{nouns}}","the {{nouns}} could be said to resemble {{adjective}} {{nouns}}","{{an_adjective}} {{noun}} without {{nouns}} is truly a {{noun}} of {{adjective}} {{nouns}}"],w=["to be more specific, ","in recent years, ","however, ","by the way","of course, ","some assert that ","if this was somewhat unclear, ","unfortunately, that is wrong; on the contrary, ","it's very tricky, if not impossible, ","this could be, or perhaps ","this is not to discredit the idea that ","we know that ","it's an undeniable fact, really; ","framed in a different way, ","what we don't know for sure is whether or not ","as far as we can estimate, ","as far as he is concerned, ","the zeitgeist contends that ","though we assume the latter, ","far from the truth, ","extending this logic, ","nowhere is it disputed that ","in modern times ","in ancient times ","recent controversy aside, ","washing and polishing the car,","having been a gymnast, ","after a long day at school and work, ","waking to the buzz of the alarm clock, ","draped neatly on a hanger, ","shouting with happiness, "],M=["noun","a_noun","nouns","adjective","an_adjective"],j={noun:function(){return c(m)},a_noun:function(){return g(c(m))},nouns:function(){return(e=c(m)).endsWith("s")?e:(e.match(/(ss|ish|ch|x|us)$/)?e+="e":e.endsWith("y")&&!y.includes(e.charAt(e.length-2))&&(e=e.slice(0,e.length-1),e+="ie"),e+"s");var e},adjective:function(){return c(v)},an_adjective:function(){return g(c(v))}},_=function(){return function(e){var t=e,n=e.match(/\{\{(.+?)\}\}/g);if(n&&n.length)for(var i=0;i<n.length;i++){var r=n[i].replace("{{","").replace("}}","").replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "),a=void 0;M.includes(r)&&(a=j[r]()),t=t.replace(n[i],a)}return t}(c(b))},k=function(){var e,t=(Math.random()<.33?c(w):"")+_();if(t=t.charAt(0).toUpperCase()+t.slice(1),t+=(e=".......!?!?;...".split(""),c(e)),Math.random()>=.9){t=c(["He said","She said","In his own words","In her own words","Yelling","Wispering","Quoting with intend"])+': "'+t+'"'}return t},x=function(e){void 0===e&&(e=0),e||(e=p(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=k();n.push(i)}return n.join(" ")},W=function(e){void 0===e&&(e=0),e||(e=p(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=x();n.push(i)}return n.join("\n\n")},T=new n;function N(e,t){var n=new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())),i=""+(n.getMonth()+1),r=""+n.getDate(),a=n.getFullYear(),s=""+n.getHours(),l=""+n.getMinutes(),o=""+n.getSeconds();return i.length<2&&(i="0"+i),r.length<2&&(r="0"+r),s.length<2&&(s="0"+s),l.length<2&&(l="0"+l),o.length<2&&(o="0"+o),[a,i,r].join("-")+"T"+[s,l,o].join(":")+"+01:00"}function O(e){var t,n=Math.min.apply(Math,e),i=Math.max.apply(Math,e),r=[];for(t=n;t<=i;t++)-1==e.indexOf(t)&&r.push(t);return r.length>0&&{start:Math.min.apply(Math,r),end:Math.max.apply(Math,r)}}function D(e){if(!isFinite(e))return 0;for(var t=1,n=0;Math.round(e*t)/t!==e;)t*=10,n++;return n}function q(e){for(var t=0,n=0,i=e;n<i.length;n+=1){var r=D(i[n]);r>t&&(t=r)}return t}function F(e){for(var t,n=!0,i=0,r=e;i<r.length;i+=1)if(Q(t=r[i])!==t){n=!1;break}return n}function C(e){return Math.min.apply(Math,e)}function z(e){return Math.max.apply(Math,e)}function E(e){for(var t,n,i=999999999,r=0,a=e;r<a.length;r+=1){t=a[r];for(var s=0,l=e;s<l.length;s+=1)t!==(n=l[s])&&Math.abs(t-n)<i&&(i=Math.abs(t-n))}return i}function A(e,t,n){var i,r;return arguments.length<2&&(t=e,e=0),n||(n=1),i=(t-e)/n,r=Math.random(),r*=i,r=Math.floor(r),r*=n,r+=e}function S(e,t){var n=Math.abs((o.normal(0,1)()+3)/6),i=Math.floor(n*(t-e)+e);return i<e&&(i=e),i>t&&(i=t),i}function U(e){return Math.max.apply(Math,e.map(function(e){return e.length}))}function $(e){return Math.min.apply(Math,e.map(function(e){return t.compact(e.replace(/[^\sA-Za-z]/g,"").split(" ")).length}))}function I(e){return Math.max.apply(Math,e.map(function(e){return t.compact(e.replace(/[^\sA-Za-z]/g,"").split(" ")).length}))}function L(e){return Math.min.apply(Math,e.map(function(e){return t.compact(e.split(/[\.\!\?]+/)).length}))}function J(e){return Math.max.apply(Math,e.map(function(e){return t.compact(e.split(/[\.\!\?]+/)).length}))}function B(e){return Math.min.apply(Math,e.map(function(e){return t.compact(e.replace(/\n$/gm,"").split(/\n/)).length}))}function Y(e){return Math.max.apply(Math,e.map(function(e){return t.compact(e.replace(/\n$/gm,"").split(/\n/)).length}))}function H(e){return new Date(Math.min.apply(null,e))}function Z(e){return new Date(Math.max.apply(null,e))}function P(e){for(var t=[],n=0,i=e;n<i.length;n+=1)t.push(new Date(i[n]));return t}function Q(e){return e.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})}function G(e,t){for(var n,i={},r=[],a=0,s=e;a<s.length;a+=1)void 0===i[n=s[a]]?i[n]=1:i[n]++;for(var l=0,o=t;l<o.length;l+=1)r.push(i[n=o[l]]);return r}function K(e){for(var t,n=null,i=null,r=!1,a=0,s=e;a<s.length;a+=1){if(t=s[a],null!==i&&t>i){if("desc"===n){r=!0;break}n="asc"}if(null!==i&&t<i){if("asc"===n){r=!0;break}n="desc"}i=t}return!r&&null!==n&&n}function R(e){for(var t=null,n=null,i=!1,r=0,a=e;r<a.length;r+=1){var s=new Date(a[r]);if(null!==n&&s>n){if("desc"===t){i=!0;break}t="asc"}if(null!==n&&s<n){if("asc"===t){i=!0;break}t="desc"}n=s}return!i&&null!==t&&t}function V(e,n){if(e.constructor!==Array){e=String(e);var o=Number(e);if("slug"===n)return i(e,{lower:!0});if("lower"===n)return e.toLowerCase();if("upper"===n)return e.toUpperCase();if("md5"===n)return r(e);if("capitalize"===n)return Q(e);if("plural"===n)return u.plural(e);if("singular"===n)return u.singular(e);if("trim"===n)return e.replace(/\s/g,"");if("md"===n)return l(e);if(NaN!==o&&"round"===n)return Math.round(e);if(NaN!==o&&"floor"===n)return Math.floor(e);if(NaN!==o&&"ceil"===n)return Math.ceil(e);if(NaN!==o&&"plus:"===n.substring(0,5)){var d=n.split(":");return o+Number(d[1])}if(NaN!==o&&"minus:"===n.substring(0,6)){var f=n.split(":");return o-Number(f[1])}if(NaN!==o&&"times:"===n.substring(0,6)){var h=n.split(":");return o*Number(h[1])}if(NaN!==o&&"max:"===n.substring(0,4)){var p=n.split(":"),c=Number(p[1]);return o>c?c:o}if(NaN!==o&&"min:"===n.substring(0,4)){var g=n.split(":"),m=Number(g[1]);return o<m?m:o}if(NaN!==o&&"num:"===n.substring(0,4)){var v=n.split(":");return s(o).format(v[1])}if("optional"===n&&Math.random()>=.5)return"";if("date:"===n.substring(0,5)){var y=n.split(":");return a.format(new Date(e),y[1])}return e}return"count"===n?e.length:"max"===n?z(e):"min"===n?C(e):"sum"===n?t.sum(e):"avg"===n?t.mean(e):"rand"===n?t.sample(e):e}function X(e,t){for(var n=V(e,t[1]),i=2;t.length>i;)n=V(n,t[i]),i++;return n}function ee(e,t,n,i){var r=e[0];if(void 0!==i[r]){for(var a,s=[],l=0,o=i[r];l<o.length;l+=1)(a=o[l])[t+"_id"]===n&&s.push(e.length>1?a[e[1]]:a.id);return s}return[]}function te(e,t,n){var i=!1,r=t.slice(0),a=e;if(0===t.length)return null;for(;!i;){var s=r.shift();if(void 0===a[s+"_id"])return void 0!==a[s]?void 0!==a[s][t[t.length-1]]?a[s][t[t.length-1]]:"object"!=typeof a[s]?a[s]:null:null;var l=void 0,o=u.plural(s);if(void 0!==n[o])for(l in n[o])n[o][l].id===a[s+"_id"]&&(a=n[o][l]);0===r.length&&(i=!0)}return null}function ne(e){var t="undefined",n=!1;return"boolean"==typeof e?t="boolean":"number"==typeof e?t=Math.round(e)===e?"int":"float":"string"==typeof e?/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(e)?t="date":!function(e){return/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\+[0-9]{2}:[0-9]{2}$/.test(e)}(e)?!function(e){return/^[0-9]{2}:[0-9]{2}:[0-9]{2}$|^[0-9]{2}:[0-9]{2}$/.test(e)}(e)?1===e.length?t="char":(/{{\s*([\w\.\?\|\:]+)\s*}}/.test(e)&&(n=!0),t="string"):t="time":t="datetime":"object"==typeof e&&(t=Array.isArray(e)?"array":"JSON"),{fieldType:t,containsTemplate:n}}function ie(e,t,n){return t==n?e:(e.hasOwnProperty(t)&&(e[n]=e[t],delete e[t]),e)}function re(e,t,n,i){for(var r=[],a=0,s=i;a<s.length;a+=1)if(prevField=s[a],"int"!==n&&"float"!==n||"int"!==prevField.type&&"float"!==prevField.type){if("date"===n&&"date"===prevField.type||"datetime"===n&&"datetime"===prevField.type){var l=new Date(t),o=new Date(prevField.value);r.push(l>o?e+">"+prevField.key:l<o?e+"<"+prevField.key:e+"="+prevField.key)}}else t>prevField.value?r.push(e+">"+prevField.key):t<prevField.value?r.push(e+"<"+prevField.key):r.push(e+"="+prevField.key);return r}function ae(e){for(var t,n=[],i=0,r=e;i<r.length;i+=1){var a=(t=r[i]).split(/>|<|=/);t.indexOf("<")>-1&&-1===e.indexOf(a[0]+">"+a[1])&&-1===e.indexOf(a[0]+"="+a[1])&&n.push(t),t.indexOf(">")>-1&&-1===e.indexOf(a[0]+"<"+a[1])&&-1===e.indexOf(a[0]+"="+a[1])&&n.push(t),t.indexOf("=")>-1&&-1===e.indexOf(a[0]+">"+a[1])&&-1===e.indexOf(a[0]+"<"+a[1])&&n.push(t)}return n}function se(e,t,n,i){if(0===t.length)return!0;if(""===e)return!1;for(var r,a=0,s=t;a<s.length;a+=1){var l=(r=s[a]).split(/>|<|=/);if(void 0!==n[l[1]]&&""!==n[l[1]])if("int"===i||"float"===i){if(r.indexOf("<")>-1&&e>=n[l[1]])return!1;if(r.indexOf(">")>-1&&e<=n[l[1]])return!1;if(r.indexOf("=")>-1&&e!==n[l[1]])return!1}else if("date"===i||"datetime"===i){var o=new Date(e),u=new Date(n[l[1]]);if(r.indexOf("<")>-1&&o>=u)return!1;if(r.indexOf(">")>-1&&o<=u)return!1;if(r.indexOf("=")>-1&&o!==u)return!1}}return!0}function le(e,t,n){var i;for(i in t)if(e.indexOf(n+"="+i)>-1)return t[i];return null}function oe(e){for(var t,n=null,i="",r=0,a=e;r<a.length;r+=1){var s="";if((t=a[r]).length<2)return!1;if(null===n)n=t.length;else if(t.length!==n)return!1;for(var l=0,o=t;l<o.length;l+=1)char=o[l],d.isAlpha(char)?d.isLowerCase(char)?s+="a":s+="A":d.isDigit(char)?s+="D":d.isBlank(char)?s+="B":s+=char;if(""===i)i=s;else if(i!==s)return!1}return i}function ue(e){for(var n="",i=0,r=e;i<r.length;i+=1)char=r[i],"A"===char?n+=t.sample("ABCDEFGHIJKLMNOPQRSTUVWXYZ"):"a"===char?n+=t.sample("abcdefghijklmnopqrstuvwxyz"):"D"===char?n+=Math.floor(10*Math.random()):"B"===char?n+=" ":n+=char;return n}var de,fe=new n;de=b.concat(["congratulations to the {{noun}} that won the {{adjective}} {{noun}} with {{a_noun}}","incomprehensibilities of a {{adjective}} {{noun}} and {{a_noun}} made {{a_noun}} {{adjective}}"]),b=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(de),module.exports=function(e){var n,i,r,a,s,l,o,d,p,c,g,m,v,y=!1,b={},w=[],M={},_=[];for(n in"string"==typeof b?(b=JSON.parse(e),y=!0):b=e,b)for(a in b[n])for(r in b[n][a]){var D=r.split("__");"__"!==r.substr(0,2)?D.length>1&&(M[n+"."+D[1]]=n+"."+D[0],ie(b[n][a],r,D[1])):(_.push(n+"."+r.substr(2)),ie(b[n][a],r,r.substr(2)))}for(n in b){var V={key:n,minID:1,maxID:1,totalCount:0,fields:{}};for(a in b[n]){var de=[];for(r in b[n][a]){var he=b[n][a][r],pe=ne(he),ce=pe.fieldType,ge=pe.containsTemplate;if(void 0===V.fields[r]?V.fields[r]={types:[ce],entries:[he],allEntries:[he],containsTemplate:ge,rules:[],cnt:1}:(V.fields[r].types.push(ce),V.fields[r].types=t.uniq(V.fields[r].types),V.fields[r].entries.push(he),V.fields[r].entries=t.uniq(V.fields[r].entries),V.fields[r].allEntries.push(he),V.fields[r].cnt++,ge&&(V.fields[r].containsTemplate=!0)),"JSON"===ce){var me=void 0;for(me in he){var ve=he[me],ye=ne(ve),be=ye.fieldType,we=ye.containsTemplate;void 0===V.fields[r+"."+me]?V.fields[r+"."+me]={types:[be],entries:[ve],allEntries:[ve],containsTemplate:we,cnt:1}:(V.fields[r+"."+me].types.push(be),V.fields[r+"."+me].types=t.uniq(V.fields[r+"."+me].types),V.fields[r+"."+me].entries.push(ve),V.fields[r+"."+me].entries=t.uniq(V.fields[r+"."+me].entries),V.fields[r+"."+me].allEntries.push(ve),V.fields[r+"."+me].cnt++,we&&(V.fields[r+"."+me].objContainsTemplate=!0))}}if(de.length>0&&"id"!==r&&!r.endsWith("_id")&&!r.endsWith("_ids")){var Me=re(r,he,ce,de);Me.length>0&&(V.fields[r].rules=V.fields[r].rules.concat(Me))}"id"===r||r.endsWith("_id")||r.endsWith("_ids")||de.push({key:r,value:he,type:ce})}}for(r in V.fields)"id"===r&&(V.totalCount=V.fields[r].cnt),V.fields[r].type=1===V.fields[r].types.length?V.fields[r].types[0]:2==V.fields[r].types.length&&V.fields[r].types.indexOf("int")>-1&&V.fields[r].types.indexOf("float")>-1?"float":"string",V.fields[r].pattern="string"===V.fields[r].type&&!V.fields[r].containsTemplate&&oe(V.fields[r].entries),V.fields[r].entries.length<V.fields[r].cnt||V.fields[r].containsTemplate?(V.fields[r].repeatEntries=!0,V.fields[r].weights=G(V.fields[r].allEntries,V.fields[r].entries)):V.fields[r].repeatEntries=!1,V.fields[r].required=!(V.fields[r].cnt<V.totalCount),V.fields[r].rules=ae(t.uniq(V.fields[r].rules)),V.fields[r].dir=!1,"int"!==V.fields[r].type&&"float"!==V.fields[r].type||(V.fields[r].dir=K(V.fields[r].entries)),"date"!==V.fields[r].type&&"datetime"!==V.fields[r].type||(V.fields[r].dir=R(V.fields[r].entries));V.gap=O(V.fields.id.entries),w.push(V)}for(n in w){var je=w[n];if(je.gap){var _e=void 0,ke=void 0;for(_e=je.gap.start;_e<=je.gap.end;_e++){var xe={};for(ke in je.fields){var We="";if(je.fields[ke].repeatEntries||je.fields[ke].containsTemplate)We=fe.weighted(je.fields[ke].entries,je.fields[ke].weights);else{if("id"===ke&&(We=_e),"age"!==ke&&!ke.endsWith(".age")||"int"!==je.fields[ke].type||(We=fe.age()),"firstname"!==ke&&!ke.endsWith(".firstname")||"string"!==je.fields[ke].type||(We=fe.first()),"lastname"!==ke&&!ke.endsWith(".lastname")||"string"!==je.fields[ke].type||(We=fe.last()),"company"!==ke&&!ke.endsWith(".company")||"string"!==je.fields[ke].type||(We=fe.company()),"country"!==ke&&!ke.endsWith(".country")||"string"!==je.fields[ke].type||(We=fe.country()),"email"!==ke&&!ke.endsWith(".email")||"string"!==je.fields[ke].type||(We=f.internet.exampleEmail()),"color"!==ke&&!ke.endsWith(".color")||"string"!==je.fields[ke].type||(We=fe.color()),"ip"!==ke&&!ke.endsWith(".ip")||"string"!==je.fields[ke].type||(We=fe.ip()),"profession"!==ke&&!ke.endsWith(".profession")||"string"!==je.fields[ke].type||(We=fe.profession()),"url"!==ke&&!ke.endsWith(".url")||"string"!==je.fields[ke].type||(We=fe.url()),"city"!==ke&&!ke.endsWith(".city")||"string"!==je.fields[ke].type||(We=fe.city()),"street"!==ke&&!ke.endsWith(".street")||"string"!==je.fields[ke].type||(We=fe.street()),"zip"!==ke&&!ke.endsWith(".zip")||"int"!==je.fields[ke].type||(We=parseInt(fe.zip())),"weekday"!==ke&&!ke.endsWith(".weekday")||"string"!==je.fields[ke].type||(We=fe.weekday()),"year"!==ke&&!ke.endsWith(".year")||"int"!==je.fields[ke].type||(We=parseInt(fe.year())),"password"!==ke&&!ke.endsWith(".password")||"string"!==je.fields[ke].type||(We=fe.hash()),"guid"!==ke&&!ke.endsWith(".guid")||"string"!==je.fields[ke].type||(We=fe.guid()),"product"!==ke&&!ke.endsWith(".product")||"string"!==je.fields[ke].type||(We=f.commerce.productName()),"material"!==ke&&!ke.endsWith(".material")||"string"!==je.fields[ke].type||(We=f.commerce.productMaterial()),"iban"!==ke&&!ke.endsWith(".iban")||"string"!==je.fields[ke].type||(We=f.finance.iban()),"bic"!==ke&&!ke.endsWith(".bic")||"string"!==je.fields[ke].type||(We=f.finance.bic()),"avatar"!==ke&&!ke.endsWith(".avatar")||"string"!==je.fields[ke].type||(We=f.image.avatar()),"username"!==ke&&!ke.endsWith(".username")||"string"!==je.fields[ke].type||(We=f.internet.userName()),"homepage"!==ke&&!ke.endsWith(".homepage")||"string"!==je.fields[ke].type||(We=f.internet.url()),"job"!==ke&&!ke.endsWith(".job")||"string"!==je.fields[ke].type||(We=f.name.jobTitle()),"mimetype"!==ke&&!ke.endsWith(".mimetype")||"string"!==je.fields[ke].type||(We=f.system.mimeType()),""===We&&"JSON"===je.fields[ke].type&&(We={}),""===We&&"array"===je.fields[ke].type){for(var Te=null,Ne=null,Oe=0,De=0,qe=je.fields[ke].entries;De<qe.length;De+=1){arrEntry=qe[De];var Fe=C(arrEntry),Ce=z(arrEntry),ze=arrEntry.length;ze>0&&(null===Te||Fe<Te)&&(Te=Fe),ze>0&&(null===Ne||Ce>Ne)&&(Ne=Ce),ze>Oe&&(Oe=ze)}(We=Array.from({length:Math.floor(Math.random()*Oe)+1},function(){return A(Te,Ne,1)})).sort(function(e,t){return e-t})}if(""===We&&"string"===je.fields[ke].type){var Ee=Math.min.apply(Math,je.fields[ke].entries.map(function(e){return e.length})),Ae=U(je.fields[ke].entries),Se=($(je.fields[ke].entries),I(je.fields[ke].entries)),Ue=L(je.fields[ke].entries),$e=J(je.fields[ke].entries),Ie=B(je.fields[ke].entries),Le=Y(je.fields[ke].entries);Le>1?We=W(Math.floor(Math.random()*Le)+Ie):$e>1?We=x(Math.floor(Math.random()*$e)+Ue):Se>1?(We=k(),je.fields[ke].entries[0].endsWith(".")||je.fields[ke].entries[0].endsWith("!")||je.fields[ke].entries[0].endsWith("?")||(We=We.slice(0,-1))):We=je.fields[ke].pattern?ue(je.fields[ke].pattern):je.fields[ke].entries[0][0].toUpperCase()===je.fields[ke].entries[0][0]?fe.capitalize(fe.word({length:Math.floor(Math.random()*Ee)+Ae})):fe.string({length:Math.floor(Math.random()*Ee)+Ae}),je.fields[ke].entries[0]===je.fields[ke].entries[0].toUpperCase()?We=We.toUpperCase():je.fields[ke].entries[0]===je.fields[ke].entries[0].toLowerCase()?We=We.toLowerCase():F(je.fields[ke].entries)&&(We=Q(We))}if(""===We&&"int"===je.fields[ke].type){var Je=C(je.fields[ke].entries),Be=z(je.fields[ke].entries),Ye=E(je.fields[ke].entries),He=0,Ze=le(je.fields[ke].rules,xe,ke),Pe=(Be-Je)/(je.gap.end-je.gap.start+1);if("asc"===je.fields[ke].dir?(Be=Math.ceil(Je+(_e-je.gap.start+1)*Pe-1),Je=Math.floor(Je+(_e-je.gap.start)*Pe+1)):"desc"===je.fields[ke].dir&&(Je=Math.ceil(Be-(_e-je.gap.start+1)*Pe+1),Be=Math.floor(Be-(_e-je.gap.start)*Pe-1)),ke.endsWith("_id"))We=S(Je,Be);else if(null===Ze)for(;0===He||!se(We,je.fields[ke].rules,xe,je.fields[ke].type)&&He<100;)We=A(Je,Be,Ye),He++;else We=Ze}if(""===We&&"float"===je.fields[ke].type){var Qe=C(je.fields[ke].entries),Ge=z(je.fields[ke].entries),Ke=q(je.fields[ke].entries),Re=0,Ve=le(je.fields[ke].rules,xe,ke),Xe=(Ge-Qe-1)/(je.gap.end-je.gap.start+1);if("asc"===je.fields[ke].dir?(Ge=Qe+(_e-je.gap.start+1)*Xe+1,Qe=Qe+(_e-je.gap.start)*Xe+1):"desc"===je.fields[ke].dir&&(Qe=Ge-(_e-je.gap.start+1)*Xe-1,Ge=Ge-(_e-je.gap.start)*Xe-1),null===Ve)for(;0===Re||!se(We,je.fields[ke].rules,xe,je.fields[ke].type)&&Re<100;)We=Number(fe.floating({min:Qe,max:Ge}).toFixed(Ke)),Re++;else We=Ve}if(""===We&&"char"===je.fields[ke].type&&(We=je.fields[ke].entries[0]===je.fields[ke].entries[0].toUpperCase()?fe.letter({casing:"upper"}):je.fields[ke].entries[0]===je.fields[ke].entries[0].toLowerCase()?fe.letter({casing:"lower"}):fe.letter()),""===We&&"date"===je.fields[ke].type){var et=H(P(je.fields[ke].entries)),tt=Z(P(je.fields[ke].entries)),nt=0,it=le(je.fields[ke].rules,xe,ke),rt=je.gap.end-je.gap.start+1,at=(tt.getTime()-et.getTime()-1)/rt;if("asc"===je.fields[ke].dir?(tt=new Date(et.getTime()+(_e-je.gap.start+1)*at+1),et=new Date(et.getTime()+(_e-je.gap.start)*at+1)):"desc"===je.fields[ke].dir&&(et=new Date(tt.getTime()-(_e-je.gap.start+1)*at-1),tt=new Date(tt.getTime()-(_e-je.gap.start)*at-1)),null===it)for(;0===nt||!se(We,je.fields[ke].rules,xe,je.fields[ke].type)&&nt<100;)d=et,p=tt,c=void 0,g=void 0,m=void 0,v=void 0,c=new Date(d.getTime()+Math.random()*(p.getTime()-d.getTime())),g=""+(c.getMonth()+1),m=""+c.getDate(),v=c.getFullYear(),g.length<2&&(g="0"+g),m.length<2&&(m="0"+m),We=[v,g,m].join("-"),nt++;else We=it}if(""===We&&"datetime"===je.fields[ke].type){var st=H(P(je.fields[ke].entries)),lt=Z(P(je.fields[ke].entries)),ot=0,ut=le(je.fields[ke].rules,xe,ke),dt=je.gap.end-je.gap.start+1,ft=(lt.getTime()-st.getTime()-1)/dt;if("asc"===je.fields[ke].dir?(lt=new Date(st.getTime()+(_e-je.gap.start+1)*ft+1),st=new Date(st.getTime()+(_e-je.gap.start)*ft+1)):"desc"===je.fields[ke].dir&&(st=new Date(lt.getTime()-(_e-je.gap.start+1)*ft-1),lt=new Date(lt.getTime()-(_e-je.gap.start)*ft-1)),null===ut)for(;0===ot||!se(We,je.fields[ke].rules,xe,je.fields[ke].type)&&ot<100;)We=N(st,lt),ot++;else We=ut}""===We&&"time"===je.fields[ke].type&&(s=void 0,l=void 0,o=void 0,s=String(T.hour({twentyfour:!0})),l=String(T.minute()),o=String(T.second()),1===s.length&&(s="0"+s),1===l.length&&(l="0"+l),1===o.length&&(o="0"+o),We=Math.random()>=.5?[s,l,o].join(":"):[s,l].join(":")),""===We&&"boolean"===je.fields[ke].type&&(We=Math.random()>=.5)}if(je.fields[ke].required||Math.random()>=.5)if(ke.indexOf(".")>-1){var ht=ke.split(".");void 0!==xe[ht[0]]&&(xe[ht[0]][ht[1]]=We)}else xe[ke]=We}b[je.key].push(xe)}}}for(n in b)for(i in b[n]){var pt=function(){var e,t=b[n][i][r],a=b[n][i].id;"string"==typeof t&&(b[n][i][r]=t.replace(/{{\s*([\w\.\?\|\:]+)\s*}}/g,function(e,t){var r=t.split("?"),s=r[0].split("|"),l=s[0].split(".");if("number"===l[0]&&1===l.length)return Math.floor(10*Math.random());if("sentence"===l[0]&&1===l.length)return k();if("paragraph"===l[0]&&1===l.length)return x();if("word"===l[0]&&2===l.length){if(void 0!==j[l[1]])return s.length>1?X(j[l[1]](),s):j[l[1]]()}else if("fake"===l[0]&&3===l.length){if("function"==typeof f[l[1]][l[2]])return s.length>1?X(f[l[1]][l[2]](),s):f[l[1]][l[2]]()}else{if("field"===l[0]&&2===l.length&&void 0!==b[n][i][l[1]])return s.length>1?X(b[n][i][l[1]],s):b[n][i][l[1]];if("field"===l[0]&&l.length>2){var o=l.slice(1),d=te(b[n][i],o,b);if(null!==d)return s.length>1?X(d,s):d;if(r.length>1)return r[1]}else{if("connected"===l[0]&&l.length>1){var h=ee(l.slice(1),u.singular(n),a,b);return s.length>1?X(h,s):h.length>1?[h.slice(0,-1).join(", "),h.slice(-1)[0]].join(h.length<2?"":" and "):h.join(",")}if(r.length>1)return r[1]}}return e}),b[n][i][r]=b[n][i][r].replace(/  +/g," "),e=b[n][i][r],!isNaN(parseFloat(e))&&isFinite(e)&&(b[n][i][r]=Number(b[n][i][r])))};for(r in b[n][i])pt()}for(n in b)for(a in b[n])for(r in b[n][a])_.indexOf(n+"."+r)>-1&&delete b[n][a][r],void 0!==M[n+"."+r]&&ie(b[n][a],r,M[n+"."+r].split(".")[1]);return y?h(b):b};
//# sourceMappingURL=blowson.js.map
