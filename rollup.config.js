import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

//an array of configuration objects
export default [
    //handles the js files (components)
  {
    input: "src/index.ts",
    output: [
        //output input file as  common js
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      //output es6
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      //have to explicity specify tsconfig.json file create by `npx tsc --init`
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
    ],
  },
  //handles exporting the types
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.(css|less|scss)$/],
  },
];