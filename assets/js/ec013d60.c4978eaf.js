"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3537],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},990:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l=void 0,u={unversionedId:"ox_inventory/Functions/Client/useItem",id:"ox_inventory/Functions/Client/useItem",title:"useItem",description:"Uses the passed item, then triggers the callback function.",source:"@site/docs/ox_inventory/Functions/Client/useItem.md",sourceDirName:"ox_inventory/Functions/Client",slug:"/ox_inventory/Functions/Client/useItem",permalink:"/docs/ox_inventory/Functions/Client/useItem",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Client/useItem.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"setStashTarget",permalink:"/docs/ox_inventory/Functions/Client/setStashTarget"},next:{title:"useSlot",permalink:"/docs/ox_inventory/Functions/Client/useSlot"}},s={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Uses the passed item, then triggers the callback function.",(0,a.kt)("br",{parentName:"p"}),"\n","Should be calling during item callbacks to utilise the builtin methods (server checks, progress bar, etc.)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- data: table\n-- cb: function (optional)\nexports.ox_inventory:useItem(data, cb)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports('bandage', function(data, slot)\n    local playerPed = PlayerPedId()\n    local maxHealth = GetEntityMaxHealth(playerPed)\n    local health = GetEntityHealth(playerPed)\n\n    -- Does the ped need to heal?\n    if health < maxHealth then\n        -- Use the bandage\n        exports.ox_inventory:useItem(data, function(data)\n            -- The item has been used, so trigger the effects\n            if data then\n                SetEntityHealth(playerPed, math.min(maxHealth, math.floor(health + maxHealth / 16)))\n                exports.ox_inventory:notify({text = 'You feel better already'})\n            end\n        end)\n    else\n        -- Don't use the item\n        exports.ox_inventory:notify({type = 'error', text = 'You don\\'t need a bandage right now'})\n    end\nend)\n")))}f.isMDXComponent=!0}}]);