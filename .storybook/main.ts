/** @type { import('@storybook/html-webpack5').StorybookConfig } */

const path = require('path');

const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials", 
    "@storybook/addon-interactions", 
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(scss|css)$/,
      use: [
        "style-loader", 
        "css-loader", 
        "postcss-loader",  
        "sass-loader"
      ],
      include: path.resolve(__dirname, '../'),
      
    });

    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
      },
    });
    return config;
  },
};
export default config;
