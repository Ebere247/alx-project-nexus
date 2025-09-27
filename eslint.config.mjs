import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      "no-unsued-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "react/react-in-jsx-scope": "off",
      "no-throw-literal": "off",
      "no-unused-expressions": "off",
      "react/jsx-no-undef": "off",
      "react/prop-types": "off",
      "@typescript-eslint/ban-types": [
        "error",
        {
          types: {
            "{}": {
              message: "Use object or unknown instead.",
              fixWith: "object",
            },
            Object: {
              message: "Avoid using the `Object` type. Did you mean `object`?",
              fixWith: "object",
            },
            Function: {
              message:
                "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
              fixWith: "() => void",
            },
          },
          extendDefaults: true,
        },
      ],
    },
  },
];

export default eslintConfig;
