import{c as h,D as s,E as t,a as c,h as d,F as f,a0 as g,g as p,a1 as y,N as m,O as x,Q as _,X as v}from"./index.3e42ee66.js";import{h as C}from"./render.a13f385d.js";var Q=h({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:r}){const{proxy:{$q:o}}=p(),e=s(f,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(s(g,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const i=c(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const u=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return n.styleFn(a,u)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":o.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":o.screen.height-a+"px"}}),l=c(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>d("main",{class:l.value,style:i.value},C(r.default))}});const F={},P=v("h3",null,"ITITIC S.A.S",-1);function $(n,r){return m(),x(Q,{class:"flex flex-center"},{default:_(()=>[P]),_:1})}var H=y(F,[["render",$]]);export{H as default};