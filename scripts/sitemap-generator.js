const sitemap = require('nextjs-sitemap-generator');
const fs = require('fs');
const path = require('path');

sitemap({
  baseUrl: "http://localhost:3000",
  pagesDirectory: path.resolve(__dirname, '../out/'),
  targetDirectory:path.resolve(__dirname, '../out/'),
  ignoredExtensions: ["js", "map", "json", "xml", "png", "jpg", "jpeg", "svg"],
  ignoredPaths: ["404"],
});