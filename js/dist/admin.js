(()=>{var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const r=flarum.core.compat["admin/app"];var a=e.n(r);a().initializers.add("nearata/discord-widget",(function(){a().extensionData.for("nearata-discord-widget").registerSetting({setting:"nearata-discord-widget.admin.discord-id",type:"text",label:a().translator.trans("nearata-discord-widget.admin.server_id"),help:a().translator.trans("nearata-discord-widget.admin.server_id_help")})}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map