module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['source/js/*.js'],
    tasks: ['jshint', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['source/css/scss/*.scss'],
    tasks: ['compass','autoprefixer','cssmin'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['source/images/**/*.{png,jpg,gif,svg}', 'source/images/*.{png,jpg,gif,svg}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  },
  html:{
    files: ['./**/*.html'],
    tasks: [],
    options: {
      spawn: false
    }
  }
}