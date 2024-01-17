(function(){"use strict";var t={4291:function(t,n,e){var r=e(9242),o=e(3396);function u(t,n,e,r,u,i){const s=(0,o.up)("TheCounter"),c=(0,o.up)("FavoriteValue"),a=(0,o.up)("ChangeCounter"),l=(0,o.up)("BaseContainer"),d=(0,o.up)("UserAuth");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i.isAuth?((0,o.wg)(),(0,o.j4)(l,{key:0,title:"Vuex"},{default:(0,o.w5)((()=>[(0,o.Wm)(s),(0,o.Wm)(c),(0,o._)("button",{onClick:n[0]||(n[0]=(...t)=>i.addOne&&i.addOne(...t))},"Add 30"),(0,o.Wm)(a)])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(l,{title:"Auth"},{default:(0,o.w5)((()=>[(0,o.Wm)(d)])),_:1})],64)}var i=e(7139);function s(t,n,e,r,u,s){return(0,o.wg)(),(0,o.iD)("section",null,[(0,o._)("h2",null,(0,i.zw)(e.title),1),(0,o.WI)(t.$slots,"default",{},void 0,!0)])}var c={props:["title"]},a=e(89);const l=(0,a.Z)(c,[["render",s],["__scopeId","data-v-3cd534e5"]]);var d=l;function f(t,n,e,r,u,s){return(0,o.wg)(),(0,o.iD)("h3",null,(0,i.zw)(t.finalCounter),1)}var h=e(65),m={computed:{...(0,h.Se)("numbers",["finalCounter"])}};const g=(0,a.Z)(m,[["render",f]]);var v=g;function p(t,n,e,r,u,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("button",{onClick:n[0]||(n[0]=(...n)=>t.increment&&t.increment(...n))},"Add 6"),(0,o._)("button",{onClick:n[1]||(n[1]=n=>t.increase({value:12}))},"Add 12")],64)}var b={methods:{...(0,h.nv)("numbers",["increment","increase"])}};const w=(0,a.Z)(b,[["render",p]]);var C=w;const A=(0,o._)("p",null,"We do more...",-1);function k(t,n,e,r,u,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("h3",null,(0,i.zw)(s.counter),1),A],64)}var O={computed:{counter(){return this.$store.getters["numbers/normalizedCounter"]}}};const _=(0,a.Z)(O,[["render",k]]);var y=_;function D(t,n,e,r,u,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[i.isAuth?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:n[0]||(n[0]=(...t)=>i.login&&i.login(...t))},"Login")),i.isAuth?((0,o.wg)(),(0,o.iD)("button",{key:1,onClick:n[1]||(n[1]=(...t)=>i.logout&&i.logout(...t))},"Logout")):(0,o.kq)("",!0)],64)}var I={methods:{login(){this.$store.dispatch("login")},logout(){this.$store.dispatch("logout")}},computed:{isAuth(){return this.$store.getters.userIsAuthenticated}}};const $=(0,a.Z)(I,[["render",D]]);var j=$,W={components:{BaseContainer:d,TheCounter:v,ChangeCounter:C,FavoriteValue:y,UserAuth:j},computed:{counter(){return this.$store.state.counter},isAuth(){return this.$store.getters.userIsAuthenticated}},methods:{addOne(){this.$store.dispatch("numbers/increase",{value:10})}}};const x=(0,a.Z)(W,[["render",u]]);var T=x,Z={setAuth(t,n){t.isLoggedIn=n.isAuth}},z={login(t){t.commit("setAuth",{isAuth:!0})},logout(t){t.commit("setAuth",{isAuth:!1})}},L={userIsAuthenticated(t){return t.isLoggedIn}},H={increment(t){t.counter=t.counter+2},increase(t,n){t.counter=t.counter+n.value}},Y={increment(t){setTimeout((()=>{t.commit("increment")}),800)},increase(t,n){t.commit("increase",n)}},q={finalCounter(t){return 3*t.counter},normalizedCounter(t,n){const e=n.finalCounter;return e<0?0:e>100?100:e}},F={namespaced:!0,state(){return{counter:0}},mutations:H,actions:Y,getters:q};const V=(0,h.MT)({modules:{numbers:F},state(){return{isLoggedIn:!1}},mutations:Z,actions:z,getters:L});var B=V;const M=(0,r.ri)(T);M.use(B),M.mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return t[r].call(u.exports,u,u.exports,e),u.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,u){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],u=t[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(s=!1,u<i&&(i=u));if(s){t.splice(l--,1);var a=o();void 0!==a&&(n=a)}}return n}u=u||0;for(var l=t.length;l>0&&t[l-1][2]>u;l--)t[l]=t[l-1];t[l]=[r,o,u]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,u,i=r[0],s=r[1],c=r[2],a=0;if(i.some((function(n){return 0!==t[n]}))){for(o in s)e.o(s,o)&&(e.m[o]=s[o]);if(c)var l=c(e)}for(n&&n(r);a<i.length;a++)u=i[a],e.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return e.O(l)},r=self["webpackChunkint"]=self["webpackChunkint"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(4291)}));r=e.O(r)})();
//# sourceMappingURL=app.6de9c990.js.map