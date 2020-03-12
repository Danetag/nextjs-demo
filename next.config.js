const withPlugins = require('next-compose-plugins');
const path = require('path');

// module.exports = withPlugins([

// ], {
//   webpack: config => {
//     // Alias
//     config.resolve.alias['~'] = path.resolve(__dirname + '/src');
//     return config;
//   }
// });

module.exports = {
  webpack: config => {
    // Alias
    config.resolve.alias['~'] = path.resolve(__dirname + '/src');
    return config;
  }
};

// module.exports = withSass(
//     {
//         cssModules: true,
//         cssLoaderOptions: {
//             importLoaders: 2,
//             // localIdentName: "[local]___[hash:base64:5]", // doesn't work SSR, creates an issue. Remove for now
//         },
//         webpack: config => {
//             // Alias
//             config.resolve.alias['~'] = path.resolve(__dirname + '/src');

//             // *.global.scss => classic SCSS
//             // *.scss => CSS module
//             config.module.rules.forEach(rule => {
//                 if (rule.test && rule.test.toString().includes('.scss')) {
//                   rule.rules = rule.use.map(useRule => {
//                     if (typeof useRule === 'string') {
//                       return { loader: useRule };
//                     }
//                     if (useRule.loader === 'css-loader') {
//                       return {
//                         oneOf: [
//                           {
//                             test: new RegExp('.global.scss$'),
//                             loader: useRule.loader,
//                             options: {},
//                           },
//                           {
//                             loader: useRule.loader,
//                             options: { modules: true }
//                           },
//                         ],
//                       };
//                     }
//                     return useRule;
//                   });
//                   delete rule.use;
//                 }
//             });

//             return config;
//         }
//     }
// );