'use strict';

const fs = require("node:fs/promises");

async function createDerictory() {
  try {
		await fs.mkdir("testFolder")  
  } catch(error) {
    console.log("Ошибка при создании директории:", error.message);
  }
}

createDerictory();