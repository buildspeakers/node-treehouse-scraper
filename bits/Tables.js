const Table = require('cli-table');

let userTable = new Table({
    head: ['Username', 'Year Joined', 'Total Points'],
    colWidths: [15, 15, 15]
});

let skillsTable = new Table({
    head: ['Skill Area', 'Points Earned'],
    colWidths: [31, 15]
});

module.exports = { userTable, skillsTable }
