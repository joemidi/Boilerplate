module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: 'source/images/',
      src: ['**/*.{png,jpg,gif}','*.{png,jpg,gif}'],
      dest: 'build/images/'
    }]
  }
}