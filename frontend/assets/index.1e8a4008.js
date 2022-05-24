const Xt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}};Xt();function J(){}const qt=e=>e;function Yt(e){return e&&typeof e=="object"&&typeof e.then=="function"}function zt(e){return e()}function Pt(){return Object.create(null)}function V(e){e.forEach(zt)}function Gt(e){return typeof e=="function"}function ft(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Zt(e){return Object.keys(e).length===0}const Ut=typeof window!="undefined";let $t=Ut?()=>window.performance.now():()=>Date.now(),Et=Ut?e=>requestAnimationFrame(e):J;const st=new Set;function Kt(e){st.forEach(t=>{t.c(e)||(st.delete(t),t.f())}),st.size!==0&&Et(Kt)}function te(e){let t;return st.size===0&&Et(Kt),{promise:new Promise(n=>{st.add(t={c:e,f:n})}),abort(){st.delete(t)}}}function o(e,t){e.appendChild(t)}function Qt(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function ee(e){const t=u("style");return ne(Qt(e),t),t.sheet}function ne(e,t){o(e.head||e,t)}function M(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode.removeChild(e)}function gt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function A(e){return document.createTextNode(e)}function C(){return A(" ")}function ot(){return A("")}function I(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function lt(e){return function(t){return t.preventDefault(),e.call(this,t)}}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return Array.from(e.childNodes)}function W(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function L(e,t){e.value=t==null?"":t}function se(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(e,n,s,t),l}const bt=new Map;let wt=0;function ie(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function re(e,t){const n={stylesheet:ee(t),rules:{}};return bt.set(e,n),n}function Nt(e,t,n,s,l,r,i,_=0){const p=16.666/s;let c=`{
`;for(let T=0;T<=1;T+=p){const h=t+(n-t)*r(T);c+=T*100+`%{${i(h,1-h)}}
`}const b=c+`100% {${i(n,1-n)}}
}`,w=`__svelte_${ie(b)}_${_}`,d=Qt(e),{stylesheet:v,rules:y}=bt.get(d)||re(d,e);y[w]||(y[w]=!0,v.insertRule(`@keyframes ${w} ${b}`,v.cssRules.length));const f=e.style.animation||"";return e.style.animation=`${f?`${f}, `:""}${w} ${s}ms linear ${l}ms 1 both`,wt+=1,w}function oe(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),l=n.length-s.length;l&&(e.style.animation=s.join(", "),wt-=l,wt||ae())}function ae(){Et(()=>{wt||(bt.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),bt.clear())})}let ut;function $(e){ut=e}function Vt(){if(!ut)throw new Error("Function called outside component initialization");return ut}function jt(e){Vt().$$.on_mount.push(e)}const ct=[],Mt=[],ht=[],Lt=[],ce=Promise.resolve();let xt=!1;function ue(){xt||(xt=!0,ce.then(Dt))}function X(e){ht.push(e)}const kt=new Set;let _t=0;function Dt(){const e=ut;do{for(;_t<ct.length;){const t=ct[_t];_t++,$(t),fe(t.$$)}for($(null),ct.length=0,_t=0;Mt.length;)Mt.pop()();for(let t=0;t<ht.length;t+=1){const n=ht[t];kt.has(n)||(kt.add(n),n())}ht.length=0}while(ct.length);for(;Lt.length;)Lt.pop()();xt=!1,kt.clear(),$(e)}function fe(e){if(e.fragment!==null){e.update(),V(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}let at;function de(){return at||(at=Promise.resolve(),at.then(()=>{at=null})),at}function yt(e,t,n){e.dispatchEvent(se(`${t?"intro":"outro"}${n}`))}const mt=new Set;let tt;function et(){tt={r:0,c:[],p:tt}}function nt(){tt.r||V(tt.c),tt=tt.p}function U(e,t){e&&e.i&&(mt.delete(e),e.i(t))}function Q(e,t,n,s){if(e&&e.o){if(mt.has(e))return;mt.add(e),tt.c.push(()=>{mt.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}const pe={duration:0};function z(e,t,n,s){let l=t(e,n),r=s?0:1,i=null,_=null,p=null;function c(){p&&oe(e,p)}function b(d,v){const y=d.b-r;return v*=Math.abs(y),{a:r,b:d.b,d:y,duration:v,start:d.start,end:d.start+v,group:d.group}}function w(d){const{delay:v=0,duration:y=300,easing:f=qt,tick:T=J,css:h}=l||pe,m={start:$t()+v,b:d};d||(m.group=tt,tt.r+=1),i||_?_=m:(h&&(c(),p=Nt(e,r,d,y,v,f,h)),d&&T(0,1),i=b(m,y),X(()=>yt(e,d,"start")),te(E=>{if(_&&E>_.start&&(i=b(_,y),_=null,yt(e,i.b,"start"),h&&(c(),p=Nt(e,r,i.b,i.duration,0,f,l.css))),i){if(E>=i.end)T(r=i.b,1-r),yt(e,i.b,"end"),_||(i.b?c():--i.group.r||V(i.group.c)),i=null;else if(E>=i.start){const O=E-i.start;r=i.a+i.d*f(O/i.duration),T(r,1-r)}}return!!(i||_)}))}return{run(d){Gt(l)?de().then(()=>{l=l(),w(d)}):w(d)},end(){c(),i=_=null}}}function it(e,t){const n=t.token={};function s(l,r,i,_){if(t.token!==n)return;t.resolved=_;let p=t.ctx;i!==void 0&&(p=p.slice(),p[i]=_);const c=l&&(t.current=l)(p);let b=!1;t.block&&(t.blocks?t.blocks.forEach((w,d)=>{d!==r&&w&&(et(),Q(w,1,1,()=>{t.blocks[d]===w&&(t.blocks[d]=null)}),nt())}):t.block.d(1),c.c(),U(c,1),c.m(t.mount(),t.anchor),b=!0),t.block=c,t.blocks&&(t.blocks[r]=c),b&&Dt()}if(Yt(e)){const l=Vt();if(e.then(r=>{$(l),s(t.then,1,t.value,r),$(null)},r=>{if($(l),s(t.catch,2,t.error,r),$(null),!t.hasCatch)throw r}),t.current!==t.pending)return s(t.pending,0),!0}else{if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}}function St(e,t,n){const s=t.slice(),{resolved:l}=e;e.current===e.then&&(s[e.value]=l),e.current===e.catch&&(s[e.error]=l),e.block.p(s,n)}function Ot(e){e&&e.c()}function Tt(e,t,n,s){const{fragment:l,on_mount:r,on_destroy:i,after_update:_}=e.$$;l&&l.m(t,n),s||X(()=>{const p=r.map(zt).filter(Gt);i?i.push(...p):V(p),e.$$.on_mount=[]}),_.forEach(X)}function Ct(e,t){const n=e.$$;n.fragment!==null&&(V(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(e,t){e.$$.dirty[0]===-1&&(ct.push(e),ue(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function dt(e,t,n,s,l,r,i,_=[-1]){const p=ut;$(e);const c=e.$$={fragment:null,ctx:null,props:r,update:J,not_equal:l,bound:Pt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:Pt(),dirty:_,skip_bound:!1,root:t.target||p.$$.root};i&&i(c.root);let b=!1;if(c.ctx=n?n(e,t.props||{},(w,d,...v)=>{const y=v.length?v[0]:d;return c.ctx&&l(c.ctx[w],c.ctx[w]=y)&&(!c.skip_bound&&c.bound[w]&&c.bound[w](y),b&&_e(e,w)),d}):[],c.update(),b=!0,V(c.before_update),c.fragment=s?s(c.ctx):!1,t.target){if(t.hydrate){const w=le(t.target);c.fragment&&c.fragment.l(w),w.forEach(P)}else c.fragment&&c.fragment.c();t.intro&&U(e.$$.fragment),Tt(e,t.target,t.anchor,t.customElement),Dt()}$(p)}class pt{$destroy(){Ct(this,1),this.$destroy=J}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(t){this.$$set&&!Zt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function he(e){let t,n,s;return{c(){t=u("div"),t.innerHTML='<h2 class="text-4xl">Welcome to TestFriend</h2>',n=C(),s=u("div"),s.innerHTML=`<p class="text-lg">This is our thesis work for school, at Jensen Education class Teknisk Testare TTK20G.<br/><br/>
    Feel free to browse around, use the &quot;hamburger&quot; menu top-left to navigate. Have a wonderful day!</p>`,a(t,"class","md:flex md:justify-center mt-20"),a(s,"class","md:flex md:justify-center mt-10 mb-20")},m(l,r){M(l,t,r),M(l,n,r),M(l,s,r)},p:J,i:J,o:J,d(l){l&&P(t),l&&P(n),l&&P(s)}}}class me extends pt{constructor(t){super(),dt(this,t,null,he,ft,{})}}function be(e){const t=e-1;return t*t*t+1}function Y(e,{delay:t=0,duration:n=400,easing:s=qt}={}){const l=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:r=>`opacity: ${r*l}`}}function rt(e,{delay:t=0,duration:n=400,easing:s=be}={}){const l=getComputedStyle(e),r=+l.opacity,i=parseFloat(l.height),_=parseFloat(l.paddingTop),p=parseFloat(l.paddingBottom),c=parseFloat(l.marginTop),b=parseFloat(l.marginBottom),w=parseFloat(l.borderTopWidth),d=parseFloat(l.borderBottomWidth);return{delay:t,duration:n,easing:s,css:v=>`overflow: hidden;opacity: ${Math.min(v*20,1)*r};height: ${v*i}px;padding-top: ${v*_}px;padding-bottom: ${v*p}px;margin-top: ${v*c}px;margin-bottom: ${v*b}px;border-top-width: ${v*w}px;border-bottom-width: ${v*d}px;`}}function It(e,t,n){const s=e.slice();return s[30]=t[n],s}function we(e){let t,n,s=e[33]+"",l;return{c(){t=u("p"),n=A("An error has occured... "),l=A(s)},m(r,i){M(r,t,i),o(t,n),o(t,l)},p(r,i){i[0]&1&&s!==(s=r[33]+"")&&W(l,s)},d(r){r&&P(t)}}}function ve(e){let t,n=e[29],s=[];for(let l=0;l<n.length;l+=1)s[l]=At(It(e,n,l));return{c(){for(let l=0;l<s.length;l+=1)s[l].c();t=ot()},m(l,r){for(let i=0;i<s.length;i+=1)s[i].m(l,r);M(l,t,r)},p(l,r){if(r[0]&49153){n=l[29];let i;for(i=0;i<n.length;i+=1){const _=It(l,n,i);s[i]?s[i].p(_,r):(s[i]=At(_),s[i].c(),s[i].m(t.parentNode,t))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(l){gt(s,l),l&&P(t)}}}function At(e){let t,n,s=e[30].id+"",l,r,i,_=e[30].plan_id+"",p,c,b,w=e[30].suite_id+"",d,v,y,f=e[30].case_name+"",T,h,m,E=e[30].case_description+"",O,x,j,k,g,N,R,q,H,K,D,B;function S(){return e[17](e[30])}function F(){return e[18](e[30])}return{c(){t=u("tr"),n=u("th"),l=A(s),r=C(),i=u("th"),p=A(_),c=C(),b=u("th"),d=A(w),v=C(),y=u("td"),T=A(f),h=C(),m=u("td"),O=A(E),x=C(),j=u("td"),j.textContent="Pass",k=C(),g=u("td"),N=u("button"),N.textContent="Edit",R=C(),q=u("td"),H=u("button"),H.textContent="Delete",K=C(),a(N,"class","btn-sm btn-primary w-full max-w-xs"),a(H,"class","btn-sm btn-primary w-full max-w-xs")},m(Z,G){M(Z,t,G),o(t,n),o(n,l),o(t,r),o(t,i),o(i,p),o(t,c),o(t,b),o(b,d),o(t,v),o(t,y),o(y,T),o(t,h),o(t,m),o(m,O),o(t,x),o(t,j),o(t,k),o(t,g),o(g,N),o(t,R),o(t,q),o(q,H),o(t,K),D||(B=[I(N,"click",S),I(H,"click",F)],D=!0)},p(Z,G){e=Z,G[0]&1&&s!==(s=e[30].id+"")&&W(l,s),G[0]&1&&_!==(_=e[30].plan_id+"")&&W(p,_),G[0]&1&&w!==(w=e[30].suite_id+"")&&W(d,w),G[0]&1&&f!==(f=e[30].case_name+"")&&W(T,f),G[0]&1&&E!==(E=e[30].case_description+"")&&W(O,E)},d(Z){Z&&P(t),D=!1,V(B)}}}function ge(e){let t;return{c(){t=u("p"),t.textContent="Waiting for data..."},m(n,s){M(n,t,s)},p:J,d(n){n&&P(t)}}}function ke(e){let t,n,s,l,r,i,_,p,c,b,w,d,v,y,f,T,h,m,E,O,x,j,k,g,N,R;const q=[Ce,Te,xe],H=[];function K(D,B){return D[11]?0:D[10]?1:2}return s=K(e),l=H[s]=q[s](e),{c(){t=u("div"),n=u("div"),l.c(),r=C(),i=u("form"),_=u("div"),p=u("input"),b=C(),w=u("div"),d=u("input"),v=C(),y=u("div"),f=u("input"),T=C(),h=u("div"),m=u("input"),E=C(),O=u("div"),x=u("textarea"),j=C(),k=u("div"),k.innerHTML='<button class="btn btn-primary mt-2 w-full max-w-xs" type="submit">Edit Test Case</button>',a(p,"class","input input-bordered w-full max-w-xs"),a(p,"id","hm_id"),a(p,"type","text"),a(p,"placeholder","Test ID"),a(_,"class","mb-2"),a(d,"class","input input-bordered w-full max-w-xs"),a(d,"id","plan_id"),a(d,"type","text"),a(d,"placeholder","Test Plan ID"),a(w,"class","mb-2"),a(f,"class","input input-bordered w-full max-w-xs"),a(f,"id","suite_id"),a(f,"type","text"),a(f,"placeholder","Test Suite ID"),a(y,"class","mb-2"),a(m,"class","input input-bordered w-full max-w-xs"),a(m,"id","case_name"),a(m,"type","text"),a(m,"placeholder","Test Case Name"),a(h,"class","mb-2"),a(x,"id","case_description"),a(x,"class","textarea textarea-bordered mt-2 w-full max-w-xs"),a(x,"rows","6"),a(x,"placeholder","Test Case Description"),a(k,"class","flex items-center justify-between"),a(i,"class","shadow-md rounded px-1 pt-6 pb-8 mb-4"),a(n,"class","w-full max-w-xs"),a(t,"class","md:flex md:justify-center mt-20")},m(D,B){M(D,t,B),o(t,n),H[s].m(n,null),o(n,r),o(n,i),o(i,_),o(_,p),L(p,e[5]),o(i,b),o(i,w),o(w,d),L(d,e[6]),o(i,v),o(i,y),o(y,f),L(f,e[7]),o(i,T),o(i,h),o(h,m),L(m,e[8]),o(i,E),o(i,O),o(O,x),L(x,e[9]),o(i,j),o(i,k),g=!0,N||(R=[I(p,"input",e[23]),I(d,"input",e[24]),I(f,"input",e[25]),I(m,"input",e[26]),I(x,"input",e[27]),I(i,"submit",lt(e[16]))],N=!0)},p(D,B){let S=s;s=K(D),s===S?H[s].p(D,B):(et(),Q(H[S],1,1,()=>{H[S]=null}),nt(),l=H[s],l?l.p(D,B):(l=H[s]=q[s](D),l.c()),U(l,1),l.m(n,r)),B[0]&32&&p.value!==D[5]&&L(p,D[5]),B[0]&64&&d.value!==D[6]&&L(d,D[6]),B[0]&128&&f.value!==D[7]&&L(f,D[7]),B[0]&256&&m.value!==D[8]&&L(m,D[8]),B[0]&512&&L(x,D[9])},i(D){g||(U(l),X(()=>{c||(c=z(_,rt,{},!0)),c.run(1)}),g=!0)},o(D){Q(l),c||(c=z(_,rt,{},!1)),c.run(0),g=!1},d(D){D&&P(t),H[s].d(),D&&c&&c.end(),N=!1,V(R)}}}function ye(e){let t,n,s,l,r,i,_,p,c,b,w,d,v,y,f,T,h,m,E;function O(k,g){return k[11]?je:Ee}let x=O(e),j=x(e);return{c(){t=u("div"),n=u("div"),j.c(),s=C(),l=u("form"),r=u("div"),i=u("input"),_=C(),p=u("div"),c=u("input"),b=C(),w=u("div"),d=u("input"),v=C(),y=u("div"),f=u("textarea"),T=C(),h=u("div"),h.innerHTML='<button class="btn btn-primary mt-2 w-full max-w-xs" type="submit">Add Test Case</button>',a(i,"class","input input-bordered w-full max-w-xs"),a(i,"id","plan_id"),a(i,"type","text"),a(i,"placeholder","Test Plan ID"),a(r,"class","mb-2"),a(c,"class","input input-bordered w-full max-w-xs"),a(c,"id","suite_id"),a(c,"type","text"),a(c,"placeholder","Test Suite ID"),a(p,"class","mb-2"),a(d,"class","input input-bordered w-full max-w-xs"),a(d,"id","case_name"),a(d,"type","text"),a(d,"placeholder","Test Case Name"),a(w,"class","mb-2"),a(f,"id","case_description"),a(f,"class","textarea textarea-bordered mt-2 w-full max-w-xs"),a(f,"rows","6"),a(f,"placeholder","Test Case Description"),a(h,"class","flex items-center justify-between"),a(l,"class","shadow-md rounded px-1 pt-6 pb-8 mb-4"),a(n,"class","w-full max-w-xs"),a(t,"class","md:flex md:justify-center mt-20")},m(k,g){M(k,t,g),o(t,n),j.m(n,null),o(n,s),o(n,l),o(l,r),o(r,i),L(i,e[1]),o(l,_),o(l,p),o(p,c),L(c,e[2]),o(l,b),o(l,w),o(w,d),L(d,e[3]),o(l,v),o(l,y),o(y,f),L(f,e[4]),o(l,T),o(l,h),m||(E=[I(i,"input",e[19]),I(c,"input",e[20]),I(d,"input",e[21]),I(f,"input",e[22]),I(l,"submit",lt(e[13]))],m=!0)},p(k,g){x===(x=O(k))&&j?j.p(k,g):(j.d(1),j=x(k),j&&(j.c(),j.m(n,s))),g[0]&2&&i.value!==k[1]&&L(i,k[1]),g[0]&4&&c.value!==k[2]&&L(c,k[2]),g[0]&8&&d.value!==k[3]&&L(d,k[3]),g[0]&16&&L(f,k[4])},i:J,o:J,d(k){k&&P(t),j.d(),m=!1,V(E)}}}function xe(e){let t;return{c(){t=u("h2"),t.textContent="Edit Test Case",a(t,"class","text-center text-xl")},m(n,s){M(n,t,s)},p:J,i:J,o:J,d(n){n&&P(t)}}}function Te(e){let t,n,s,l,r;return{c(){t=u("h2"),n=A("Edited test case with id: "),s=A(e[10]),a(t,"class","text-center text-xl text-green-600")},m(i,_){M(i,t,_),o(t,n),o(t,s),r=!0},p(i,_){(!r||_[0]&1024)&&W(s,i[10])},i(i){r||(X(()=>{l||(l=z(t,Y,{},!0)),l.run(1)}),r=!0)},o(i){l||(l=z(t,Y,{},!1)),l.run(0),r=!1},d(i){i&&P(t),i&&l&&l.end()}}}function Ce(e){let t,n,s,l;return{c(){t=u("h2"),n=A(e[11]),a(t,"class","text-center text-xl text-red-600")},m(r,i){M(r,t,i),o(t,n),l=!0},p(r,i){(!l||i[0]&2048)&&W(n,r[11])},i(r){l||(X(()=>{s||(s=z(t,Y,{},!0)),s.run(1)}),l=!0)},o(r){s||(s=z(t,Y,{},!1)),s.run(0),l=!1},d(r){r&&P(t),r&&s&&s.end()}}}function Ee(e){let t;return{c(){t=u("h2"),t.textContent="Add new Test Case",a(t,"class","text-center text-xl")},m(n,s){M(n,t,s)},p:J,d(n){n&&P(t)}}}function je(e){let t,n;return{c(){t=u("h2"),n=A(e[11]),a(t,"class","text-center text-xl text-red-600")},m(s,l){M(s,t,l),o(t,n)},p(s,l){l[0]&2048&&W(n,s[11])},d(s){s&&P(t)}}}function De(e){let t,n,s,l,r,i,_,p,c,b,w,d,v={ctx:e,current:null,token:null,hasCatch:!0,pending:ge,then:ve,catch:we,value:29,error:33};it(_=e[0],v);const y=[ye,ke],f=[];function T(h,m){return h[12]?1:0}return c=T(e),b=f[c]=y[c](e),{c(){t=u("div"),n=u("div"),s=u("table"),l=u("thead"),l.innerHTML=`<tr><th>ID</th> 
          <th>Test Plan ID</th> 
          <th>Test Suite ID</th> 
          <th>Test Case Name</th> 
          <th>Test Case Description</th> 
          <th>Outcome</th> 
          <th>Edit Test Case</th> 
          <th>Delete Test Case</th></tr>`,r=C(),i=u("tbody"),v.block.c(),p=C(),b.c(),w=ot(),a(s,"class","table w-full"),a(n,"class","overflow-x-auto"),a(t,"class","md:flex md:justify-center mt-20 mb-20")},m(h,m){M(h,t,m),o(t,n),o(n,s),o(s,l),o(s,r),o(s,i),v.block.m(i,v.anchor=null),v.mount=()=>i,v.anchor=null,M(h,p,m),f[c].m(h,m),M(h,w,m),d=!0},p(h,m){e=h,v.ctx=e,m[0]&1&&_!==(_=e[0])&&it(_,v)||St(v,e,m);let E=c;c=T(e),c===E?f[c].p(e,m):(et(),Q(f[E],1,1,()=>{f[E]=null}),nt(),b=f[c],b?b.p(e,m):(b=f[c]=y[c](e),b.c()),U(b,1),b.m(w.parentNode,w))},i(h){d||(U(b),d=!0)},o(h){Q(b),d=!1},d(h){h&&P(t),v.block.d(),v.token=null,v=null,h&&P(p),f[c].d(h),h&&P(w)}}}function Se(e,t,n){let s=[];jt(async()=>{const S=await fetch("http://localhost/api/test_case/");n(0,s=await S.json())});let l,r,i,_,p,c,b,w,d,v,y;async function f(){const S=await fetch("http://localhost/api/test_case/");n(0,s=await S.json())}const T=async()=>{try{const F=await(await fetch("http://localhost/api/test_case/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({plan_id:l,suite_id:r,case_name:i,case_description:_})})).json();F.changes?(f(),n(11,y="")):n(11,y=F.error)}catch(S){console.log(S)}},h=async S=>{try{const F=await fetch(`http://localhost/api/test_case/${S}`,{method:"DELETE"});f()}catch(F){console.log(F)}};let m=!1;const E=async(S,F)=>{try{const G=await(await fetch(`http://localhost/api/test_case/${S}`)).json();n(5,p=S),n(6,c=G.plan_id),n(7,b=G.suite_id),n(8,w=G.case_name),n(9,d=G.case_description),n(12,m=!0)}catch(Z){console.log(Z)}},O=async()=>{try{const F=await(await fetch(`http://localhost/api/test_case/${p}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:p,plan_id:c,suite_id:b,case_name:w,case_description:d})})).json();F.changes?(f(),n(11,y=""),n(12,m=!1),n(10,v=p)):n(11,y=F.error),console.log(F)}catch(S){console.log(S)}},x=S=>E(S.id,S),j=S=>h(S.id);function k(){l=this.value,n(1,l)}function g(){r=this.value,n(2,r)}function N(){i=this.value,n(3,i)}function R(){_=this.value,n(4,_)}function q(){p=this.value,n(5,p)}function H(){c=this.value,n(6,c)}function K(){b=this.value,n(7,b)}function D(){w=this.value,n(8,w)}function B(){d=this.value,n(9,d)}return[s,l,r,i,_,p,c,b,w,d,v,y,m,T,h,E,O,x,j,k,g,N,R,q,H,K,D,B]}class Pe extends pt{constructor(t){super(),dt(this,t,Se,De,ft,{},null,[-1,-1])}}function Ht(e,t,n){const s=e.slice();return s[23]=t[n],s}function Ne(e){let t,n,s=e[26]+"",l;return{c(){t=u("p"),n=A("An error has occured... "),l=A(s)},m(r,i){M(r,t,i),o(t,n),o(t,l)},p(r,i){i&1&&s!==(s=r[26]+"")&&W(l,s)},d(r){r&&P(t)}}}function Me(e){let t,n=e[22],s=[];for(let l=0;l<n.length;l+=1)s[l]=Ft(Ht(e,n,l));return{c(){for(let l=0;l<s.length;l+=1)s[l].c();t=ot()},m(l,r){for(let i=0;i<s.length;i+=1)s[i].m(l,r);M(l,t,r)},p(l,r){if(r&3073){n=l[22];let i;for(i=0;i<n.length;i+=1){const _=Ht(l,n,i);s[i]?s[i].p(_,r):(s[i]=Ft(_),s[i].c(),s[i].m(t.parentNode,t))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(l){gt(s,l),l&&P(t)}}}function Ft(e){let t,n,s=e[23].id+"",l,r,i,_=e[23].plan_name+"",p,c,b,w=e[23].plan_description+"",d,v,y,f,T,h,m,E,O,x;function j(){return e[13](e[23])}function k(){return e[14](e[23])}return{c(){t=u("tr"),n=u("th"),l=A(s),r=C(),i=u("th"),p=A(_),c=C(),b=u("td"),d=A(w),v=C(),y=u("td"),f=u("button"),f.textContent="Edit",T=C(),h=u("td"),m=u("button"),m.textContent="Delete",E=C(),a(f,"class","btn-sm btn-primary w-full max-w-xs"),a(m,"class","btn-sm btn-primary w-full max-w-xs")},m(g,N){M(g,t,N),o(t,n),o(n,l),o(t,r),o(t,i),o(i,p),o(t,c),o(t,b),o(b,d),o(t,v),o(t,y),o(y,f),o(t,T),o(t,h),o(h,m),o(t,E),O||(x=[I(f,"click",j),I(m,"click",k)],O=!0)},p(g,N){e=g,N&1&&s!==(s=e[23].id+"")&&W(l,s),N&1&&_!==(_=e[23].plan_name+"")&&W(p,_),N&1&&w!==(w=e[23].plan_description+"")&&W(d,w)},d(g){g&&P(t),O=!1,V(x)}}}function Le(e){let t;return{c(){t=u("p"),t.textContent="Waiting for data..."},m(n,s){M(n,t,s)},p:J,d(n){n&&P(t)}}}function Oe(e){let t,n,s,l,r,i,_,p,c,b,w,d,v,y,f,T,h,m,E,O;const x=[Fe,He,Ae],j=[];function k(g,N){return g[7]?0:g[6]?1:2}return s=k(e),l=j[s]=x[s](e),{c(){t=u("div"),n=u("div"),l.c(),r=C(),i=u("form"),_=u("div"),p=u("input"),b=C(),w=u("div"),d=u("input"),v=C(),y=u("div"),f=u("textarea"),T=C(),h=u("div"),h.innerHTML='<button class="btn btn-primary mt-2 w-full max-w-xs" type="submit">Edit Test Plan</button>',a(p,"class","input input-bordered w-full max-w-xs"),a(p,"id","hm_id"),a(p,"type","text"),a(p,"placeholder","Test Plan ID"),a(_,"class","mb-2"),a(d,"class","input input-bordered w-full max-w-xs"),a(d,"id","plan_id"),a(d,"type","text"),a(d,"placeholder","Test Plan ID"),a(w,"class","mb-2"),a(f,"id","case_description"),a(f,"class","textarea textarea-bordered mt-2 w-full max-w-xs"),a(f,"rows","6"),a(f,"placeholder","Test Plan Description"),a(h,"class","flex items-center justify-between"),a(i,"class","shadow-md rounded px-1 pt-6 pb-8 mb-4"),a(n,"class","w-full max-w-xs"),a(t,"class","md:flex md:justify-center mt-20")},m(g,N){M(g,t,N),o(t,n),j[s].m(n,null),o(n,r),o(n,i),o(i,_),o(_,p),L(p,e[3]),o(i,b),o(i,w),o(w,d),L(d,e[4]),o(i,v),o(i,y),o(y,f),L(f,e[5]),o(i,T),o(i,h),m=!0,E||(O=[I(p,"input",e[17]),I(d,"input",e[18]),I(f,"input",e[19]),I(i,"submit",lt(e[12]))],E=!0)},p(g,N){let R=s;s=k(g),s===R?j[s].p(g,N):(et(),Q(j[R],1,1,()=>{j[R]=null}),nt(),l=j[s],l?l.p(g,N):(l=j[s]=x[s](g),l.c()),U(l,1),l.m(n,r)),N&8&&p.value!==g[3]&&L(p,g[3]),N&16&&d.value!==g[4]&&L(d,g[4]),N&32&&L(f,g[5])},i(g){m||(U(l),X(()=>{c||(c=z(_,rt,{},!0)),c.run(1)}),m=!0)},o(g){Q(l),c||(c=z(_,rt,{},!1)),c.run(0),m=!1},d(g){g&&P(t),j[s].d(),g&&c&&c.end(),E=!1,V(O)}}}function Ie(e){let t,n,s,l,r,i,_,p,c,b,w,d,v;function y(h,m){return h[7]?Je:Be}let f=y(e),T=f(e);return{c(){t=u("div"),n=u("div"),T.c(),s=C(),l=u("form"),r=u("div"),i=u("input"),_=C(),p=u("div"),c=u("textarea"),b=C(),w=u("div"),w.innerHTML='<button class="btn btn-primary mt-2 w-full max-w-xs" type="submit">Add Test Plan</button>',a(i,"class","input input-bordered w-full max-w-xs"),a(i,"id","plan_name"),a(i,"type","text"),a(i,"placeholder","Test Plan Name"),a(r,"class","mb-2"),a(c,"id","case_description"),a(c,"class","textarea textarea-bordered mt-2 w-full max-w-xs"),a(c,"rows","6"),a(c,"placeholder","Test Plan Description"),a(p,"class","mb-2"),a(w,"class","flex items-center justify-between"),a(l,"class","shadow-md rounded px-1 pt-6 pb-8 mb-4"),a(n,"class","w-full max-w-xs"),a(t,"class","md:flex md:justify-center mt-20")},m(h,m){M(h,t,m),o(t,n),T.m(n,null),o(n,s),o(n,l),o(l,r),o(r,i),L(i,e[1]),o(l,_),o(l,p),o(p,c),L(c,e[2]),o(l,b),o(l,w),d||(v=[I(i,"input",e[15]),I(c,"input",e[16]),I(l,"submit",lt(e[9]))],d=!0)},p(h,m){f===(f=y(h))&&T?T.p(h,m):(T.d(1),T=f(h),T&&(T.c(),T.m(n,s))),m&2&&i.value!==h[1]&&L(i,h[1]),m&4&&L(c,h[2])},i:J,o:J,d(h){h&&P(t),T.d(),d=!1,V(v)}}}function Ae(e){let t;return{c(){t=u("h2"),t.textContent="Edit Test Plan",a(t,"class","text-center text-xl")},m(n,s){M(n,t,s)},p:J,i:J,o:J,d(n){n&&P(t)}}}function He(e){let t,n,s,l,r;return{c(){t=u("h2"),n=A("Edited test plan with id: "),s=A(e[6]),a(t,"class","text-center text-xl text-green-600")},m(i,_){M(i,t,_),o(t,n),o(t,s),r=!0},p(i,_){(!r||_&64)&&W(s,i[6])},i(i){r||(X(()=>{l||(l=z(t,Y,{},!0)),l.run(1)}),r=!0)},o(i){l||(l=z(t,Y,{},!1)),l.run(0),r=!1},d(i){i&&P(t),i&&l&&l.end()}}}function Fe(e){let t,n,s,l;return{c(){t=u("h2"),n=A(e[7]),a(t,"class","text-center text-xl text-red-600")},m(r,i){M(r,t,i),o(t,n),l=!0},p(r,i){(!l||i&128)&&W(n,r[7])},i(r){l||(X(()=>{s||(s=z(t,Y,{},!0)),s.run(1)}),l=!0)},o(r){s||(s=z(t,Y,{},!1)),s.run(0),l=!1},d(r){r&&P(t),r&&s&&s.end()}}}function Be(e){let t;return{c(){t=u("h2"),t.textContent="Add new Test Plan",a(t,"class","text-center text-xl")},m(n,s){M(n,t,s)},p:J,d(n){n&&P(t)}}}function Je(e){let t,n;return{c(){t=u("h2"),n=A(e[7]),a(t,"class","text-center text-xl text-red-600")},m(s,l){M(s,t,l),o(t,n)},p(s,l){l&128&&W(n,s[7])},d(s){s&&P(t)}}}function Re(e){let t,n,s,l,r,i,_,p,c,b,w,d,v={ctx:e,current:null,token:null,hasCatch:!0,pending:Le,then:Me,catch:Ne,value:22,error:26};it(_=e[0],v);const y=[Ie,Oe],f=[];function T(h,m){return h[8]?1:0}return c=T(e),b=f[c]=y[c](e),{c(){t=u("div"),n=u("div"),s=u("table"),l=u("thead"),l.innerHTML=`<tr><th>ID</th> 
          <th>Test Plan Name</th> 
          <th>Test Plan Description</th> 
          <th>Edit</th> 
          <th>Delete</th></tr>`,r=C(),i=u("tbody"),v.block.c(),p=C(),b.c(),w=ot(),a(s,"class","table w-full"),a(n,"class","overflow-x-auto"),a(t,"class","md:flex md:justify-center mt-20 mb-20")},m(h,m){M(h,t,m),o(t,n),o(n,s),o(s,l),o(s,r),o(s,i),v.block.m(i,v.anchor=null),v.mount=()=>i,v.anchor=null,M(h,p,m),f[c].m(h,m),M(h,w,m),d=!0},p(h,[m]){e=h,v.ctx=e,m&1&&_!==(_=e[0])&&it(_,v)||St(v,e,m);let E=c;c=T(e),c===E?f[c].p(e,m):(et(),Q(f[E],1,1,()=>{f[E]=null}),nt(),b=f[c],b?b.p(e,m):(b=f[c]=y[c](e),b.c()),U(b,1),b.m(w.parentNode,w))},i(h){d||(U(b),d=!0)},o(h){Q(b),d=!1},d(h){h&&P(t),v.block.d(),v.token=null,v=null,h&&P(p),f[c].d(h),h&&P(w)}}}function We(e,t,n){let s=[];jt(async()=>{const g=await fetch("http://localhost/api/test_plan/");n(0,s=await g.json())});let l,r,i,_,p,c,b;async function w(){const g=await fetch("http://localhost/api/test_plan/");n(0,s=await g.json())}const d=async()=>{try{const N=await(await fetch("http://localhost/api/test_plan/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({plan_name:l,plan_description:r,hm_id:i})})).json();N.changes?(w(),n(7,b="")):n(7,b=N.error)}catch(g){console.log(g)}},v=async g=>{try{const N=await fetch(`http://localhost/api/test_plan/${g}`,{method:"DELETE"});w()}catch(N){console.log(N)}};let y=!1;const f=async(g,N)=>{try{const q=await(await fetch(`http://localhost/api/test_plan/${g}`)).json();n(3,i=g),n(4,_=q.plan_name),n(5,p=q.plan_description),n(8,y=!0)}catch(R){console.log(R)}},T=async()=>{try{const N=await(await fetch(`http://localhost/api/test_plan/${i}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:i,plan_name:_,plan_description:p})})).json();N.changes?(w(),n(7,b=""),n(6,c=i),n(8,y=!1)):n(7,b=N.error),console.log(N)}catch(g){console.log(g)}},h=g=>f(g.id,g),m=g=>v(g.id);function E(){l=this.value,n(1,l)}function O(){r=this.value,n(2,r)}function x(){i=this.value,n(3,i)}function j(){_=this.value,n(4,_)}function k(){p=this.value,n(5,p)}return[s,l,r,i,_,p,c,b,y,d,v,f,T,h,m,E,O,x,j,k]}class qe extends pt{constructor(t){super(),dt(this,t,We,Re,ft,{})}}function Bt(e,t,n){const s=e.slice();return s[30]=t[n],s}function ze(e){let t,n,s=e[33]+"",l;return{c(){t=u("p"),n=A("An error has occured... "),l=A(s)},m(r,i){M(r,t,i),o(t,n),o(t,l)},p(r,i){i[0]&1&&s!==(s=r[33]+"")&&W(l,s)},d(r){r&&P(t)}}}function Ge(e){let t,n=e[29],s=[];for(let l=0;l<n.length;l+=1)s[l]=Jt(Bt(e,n,l));return{c(){for(let l=0;l<s.length;l+=1)s[l].c();t=ot()},m(l,r){for(let i=0;i<s.length;i+=1)s[i].m(l,r);M(l,t,r)},p(l,r){if(r[0]&49153){n=l[29];let i;for(i=0;i<n.length;i+=1){const _=Bt(l,n,i);s[i]?s[i].p(_,r):(s[i]=Jt(_),s[i].c(),s[i].m(t.parentNode,t))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(l){gt(s,l),l&&P(t)}}}function Jt(e){let t,n,s=e[30].id+"",l,r,i,_=e[30].plan_id+"",p,c,b,w=e[30].suite_name+"",d,v,y,f=e[30].suite_goal+"",T,h,m,E=e[30].suite_description+"",O,x,j,k,g,N,R,q,H,K;function D(){return e[17](e[30])}function B(){return e[18](e[30])}return{c(){t=u("tr"),n=u("td"),l=A(s),r=C(),i=u("td"),p=A(_),c=C(),b=u("td"),d=A(w),v=C(),y=u("td"),T=A(f),h=C(),m=u("td"),O=A(E),x=C(),j=u("td"),k=u("button"),k.textContent="Edit",g=C(),N=u("td"),R=u("button"),R.textContent="Delete",q=C(),a(k,"class","btn-sm btn-primary w-full max-w-xs"),a(R,"class","btn-sm btn-primary w-full max-w-xs")},m(S,F){M(S,t,F),o(t,n),o(n,l),o(t,r),o(t,i),o(i,p),o(t,c),o(t,b),o(b,d),o(t,v),o(t,y),o(y,T),o(t,h),o(t,m),o(m,O),o(t,x),o(t,j),o(j,k),o(t,g),o(t,N),o(N,R),o(t,q),H||(K=[I(k,"click",D),I(R,"click",B)],H=!0)},p(S,F){e=S,F[0]&1&&s!==(s=e[30].id+"")&&W(l,s),F[0]&1&&_!==(_=e[30].plan_id+"")&&W(p,_),F[0]&1&&w!==(w=e[30].suite_name+"")&&W(d,w),F[0]&1&&f!==(f=e[30].suite_goal+"")&&W(T,f),F[0]&1&&E!==(E=e[30].suite_description+"")&&W(O,E)},d(S){S&&P(t),H=!1,V(K)}}}function Ue(e){let t;return{c(){t=u("p"),t.textContent="Waiting for data..."},m(n,s){M(n,t,s)},p:J,d(n){n&&P(t)}}}function Ke(e){let t,n,s,l,r,i,_,p,c,b,w,d,v,y,f,T,h,m,E,O,x,j,k,g,N,R;const q=[Ye,Xe,Ve],H=[];function K(D,B){return D[11]?0:D[10]?1:2}return s=K(e),l=H[s]=q[s](e),{c(){t=u("div"),n=u("div"),l.c(),r=C(),i=u("form"),_=u("div"),p=u("input"),b=C(),w=u("div"),d=u("input"),v=C(),y=u("div"),f=u("input"),T=C(),h=u("div"),m=u("input"),E=C(),O=u("div"),x=u("textarea"),j=C(),k=u("div"),k.innerHTML='<button class="btn btn-primary mt-2 w-full max-w-xs" type="submit">Edit Test Suite</button>',a(p,"class","input input-bordered w-full max-w-xs"),a(p,"id","hm_id"),a(p,"type","text"),a(p,"placeholder","Test ID"),a(_,"class","mb-2"),a(d,"class","input input-bordered w-full max-w-xs"),a(d,"id","plan_id"),a(d,"type","text"),a(d,"placeholder","Test Plan ID"),a(w,"class","mb-2"),a(f,"class","input input-bordered w-full max-w-xs"),a(f,"id","suite_id"),a(f,"type","text"),a(f,"placeholder","Test Suite ID"),a(y,"class","mb-2"),a(m,"class","input input-bordered w-full max-w-xs"),a(m,"id","case_name"),a(m,"type","text"),a(m,"placeholder","Test Suite Name"),a(h,"class","mb-2"),a(x,"id","case_description"),a(x,"class","textarea textarea-bordered mt-2 w-full max-w-xs"),a(x,"rows","6"),a(x,"placeholder","Test Suite Description"),a(k,"class","flex items-center justify-between"),a(i,"class","shadow-md rounded px-1 pt-6 pb-8 mb-4"),a(n,"class","w-full max-w-xs"),a(t,"class","md:flex md:justify-center mt-20")},m(D,B){M(D,t,B),o(t,n),H[s].m(n,null),o(n,r),o(n,i),o(i,_),o(_,p),L(p,e[5]),o(i,b),o(i,w),o(w,d),L(d,e[6]),o(i,v),o(i,y),o(y,f),L(f,e[7]),o(i,T),o(i,h),o(h,m),L(m,e[8]),o(i,E),o(i,O),o(O,x),L(x,e[9]),o(i,j),o(i,k),g=!0,N||(R=[I(p,"input",e[23]),I(d,"input",e[24]),I(f,"input",e[25]),I(m,"input",e[26]),I(x,"input",e[27]),I(i,"submit",lt(e[16]))],N=!0)},p(D,B){let S=s;s=K(D),s===S?H[s].p(D,B):(et(),Q(H[S],1,1,()=>{H[S]=null}),nt(),l=H[s],l?l.p(D,B):(l=H[s]=q[s](D),l.c()),U(l,1),l.m(n,r)),B[0]&32&&p.value!==D[5]&&L(p,D[5]),B[0]&64&&d.value!==D[6]&&L(d,D[6]),B[0]&128&&f.value!==D[7]&&L(f,D[7]),B[0]&256&&m.value!==D[8]&&L(m,D[8]),B[0]&512&&L(x,D[9])},i(D){g||(U(l),X(()=>{c||(c=z(_,rt,{},!0)),c.run(1)}),g=!0)},o(D){Q(l),c||(c=z(_,rt,{},!1)),c.run(0),g=!1},d(D){D&&P(t),H[s].d(),D&&c&&c.end(),N=!1,V(R)}}}function Qe(e){let t,n,s,l,r,i,_,p,c,b,w,d,v,y,f,T,h,m,E;function O(k,g){return k[11]?$e:Ze}let x=O(e),j=x(e);return{c(){t=u("div"),n=u("div"),j.c(),s=C(),l=u("form"),r=u("div"),i=u("input"),_=C(),p=u("div"),c=u("input"),b=C(),w=u("div"),d=u("input"),v=C(),y=u("div"),f=u("textarea"),T=C(),h=u("div"),h.innerHTML='<button class="btn btn-primary mt-2 w-full max-w-xs" type="submit">Add Test Suite</button>',a(i,"class","input input-bordered w-full max-w-xs"),a(i,"id","plan_id"),a(i,"type","text"),a(i,"placeholder","Test Plan ID"),a(r,"class","mb-2"),a(c,"class","input input-bordered w-full max-w-xs"),a(c,"id","suite_id"),a(c,"type","text"),a(c,"placeholder","Test Suite Name"),a(p,"class","mb-2"),a(d,"class","input input-bordered w-full max-w-xs"),a(d,"id","case_name"),a(d,"type","text"),a(d,"placeholder","Test Suite Goals"),a(w,"class","mb-2"),a(f,"id","case_description"),a(f,"class","textarea textarea-bordered mt-2 w-full max-w-xs"),a(f,"rows","6"),a(f,"placeholder","Test Suite Description"),a(h,"class","flex items-center justify-between"),a(l,"class","shadow-md rounded px-1 pt-6 pb-8 mb-4"),a(n,"class","w-full max-w-xs"),a(t,"class","md:flex md:justify-center mt-20")},m(k,g){M(k,t,g),o(t,n),j.m(n,null),o(n,s),o(n,l),o(l,r),o(r,i),L(i,e[1]),o(l,_),o(l,p),o(p,c),L(c,e[2]),o(l,b),o(l,w),o(w,d),L(d,e[3]),o(l,v),o(l,y),o(y,f),L(f,e[4]),o(l,T),o(l,h),m||(E=[I(i,"input",e[19]),I(c,"input",e[20]),I(d,"input",e[21]),I(f,"input",e[22]),I(l,"submit",lt(e[13]))],m=!0)},p(k,g){x===(x=O(k))&&j?j.p(k,g):(j.d(1),j=x(k),j&&(j.c(),j.m(n,s))),g[0]&2&&i.value!==k[1]&&L(i,k[1]),g[0]&4&&c.value!==k[2]&&L(c,k[2]),g[0]&8&&d.value!==k[3]&&L(d,k[3]),g[0]&16&&L(f,k[4])},i:J,o:J,d(k){k&&P(t),j.d(),m=!1,V(E)}}}function Ve(e){let t;return{c(){t=u("h2"),t.textContent="Edit Test Suite",a(t,"class","text-center text-xl")},m(n,s){M(n,t,s)},p:J,i:J,o:J,d(n){n&&P(t)}}}function Xe(e){let t,n,s,l,r;return{c(){t=u("h2"),n=A("Edited test suite with id: "),s=A(e[10]),a(t,"class","text-center text-xl text-green-600")},m(i,_){M(i,t,_),o(t,n),o(t,s),r=!0},p(i,_){(!r||_[0]&1024)&&W(s,i[10])},i(i){r||(X(()=>{l||(l=z(t,Y,{},!0)),l.run(1)}),r=!0)},o(i){l||(l=z(t,Y,{},!1)),l.run(0),r=!1},d(i){i&&P(t),i&&l&&l.end()}}}function Ye(e){let t,n,s,l;return{c(){t=u("h2"),n=A(e[11]),a(t,"class","text-center text-xl text-red-600")},m(r,i){M(r,t,i),o(t,n),l=!0},p(r,i){(!l||i[0]&2048)&&W(n,r[11])},i(r){l||(X(()=>{s||(s=z(t,Y,{},!0)),s.run(1)}),l=!0)},o(r){s||(s=z(t,Y,{},!1)),s.run(0),l=!1},d(r){r&&P(t),r&&s&&s.end()}}}function Ze(e){let t;return{c(){t=u("h2"),t.textContent="Add new Test Suite",a(t,"class","text-center text-xl")},m(n,s){M(n,t,s)},p:J,d(n){n&&P(t)}}}function $e(e){let t,n;return{c(){t=u("h2"),n=A(e[11]),a(t,"class","text-center text-xl text-red-600")},m(s,l){M(s,t,l),o(t,n)},p(s,l){l[0]&2048&&W(n,s[11])},d(s){s&&P(t)}}}function tn(e){let t,n,s,l,r,i,_,p,c,b,w,d,v={ctx:e,current:null,token:null,hasCatch:!0,pending:Ue,then:Ge,catch:ze,value:29,error:33};it(_=e[0],v);const y=[Qe,Ke],f=[];function T(h,m){return h[12]?1:0}return c=T(e),b=f[c]=y[c](e),{c(){t=u("div"),n=u("div"),s=u("table"),l=u("thead"),l.innerHTML=`<tr><th>ID</th> 
          <th>Test Plan ID</th> 
          <th>Suite Name</th> 
          <th>Suite Goals</th> 
          <th>Suite Description</th> 
          <th>Edit</th> 
          <th>Delete</th></tr>`,r=C(),i=u("tbody"),v.block.c(),p=C(),b.c(),w=ot(),a(s,"class","table w-full"),a(n,"class","overflow-x-auto"),a(t,"class","md:flex md:justify-center mt-20 mb-20")},m(h,m){M(h,t,m),o(t,n),o(n,s),o(s,l),o(s,r),o(s,i),v.block.m(i,v.anchor=null),v.mount=()=>i,v.anchor=null,M(h,p,m),f[c].m(h,m),M(h,w,m),d=!0},p(h,m){e=h,v.ctx=e,m[0]&1&&_!==(_=e[0])&&it(_,v)||St(v,e,m);let E=c;c=T(e),c===E?f[c].p(e,m):(et(),Q(f[E],1,1,()=>{f[E]=null}),nt(),b=f[c],b?b.p(e,m):(b=f[c]=y[c](e),b.c()),U(b,1),b.m(w.parentNode,w))},i(h){d||(U(b),d=!0)},o(h){Q(b),d=!1},d(h){h&&P(t),v.block.d(),v.token=null,v=null,h&&P(p),f[c].d(h),h&&P(w)}}}function en(e,t,n){let s=[];jt(async()=>{const S=await fetch("http://localhost/api/test_suite/");n(0,s=await S.json())});let l,r,i,_,p,c,b,w,d,v,y;async function f(){const S=await fetch("http://localhost/api/test_suite/");n(0,s=await S.json())}const T=async()=>{try{const F=await(await fetch("http://localhost/api/test_suite/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({plan_id:l,suite_name:r,suite_goal:i,suite_description:_})})).json();F.changes?(f(),n(11,y="")):n(11,y=F.error)}catch(S){console.log(S)}},h=async S=>{try{const F=await fetch(`http://localhost/api/test_suite/${S}`,{method:"DELETE"});f()}catch(F){console.log(F)}};let m=!1;const E=async(S,F)=>{try{const G=await(await fetch(`http://localhost/api/test_suite/${S}`)).json();n(5,p=S),n(6,c=G.plan_id),n(7,b=G.suite_name),n(8,w=G.suite_goal),n(9,d=G.suite_description),n(12,m=!0)}catch(Z){console.log(Z)}},O=async()=>{try{const F=await(await fetch(`http://localhost/api/test_suite/${p}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:p,plan_id:c,suite_name:b,suite_goal:w,suite_description:d})})).json();F.changes?(f(),n(11,y=""),n(10,v=p),n(12,m=!1)):n(11,y=F.error),console.log(F)}catch(S){console.log(S)}},x=S=>E(S.id,S),j=S=>h(S.id);function k(){l=this.value,n(1,l)}function g(){r=this.value,n(2,r)}function N(){i=this.value,n(3,i)}function R(){_=this.value,n(4,_)}function q(){p=this.value,n(5,p)}function H(){c=this.value,n(6,c)}function K(){b=this.value,n(7,b)}function D(){w=this.value,n(8,w)}function B(){d=this.value,n(9,d)}return[s,l,r,i,_,p,c,b,w,d,v,y,m,T,h,E,O,x,j,k,g,N,R,q,H,K,D,B]}class nn extends pt{constructor(t){super(),dt(this,t,en,tn,ft,{},null,[-1,-1])}}const vt=[{page:"Home",component:me},{page:"Test Plan",component:qe},{page:"Test Suite",component:nn},{page:"Test Case",component:Pe}];function Rt(e,t,n){const s=e.slice();return s[3]=t[n],s[5]=n,s}function Wt(e){let t,n,s=e[3].page+"",l,r,i,_,p,c;return{c(){t=u("li"),n=u("button"),l=A(s),_=C(),a(n,"class",r=e[1]==e[5]?"nav-link active p-2 ml-1":"p-2 ml-1 nav-link"),a(n,"id",i=e[5].toString()),a(n,"role","tab"),a(t,"class","nav-item")},m(b,w){M(b,t,w),o(t,n),o(n,l),o(t,_),p||(c=I(n,"click",lt(e[2])),p=!0)},p(b,w){w&2&&r!==(r=b[1]==b[5]?"nav-link active p-2 ml-1":"p-2 ml-1 nav-link")&&a(n,"class",r)},d(b){b&&P(t),p=!1,c()}}}function ln(e){let t,n,s,l,r,i,_,p,c,b,w,d,v,y,f,T,h=vt,m=[];for(let x=0;x<h.length;x+=1)m[x]=Wt(Rt(e,h,x));var E=e[0].component;function O(x){return{}}return E&&(f=new E(O())),{c(){t=u("div"),n=u("header"),s=u("div"),l=u("div"),r=u("div"),i=u("label"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>',_=C(),p=u("ul");for(let x=0;x<m.length;x+=1)m[x].c();c=C(),b=u("div"),b.innerHTML='<a href="/" class="btn btn-ghost normal-case text-xl">TestFriend \u{1F49C}</a>',w=C(),d=u("div"),d.innerHTML='<button class="btn btn-ghost btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>',v=C(),y=u("main"),f&&Ot(f.$$.fragment),a(i,"tabindex","0"),a(i,"for","hambuger"),a(i,"class","btn btn-ghost btn-circle"),a(p,"tabindex","0"),a(p,"class","menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"),a(r,"class","dropdown"),a(l,"class","navbar-start"),a(b,"class","navbar-center"),a(d,"class","navbar-end"),a(s,"class","navbar bg-base-100")},m(x,j){M(x,t,j),o(t,n),o(n,s),o(s,l),o(l,r),o(r,i),o(r,_),o(r,p);for(let k=0;k<m.length;k+=1)m[k].m(p,null);o(s,c),o(s,b),o(s,w),o(s,d),o(t,v),o(t,y),f&&Tt(f,y,null),T=!0},p(x,[j]){if(j&6){h=vt;let k;for(k=0;k<h.length;k+=1){const g=Rt(x,h,k);m[k]?m[k].p(g,j):(m[k]=Wt(g),m[k].c(),m[k].m(p,null))}for(;k<m.length;k+=1)m[k].d(1);m.length=h.length}if(E!==(E=x[0].component)){if(f){et();const k=f;Q(k.$$.fragment,1,0,()=>{Ct(k,1)}),nt()}E?(f=new E(O()),Ot(f.$$.fragment),U(f.$$.fragment,1),Tt(f,y,null)):f=null}},i(x){T||(f&&U(f.$$.fragment,x),T=!0)},o(x){f&&Q(f.$$.fragment,x),T=!1},d(x){x&&P(t),gt(m,x),f&&Ct(f)}}}function sn(e,t,n){let s=vt[0],l=0;function r(i){i.srcElement.id=+i.srcElement.id,n(0,s=vt[i.srcElement.id]),n(1,l=i.srcElement.id)}return[s,l,r]}class rn extends pt{constructor(t){super(),dt(this,t,sn,ln,ft,{})}}new rn({target:document.getElementById("app")});