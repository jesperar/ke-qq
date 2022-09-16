const CracoAlis=require('craco-alias');
const CracoLess=require('craco-less');
// const path=require('path');

module.exports={
  plugins: [
    {
      plugin: CracoAlis,
      options: {
        aliases: {
          // 'models': path.resolve(__dirname, '../models'),
        }
      }
    },
    {
      plugin: CracoLess,
    }
  ]
};