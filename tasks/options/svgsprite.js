module.exports = {
  svgsprite       : {
    spriteSass    : {
      src         : ['source/images/svg'],
      dest        : 'source/css/scss',
      options     : {
        render    : {
          css     : false,
          scss    : {
            dest  : 'scss/_sprite'
          }
        },
        padding   : 10,
        keep      : true,
        dims      : true
      }
    }
  }
}