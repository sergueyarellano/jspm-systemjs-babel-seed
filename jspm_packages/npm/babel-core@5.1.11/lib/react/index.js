/* */ 
"format global";
"use strict";

module.exports = {
  generators: {
    flow: require("./generation/flow"),
    jsx: require("./generators/jsx")
  }
};