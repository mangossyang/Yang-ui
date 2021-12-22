module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    // 支持ts，tsx语法
    // config.module.rules.push({
    //   test: /\.(ts|tsx)$/,
    //   use: [
    //     {
    //       loader: require.resolve('ts-loader')
    //     },
    //     // Optional
    //     {
    //       loader: require.resolve('react-docgen-typescript-loader'),
    //       options: {
    //         shouldExtractLiteralValuesFromEnum: true, // 枚举联合类型不显示
    //         propFilter: (prop) => {
    //           if (prop.parent) {
    //             return !prop.parent.fileName.includes('node_modules')
    //           }

    //           return true
    //         }
    //       }
    //     }
    //   ]
    // })
    // 支持scss文件，其他样式文件，在加入
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  }
}
