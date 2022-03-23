const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { Multiply } = require('./helpers/multiply.js');
const argv = require('yargs')
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
    },
    l: {
      alias: 'listar',
      type: 'boolean',
      default: false,
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base debe de ser un numero';
    }
    return true;
  }).argv;

//Traer las variables sobre la linea de comandos
// const [, , base = 'base=5'] = process.argv;
// const [, number] = base.split('=');
// console.log(number);
// readline.close();

// console.clear();
// readline.question('What multiply table do you wanna ?\n', (ans) => {
//   Multiply(ans)
//     .then((fileName) => console.log(`${fileName} creado`))
//     .catch((error) => console.log(error));
//   readline.close();
// });

// // console.log(process.argv);
const { b, l } = argv;
// console.log(`La base es ${b}`); // Crea un objeto en el cual contiene los parametros que se les pasa en la console

Multiply(b, l)
  .then((fileName) => console.log(`${fileName} creado`))
  .catch((error) => console.log(error));
