"use strict";

const fs = require("node:fs/promises")

fs.unlink("testFile.txt")
  .then(() => {
    console.log("Файл был успешно удален.");
  })
  .catch((error) => {
    console.error("Произошла ошибка при удалении файла:", error.message);
  });
