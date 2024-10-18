"use strict";

const fs = require("node:fs/promises");
const path = require("node:path");

async function appendAndReadFile() {
  try {
    // Асинхронно добавляем текст в файл
    await fs.appendFile(path.join(__dirname, "some.txt"), "\nHello, itProger!");
  } catch (err) {
    console.error("Ошибка при записи файла: ", err);
  }

  try {
    // Асинхронно читаем содержимое файла
    const data = await fs.readFile(path.join(__dirname, "some.txt"), "utf8");
    console.log('Содержимое файла:');
    console.log(data);
  } catch (err) {
    console.error('Ошибка при чтении файла: ', err);
  }
}

// Вызываем асинхронную функцию
appendAndReadFile();
