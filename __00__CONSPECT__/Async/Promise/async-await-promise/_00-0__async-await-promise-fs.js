"use strict";

const fs = require("node:fs/promises");

(async () => {
  try {
    await fs.unlink("testFile.txt");
    console.log("Файл был успешно удален.");
  } catch (error) {
    console.error("Произошла ошибка при удалении файла:", error.message);
  }
})();
  
  
  
  
  
