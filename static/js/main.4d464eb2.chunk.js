(this["webpackJsonptidally-locked"]=this["webpackJsonptidally-locked"]||[]).push([[0],{137:function(n,e,t){},138:function(n,e,t){"use strict";t.r(e);t(79);var a=t(0),o=t.n(a),r=t(28),i=t.n(r),c=t(14),l=t(5),s=t(1),u={colors:{offWhite:"#F9F9F9",milkyWhite:"rgba(255, 255, 255, 0.8)",clearWhite:"rgba(255, 255, 255, 0.25)",darkGray:"#1d1d1d",textGray:"#222222",uiGray:"#333333",lightGray:"#666666",accentColor:"#0037ff"},spacing:{borderRadius:"6px"},threshold:{mobile:"(max-width: 600px)",tablet:"(min-width: 601px)",desktop:"(min-width: 991px)"}},d=function(n){var e=n.children;return o.a.createElement(s.a,{theme:u},e)},m=(t(137),t(74)),p=t.n(m),b=function(){return o.a.createElement("header",{className:"app-header"},o.a.createElement("img",{src:p.a,className:"logoImg",alt:"logo"}),o.a.createElement("h1",{className:"titleText"},"Tidally Locked"))},f=function(){var n=(new Date).getFullYear();return o.a.createElement("footer",{className:"app-footer"},n," \xa9 Yeji Lee")},h=t(2);function g(){var n=Object(h.a)(["\n  position: absolute;\n  z-index: 100;\n  border: 2px dashed ",";\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  top: calc(50% - ",");\n  left: calc(50% - ",");\n"]);return g=function(){return n},n}var x=s.b.div(g(),(function(n){return n.theme.colors.clearWhite}),(function(n){return 2*n.orbRad+"px"||!1}),(function(n){return 2*n.orbRad+"px"||!1}),(function(n){return n.orbRad+2+"px"||!1}),(function(n){return n.orbRad+2+"px"||!1})),E=o.a.memo((function(n){var e=n.orbRad;return o.a.createElement(x,{orbRad:e})}));function w(){var n=Object(h.a)(["\n    position: absolute;\n    z-index: 200;\n    width: 100%;\n    height: 100%;\n    transform-origin: 50% 50%;\n    animation-duration: ",";\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-name: MOON-REVOLUTION;\n    animation-play-state: ",";\n\n    @keyframes MOON-REVOLUTION {\n      0% {\n        transform: rotate(0deg)\n          translate(",") rotate(0deg);\n      }\n      100% {\n        transform: rotate(-360deg)\n          translate(",") rotate(360deg);\n      }\n    }\n  "]);return w=function(){return n},n}function k(){var n=Object(h.a)(["\n  .moon__self {\n    position: absolute;\n    width: ",";\n    height: ",";\n    top: calc(50% - ",");\n    left: calc(50% - ",");\n    transform-origin: 50% 50%;\n    animation-name: MOON-ROTATION;\n    animation-duration: ",";\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-play-state: ",";\n\n    @keyframes MOON-ROTATION {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(-360deg);\n      }\n    }\n  }\n\n  .moon__lockline {\n    position: absolute;\n    height: 0;\n    width: ",";\n    border: 1px solid #ff003d;\n    top: calc(50% - 0.5px);\n    left: calc(\n      "," +\n        ","\n    );\n    animation-name: FADE-IN;\n    animation-duration: 300ms;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n\n    @keyframes FADE-IN {\n      0% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 1;\n      }\n    }\n  }\n\n  .moon__face {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n    border-right: 20px solid #fff387;\n    top: calc(50% - 10px);\n    left: -12px;\n  }\n\n  .moon__body {\n    position: absolute;\n    background-color: #fff387;\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n  }\n\n  .moon__shade {\n    position: absolute;\n    background: linear-gradient(\n      ",",\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0.15) 50%\n    );\n    width: ",";\n    height: ",";\n    overflow: hidden;\n    border-radius: 50%;\n    top: calc(50% - ",");\n    left: calc(50% - ",");\n  }\n"]);return k=function(){return n},n}var v=s.b.div(k(),(function(n){return 2*n.moonRad+"px"||!1}),(function(n){return 2*n.moonRad+"px"||!1}),(function(n){return n.moonRad+"px"||!1}),(function(n){return n.moonRad+"px"||!1}),(function(n){return n.rotPer+"s"||!1}),(function(n){return n.animationState||"running"}),(function(n){return n.orbRad+"px"||!1}),(function(n){return-1*n.orbRad+"px"||!1}),(function(n){return n.moonRad+"px"||!1}),(function(n){return n.sunDir+"deg"||!1}),(function(n){return 2*n.moonRad+"px"||!1}),(function(n){return 2*n.moonRad+"px"||!1}),(function(n){return n.moonRad+"px"||!1}),(function(n){return n.moonRad+"px"||!1})),_=o.a.memo((function(n){var e=n.rotPer,t=n.orbPer,a=n.orbRad,r=n.moonRad,i=n.sunDir,c=n.tidLock,l=n.paused,u=n.showShadows,d=n.showLaser,m=l?"paused":"running",p=s.b.div(w(),(function(n){return n.orbPer+"s"||!1}),(function(n){return n.animationState||"running"}),(function(n){return n.orbRad+"px"||!1}),(function(n){return n.orbRad+"px"||!1}));return o.a.createElement(p,{orbPer:t,orbRad:a,animationState:m},o.a.createElement(v,{orbPer:t,rotPer:e,orbRad:a,moonRad:r,sunDir:i,animationState:m},o.a.createElement("div",{className:"moon__self"},c&&d?o.a.createElement("div",{className:"moon__lockline"}):null,o.a.createElement("div",{className:"moon__face"}),o.a.createElement("div",{className:"moon__body"})),u?o.a.createElement("div",{className:"moon__shade"}):""))}));function R(){var n=Object(h.a)(["\n  position: absolute;\n  background: linear-gradient(\n    ",",\n    rgba(0, 0, 0, 0) 50%,\n    rgba(0, 0, 0, 0.15) 50%\n  );\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  top: 0;\n  left: 0;\n"]);return R=function(){return n},n}function y(){var n=Object(h.a)(["\n  position: absolute;\n  z-index: 300;\n  background-color: #8cb2c2;\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  top: calc(50% - ",");\n  left: calc(50% - ",");\n"]);return y=function(){return n},n}var O=s.b.div(y(),(function(n){return n.planRad+"px"||!1}),(function(n){return n.planRad+"px"||!1}),(function(n){return n.planRad/2+"px"||!1}),(function(n){return n.planRad/2+"px"||!1})),S=s.b.div(R(),(function(n){return n.sunDir+"deg"||!1})),N=o.a.memo((function(n){var e=n.planRad,t=n.sunDir,a=n.showShadows;n.moveLight;return o.a.createElement("div",{className:"planetContainer"},o.a.createElement(O,{planRad:2*e},a?o.a.createElement(S,{sunDir:t}):""))}));function L(){var n=Object(h.a)(["\n  position: absolute;\n  z-index: 500;\n  width: 100%;\n  height: 2em;\n  text-align: center;\n  bottom: 0;\n  color: ",';\n  font-size: 1.2rem;\n  font-family: "Roboto", sans-serif;\n  font-weight: bold;\n  transform-origin: 50% 50%;\n  transform: skewX(-20deg);\n  animation-name: ',";\n  animation-duration: 200ms;\n  animation-iteration-count: 1;\n  animation-timing-function: linear;\n"]);return L=function(){return n},n}function A(){var n=Object(h.a)(["\n  0% {\n    transform: scaleX(1.5) scaleY(0) translateX(200px) translateY(-0.5em)\n      skewX(-140deg);\n  }\n  75% {\n    transform: scaleX(1.5) scaleY(1.2) translateX(0) translateY(0.5em)\n      skewX(-140deg);\n  }\n  100% {\n    transform: scaleX(1) scaleY(1) translateX(0) translateY(0) skewX(-20deg);\n  }\n"]);return A=function(){return n},n}var T=Object(s.c)(A()),j=s.b.div(L(),(function(n){return n.theme.colors.accentColor}),T),D=o.a.memo((function(n){var e=n.statusMessage,t=n.setStatusMessage;return Object(a.useEffect)((function(){var n=setTimeout((function(){t([!1,""])}),3e3);return function(){return clearTimeout(n)}}),[t]),o.a.createElement(j,null,e)})),C=t(75),I=t.n(C);function P(){var n=Object(h.a)(["\n  position: absolute;\n  z-index: 3000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ",";\n  transition: opacity linear 300ms;\n\n  &.fade-in {\n    opacity: 1;\n  }\n\n  &.fade-out {\n    opacity: 0;\n  }\n\n  .box-wrapper {\n    display: block;\n    z-index: 3000;\n    padding: 16px;\n    background-color: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);\n\n    .box-header {\n      display: flex;\n      align-items: flex-start;\n      justify-content: space-between;\n      margin-bottom: 16px;\n\n      .header-title {\n        margin: 0;\n        font-size: 1.5rem;\n        font-weight: normal;\n      }\n\n      .header-button {\n        background-color: Transparent;\n        background-repeat: no-repeat;\n        border: none;\n        padding: 0;\n        outline: none;\n        width: 32px;\n        height: 32px;\n        cursor: pointer;\n        margin: 0 0 0 16px;\n        font-size: 2rem;\n        transition: color 300ms;\n        cursor: pointer;\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n  }\n\n  .box-backdrop {\n    background: rgba(0, 0, 0, 0.5);\n    position: fixed;\n    z-index: 2000;\n    display: block;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    outline: 0;\n  }\n"]);return P=function(){return n},n}var M=s.b.div(P(),(function(n){return n.theme.colors.textGray}),(function(n){return n.theme.colors.offWhite}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.spacing.borderRadius}),(function(n){return n.theme.colors.accentColor})),G=function(n){var e=n.modalState,t=n.toggleModal,r=document.getElementById("modal"),l=Object(a.useState)("out"),s=Object(c.a)(l,2),u=s[0],d=s[1];Object(a.useEffect)((function(){console.log("modal mounted, fading in"),d("in")}),[]);var m=function(n){console.log("closing modal, fading out"),n.preventDefault(),d("out")};return r&&e?i.a.createPortal(o.a.createElement(M,{role:"dialog",className:"in"===u?"fade-in":"fade-out",onTransitionEnd:function(n){"opacity"===n.propertyName&&"in"!==u&&"out"===u&&t()}},o.a.createElement("div",{className:"box-wrapper"},o.a.createElement("div",{className:"box-header"},o.a.createElement("h1",{className:"header-title"},"So... What is This?"),o.a.createElement("button",{className:"header-button",onClick:m},"X")),o.a.createElement("div",{className:"box-body"},"[ tidallylocked.com ] is a visual simulator for the phenomenon known as 'tidal locking' which occurs between two astronomical bodies. This website was made as a side project by Yeji Lee [ weiji.io ]. Made with React. You are welcomed to use this site as a reference and a learning tool for teaching and learning about SPACE!")),o.a.createElement("div",{className:"box-backdrop",onMouseDown:m})),r):null};function z(){var n=Object(h.a)(["\n  background-color: Transparent;\n  background-repeat: no-repeat;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n  position: absolute;\n  z-index: 1000;\n  bottom: 0;\n  right: 0;\n  width: 32px;\n  height: 32px;\n  margin: 16px;\n  opacity: 0.8;\n  transition: opacity 200ms;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 1;\n  }\n"]);return z=function(){return n},n}var U=s.b.button(z()),F=function(){var n=Object(a.useState)(!1),e=Object(c.a)(n,2),t=e[0],r=e[1],i=function(){console.log("toggs"),r(!t)};return o.a.createElement("div",null,o.a.createElement(U,{onClick:i},o.a.createElement("img",{src:I.a,className:"infoIcon",alt:"for more information"})),t?o.a.createElement(G,{modalState:t,toggleModal:i}):"")};function W(){var n=Object(h.a)(["\n  min-height: 400px;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  position: relative;\n  overflow: hidden;\n"]);return W=function(){return n},n}var B=s.b.section(W(),(function(n){return n.theme.colors.darkGray}),(function(n){return n.theme.colors.clearWhite}),(function(n){return n.theme.spacing.borderRadius})),X=function(n){var e=n.appState,t=n.setStatusMessage,r=e.rotPer,i=e.orbPer,c=e.orbRad,l=e.moonRad,s=e.planRad,u=e.sunDir,d=e.tidLock,m=e.paused,p=e.statusOn,b=e.statusMessage,f=e.showShadows,h=e.showLaser;return Object(a.useEffect)((function(){t(r===i?[!0,"TIDAL LOCKING!"]:[!1,""])}),[r,i,t]),o.a.createElement(B,{className:"app-view"},o.a.createElement(E,{orbRad:c}),o.a.createElement(_,{rotPer:r,orbPer:i,orbRad:c,moonRad:l,sunDir:u,tidLock:d,paused:m,showShadows:f,showLaser:h}),o.a.createElement(N,{planRad:s,sunDir:u,showShadows:f}),o.a.createElement(F,null),p?o.a.createElement(D,{statusMessage:b,setStatusMessage:t}):"")},Y=t(45),K=t.n(Y),Z=t(46),H=t.n(Z),J=t(76),V=t.n(J),$=t(77),q=t.n($);function Q(){var n=Object(h.a)(["\n  padding: 2rem 1.5rem;\n  flex: 1 1 auto;\n  width: calc(100% - 3rem);\n  min-width: 336px;\n  line-height: 1.5rem;\n  @media "," {\n    width: calc(50% - 3rem - 1px);\n  }\n  @media "," {\n    width: calc(100% - 3rem);\n  }\n\n  .option__firstRow {\n    width: 100%;\n    display: flex;\n    flex: row wrap;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 1.5rem;\n  }\n\n  .option__secondRow {\n    width: 100%;\n    display: flex;\n    flex: row nowrap;\n    justify-content: space-between;\n\n    button {\n      height: 40px;\n      width: 30%;\n      background-color: ",";\n      border: none;\n      border-radius: 6px;\n      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n      color: ",';\n      font-size: 1rem;\n      font-family: "Roboto", sans-serif;\n      letter-spacing: 0.2em;\n      text-transform: uppercase;\n      cursor: pointer;\n      &:focus {\n        border: 2px solid ',';\n      }\n    }\n  }\n\n  .option__indicator--tidLock {\n    width: 24px;\n    height: 24px;\n    align-self: flex-end;\n    margin-bottom: 1.75rem;\n  }\n\n  .option__number {\n    display: inline-block;\n\n    label {\n      width: 7rem;\n    }\n\n    .number__input {\n      display: flex;\n      flex: row nowrap;\n      justify-content: flex-start;\n      align-items: center;\n      margin-top: 0.5rem;\n\n      input[type="number"] {\n        width: 100px;\n        height: 50px;\n        background-color: ',";\n        color: ",';\n        font-size: 2.25rem;\n        text-align: center;\n        border: none;\n        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);\n      }\n      /* Chrome, Safari, Edge, Opera */\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n      }\n      /* Firefox */\n      input[type="number"] {\n        -moz-appearance: textfield;\n      }\n    }\n\n    .number__control {\n      display: flex;\n      flex-flow: column;\n      margin: 0 0 0 0.5rem;\n      padding: 0;\n      .btn__inc,\n      .btn__dec {\n        width: 32px;\n        height: 32px;\n        background-color: ',";\n        border-radius: 16px;\n        border: none;\n        color: ",";\n        font-size: 2rem;\n        line-height: 0;\n        font-weight: normal;\n        overflow: hidden;\n        margin: 0%;\n        cursor: pointer;\n\n        img {\n          width: calc(100% - 4px);\n          height: calc(100% - 4px);\n          margin: 2px;\n        }\n      }\n      .btn__inc {\n        margin-bottom: 0.5rem;\n      }\n    }\n  }\n"]);return Q=function(){return n},n}var nn=s.b.div(Q(),(function(n){return n.theme.threshold.tablet}),(function(n){return n.theme.threshold.desktop}),(function(n){return n.theme.colors.uiGray}),(function(n){return n.theme.colors.offWhite}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.offWhite}),(function(n){return n.theme.colors.textGray}),(function(n){return n.theme.colors.uiGray}),(function(n){return n.theme.colors.offWhite})),en=function(n){var e=n.rotPer,t=n.orbPer,a=n.tidLock,r=n.paused,i=n.setRotOrbPer,c=n.resetAll,l=n.pauseAll,s=n.resumeAll,u=n.forceLock;return o.a.createElement(nn,{className:"app-ui-primary"},o.a.createElement("form",{className:"primaryOptions",onSubmit:function(n){n.preventDefault()}},o.a.createElement("div",{className:"option option__firstRow"},o.a.createElement("div",{className:"option option__number"},o.a.createElement("label",{htmlFor:"rotPer"},"Rotational Period"),o.a.createElement("div",{className:"number__input"},o.a.createElement("input",{type:"number",id:"rotPer",name:"rotPer",min:"1",max:"100",value:e,onChange:function(n){n.preventDefault(),i(Number(n.target.value),t)}}),o.a.createElement("div",{className:"number__control"},o.a.createElement("button",{className:"btn__inc",onClick:function(n){n.preventDefault(),i(Number(e+1),t)}},o.a.createElement("img",{src:H.a,className:"btnIncImg",alt:"click to increment by one"})),o.a.createElement("button",{className:"btn__dec",onClick:function(n){n.preventDefault(),i(Number(e-1),t)}},o.a.createElement("img",{src:K.a,className:"btnDecImg",alt:"click to decrement by one"}))))),o.a.createElement("div",{className:"option__indicator--tidLock"},a?o.a.createElement("img",{src:V.a,className:"lockIcon lockIcon--on",alt:"status currently IS tidal locked"}):o.a.createElement("img",{src:q.a,className:"lockIcon lockIcon--off",alt:"status currently NOT tidal locked"})),o.a.createElement("div",{className:"option option__number"},o.a.createElement("label",{htmlFor:"orbPer"},"Orbital Period"),o.a.createElement("div",{className:"number__input"},o.a.createElement("input",{type:"number",id:"orbPer",name:"orbPer",min:"1",max:"100",value:t,onChange:function(n){n.preventDefault(),i(e,Number(n.target.value))}}),o.a.createElement("div",{className:"number__control"},o.a.createElement("button",{className:"btn__inc",onClick:function(n){n.preventDefault(),i(e,Number(t+1))}},o.a.createElement("img",{src:H.a,className:"btnIncImg",alt:"click to increment by one"})),o.a.createElement("button",{className:"btn__dec",onClick:function(n){n.preventDefault(),i(e,Number(t-1))}},o.a.createElement("img",{src:K.a,className:"btnDecImg",alt:"click to decrement by one"})))))),o.a.createElement("div",{className:"option option__secondRow"},o.a.createElement("button",{onClick:function(n){n.preventDefault(),c()}},"RESET"),r?o.a.createElement("button",{onClick:function(n){n.preventDefault(),s()}},"RESUME"):o.a.createElement("button",{onClick:function(n){n.preventDefault(),l()}},"PAUSE"),o.a.createElement("button",{onClick:function(n){n.preventDefault(),u()}},"FORCE"))))};function tn(){var n=Object(h.a)(["\n  padding: 2rem 1.5rem;\n  flex: 1 1 auto;\n  width: calc(100% - 3rem);\n  font-size: 0.9rem;\n  line-height: 1.5rem;\n  @media "," {\n    width: calc(50% - 3rem - 1px);\n  }\n  @media ",' {\n    width: calc(100% - 3rem);\n  }\n\n  .option {\n    width: 100%;\n    display: flex;\n    flex: row wrap;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 1.5rem;\n\n    &:last-child {\n      margin-bottom: 0;\n      margin-top: 2rem;\n    }\n\n    label {\n      width: 7rem;\n    }\n    input[type="range"] {\n      width: calc(100% - 7.5rem);\n    }\n\n    .option__check {\n      text-align: left;\n    }\n\n    .option__check input[type="checkbox"] {\n      opacity: 0;\n    }\n\n    .option__check label {\n      position: relative;\n      display: inline-block;\n      padding-left: 1.8rem;\n    }\n\n    .option__check label::before,\n    .option__check label::after {\n      position: absolute;\n      content: "";\n      /*Needed for the line-height to take effect*/\n      display: inline-block;\n    }\n\n    /*Outer box of the fake checkbox*/\n    .option__check label::before {\n      height: 20px;\n      width: 20px;\n      background-color: ',';\n      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);\n      border-radius: 2px;\n      left: 0px;\n\n      /*(24px line-height - 16px height of fake checkbox) / 2 - 1px for the border\n        *to vertically center it.\n        */\n      top: 3px;\n    }\n\n    /*Checkmark of the fake checkbox*/\n    .option__check label::after {\n      height: 6px;\n      width: 10px;\n      border-left: 2px solid #222;\n      border-bottom: 2px solid #222;\n\n      transform: rotate(-45deg);\n\n      left: 4px;\n      top: 7px;\n    }\n\n    /*Hide the checkmark by default*/\n    .option__check input[type="checkbox"] + label::after {\n      content: none;\n    }\n\n    /*Unhide on the checked state*/\n    .option__check input[type="checkbox"]:checked + label::after {\n      content: "";\n    }\n\n    /*Adding focus styles on the outer-box of the fake checkbox*/\n    .option__check input[type="checkbox"]:focus + label::before {\n      outline: 2px solid ',";\n    }\n  }\n"]);return tn=function(){return n},n}var an=s.b.div(tn(),(function(n){return n.theme.threshold.tablet}),(function(n){return n.theme.threshold.desktop}),(function(n){return n.theme.colors.offWhite}),(function(n){return n.theme.colors.accentColor})),on=function(n){var e=n.orbRad,t=n.moonRad,a=n.planRad,r=n.sunDir,i=n.showShadows,c=n.showLaser,l=n.setOrbRad,s=n.setBodySize,u=n.setSunDirection,d=n.toggleShadows,m=n.toggleLaser;return o.a.createElement(an,{className:"app-ui-secondary"},o.a.createElement("form",{className:"secondaryOptions"},o.a.createElement("div",{className:"option"},o.a.createElement("label",{htmlFor:"orbRad"},"Orbit Radius"),o.a.createElement("input",{type:"range",id:"orbRad",name:"orbRad",min:"100",max:"300",step:"20",value:e,onChange:function(n){n.preventDefault(),l(Number(n.target.value))}})),o.a.createElement("div",{className:"option"},o.a.createElement("label",{htmlFor:"orbRad"},"Light Angle"),o.a.createElement("input",{type:"range",id:"orbRad",name:"orbRad",min:"0",max:"360",step:"10",value:r,onChange:function(n){n.preventDefault(),u(Number(n.target.value))}})),o.a.createElement("div",{className:"option"},o.a.createElement("label",{htmlFor:"orbRad"},"Earth Radius"),o.a.createElement("input",{type:"range",id:"orbRad",name:"orbRad",min:"50",max:"100",step:"5",value:a,onChange:function(n){n.preventDefault(),s(t,Number(n.target.value))}})),o.a.createElement("div",{className:"option"},o.a.createElement("label",{htmlFor:"orbRad"},"Moon Radius"),o.a.createElement("input",{type:"range",id:"orbRad",name:"orbRad",min:"10",max:"50",step:"5",value:t,onChange:function(n){n.preventDefault(),s(Number(n.target.value),a)}})),o.a.createElement("div",{className:"option"},o.a.createElement("div",{className:"option__check"},o.a.createElement("input",{type:"checkbox",id:"showShadow",name:"showShadow",checked:i,onChange:function(n){d()}}),o.a.createElement("label",{htmlFor:"showShadow"},"Show Shadows")),o.a.createElement("div",{className:"option__check"},o.a.createElement("input",{type:"checkbox",id:"moveLight",name:"moveLight",checked:c,onChange:function(n){m()}}),o.a.createElement("label",{htmlFor:"moveLight"},"Show Laser")))))};function rn(){var n=Object(h.a)(["\n  padding: 2rem 1.5rem;\n  /* flex: 1 0 auto; */\n  width: calc(100% - 3rem);\n"]);return rn=function(){return n},n}var cn=s.b.div(rn()),ln=function(){return o.a.createElement(cn,{className:"app-ui-description"},"Description and link to wikipedia article goes here.")};function sn(){var n=Object(h.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n\n  background-color: ",";\n  border-radius: ",";\n  color: ",';\n  font-family: "Roboto", sans-serif;\n\n  @media '," {\n    flex-flow: row wrap;\n  }\n  @media "," {\n    flex-flow: column wrap;\n  }\n\n  .app-ui-divider--dyn {\n    width: calc(100% - 4rem);\n    border-bottom: 1px solid ",";\n    border-right: 0;\n    align-self: center;\n    margin: 0;\n    @media "," {\n      width: 0;\n      border-bottom: 0;\n      border-right: 1px solid ",";\n      align-self: stretch;\n      margin: 3rem 0;\n    }\n    @media "," {\n      width: calc(100% - 4rem);\n      border-bottom: 1px solid ",";\n      border-right: 0;\n      align-self: center;\n      margin: 0;\n    }\n  }\n\n  .app-ui-divider--hor {\n    width: calc(100% - 4rem);\n    border-bottom: 1px solid ",";\n    align-self: center;\n  }\n"]);return sn=function(){return n},n}var un=s.b.section(sn(),(function(n){return n.theme.colors.milkyWhite}),(function(n){return n.theme.spacing.borderRadius}),(function(n){return n.theme.colors.textGray}),(function(n){return n.theme.threshold.tablet}),(function(n){return n.theme.threshold.desktop}),(function(n){return n.theme.colors.lightGray}),(function(n){return n.theme.threshold.tablet}),(function(n){return n.theme.colors.lightGray}),(function(n){return n.theme.threshold.desktop}),(function(n){return n.theme.colors.lightGray}),(function(n){return n.theme.colors.lightGray})),dn=o.a.memo((function(n){var e=n.appState,t=n.setRotOrbPer,a=n.setOrbRad,r=n.resetAll,i=n.pauseAll,c=n.resumeAll,l=n.forceLock,s=n.setBodySize,u=n.setSunDirection,d=n.toggleShadows,m=n.toggleLaser,p=e.rotPer,b=e.orbPer,f=e.orbRad,h=e.moonRad,g=e.planRad,x=e.sunDir,E=e.tidLock,w=e.paused,k=e.showShadows,v=e.showLaser;return o.a.createElement(un,{className:"app-ui"},o.a.createElement(en,{rotPer:p,orbPer:b,tidLock:E,paused:w,setRotOrbPer:t,resetAll:r,pauseAll:i,resumeAll:c,forceLock:l}),o.a.createElement("div",{className:"app-ui-divider--dyn"}),o.a.createElement(on,{orbRad:f,moonRad:h,planRad:g,sunDir:x,showShadows:k,showLaser:v,setOrbRad:a,setBodySize:s,setSunDirection:u,toggleShadows:d,toggleLaser:m}),o.a.createElement("div",{className:"app-ui-divider--hor"}),o.a.createElement(ln,null))})),mn={rotPer:20,orbPer:20,orbRad:150,moonRad:20,planRad:50,sunDir:100,tidLock:!0,paused:!1,statusOn:!1,statusMessage:"",showShadows:!0,showLaser:!0};function pn(n,e){switch(e.type){case"ROTATIONAL_PERIOD":return Object(l.a)({},n,{rotPer:e.rotPer});case"ORBITAL_PERIOD":return Object(l.a)({},n,{orbPer:e.orbPer});case"ORBIT_RADIUS":return Object(l.a)({},n,{orbRad:e.orbRad});case"MOON_SIZE":return Object(l.a)({},n,{moonRad:e.moonRad});case"PLANET_SIZE":return Object(l.a)({},n,{planRad:e.planRad});case"SUN_DIRECTION":return Object(l.a)({},n,{sunDir:e.sunDir});case"SHADOW_TOGGLE":return Object(l.a)({},n,{showShadows:!n.showShadows});case"LASER_TOGGLE":return Object(l.a)({},n,{showLaser:!n.showLaser});case"SET_TIDLOCK_STATE":return Object(l.a)({},n,{tidLock:e.tidLockState});case"FORCE_LOCK":return Object(l.a)({},n,{orbPer:n.rotPer});case"PAUSE_ALL":return Object(l.a)({},n,{paused:!0});case"RESUME_ALL":return Object(l.a)({},n,{paused:!1});case"STATUS_MESSAGE":return Object(l.a)({},n,{statusOn:e.message[0],statusMessage:e.message[1]});case"RESET_ALL":return mn;default:return n}}var bn=function(){var n=Object(a.useReducer)(pn,mn),e=Object(c.a)(n,2),t=e[0],r=e[1],i=Object(a.useCallback)((function(n,e){n>0&&n<=100&&r({type:"ROTATIONAL_PERIOD",rotPer:n}),e>0&&e<=100&&r({type:"ORBITAL_PERIOD",orbPer:e}),r({type:"SET_TIDLOCK_STATE",tidLockState:n===e})}),[]),l=Object(a.useCallback)((function(n){r({type:"ORBIT_RADIUS",orbRad:n})}),[]),s=Object(a.useCallback)((function(n,e){r({type:"MOON_SIZE",moonRad:n}),r({type:"PLANET_SIZE",planRad:e})}),[]),u=Object(a.useCallback)((function(n){r({type:"SUN_DIRECTION",sunDir:n})}),[]),m=Object(a.useCallback)((function(n){r({type:"STATUS_MESSAGE",message:n})}),[]),p=Object(a.useCallback)((function(){r({type:"RESUME_ALL"}),r({type:"RESET_ALL"});r({type:"STATUS_MESSAGE",message:[!0,"reset to default"]})}),[]),h=Object(a.useCallback)((function(){r({type:"PAUSE_ALL"});r({type:"STATUS_MESSAGE",message:[!0,"pause all animation"]})}),[]),g=Object(a.useCallback)((function(){r({type:"RESUME_ALL"});r({type:"STATUS_MESSAGE",message:[!0,"resume all animation"]})}),[]),x=Object(a.useCallback)((function(){r({type:"FORCE_LOCK"});r({type:"STATUS_MESSAGE",message:[!0,"forcing tidal locking"]});r({type:"SET_TIDLOCK_STATE",tidLockState:!0})}),[]),E=Object(a.useCallback)((function(){r({type:"SHADOW_TOGGLE"})}),[]),w=Object(a.useCallback)((function(){r({type:"LASER_TOGGLE"})}),[]);return o.a.createElement(d,null,o.a.createElement("div",{className:"App"},o.a.createElement(b,null),o.a.createElement(X,{appState:t,setStatusMessage:m}),o.a.createElement(dn,{appState:t,setRotOrbPer:i,setOrbRad:l,resetAll:p,pauseAll:h,resumeAll:g,forceLock:x,setBodySize:s,setSunDirection:u,toggleShadows:E,toggleLaser:w}),o.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(bn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},45:function(n,e,t){n.exports=t.p+"static/media/symDec.78faf1bd.svg"},46:function(n,e,t){n.exports=t.p+"static/media/symInc.3388148d.svg"},74:function(n,e,t){n.exports=t.p+"static/media/logo.a94730d0.svg"},75:function(n,e,t){n.exports=t.p+"static/media/infoIcon.2001e4c7.svg"},76:function(n,e,t){n.exports=t.p+"static/media/lockIcon_on.bdaea7f8.svg"},77:function(n,e,t){n.exports=t.p+"static/media/lockIcon_off.f0dabce9.svg"},78:function(n,e,t){n.exports=t(138)}},[[78,1,2]]]);
//# sourceMappingURL=main.4d464eb2.chunk.js.map