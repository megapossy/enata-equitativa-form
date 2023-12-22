export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    console.log('XXXXXXXXXXXXXx')
    html.bodyAppend.push("<div id='select-box' />");
  });
});
