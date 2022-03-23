const fs = require('fs');

const table = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Multiply = async (number = 1, listar = false) => {
  let title = '';
  try {
    let result = '';
    result += `----- Table of ${number} -----\n`;
    table.map((tNumber) => (result += `${tNumber * number}\n`));
    result += `-----            -----\n`;
    listar && console.log(result);
    title = `table of ${number}`;
    fs.writeFileSync(title, result);
  } catch (error) {
    throw error;
  }
  return title;
};

module.exports = {
  Multiply,
};
