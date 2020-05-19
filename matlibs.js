var inquirer = require("inquirer");

function MatLib(noun, verb, adjective) {
        this.noun = noun,
        this.verb = verb,
        this.adjective = adjective,
        this.story = "I have 10 [noun]. I will [verb] them [adjective]"
    
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

var noun = [];
var verb = [];
var adjective = [];

inquirer.prompt(questions).then(function (answers) {
    noun.push(answers.noun);
    verb.push(answers.verb);
    adjective.push(answers.adjective);

    var matLib = new MatLib(answers.noun, answers.verb, answers.adjective);

    matLib.story = matLib.story.replace("[noun]", answers.noun);
    matLib.story = matLib.story.replace("[verb]", answers.verb);
    matLib.story = matLib.story.replace("[adjective]", answers.adjective);
    console.log(matLib.story);

});



