// next.config.js

module.exports = {

  
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4)$/, 
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]', 
            outputPath: 'videos/', 
          },
        },
      },
      {
        test: /\.mp3$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
      },
      );
      return config;
    },
    images: {
      domains: ['res.cloudinary.com'],
    },
  };
  