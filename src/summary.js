import chalk from 'chalk';

const sectionHeader = chalk.red.bold.underline;
const subHeader = chalk.green.bold.underline;
const items = chalk.blue;

export default function(actionsPerformed) {
  if (actionsPerformed.teamsCreated.length > 0) {
    console.log('\n' + sectionHeader('Teams created:') +' ' + actionsPerformed.teamsCreated.join(', '));
  }

  if (actionsPerformed.teamsSkipped.length > 0) {
    console.log('\n' + sectionHeader('Teams skipped(because they already exist):') + ' ' + actionsPerformed.teamsSkipped.join(', '));
  }

  Object.keys(actionsPerformed.membersCopied).map(teamName => {
    console.log('\n' + subHeader('Team name:') + ' ' + teamName);
    console.log(items('Members: ' ) + ' ' + actionsPerformed.membersCopied[teamName].join(', ') +'\n');
  });
}
