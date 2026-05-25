// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      "taro",
      {
        framework: "react",
        ts: true,
      },
    ],
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "taro-ui",
        customName: (name) => `taro-ui/lib/components/${name.slice(3)}`,
        customStyleName: (name) =>
          `taro-ui/dist/style/components/${name.slice(3)}.scss`,
      },
      "taro-ui",
    ],
  ],
};
