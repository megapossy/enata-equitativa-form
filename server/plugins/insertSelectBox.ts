export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    html.bodyAppend.push("<div id='select-box' />");
  });
});
