function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}

function printData(mainTable, skillsTable){
    console.log(mainTable.toString());
    console.log(skillsTable.toString());
}

module.exports = {
    prompt: prompt,
    printData: printData
}
