import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: {it: "readonly", describe: "readonly", jest: "readonly", test: "readonly", expect: "readonly", process: "readonly", console: "readonly", beforeEach: "readonly" }}},
  pluginJs.configs.recommended,
];
