module.exports = {
  presets: [
    [
      '@babel/preset-env',
      //  UPDATE: @babel/preset-react
      '@babel/preset-react',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
};
