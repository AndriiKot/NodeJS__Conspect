"use strict";

const fs = require("node:fs/promises")

fs.unlink("testFile.txt")
  .then(() => console.log("Файл успешно удалён"))
  .catch((error) => console.error("Ошибка при удалении файла:", error.message))
  
  
  
  
  
  
  
  
  