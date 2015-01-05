module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: 'source/images/',
      src: ['**/*.{svg,png,jpg,gif}'],
      dest: 'build/images/'
    }]
  }
}