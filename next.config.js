const nextConfig = {
  // ...
  webpack: {
    module: {
      rules: [
        {
          test: /\.otf$/,
          loader: "@fontsource/webpack-loader",
        },
      ],
    },
  },
};
