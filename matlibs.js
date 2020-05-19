var inquirer = require("inquirer");

function MatLib(noun, verb, adjective) {
    this.noun = noun,
        this.verb = verb,
        this.adjective = adjective,
        this.Print = function () {
            console.log("I have 10 [noun]. I will [verb] them [adjective]");
        }
}

var questions = [{
        name: "noun",
        message: "Input a noun: "
    },
    {
        name: "verb",
        message: "Input a verb: "
    },
    {
        name: "adjective",
        message: "Input an adjective: "
    }
]

inquirer.prompt(questions).then(function (answers) {
    console.log(answers)
});
