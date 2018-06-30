// const Person = require('./Person');
const Person = require('./Person/firstProto');    //второй файл
// const Person = require('./Person/secondProto');   //третий файл

const jon = new Person('Jon', 26);

console.info(jon.name, jon.age);

//Метод был прописан прямо в классе и он конечно работает
jon.methodInsideClass();

//Метод был прописан в том же файле и он тоже работает
jon.methodInsideFile();

//Метод был прописан в другом файле, и он работает токо если произвести импорт из второго файла
jon.methodFirstProto();

//Метод был прописан в другом файле, и он работает токо если произвести импорт из третьего файла
//При этом перестает работать предыдущий метод.
// jon.methodSecondProto();


//Т.е чтобы вклинивать свежие методы в класс в разных файлах, а не лепить 100500 строк в одном и том же файле, нужно делать такую цепочку импортов и экспортов, и при добавлении каждого нового файла нужно опять все менять.
