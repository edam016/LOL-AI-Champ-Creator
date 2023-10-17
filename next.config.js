// next.config.js

module.exports = {
    // Next.js specific configurations
  
    webpack: (config) => {
      // Webpack configurations can be added here
  
      // For example, to handle .mp4 files using file-loader
      config.module.rules.push({
        test: /\.(mp4)$/, // Use this regex pattern to match .mp4 files
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]', // This preserves the original filename and extension
            outputPath: 'videos/', // The directory where videos will be copied
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
  };
  