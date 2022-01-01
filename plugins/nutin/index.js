export default (_data) => {
    let nitin;
    return {
        onLoad() {
            nitin = cumcord.patcher.injectCSS(`
                img {
                    content:url("../assets/nitin.png");
                }
            `);
        },
        
        onUnload() {
            nitin();
        }
    }
  }