import * as path from 'path';
import * as fs from 'fs';

// Exemplo de uso do path.basename
const basenameExample = path.basename('/foo/bar/baz/asdf/quux.html');
console.log(`path.basename: ${basenameExample}`);

// Exemplo de uso do path.dirname
const dirnameExample = path.dirname('/foo/bar/baz/asdf/quux');
console.log(`path.dirname: ${dirnameExample}`);

// Exemplo de uso do path.extname
const extnameExample = path.extname('/foo/bar/baz/asdf/quux.html');
console.log(`path.extname: ${extnameExample}`);

// Exemplo de uso do path.join
const joinExample = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(`path.join: ${joinExample}`);

// Exemplo de uso do path.resolve
const resolveExample = path.resolve('/foo/bar', './baz');
console.log(`path.resolve: ${resolveExample}`);

// Verificar se o arquivo 'example.txt' existe, se não existir, criar o arquivo com conteúdo inicial
const exampleFilePath = path.join(__dirname, 'example.txt');

fs.access(exampleFilePath, fs.constants.F_OK, (err) => {
  if (err) {
    // O arquivo não existe, criar o arquivo
    fs.writeFile(exampleFilePath, 'Conteúdo inicial do arquivo example.txt.', (err) => {
      if (err) throw err;
      console.log('fs.writeFile: example.txt foi criado com sucesso!');
      // Ler o conteúdo do arquivo recém-criado
      fs.readFile(exampleFilePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(`fs.readFile: ${data}`);
      });
    });
  } else {
    // O arquivo existe, lê-lo
    fs.readFile(exampleFilePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(`fs.readFile: ${data}`);
    });
  }
});

// Exemplo de uso do fs.writeFile
fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('fs.writeFile: The file has been saved!');
});

// Exemplo de uso do fs.appendFile
fs.appendFile('message.txt', ' Appended text.', (err) => {
  if (err) throw err;
  console.log('fs.appendFile: The text has been appended!');
});

// Exemplo de uso do fs.unlink com tratamento de erro
fs.unlink('unwanted.txt', (err) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.log('fs.unlink: O arquivo unwanted.txt não existe.');
    } else {
      throw err;
    }
  } else {
    console.log('fs.unlink: File deleted!');
  }
});

// Exemplo de uso do fs.rename com tratamento de erro
fs.rename('oldname.txt', 'newname.txt', (err) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.log('fs.rename: O arquivo oldname.txt não existe.');
    } else {
      throw err;
    }
  } else {
    console.log('fs.rename: Rename complete!');
  }
});

