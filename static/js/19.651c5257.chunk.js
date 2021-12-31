(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[19],{1349:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var c,o,i=n(9),r=n(7),d=n(1),j=n(8),a=n(2),l=n(4),s=n(13),b=n(109),O=n(34),x=n(57),u=n(368),p=n(25),h=n(432),g=n(129),f=n(22),v=n(53),y=n(98),m=n(861),T=n(161),I=n(218),k=n(191),E=n(245),N=n(0);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(o||(o={}));var S=Object(l.e)(a.q)(c||(c=Object(r.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function A(){var e,t=Object(f.a)().account,n=Object(s.b)().t,c=Object(d.useState)(o.TOKEN1),r=Object(i.a)(c,2),l=r[0],A=r[1],C=Object(d.useState)(j.d),w=Object(i.a)(C,2),K=w[0],q=w[1],B=Object(d.useState)(null),L=Object(i.a)(B,2),G=L[0],X=L[1],D=Object(g.b)(null!==K&&void 0!==K?K:void 0,null!==G&&void 0!==G?G:void 0),J=Object(i.a)(D,2),M=J[0],P=J[1],F=Object(v.f)();Object(d.useEffect)((function(){P&&F(P)}),[P,F]);var R=M===g.a.NOT_EXISTS||Boolean(M===g.a.EXISTS&&P&&j.e.equal(P.reserve0.raw,j.e.BigInt(0))&&j.e.equal(P.reserve1.raw,j.e.BigInt(0))),V=Object(y.d)(null!==t&&void 0!==t?t:void 0,null===P||void 0===P?void 0:P.liquidityToken),W=Boolean(V&&j.e.greaterThan(V.raw,j.e.BigInt(0))),Y=Object(d.useCallback)((function(e){l===o.TOKEN0?q(e):X(e)}),[l]),_=Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(a.dc,{textAlign:"center",children:n(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),z=Object(a.Bc)(Object(N.jsx)(h.a,{onCurrencySelect:Y,showCommonBases:!0,selectedCurrency:null!==(e=l===o.TOKEN0?G:K)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),H=Object(i.a)(z,1)[0];return Object(N.jsx)(E.a,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsx)(k.b,{title:n("Import Pool"),subtitle:n("Import an existing pool"),backTo:"/pool"}),Object(N.jsxs)(O.a,{style:{padding:"1rem"},gap:"md",children:[Object(N.jsx)(S,{endIcon:Object(N.jsx)(a.G,{}),onClick:function(){H(),A(o.TOKEN0)},children:K?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:K}),Object(N.jsx)(a.dc,{ml:"8px",children:K.symbol})]}):Object(N.jsx)(a.dc,{ml:"8px",children:n("Select a Token")})}),Object(N.jsx)(O.b,{children:Object(N.jsx)(a.a,{})}),Object(N.jsx)(S,{endIcon:Object(N.jsx)(a.G,{}),onClick:function(){H(),A(o.TOKEN1)},children:G?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:G}),Object(N.jsx)(a.dc,{ml:"8px",children:G.symbol})]}):Object(N.jsx)(a.dc,{as:p.d,children:n("Select a Token")})}),W&&Object(N.jsxs)(O.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(N.jsx)(a.dc,{textAlign:"center",children:n("Pool Found!")}),Object(N.jsx)(m.a,{to:"/pool",children:Object(N.jsx)(a.dc,{textAlign:"center",children:n("Manage this pool.")})})]}),K&&G?M===g.a.EXISTS?W&&P?Object(N.jsx)(u.a,{pair:P}):Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(a.dc,{textAlign:"center",children:n("You don\u2019t have liquidity in this pool yet.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(K),"/").concat(Object(T.a)(G)),children:Object(N.jsx)(a.dc,{textAlign:"center",children:n("Add Liquidity")})})]})}):R?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(a.dc,{textAlign:"center",children:n("No pool found.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(K),"/").concat(Object(T.a)(G)),children:n("Create pool.")})]})}):M===g.a.INVALID?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsx)(a.dc,{textAlign:"center",fontWeight:500,children:n("Invalid pair.")})})}):M===g.a.LOADING?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsxs)(a.dc,{textAlign:"center",children:[n("Loading"),Object(N.jsx)(I.a,{})]})})}):null:_]})]})})}},861:function(e,t,n){"use strict";var c,o=n(7),i=n(87),r=n(4),d=Object(r.e)(i.a)(c||(c=Object(o.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=d}}]);
//# sourceMappingURL=19.651c5257.chunk.js.map