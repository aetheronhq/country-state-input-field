import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
            sourcemap: true,
        },
        {
            file: "dist/index.esm.js",
            format: "esm",
            sourcemap: true,
        },
    ],
    external: [
        "react",
        "react-dom",
        "lucide-react",
        "@radix-ui/react-dialog",
        "@radix-ui/react-popover",
        "@radix-ui/react-scroll-area",
        "@radix-ui/react-slot",
        "class-variance-authority",
        "clsx",
        "cmdk",
        "tailwind-merge",
        "tailwindcss-animate",
        "zustand",
    ],
    plugins: [
        peerDepsExternal(),
        resolve({
            extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        }),
        commonjs(),
        json(),
        typescript({ tsconfig: "./tsconfig.json" }),
        postcss({
            config: {
                path: "./postcss.config.js",
            },
            extensions: [".css"],
            minimize: true,
            inject: {
                insertAt: "top",
            },
        }),
        terser(),
    ],
};
