(function(n){"use strict";var o=i=>{let t;return{onLoad(){t=n.injectCSS(`
                img {
                    content:url("https://x1nto.github.io/CumcordPlugins/assets/nitin${Math.floor(Math.random()*2)}.jpg");
                }
            `)},onUnload(){t()}}};return o})(cumcord.patcher);
