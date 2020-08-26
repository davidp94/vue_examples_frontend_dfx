import canisterAssets from "ic:canisters/vue_example_dfx_assets";
import App from "./App/index.vue";
import Vue from "vue";

// use the asset canister's retrieve method to request a file (the `index.html` file from above)
canisterAssets.retrieve("index.html").then((htmlBytes) => {
  // now that you have the html, decode it and create a new element
  const html = new TextDecoder().decode(new Uint8Array(htmlBytes));
  const el = new DOMParser().parseFromString(html, "text/html");
  // insert your HTML into the bootstrap HTML under the element with id `"app"`
  document.body.replaceChild(
    el.firstElementChild,
    document.getElementById("app")
  );

  const _el = document.getElementById("vue_app");

  const _app = new Vue({
    el: _el,
    components: {
      App,
    },
    render: (createElement) => {
      return createElement("App");
    },
  });
});
