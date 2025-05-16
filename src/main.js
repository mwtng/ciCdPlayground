import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Mathias Wagner",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["finding errors before merging?"],
    // Which CI/CD tools do you use in your project?
    tools: "Bitbucket without CI/CD? Maybe pre-commit hooks count as CI/CD?",
    // What do you want to learn in this workshop?
    expectations: ["Get to know CI/CD, how to set it up and use it"],
  },
});
