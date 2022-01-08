import { injectCSS } from "@cumcord/patcher";

export default (_data) => {
  let nitin;
  return {
    onLoad() {
      nitin = injectCSS(`
        img {
          content: url("https://x1nto.github.io/CumcordPlugins/assets/nitin${Math.floor(Math.random() * 3)}.png");
        }
      `);
    },

    onUnload() {
      nitin();
    },
  };
};
