// exec method lets us run commands

const { exec } = require('child_process');

const args = process.argv;
console.log('ARGS', args);

args.splice(0, 2);
const str = args.join(' ');

exec('git add .', (addError, addStrout, addSdtin) => {
  if (addError) {
    console.log('Git add error', addError);
    return;
  }
  exec(`git commit -m "${str}"`, (commitError, commitStrout, commitSdtin) => {
    if (commitError) {
      console.log('Commit Error', commitError);
      return;
    }
    exec(`git push origin master`, (pushError, pushStrout, pushSdtin) => {
      if (pushError) {
        console.log('Push Error:', pushError);
        return;
      }
      console.log('Successfully pushed code :) ');
    });
  });
});
