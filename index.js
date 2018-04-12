// npm modules
const rp = require('request-promise');
const cherio = require('cherio');
// my functions
const { prompt, printData } = require('./bits/functions');
// command line table objects
const { userTable, skillsTable } = require('./bits/Tables');

// let's go
prompt('Treehouse Username: ', (userInput) => {
    const options = {
        url: `https://teamtreehouse.com/${userInput}`,
        transform: body => cherio.load(body)
    };
    // make request
    rp(options)
        .then( ($) => {

            const userName = $('#name').text();
            const totalPoints = $('.total-points > h1').text();
            const yearJoined = $('#member-since').text().slice(-4);

            // push data to Tables
            userTable.push([userName, yearJoined, totalPoints]);

            $('.topic-stat').each( (i, obj) => {
                let skill = cherio.load(obj);
                let skillName = skill('p').text();
                let skillPoints = skill('h3').text();
                if(skillPoints !== '0'){
                    skillsTable.push([skillName, skillPoints]);
                }
            });

            printData(userTable, skillsTable);

            // exit
            process.exit();

        })
        .catch((errrr) => {
            console.log(errrr)
        });
});
