const path = require('path');

// Пример 1: Нормализация пути
const normalizedPath = path.resolve('foo', 'bar', 'baz');
console.log(normalizedPath); // Например, '/current/working/directory/foo/bar/baz'

// Пример 2: Использование абсолютного пути
const absolutePath = path.resolve('/foo', 'bar', 'baz');
console.log(absolutePath); // Вывод: '/foo/bar/baz'

// Пример 3: Использование относительных путей
const relativePath = path.resolve('foo', '/bar', 'baz');
console.log(relativePath); // Вывод: '/bar/baz' (игнорируя 'foo')

// Пример 4: Путь с '..'
const upPath = path.resolve('foo', '..', 'bar');
console.log(upPath); // Выводит нормализованный путь, поднимающийся на уровень выше
