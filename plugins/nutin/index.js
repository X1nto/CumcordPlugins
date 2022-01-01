export default (_data) => {
    let nitin;
    return {
        onLoad() {
            nitin = cumcord.patcher.injectCSS(`
                img {
                    content:url("https://x1nto.github.io/CumcordPlugins/assets/nitin.jpg");
                }
            `);
        },
        
        onUnload() {
            nitin();
        }
    }
  }