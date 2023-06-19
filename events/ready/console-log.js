const fs = require("fs");
const path = require("path");
const colors = require("colors");
module.exports = (client) => {
  const ascii_art = `
    ---------------------------------------------------------------------------
    _/_/_/     _/_/_/_/    _/_/_/  _/    _/  _/_/_/    _/_/_/    _/_/    _/      _/   
    _/        _/        _/        _/    _/  _/    _/    _/    _/    _/  _/_/    _/    
     _/_/    _/_/_/    _/        _/    _/  _/_/_/      _/    _/    _/  _/  _/  _/     
        _/  _/        _/        _/    _/  _/    _/    _/    _/    _/  _/    _/_/      
 _/_/_/    _/_/_/_/    _/_/_/    _/_/    _/    _/  _/_/_/    _/_/    _/      _/    
   ----------------------------------------------------------------------------
 `;

  console.clear();
  console.log(ascii_art);

  function processFiles(folderPath, parentPath = "") {
    fs.readdirSync(folderPath).forEach((item) => {
      const itemPath = path.join(folderPath, item);
      const stats = fs.statSync(itemPath);

      if (stats.isDirectory()) {
        console.log(
          colors.green(`\n Processing directory: ${parentPath}${item}`)
        );
        processFiles(itemPath, `${parentPath}${item}/`); // Pass the updated parent path for files within the directory
      } else if (stats.isFile()) {
        const fileName = path.parse(item).name;
        console.log(
          colors.gray(
            `✅ ${parentPath}${fileName}.js command loaded: ${fileName}`
          )
        );
      }
    });
  }

  const folderPath = "./commands";
  processFiles(folderPath);

  console.log(`\n🔊 ${client.user.tag} is listening`);
};
