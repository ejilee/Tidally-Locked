(this["webpackJsonptidally-locked"]=this["webpackJsonptidally-locked"]||[]).push([[0],{139:function(e,n,t){},142:function(e,n,t){"use strict";t.r(n);t(81);var a=t(0),o=t.n(a),r=t(29),i=t.n(r),c=t(15),l=t(5),s=t(1),u={colors:{offWhite:"#F9F9F9",milkyWhite:"rgba(255, 255, 255, 0.8)",clearWhite:"rgba(255, 255, 255, 0.25)",darkGray:"#1d1d1d",textGray:"#222222",uiGray:"#333333",lightGray:"#666666",accentColor:"#0037ff"},spacing:{borderRadius:"6px"},threshold:{mobile:"(max-width: 600px)",tablet:"(min-width: 760px)",desktop:"(min-width: 991px)"}},d=function(e){var n=e.children;return o.a.createElement(s.a,{theme:u},n)},m=(t(139),t(48),t(76)),p=t.n(m),h=function(){return o.a.createElement("header",{className:"app-header"},o.a.createElement("a",{className:"logo",href:"https://tidallylocked.com",target:"_self"},o.a.createElement("img",{src:p.a,className:"logoImg",alt:"logo"})),o.a.createElement("h1",{className:"titleText"},"Tidally Locked"))},b=function(){var e=(new Date).getFullYear();return o.a.createElement("footer",{className:"app-footer"},e," \xa9 Yeji Lee")},f=t(2);function g(){var e=Object(f.a)(["\n  position: absolute;\n  z-index: 100;\n  border: 2px dashed ",";\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  top: calc(50% - ",");\n  left: calc(50% - ",");\n"]);return g=function(){return e},e}var E=s.b.div(g(),(function(e){return e.theme.colors.clearWhite}),(function(e){return 2*e.orbRad+"px"||!1}),(function(e){return 2*e.orbRad+"px"||!1}),(function(e){return e.orbRad+2+"px"||!1}),(function(e){return e.orbRad+2+"px"||!1})),w=o.a.memo((function(e){var n=e.orbRad;return o.a.createElement(E,{orbRad:n})}));function x(){var e=Object(f.a)(["\n    position: absolute;\n    z-index: 200;\n    width: 100%;\n    height: 100%;\n    transform-origin: 50% 50%;\n    animation-duration: ",";\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-name: MOON-REVOLUTION;\n    animation-play-state: ",";\n\n    @keyframes MOON-REVOLUTION {\n      0% {\n        transform: rotate(0deg)\n          translate(",") rotate(0deg);\n      }\n      100% {\n        transform: rotate(-360deg)\n          translate(",") rotate(360deg);\n      }\n    }\n  "]);return x=function(){return e},e}function k(){var e=Object(f.a)(["\n  .moon__self {\n    position: absolute;\n    width: ",";\n    height: ",";\n    top: calc(50% - ",");\n    left: calc(50% - ",");\n    transform-origin: 50% 50%;\n    animation-name: MOON-ROTATION;\n    animation-duration: ",";\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-play-state: ",";\n\n    @keyframes MOON-ROTATION {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(-360deg);\n      }\n    }\n  }\n\n  .moon__lockline {\n    position: absolute;\n    height: 0;\n    width: ",";\n    border: 1px solid #ff003d;\n    top: calc(50% - 0.5px);\n    left: calc(\n      "," +\n        ","\n    );\n    animation-name: FADE-IN;\n    animation-duration: 300ms;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n\n    @keyframes FADE-IN {\n      0% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 1;\n      }\n    }\n  }\n\n  .moon__face {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n    border-right: 20px solid #fff387;\n    top: calc(50% - 10px);\n    left: -12px;\n  }\n\n  .moon__body {\n    position: absolute;\n    background-color: #fff387;\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n  }\n\n  .moon__shade {\n    position: absolute;\n    background: linear-gradient(\n      ",",\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0.15) 50%\n    );\n    width: ",";\n    height: ",";\n    overflow: hidden;\n    border-radius: 50%;\n    top: calc(50% - ",");\n    left: calc(50% - ",");\n  }\n"]);return k=function(){return e},e}var y=s.b.div(k(),(function(e){return 2*e.moonRad+"px"||!1}),(function(e){return 2*e.moonRad+"px"||!1}),(function(e){return e.moonRad+"px"||!1}),(function(e){return e.moonRad+"px"||!1}),(function(e){return e.rotPer+"s"||!1}),(function(e){return e.animationState||"running"}),(function(e){return e.orbRad+"px"||!1}),(function(e){return-1*e.orbRad+"px"||!1}),(function(e){return e.moonRad+"px"||!1}),(function(e){return e.sunDir+"deg"||!1}),(function(e){return 2*e.moonRad+"px"||!1}),(function(e){return 2*e.moonRad+"px"||!1}),(function(e){return e.moonRad+"px"||!1}),(function(e){return e.moonRad+"px"||!1})),v=o.a.memo((function(e){var n=e.rotPer,t=e.orbPer,a=e.orbRad,r=e.moonRad,i=e.sunDir,c=e.tidLock,l=e.paused,u=e.showShadows,d=e.showLaser,m=l?"paused":"running",p=s.b.div(x(),(function(e){return e.orbPer+"s"||!1}),(function(e){return e.animationState||"running"}),(function(e){return e.orbRad+"px"||!1}),(function(e){return e.orbRad+"px"||!1}));return o.a.createElement(p,{orbPer:t,orbRad:a,animationState:m},o.a.createElement(y,{orbPer:t,rotPer:n,orbRad:a,moonRad:r,sunDir:i,animationState:m},o.a.createElement("div",{className:"moon__self"},c&&d?o.a.createElement("div",{className:"moon__lockline"}):null,o.a.createElement("div",{className:"moon__face"}),o.a.createElement("div",{className:"moon__body"})),u?o.a.createElement("div",{className:"moon__shade"}):""))}));function _(){var e=Object(f.a)(["\n  position: absolute;\n  background: linear-gradient(\n    ",",\n    rgba(0, 0, 0, 0) 50%,\n    rgba(0, 0, 0, 0.15) 50%\n  );\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  top: 0;\n  left: 0;\n"]);return _=function(){return e},e}function R(){var e=Object(f.a)(["\n  position: absolute;\n  z-index: 300;\n  background-color: #8cb2c2;\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  top: calc(50% - ",");\n  left: calc(50% - ",");\n"]);return R=function(){return e},e}var O=s.b.div(R(),(function(e){return e.planRad+"px"||!1}),(function(e){return e.planRad+"px"||!1}),(function(e){return e.planRad/2+"px"||!1}),(function(e){return e.planRad/2+"px"||!1})),S=s.b.div(_(),(function(e){return e.sunDir+"deg"||!1})),N=o.a.memo((function(e){var n=e.planRad,t=e.sunDir,a=e.showShadows;e.moveLight;return o.a.createElement("div",{className:"planetContainer"},o.a.createElement(O,{planRad:2*n},a?o.a.createElement(S,{sunDir:t}):""))}));function L(){var e=Object(f.a)(["\n  position: absolute;\n  z-index: 500;\n  width: 100%;\n  height: 2em;\n  text-align: center;\n  bottom: 0;\n  color: ",';\n  font-size: 1.2rem;\n  font-family: "Roboto", sans-serif;\n  font-weight: bold;\n  transform-origin: 50% 50%;\n  transform: skewX(-20deg);\n  animation-name: ',";\n  animation-duration: 200ms;\n  animation-iteration-count: 1;\n  animation-timing-function: linear;\n"]);return L=function(){return e},e}function j(){var e=Object(f.a)(["\n  0% {\n    transform: scaleX(1.5) scaleY(0) translateX(200px) translateY(-0.5em)\n      skewX(-140deg);\n  }\n  75% {\n    transform: scaleX(1.5) scaleY(1.2) translateX(0) translateY(0.5em)\n      skewX(-140deg);\n  }\n  100% {\n    transform: scaleX(1) scaleY(1) translateX(0) translateY(0) skewX(-20deg);\n  }\n"]);return j=function(){return e},e}var T=Object(s.c)(j()),A=s.b.div(L(),(function(e){return e.theme.colors.accentColor}),T),D=o.a.memo((function(e){var n=e.statusMessage,t=e.setStatusMessage;return Object(a.useEffect)((function(){var e=setTimeout((function(){t([!1,""])}),3e3);return function(){return clearTimeout(e)}}),[t]),o.a.createElement(A,null,n)})),I=t(77),C=t.n(I);function P(){var e=Object(f.a)(["\n  position: absolute;\n  z-index: 3000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ",";\n  transition: opacity linear 300ms;\n\n  &.fade-in {\n    opacity: 1;\n  }\n\n  &.fade-out {\n    opacity: 0;\n  }\n\n  .box-wrapper {\n    display: block;\n    z-index: 3000;\n    max-width: 800px;\n    padding: 16px;\n    background-color: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);\n\n    .box-header {\n      display: flex;\n      align-items: flex-start;\n      justify-content: space-between;\n      margin-bottom: 16px;\n\n      .header-title {\n        margin: 0;\n        font-size: 1.5rem;\n        font-weight: normal;\n      }\n\n      .header-button {\n        background-color: Transparent;\n        background-repeat: no-repeat;\n        border: none;\n        padding: 0;\n        outline: none;\n        width: 32px;\n        height: 32px;\n        cursor: pointer;\n        margin: 0 0 0 16px;\n        font-size: 2rem;\n        transition: color 300ms;\n        cursor: pointer;\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n  }\n\n  .box-backdrop {\n    background: rgba(0, 0, 0, 0.5);\n    position: fixed;\n    z-index: 2000;\n    display: block;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    outline: 0;\n  }\n"]);return P=function(){return e},e}var M=s.b.div(P(),(function(e){return e.theme.colors.textGray}),(function(e){return e.theme.colors.offWhite}),(function(e){return e.theme.colors.accentColor}),(function(e){return e.theme.spacing.borderRadius}),(function(e){return e.theme.colors.accentColor})),G=function(e){var n=e.modalState,t=e.toggleModal,r=document.getElementById("modal"),l=Object(a.useState)("out"),s=Object(c.a)(l,2),u=s[0],d=s[1];Object(a.useEffect)((function(){console.log("modal mounted, fading in"),d("in")}),[]);var m=function(e){console.log("closing modal, fading out"),e.preventDefault(),d("out")};return r&&n?i.a.createPortal(o.a.createElement(M,{role:"dialog",className:"in"===u?"fade-in":"fade-out",onTransitionEnd:function(e){"opacity"===e.propertyName&&"in"!==u&&"out"===u&&t()}},o.a.createElement("div",{className:"box-wrapper"},o.a.createElement("div",{className:"box-header"},o.a.createElement("h1",{className:"header-title"},"Information"),o.a.createElement("button",{className:"header-button",onClick:m},"X")),o.a.createElement("div",{className:"box-body"},o.a.createElement("p",null,"[ tidallylocked.com ] is a visual simulator for the phenomenon known as 'tidal locking' which can occur between two astronomical bodies. It occurs when the amount of time it takes for a moon to revolve around a planet is the same as the amount of time it takes for it to rotate on it's own axis. When this happens, the moon appears to be 'facing' the planet with one side all the time. This is why we can only observe one side of the Moon from the Earth."),o.a.createElement("p",null,"This web app was made with hopes of making the relationship between the rotational period and the orbital period visually clearer to see. You can adjust the rotational period (the amount of time it takes for the moon to rotate once on it's own axis) and the orbital period (the amount the time it takes for the moon to rotate around the Earth once) and see whether the little triangle (consider it like a 'nose' on one face of the moon) faces or doesn't face the Earth. When it is always facing the Earth, you will be able to see a thin red line that indicates that the two bodies are tidally locked. Imagine standing anywhere on that Earth, and you will only be able to see the 'nose' side of the Moon."),o.a.createElement("p",null,"This web app was made as a side project by"," ",o.a.createElement("a",{href:"https://weiji.io",target:"_blank",title:"link to blog",rel:"noopener noreferrer"},"Yeji Lee")," ","in hopes of helping other people understand a concept that was difficult for her to understand without visual guidance. You can go to the project"," ",o.a.createElement("a",{href:"https://github.com/ejilee/Tidally-Locked",target:"_blank",title:"link to repository",rel:"noopener noreferrer"},"repository")," ","to see how it works, suggest changes (always welcomed and always helpful), address issues or even contribute code! You are welcomed to use this site anytime as a reference and a learning tool for teaching and learning about SPACE!"))),o.a.createElement("div",{className:"box-backdrop",onMouseDown:m})),r):null};function z(){var e=Object(f.a)(["\n  background-color: Transparent;\n  background-repeat: no-repeat;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n  position: absolute;\n  z-index: 1000;\n  bottom: 0;\n  right: 0;\n  width: 32px;\n  height: 32px;\n  margin: 16px;\n  opacity: 0.8;\n  transition: opacity 200ms;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 1;\n  }\n"]);return z=function(){return e},e}var U=s.b.button(z()),F=function(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],r=n[1],i=function(){console.log("toggs"),r(!t)};return o.a.createElement("div",null,o.a.createElement(U,{onClick:i},o.a.createElement("img",{src:C.a,className:"infoIcon",alt:"for more information"})),t?o.a.createElement(G,{modalState:t,toggleModal:i}):"")};function W(){var e=Object(f.a)(["\n  min-height: 400px;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  position: relative;\n  overflow: hidden;\n"]);return W=function(){return e},e}var Y=s.b.section(W(),(function(e){return e.theme.colors.darkGray}),(function(e){return e.theme.colors.clearWhite}),(function(e){return e.theme.spacing.borderRadius})),B=function(e){var n=e.appState,t=e.setStatusMessage,r=n.rotPer,i=n.orbPer,c=n.orbRad,l=n.moonRad,s=n.planRad,u=n.sunDir,d=n.tidLock,m=n.paused,p=n.statusOn,h=n.statusMessage,b=n.showShadows,f=n.showLaser;return Object(a.useEffect)((function(){t(r===i?[!0,"TIDAL LOCKING!"]:[!1,""])}),[r,i,t]),o.a.createElement(Y,{className:"app-view"},o.a.createElement(w,{orbRad:c}),o.a.createElement(v,{rotPer:r,orbPer:i,orbRad:c,moonRad:l,sunDir:u,tidLock:d,paused:m,showShadows:b,showLaser:f}),o.a.createElement(N,{planRad:s,sunDir:u,showShadows:b}),o.a.createElement(F,null),p?o.a.createElement(D,{statusMessage:h,setStatusMessage:t}):"")},X=t(46),K=t.n(X),Z=t(47),H=t.n(Z),J=t(78),V=t.n(J),$=t(79),q=t.n($);function Q(){var e=Object(f.a)(["\n  padding: 2rem 1.5rem;\n  flex: 1 1 auto;\n  width: 100%;\n  line-height: 1.5rem;\n  @media "," {\n    width: calc(50% - 3rem - 1px);\n  }\n  @media "," {\n    width: 100%;\n  }\n\n  .option__firstRow {\n    width: 100%;\n    display: flex;\n    flex: row wrap;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 1.5rem;\n  }\n\n  .option__secondRow {\n    width: 100%;\n    display: flex;\n    flex: row nowrap;\n    justify-content: space-between;\n\n    button {\n      padding: 0;\n      height: 40px;\n      width: 30%;\n      background-color: ",";\n      border: none;\n      border-radius: 6px;\n      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n      color: ",';\n      font-size: 1rem;\n      font-family: "Roboto", sans-serif;\n      letter-spacing: 0.2em;\n      text-transform: uppercase;\n      cursor: pointer;\n      &:focus {\n        border: 2px solid ',';\n      }\n    }\n  }\n\n  .option__indicator--tidLock {\n    width: 24px;\n    height: 24px;\n    align-self: flex-end;\n    margin-bottom: 1.75rem;\n\n    @media (max-width: 360px) {\n      display: none;\n    }\n\n    @media (min-width: 361px) {\n      display: block;\n    }\n  }\n\n  .option__number {\n    display: inline-block;\n\n    label {\n      width: 7rem;\n    }\n\n    .number__input {\n      display: flex;\n      flex: row nowrap;\n      justify-content: flex-start;\n      align-items: center;\n      margin-top: 0.5rem;\n\n      input[type="number"] {\n        width: 100px;\n        height: 50px;\n        background-color: ',";\n        color: ",";\n        font-size: 2.25rem;\n        text-align: center;\n        border: none;\n        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);\n        @media ",' {\n          width: 80px;\n        }\n      }\n      /* Chrome, Safari, Edge, Opera */\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n      }\n      /* Firefox */\n      input[type="number"] {\n        -moz-appearance: textfield;\n      }\n    }\n\n    .number__control {\n      display: flex;\n      flex-flow: column;\n      margin: 0 0 0 0.5rem;\n      padding: 0;\n      .btn__inc,\n      .btn__dec {\n        font-size: 0;\n        width: 32px;\n        height: 32px;\n        background-color: ',";\n        border-radius: 16px;\n        border: none;\n        line-height: 0;\n        overflow: hidden;\n        margin: 0%;\n        cursor: pointer;\n\n        img {\n          width: 16px;\n          height: 16px;\n          margin: 2px;\n        }\n      }\n      .btn__inc {\n        margin-bottom: 0.5rem;\n      }\n    }\n  }\n"]);return Q=function(){return e},e}var ee=s.b.div(Q(),(function(e){return e.theme.threshold.tablet}),(function(e){return e.theme.threshold.desktop}),(function(e){return e.theme.colors.uiGray}),(function(e){return e.theme.colors.offWhite}),(function(e){return e.theme.colors.accentColor}),(function(e){return e.theme.colors.offWhite}),(function(e){return e.theme.colors.textGray}),(function(e){return e.theme.threshold.mobile}),(function(e){return e.theme.colors.uiGray})),ne=function(e){var n=e.rotPer,t=e.orbPer,a=e.tidLock,r=e.paused,i=e.setRotOrbPer,c=e.resetAll,l=e.pauseAll,s=e.resumeAll,u=e.forceLock;return o.a.createElement(ee,{className:"app-ui-primary"},o.a.createElement("form",{className:"primaryOptions",onSubmit:function(e){e.preventDefault()}},o.a.createElement("div",{className:"option option__firstRow"},o.a.createElement("div",{className:"option option__number"},o.a.createElement("label",{htmlFor:"rotPer"},"Rotational Period"),o.a.createElement("div",{className:"number__input"},o.a.createElement("input",{type:"number",id:"rotPer",name:"rotPer",min:"1",max:"100",value:n,onChange:function(e){e.preventDefault(),i(Number(e.target.value),t)}}),o.a.createElement("div",{className:"number__control"},o.a.createElement("button",{className:"btn__inc",onClick:function(e){e.preventDefault(),i(Number(n+1),t)}},o.a.createElement("img",{src:H.a,className:"btnIncImg",alt:"click to increment by one"})),o.a.createElement("button",{className:"btn__dec",onClick:function(e){e.preventDefault(),i(Number(n-1),t)}},o.a.createElement("img",{src:K.a,className:"btnDecImg",alt:"click to decrement by one"}))))),o.a.createElement("div",{className:"option__indicator--tidLock"},a?o.a.createElement("img",{src:V.a,className:"lockIcon lockIcon--on",alt:"status currently IS tidal locked"}):o.a.createElement("img",{src:q.a,className:"lockIcon lockIcon--off",alt:"status currently NOT tidal locked"})),o.a.createElement("div",{className:"option option__number"},o.a.createElement("label",{htmlFor:"orbPer"},"Orbital Period"),o.a.createElement("div",{className:"number__input"},o.a.createElement("input",{type:"number",id:"orbPer",name:"orbPer",min:"1",max:"100",value:t,onChange:function(e){e.preventDefault(),i(n,Number(e.target.value))}}),o.a.createElement("div",{className:"number__control"},o.a.createElement("button",{className:"btn__inc",onClick:function(e){e.preventDefault(),i(n,Number(t+1))}},o.a.createElement("img",{src:H.a,className:"btnIncImg",alt:"click to increment by one"})),o.a.createElement("button",{className:"btn__dec",onClick:function(e){e.preventDefault(),i(n,Number(t-1))}},o.a.createElement("img",{src:K.a,className:"btnDecImg",alt:"click to decrement by one"})))))),o.a.createElement("div",{className:"option option__secondRow"},o.a.createElement("button",{onClick:function(e){e.preventDefault(),c()}},"RESET"),r?o.a.createElement("button",{onClick:function(e){e.preventDefault(),s()}},"RESUME"):o.a.createElement("button",{onClick:function(e){e.preventDefault(),l()}},"PAUSE"),o.a.createElement("button",{onClick:function(e){e.preventDefault(),u()}},"FORCE"))))};function te(){var e=Object(f.a)(["\n  padding: 2rem 1.5rem;\n  flex: 1 1 auto;\n  width: 100%;\n  font-size: 0.9rem;\n  line-height: 1.5rem;\n  @media "," {\n    width: calc(50% - 3rem - 1px);\n  }\n  @media ",' {\n    width: 100%;\n  }\n\n  .option {\n    width: 100%;\n    display: flex;\n    flex: row wrap;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 1.5rem;\n\n    &.option--leftalign {\n      justify-content: flex-start;\n    }\n\n    &:last-child {\n      margin-bottom: 0;\n      margin-top: 2rem;\n    }\n\n    input[type="range"] {\n      width: calc(100% - 7.5rem);\n    }\n\n    .option__check {\n      text-align: left;\n    }\n\n    .option__check input[type="checkbox"] {\n      opacity: 0;\n    }\n\n    .option__check label {\n      position: relative;\n      display: inline-block;\n      padding-left: 1.8rem;\n      margin-right: 2rem;\n    }\n\n    .option__check label::before,\n    .option__check label::after {\n      position: absolute;\n      content: "";\n      /*Needed for the line-height to take effect*/\n      display: inline-block;\n    }\n\n    /*Outer box of the fake checkbox*/\n    .option__check label::before {\n      height: 20px;\n      width: 20px;\n      background-color: ',';\n      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);\n      border-radius: 2px;\n      left: 0px;\n\n      /*(24px line-height - 16px height of fake checkbox) / 2 - 1px for the border\n        *to vertically center it.\n        */\n      top: 3px;\n    }\n\n    /*Checkmark of the fake checkbox*/\n    .option__check label::after {\n      height: 6px;\n      width: 10px;\n      border-left: 2px solid #222;\n      border-bottom: 2px solid #222;\n\n      transform: rotate(-45deg);\n\n      left: 4px;\n      top: 7px;\n    }\n\n    /*Hide the checkmark by default*/\n    .option__check input[type="checkbox"] + label::after {\n      content: none;\n    }\n\n    /*Unhide on the checked state*/\n    .option__check input[type="checkbox"]:checked + label::after {\n      content: "";\n    }\n\n    /*Adding focus styles on the outer-box of the fake checkbox*/\n    .option__check input[type="checkbox"]:focus + label::before {\n      outline: 2px solid ',";\n    }\n  }\n"]);return te=function(){return e},e}var ae=s.b.div(te(),(function(e){return e.theme.threshold.tablet}),(function(e){return e.theme.threshold.desktop}),(function(e){return e.theme.colors.offWhite}),(function(e){return e.theme.colors.accentColor})),oe=function(e){var n=e.orbRad,t=e.moonRad,a=e.planRad,r=e.sunDir,i=e.showShadows,c=e.showLaser,l=e.setOrbRad,s=e.setBodySize,u=e.setSunDirection,d=e.toggleShadows,m=e.toggleLaser;return o.a.createElement(ae,{className:"app-ui-secondary"},o.a.createElement("form",{className:"secondaryOptions"},o.a.createElement("div",{className:"option"},o.a.createElement("label",{htmlFor:"orbRad"},"Orbit Radius"),o.a.createElement("input",{type:"range",id:"orbRad",name:"orbRad",min:"100",max:"300",step:"20",value:n,onChange:function(e){e.preventDefault(),l(Number(e.target.value))}})),o.a.createElement("div",{className:"option"},o.a.createElement("label",{htmlFor:"orbRad"},"Light Angle"),o.a.createElement("input",{type:"range",id:"orbRad",name:"orbRad",min:"0",max:"360",step:"10",value:r,onChange:function(e){e.preventDefault(),u(Number(e.target.value))}})),o.a.createElement("div",{className:"option"},o.a.createElement("label",{htmlFor:"orbRad"},"Earth Radius"),o.a.createElement("input",{type:"range",id:"orbRad",name:"orbRad",min:"50",max:"100",step:"5",value:a,onChange:function(e){e.preventDefault(),s(t,Number(e.target.value))}})),o.a.createElement("div",{className:"option"},o.a.createElement("label",{htmlFor:"orbRad"},"Moon Radius"),o.a.createElement("input",{type:"range",id:"orbRad",name:"orbRad",min:"10",max:"50",step:"5",value:t,onChange:function(e){e.preventDefault(),s(Number(e.target.value),a)}})),o.a.createElement("div",{className:"option option--leftalign"},o.a.createElement("div",{className:"option__check"},o.a.createElement("input",{type:"checkbox",id:"showShadow",name:"showShadow",checked:i,onChange:function(e){d()}}),o.a.createElement("label",{htmlFor:"showShadow"},"Show Shadows")),o.a.createElement("div",{className:"option__check"},o.a.createElement("input",{type:"checkbox",id:"moveLight",name:"moveLight",checked:c,onChange:function(e){m()}}),o.a.createElement("label",{htmlFor:"moveLight"},"Show Laser")))))};function re(){var e=Object(f.a)(["\n  padding: 2rem 1.5rem;\n  /* flex: 1 0 auto; */\n  /* width: calc(100% - 3rem); */\n"]);return re=function(){return e},e}var ie=s.b.div(re()),ce=function(){return o.a.createElement(ie,{className:"app-ui-description"},"Tidal locking, in the best-known case, occurs when an orbiting astronomical body always has the same face toward the object it is orbiting. This is known as synchronous rotation: the tidally locked body takes just as long to rotate around its own axis as it does to revolve around its partner. For example, the same side of the Moon always faces the Earth, although there is some variability because the Moon's orbit is not perfectly circular.",o.a.createElement("br",null),o.a.createElement("br",null),"-"," ",o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Tidal_locking",target:"_blank",rel:"noopener noreferrer"},"read more on Wikipedia"))};function le(){var e=Object(f.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n\n  background-color: ",";\n  border-radius: ",";\n  color: ",';\n  font-family: "Roboto", sans-serif;\n\n  @media '," {\n    flex-flow: row wrap;\n  }\n  @media "," {\n    flex-flow: column wrap;\n  }\n\n  .app-ui-divider--dyn {\n    width: calc(100% - 4rem);\n    border-bottom: 1px solid ",";\n    border-right: 0;\n    align-self: center;\n    margin: 0;\n    @media "," {\n      width: 0;\n      border-bottom: 0;\n      border-right: 1px solid ",";\n      align-self: stretch;\n      margin: 3rem 0;\n    }\n    @media "," {\n      width: calc(100% - 4rem);\n      border-bottom: 1px solid ",";\n      border-right: 0;\n      align-self: center;\n      margin: 0;\n    }\n  }\n\n  .app-ui-divider--hor {\n    width: calc(100% - 4rem);\n    border-bottom: 1px solid ",";\n    align-self: center;\n  }\n"]);return le=function(){return e},e}var se=s.b.section(le(),(function(e){return e.theme.colors.milkyWhite}),(function(e){return e.theme.spacing.borderRadius}),(function(e){return e.theme.colors.textGray}),(function(e){return e.theme.threshold.tablet}),(function(e){return e.theme.threshold.desktop}),(function(e){return e.theme.colors.lightGray}),(function(e){return e.theme.threshold.tablet}),(function(e){return e.theme.colors.lightGray}),(function(e){return e.theme.threshold.desktop}),(function(e){return e.theme.colors.lightGray}),(function(e){return e.theme.colors.lightGray})),ue=o.a.memo((function(e){var n=e.appState,t=e.setRotOrbPer,a=e.setOrbRad,r=e.resetAll,i=e.pauseAll,c=e.resumeAll,l=e.forceLock,s=e.setBodySize,u=e.setSunDirection,d=e.toggleShadows,m=e.toggleLaser,p=n.rotPer,h=n.orbPer,b=n.orbRad,f=n.moonRad,g=n.planRad,E=n.sunDir,w=n.tidLock,x=n.paused,k=n.showShadows,y=n.showLaser;return o.a.createElement(se,{className:"app-ui"},o.a.createElement(ne,{rotPer:p,orbPer:h,tidLock:w,paused:x,setRotOrbPer:t,resetAll:r,pauseAll:i,resumeAll:c,forceLock:l}),o.a.createElement("div",{className:"app-ui-divider--dyn"}),o.a.createElement(oe,{orbRad:b,moonRad:f,planRad:g,sunDir:E,showShadows:k,showLaser:y,setOrbRad:a,setBodySize:s,setSunDirection:u,toggleShadows:d,toggleLaser:m}),o.a.createElement("div",{className:"app-ui-divider--hor"}),o.a.createElement(ce,null))}));var de={rotPer:20,orbPer:20,orbRad:150,moonRad:20,planRad:50,sunDir:100,tidLock:!0,paused:!1,statusOn:!1,statusMessage:"",showShadows:!0,showLaser:!0};function me(e,n){switch(n.type){case"ROTATIONAL_PERIOD":return Object(l.a)({},e,{rotPer:n.rotPer});case"ORBITAL_PERIOD":return Object(l.a)({},e,{orbPer:n.orbPer});case"ORBIT_RADIUS":return Object(l.a)({},e,{orbRad:n.orbRad});case"MOON_SIZE":return Object(l.a)({},e,{moonRad:n.moonRad});case"PLANET_SIZE":return Object(l.a)({},e,{planRad:n.planRad});case"SUN_DIRECTION":return Object(l.a)({},e,{sunDir:n.sunDir});case"SHADOW_TOGGLE":return Object(l.a)({},e,{showShadows:!e.showShadows});case"LASER_TOGGLE":return Object(l.a)({},e,{showLaser:!e.showLaser});case"SET_TIDLOCK_STATE":return Object(l.a)({},e,{tidLock:n.tidLockState});case"FORCE_LOCK":return Object(l.a)({},e,{orbPer:e.rotPer});case"PAUSE_ALL":return Object(l.a)({},e,{paused:!0});case"RESUME_ALL":return Object(l.a)({},e,{paused:!1});case"STATUS_MESSAGE":return Object(l.a)({},e,{statusOn:n.message[0],statusMessage:n.message[1]});case"RESET_ALL":return de;default:return e}}var pe=function(){var e=Object(a.useReducer)(me,de),n=Object(c.a)(e,2),t=n[0],r=n[1],i=Object(a.useCallback)((function(e,n){e>0&&e<=100&&r({type:"ROTATIONAL_PERIOD",rotPer:e}),n>0&&n<=100&&r({type:"ORBITAL_PERIOD",orbPer:n}),r({type:"SET_TIDLOCK_STATE",tidLockState:e===n})}),[]),l=Object(a.useCallback)((function(e){r({type:"ORBIT_RADIUS",orbRad:e})}),[]),s=Object(a.useCallback)((function(e,n){r({type:"MOON_SIZE",moonRad:e}),r({type:"PLANET_SIZE",planRad:n})}),[]),u=Object(a.useCallback)((function(e){r({type:"SUN_DIRECTION",sunDir:e})}),[]),m=Object(a.useCallback)((function(e){r({type:"STATUS_MESSAGE",message:e})}),[]),p=Object(a.useCallback)((function(){r({type:"RESUME_ALL"}),r({type:"RESET_ALL"});r({type:"STATUS_MESSAGE",message:[!0,"reset to default"]})}),[]),f=Object(a.useCallback)((function(){r({type:"PAUSE_ALL"});r({type:"STATUS_MESSAGE",message:[!0,"pause all animation"]})}),[]),g=Object(a.useCallback)((function(){r({type:"RESUME_ALL"});r({type:"STATUS_MESSAGE",message:[!0,"resume all animation"]})}),[]),E=Object(a.useCallback)((function(){r({type:"FORCE_LOCK"});r({type:"STATUS_MESSAGE",message:[!0,"forcing tidal locking"]});r({type:"SET_TIDLOCK_STATE",tidLockState:!0})}),[]),w=Object(a.useCallback)((function(){r({type:"SHADOW_TOGGLE"})}),[]),x=Object(a.useCallback)((function(){r({type:"LASER_TOGGLE"})}),[]);return o.a.createElement(d,null,o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(B,{appState:t,setStatusMessage:m}),o.a.createElement(ue,{appState:t,setRotOrbPer:i,setOrbRad:l,resetAll:p,pauseAll:f,resumeAll:g,forceLock:E,setBodySize:s,setSunDirection:u,toggleShadows:w,toggleLaser:x}),o.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},46:function(e,n,t){e.exports=t.p+"static/media/symDec.78faf1bd.svg"},47:function(e,n,t){e.exports=t.p+"static/media/symInc.3388148d.svg"},76:function(e,n,t){e.exports=t.p+"static/media/logo.a94730d0.svg"},77:function(e,n,t){e.exports=t.p+"static/media/infoIcon.2001e4c7.svg"},78:function(e,n,t){e.exports=t.p+"static/media/lockIcon_on.bdaea7f8.svg"},79:function(e,n,t){e.exports=t.p+"static/media/lockIcon_off.f0dabce9.svg"},80:function(e,n,t){e.exports=t(142)}},[[80,1,2]]]);
//# sourceMappingURL=main.7a421779.chunk.js.map