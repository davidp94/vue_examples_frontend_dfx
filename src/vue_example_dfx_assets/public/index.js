import vue_example_dfx from 'ic:canisters/vue_example_dfx';

vue_example_dfx.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
