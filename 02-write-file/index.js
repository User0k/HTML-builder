const path = require('path');
const fs = require('fs');
const { stdin: input, stdout: output } = require('process');
const readline = require('readline');
const rl = readline.createInterface({ input, output });
const file = fs.createWriteStream(path.join(__dirname, 'text2.txt'));
const bye = 'Сеанс завершён.';

console.log('Пожалуйста, введите данные которые хотите записать в файл.');

rl.on('line', (answer) => {
  if (answer === 'exit') {
    console.log(bye);
    rl.close();
  } else {
    file.write(answer);
  }
});

rl.on('SIGINT', () => {
  console.log(bye);
  rl.close();
});
