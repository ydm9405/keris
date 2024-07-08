function loadScript(path) {
  return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = path;
      script.type = "text/javascript";
      script.async = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Script load error: ${path}`));
      document.head.appendChild(script);
  });
}

function loadCSS(path) {
  return new Promise(function (resolve, reject) {
      var link = document.createElement("link");
      link.href = path;
      link.rel = "stylesheet";
      link.type = "text/css";
      link.onload = () => {
          console.log(`Loaded CSS: ${path}`);
          resolve();
      };
      link.onerror = () => reject(new Error(`CSS load error: ${path}`));
      document.head.appendChild(link);
  });
}

Promise.all([
  loadCSS("./css/reset.css"),
  loadCSS("./css/style.css"),
  loadCSS("./css/header.css"),
  loadCSS("./css/index.css"),
  loadCSS("./css/contents.css"),
  loadCSS("./css/bottom.css"),
])
  .then(() =>
      Promise.all([
        loadScript("./js/header.js"),
          loadScript("./js/index.js"),
          loadScript("./js/contents.js"),
          loadScript("./js/bottom.js"),
          loadScript("./js/ui.js"),
      ])
  )
  .then(() => {
      $(document).ready(function () {
          initialize();
      });
  })
  .catch((err) => console.error(err.message));