
console.log(`Текущий каталог: ${process.cwd()}`);

process.chdir(__dirname);

console.log(`Новый текущий каталог: ${process.cwd()}`);