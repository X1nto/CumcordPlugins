import { injectCSS } from "@cumcord/patcher";

export default (_data) => {
  let nitin;
  return {
    onLoad() {
      nitin = injectCSS(`
        img {
          content: url("https://x1nto.github.io/CumcordPlugins/assets/nitin${Math.floor(Math.random() * 2)}.png");
        }
        .markup-2BOw-j.messageContent-2qWWxC {
          text-indent: -9999px;
          line-height: 0;
        }
        .markup-2BOw-j.messageContent-2qWWxC::after {
          content: 'I like fetishizing lesbians';
          text-indent: 0;
          display: block;
          line-height: initial;
        }
      `);
    },

    onUnload() {
      nitin();
    },
  };
};
