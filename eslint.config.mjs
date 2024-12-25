import antfu from "@antfu/eslint-config";

export default antfu({
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
    trailingComma: null,
  },
  rules: {
    "vue/no-v-for-template-key": "off",
    "vue/multi-word-component-names": "off",
    "no-multiple-empty-lines": "error",
    "node/prefer-global/process": "off",
    "yaml/plain-scalar": "off",
  },
}).append({
  files: ["test/**"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
});
