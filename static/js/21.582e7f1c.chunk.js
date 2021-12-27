(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[21],{1362:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s,o,d,l,b,j,u,f,O,p,x,h=n(7),m=n(1),v=n(4),g=n(2),w=n(13),k=n(240),y=n(261),C=n.n(y),S=n(41),I=n(154),N=n(69),T=n(367),F=n(810),q=n(3),P=n.n(q),A=n(12),D=n(9),E=n(182),J=v.e.div(r||(r=Object(h.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),L=n(65),W=n(243),z=n(93),Q=n(40),U=n(0),X=Object(v.e)(g.dc)(c||(c=Object(h.a)(["\n  font-weight: 600;\n"]))),_=v.e.div(a||(a=Object(h.a)(["\n  margin-bottom: 16px;\n"]))),B=v.e.div(i||(i=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),G=v.e.label(s||(s=Object(h.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),R=function(e){var t=e.nft,n=e.tokenIds,r=e.onSuccess,c=e.onDismiss,a=Object(m.useState)(!1),i=Object(D.a)(a,2),s=i[0],o=i[1],d=Object(m.useState)(""),l=Object(D.a)(d,2),b=l[0],j=l[1],u=Object(m.useState)(null),f=Object(D.a)(u,2),O=f[0],p=f[1],x=Object(w.b)().t,h=Object(S.c)().account,v=Object(Q.i)(Object(W.a)(t.type)),k=Object(z.a)().toastSuccess,y=function(){var e=Object(A.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,L.a.utils.isAddress(b)){e.next=6;break}p(x("Please enter a valid wallet address")),e.next=14;break;case 6:return e.next=8,v.transferFrom(h,b,n[0]);case 8:return t=e.sent,o(!0),e.next=12,t.wait();case 12:e.sent.status?(c(),r(),k(x("NFT successfully transferred!"))):(p(x("Unable to transfer NFT")),o(!1));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return Object(U.jsxs)(g.ub,{title:x("Transfer NFT"),onDismiss:c,children:[Object(U.jsxs)(_,{children:[O&&Object(U.jsx)(g.dc,{color:"failure",mb:"8px",children:O}),Object(U.jsxs)(J,{children:[Object(U.jsxs)(g.dc,{children:[x("Transferring"),":"]}),Object(U.jsx)(X,{children:x("1x %nftName% NFT",{nftName:t.name})})]}),Object(U.jsxs)(G,{htmlFor:"transferAddress",children:[x("Receiving address"),":"]}),Object(U.jsx)(g.db,{id:"transferAddress",name:"address",type:"text",placeholder:x("Paste address"),value:b,onChange:function(e){var t=e.target.value;j(t)},isWarning:O,disabled:s})]}),Object(U.jsxs)(B,{children:[Object(U.jsx)(g.q,{width:"100%",variant:"secondary",onClick:c,children:x("Cancel")}),Object(U.jsx)(g.q,{width:"100%",onClick:y,disabled:!h||s||!b,children:x("Confirm")})]})]})},V=v.e.div(o||(o=Object(h.a)(["\n  margin-bottom: 16px;\n"]))),Y=v.e.div(d||(d=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),H=function(e){var t=e.nft,n=e.onSuccess,r=e.onClaim,c=e.onDismiss,a=Object(m.useState)(!1),i=Object(D.a)(a,2),s=i[0],o=i[1],d=Object(w.b)().t,l=Object(S.c)().account,b=Object(z.a)(),j=b.toastError,u=b.toastSuccess,f=function(){var e=Object(A.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return t=e.sent,o(!0),e.next=6,t.wait();case 6:e.sent.status?(u(d("Successfully claimed!")),c(),n()):(j(d("Error"),d("Please try again. Confirm the transaction and make sure you are paying enough gas!")),o(!1));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(U.jsxs)(g.ub,{title:d("Claim Collectible"),onDismiss:c,children:[Object(U.jsx)(V,{children:Object(U.jsxs)(g.V,{alignItems:"center",mb:"8px",justifyContent:"space-between",children:[Object(U.jsxs)(g.dc,{children:[d("You will receive"),":"]}),Object(U.jsx)(g.dc,{bold:!0,children:d("1x %nftName% Collectible",{nftName:t.name})})]})}),Object(U.jsxs)(Y,{children:[Object(U.jsx)(g.q,{width:"100%",variant:"secondary",onClick:c,children:d("Cancel")}),Object(U.jsx)(g.q,{width:"100%",onClick:f,disabled:!l,isLoading:s,endIcon:s?Object(U.jsx)(g.h,{color:"currentColor",spin:!0}):null,children:d("Confirm")})]})]})},K=v.e.div(l||(l=Object(h.a)(["\n  background-color: ",";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])),(function(e){return e.theme.colors.cardBorder})),M=v.e.img(b||(b=Object(h.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 24px 24px 0 0;\n"]))),Z=v.e.video(j||(j=Object(h.a)(["\n  height: 100%;\n  width: 100%;\n"]))),$=function(e){var t=e.nft,n=e.isOwned,r=void 0!==n&&n,c=t.images,a=t.name,i=t.video,s="/images/nfts/".concat(c.lg);if(i){var o=Object(U.jsxs)(Z,{autoPlay:!0,controls:!1,loop:!0,muted:!0,poster:s,children:[Object(U.jsx)("source",{src:i.webm,type:"video/webm"}),Object(U.jsx)("source",{src:i.mp4,type:"video/mp4"})]});return r?Object(U.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:o}):o}var d=Object(U.jsx)(M,{src:s,alt:a});return Object(U.jsx)(K,{children:r?Object(U.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:d}):d})},ee=Object(v.e)(J)(u||(u=Object(h.a)(["\n  min-height: 28px;\n"]))),te=Object(v.e)(g.q).attrs({variant:"text"})(f||(f=Object(h.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),ne=v.e.div(O||(O=Object(h.a)(["\n  padding: 24px;\n"]))),re=function(e){var t,n=e.nft,r=e.canClaim,c=void 0!==r&&r,a=e.tokenIds,i=void 0===a?[]:a,s=e.onClaim,o=e.refresh,d=Object(m.useState)(!1),l=Object(D.a)(d,2),b=l[0],j=l[1],u=Object(w.b)().t,f=Object(E.b)().profile,O=n.identifier,p=n.name,x=n.description,h=i.length>0,v=b?g.J:g.G,k=function(){var e=Object(A.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(!b);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){o()},C=Object(g.Cc)(Object(U.jsx)(R,{nft:n,tokenIds:i,onSuccess:y})),S=Object(D.a)(C,1)[0],I=Object(g.Cc)(Object(U.jsx)(H,{nft:n,onSuccess:y,onClaim:s})),N=Object(D.a)(I,1)[0];return Object(U.jsxs)(g.u,{isActive:h,children:[Object(U.jsx)($,{nft:n,isOwned:h}),Object(U.jsxs)(g.v,{children:[Object(U.jsxs)(ee,{children:[Object(U.jsx)(g.X,{children:p}),h&&Object(U.jsx)(g.bc,{outline:!0,variant:"secondary",children:u("In Wallet")}),(null===f||void 0===f||null===(t=f.nft)||void 0===t?void 0:t.identifier)===O&&Object(U.jsx)(g.bc,{outline:!0,variant:"success",children:u("Profile Pic")})]}),c&&Object(U.jsx)(g.q,{width:"100%",mt:"24px",onClick:N,children:u("Claim this NFT")}),h&&Object(U.jsx)(g.q,{width:"100%",variant:"secondary",mt:"24px",onClick:S,children:u("Transfer")})]}),Object(U.jsxs)(g.w,{p:"0",children:[Object(U.jsx)(te,{width:"100%",endIcon:Object(U.jsx)(v,{width:"24px",color:"primary"}),onClick:k,children:u("Details")}),b&&Object(U.jsx)(ne,{children:Object(U.jsx)(g.dc,{as:"p",color:"textSubtle",style:{textAlign:"center"},children:u(x)})})]})]})},ce=v.e.div(p||(p=Object(h.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),ae=n(6),ie=n(49),se=["nft"],oe={"easter-storm":1,"easter-flipper":2,"easter-caker":3},de=function(e){var t=e.nft,n=Object(ie.a)(e,se),r=Object(m.useState)(!1),c=Object(D.a)(r,2),a=c[0],i=c[1],s=Object(S.c)().account,o=Object(E.b)().profile,d=t.identifier,l=(null!==o&&void 0!==o?o:{}).team,b=Object(Q.j)(),j=function(){var e=Object(A.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.mintNFT();case 2:return t=e.sent,e.next=5,t.wait();case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.useEffect)((function(){s&&l&&function(){var e=Object(A.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.canClaim(s);case 2:t=e.sent,i(!!t&&l.id===oe[d]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,d,l,b,i]),Object(U.jsx)(re,Object(ae.a)(Object(ae.a)({nft:t},n),{},{canClaim:a,onClaim:j}))},le={"easter-storm":de,"easter-flipper":de,"easter-caker":de},be=function(){var e=Object(F.a)().tokenIds,t=Object(N.b)(),n=Object(S.c)().account,r=function(){t(Object(T.b)(n))};return Object(U.jsx)(ce,{children:C()(I.b,"sortOrder").map((function(t){var n=le[t.identifier]||re;return Object(U.jsx)("div",{children:Object(U.jsx)(n,{nft:t,tokenIds:e[t.identifier],refresh:r})},t.name)}))})},je=v.e.div(x||(x=Object(h.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(w.b)().t;return Object(U.jsxs)(k.a,{children:[Object(U.jsx)(je,{children:Object(U.jsx)(g.X,{as:"h1",scale:"xxl",color:"secondary",children:e("Pancake Collectibles")})}),Object(U.jsx)(be,{})]})}},810:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(1),c=n(41),a=n(31),i=n(69),s=n(154),o=n(367),d=function(){var e=Object(c.c)().account,t=Object(i.b)(),n=Object(a.c)((function(e){return e.collectibles})),d=n.isInitialized,l=n.isLoading,b=n.data,j=Object.keys(b);return Object(r.useEffect)((function(){d||t(Object(o.b)(e))}),[d,e,t]),{isInitialized:d,isLoading:l,tokenIds:b,nftsInWallet:s.b.filter((function(e){return j.includes(e.identifier)}))}}}}]);
//# sourceMappingURL=21.582e7f1c.chunk.js.map