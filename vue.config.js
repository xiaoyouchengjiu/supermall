module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        'assets': '@/assets',
        'common': '@/assets',
        'components': '@/assets',
        'network': '@/assets',
        'views': '@views'

      }
    }
  }
};