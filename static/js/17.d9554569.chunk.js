(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[17],{1366:function(e,n,t){"use strict";t.r(n);t(1);var c,i,r,s,a,l,o,d,j=t(2),b=t(261),u=t.n(b),x=t(811),O=t(240),p=t(13),m=t(7),f=t(4),h=t(87),g=t(0),v=f.e.div(c||(c=Object(m.a)(["\n  align-self: stretch;\n  background: ",";\n  flex: none;\n  padding: 16px 0;\n  text-align: center;\n  width: 56px;\n"])),(function(e){return function(e){return e.isDark?"linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)":"linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)"}(e.theme)})),y=f.e.div(i||(i=Object(m.a)(["\n  align-items: start;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 24px;\n\n  "," {\n    align-items: center;\n    flex-direction: row;\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),w=f.e.div(r||(r=Object(m.a)(["\n  flex: 1;\n"]))),S=f.e.img(s||(s=Object(m.a)(["\n  border-radius: 50%;\n"]))),F=Object(f.e)(j.X).attrs({as:"h3"})(a||(a=Object(m.a)(["\n  font-size: 24px;\n\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),k=f.e.div(l||(l=Object(m.a)(["\n  flex: none;\n  margin-right: 8px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n\n  "," {\n    display: none;\n  }\n"])),S,(function(e){return e.theme.mediaQueries.md})),z=f.e.div(o||(o=Object(m.a)(["\n  display: none;\n\n  "," {\n    display: block;\n    margin-left: 24px;\n\n    "," {\n      height: 128px;\n      width: 128px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),S),V=Object(f.e)(j.u)(d||(d=Object(m.a)(["\n  margin-bottom: 16px;\n"]))),I=function(e){var n=e.rank,t=e.team,c=Object(p.b)().t,i=Object(g.jsx)(S,{src:"/images/teams/".concat(t.images.md),alt:"team avatar"});return Object(g.jsx)(V,{children:Object(g.jsxs)(j.V,{children:[Object(g.jsx)(v,{children:Object(g.jsx)(j.dc,{bold:!0,fontSize:"24px",children:n})}),Object(g.jsxs)(y,{children:[Object(g.jsxs)(w,{children:[Object(g.jsxs)(j.V,{alignItems:"center",mb:"16px",children:[Object(g.jsx)(k,{children:i}),Object(g.jsx)(F,{children:t.name})]}),Object(g.jsx)(j.dc,{as:"p",color:"textSubtle",pr:"24px",mb:"16px",children:c(t.description)}),Object(g.jsxs)(j.V,{children:[Object(g.jsxs)(j.V,{children:[Object(g.jsx)(j.Lb,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.dc,{fontSize:"24px",bold:!0,children:t.points.toLocaleString()})]}),Object(g.jsxs)(j.V,{ml:"24px",children:[Object(g.jsx)(j.N,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.dc,{fontSize:"24px",bold:!0,children:t.users.toLocaleString()})]})]})]}),Object(g.jsx)(j.q,{as:h.a,to:"/teams/".concat(null===t||void 0===t?void 0:t.id),variant:"secondary",scale:"sm",children:c("See More")}),Object(g.jsx)(z,{children:i})]})]})})},L=t(892);n.default=function(){var e=Object(p.b)().t,n=Object(x.b)(),t=n.teams,c=n.isLoading,i=Object.values(t),r=u()(i,["points","id","name"],["desc","asc","asc"]);return Object(g.jsxs)(O.a,{children:[Object(g.jsx)(L.a,{}),Object(g.jsxs)(j.V,{alignItems:"center",justifyContent:"space-between",mb:"32px",children:[Object(g.jsx)(j.X,{scale:"xl",children:e("Teams")}),c&&Object(g.jsx)(j.h,{spin:!0})]}),r.map((function(e,n){return Object(g.jsx)(I,{rank:n+1,team:e},e.id)}))]})}},811:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return l}));var c=t(1),i=t(31),r=t(69),s=t(168),a=function(e){var n=Object(i.c)((function(n){return n.teams.data[e]})),t=Object(r.b)();return Object(c.useEffect)((function(){t(Object(s.b)(e))}),[e,t]),n},l=function(){var e=Object(i.c)((function(e){return e.teams})),n=e.isInitialized,t=e.isLoading,a=e.data,l=Object(r.b)();return Object(c.useEffect)((function(){l(Object(s.c)())}),[l]),{teams:a,isInitialized:n,isLoading:t}}},812:function(e,n,t){"use strict";var c,i=t(7),r=t(4).e.div(c||(c=Object(i.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle}));n.a=r},892:function(e,n,t){"use strict";t(1);var c=t(2),i=t(182),r=t(13),s=t(812),a=t(87),l=t(0),o=function(){var e=Object(r.b)().t;return Object(l.jsx)(c.u,{mb:"32px",isActive:!0,children:Object(l.jsx)(c.v,{children:Object(l.jsxs)(c.V,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(c.X,{scale:"lg",mb:"8px",children:e("You haven\u2019t set up your profile yet!")}),Object(l.jsx)(c.dc,{children:e("You can do this at any time by clicking on your profile picture in the menu")})]}),Object(l.jsx)(c.q,{as:a.a,to:"/profile",id:"teamsPageSetUpProfile",mt:["16px",null,0],children:e("Set up now")})]})})})};n.a=function(){var e=Object(r.b)().t,n=Object(i.b)(),t=n.isInitialized,a=n.profile,d=t&&!a;return Object(l.jsxs)(l.Fragment,{children:[d&&Object(l.jsx)(o,{}),Object(l.jsxs)(s.a,{children:[Object(l.jsx)(c.X,{as:"h1",scale:"xxl",color:"secondary",children:e("Teams & Profiles")}),Object(l.jsx)(c.dc,{bold:!0,children:e("Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}}}]);
//# sourceMappingURL=17.d9554569.chunk.js.map