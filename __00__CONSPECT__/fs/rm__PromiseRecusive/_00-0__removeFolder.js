"use strict";

const fs = require('fs/promises');

async function removeDirectoryRecursively(path) {
    try {
        await fs.rm(path, { recursive: true, force: true });
        console.log(`Директория ${path} успешно удалена`);
    } catch (error) {
        console.error(`Ошибка при удалении директории: ${error.message}`);
    }
}

removeDirectoryRecursively('./testFolder');
