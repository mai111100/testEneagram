function displayQuiz(isDetailedVersion = false) {
    const simpleQuestions = [
        {
            question: "I have been more:",
            choices: ["Focused on goals and success", "Supportive of others and helpful"],
            weights: [
                { achieverScore: +1, helperScore: 0 },
                { helperScore: +1, achieverScore: 0 }
            ]
        },
        {
            question: "In stressful situations, I:",
            choices: ["Seek control and authority", "Avoid conflict and maintain peace"],
            weights: [
                { challengerScore: +1, peacemakerScore: 0 },
                { peacemakerScore: +1, challengerScore: 0 }
            ]
        },
        {
            question: "I prefer to:",
            choices: ["Be practical and down-to-earth", "Be imaginative and think creatively"],
            weights: [
                { reformerScore: +1, individualistScore: 0 },
                { individualistScore: +1, reformerScore: 0 }
            ]
        },
        {
            question: "When it comes to my emotions:",
            choices: ["I try to control or suppress them", "I feel the need to express them"],
            weights: [
                { challengerScore: +1, individualistScore: 0 },
                { individualistScore: +1, challengerScore: 0 }
            ]
        },
        {
            question: "In my relationships, I tend to:",
            choices: ["Be independent and self-sufficient", "Be caring and empathetic"],
            weights: [
                { investigatorScore: +1, helperScore: 0 },
                { helperScore: +1, investigatorScore: 0 }
            ]
        },
        {
            question: "I value:",
            choices: ["Stability and security", "Adventure and spontaneity"],
            weights: [
                { loyalistScore: +1, enthusiastScore: 0 },
                { enthusiastScore: +1, loyalistScore: 0 }
            ]
        },
        {
            question: "I fear:",
            choices: ["Being unloved or unwanted", "Being incompetent or incapable"],
            weights: [
                { helperScore: +1, reformerScore: 0 },
                { reformerScore: +1, helperScore: 0 }
            ]
        },
        {
            question: "I tend to:",
            choices: ["Make decisions logically", "Follow my feelings"],
            weights: [
                { investigatorScore: +1, individualistScore: 0 },
                { individualistScore: +1, investigatorScore: 0 }
            ]
        },
        {
            question: "At work, I:",
            choices: ["Focus on task completion and organization", "Prefer creativity and flexibility"],
            weights: [
                { reformerScore: +1, enthusiastScore: 0 },
                { enthusiastScore: +1, reformerScore: 0 }
            ]
        },
        {
            question: "My main motivation is:",
            choices: ["To be successful and admired", "To feel secure and at peace"],
            weights: [
                { achieverScore: +1, peacemakerScore: 0 },
                { peacemakerScore: +1, achieverScore: 0 }
            ]
        },
        {
            question: "In social settings, I:",
            choices: ["Blend in and go with the flow", "Stand out and take charge"],
            weights: [
                { peacemakerScore: +1, challengerScore: 0 },
                { challengerScore: +1, peacemakerScore: 0 }
            ]
        },
        {
            question: "I am usually:",
            choices: ["Realistic and pragmatic", "Optimistic and forward-thinking"],
            weights: [
                { investigatorScore: +1, enthusiastScore: 0 },
                { enthusiastScore: +1, investigatorScore: 0 }
            ]
        },
        {
            question: "I handle criticism by:",
            choices: ["Becoming defensive and justifying myself", "Trying to learn from it and improve"],
            weights: [
                { loyalistScore: +1, reformerScore: 0 },
                { reformerScore: +1, loyalistScore: 0 }
            ]
        },
        {
            question: "I tend to be:",
            choices: ["Bold and assertive", "Easy-going and conflict-averse"],
            weights: [
                { challengerScore: +1, peacemakerScore: 0 },
                { peacemakerScore: +1, challengerScore: 0 }
            ]
        },
        {
            question: "I focus on:",
            choices: ["The big picture and long-term goals", "The details and immediate tasks"],
            weights: [
                { achieverScore: +1, reformerScore: 0 },
                { reformerScore: +1, achieverScore: 0 }
            ]
        },
        {
            question: "In conflict, I:",
            choices: ["Stand my ground and assert my needs", "Seek to keep the peace"],
            weights: [
                { challengerScore: +1, peacemakerScore: 0 },
                { peacemakerScore: +1, challengerScore: 0 }
            ]
        },
        {
            question: "My strength is:",
            choices: ["Being logical and insightful", "Being compassionate and nurturing"],
            weights: [
                { investigatorScore: +1, helperScore: 0 },
                { helperScore: +1, investigatorScore: 0 }
            ]
        },
        {
            question: "I prefer:",
            choices: ["Routine and structure", "Flexibility and new experiences"],
            weights: [
                { loyalistScore: +1, enthusiastScore: 0 },
                { enthusiastScore: +1, loyalistScore: 0 }
            ]
        }
    ];

    const detailedQuestions = [
        {
            question: "I am more:",
            choices: ["Reserved and introspective", "Outgoing and sociable"],
            weights: [
                { investigatorScore: +1, enthusiastScore: 0 },
                { enthusiastScore: +1, investigatorScore: 0 }
            ]
        },
        {
            question: "When faced with a new challenge, I:",
            choices: ["Think of the risks and potential problems", "Embrace it with enthusiasm"],
            weights: [
                { loyalistScore: +1, enthusiastScore: 0 },
                { enthusiastScore: +1, loyalistScore: 0 }
            ]
        },
        {
            question: "My style of problem-solving is:",
            choices: ["Analytical and systematic", "Creative and spontaneous"],
            weights: [
                { investigatorScore: +1, individualistScore: 0 },
                { individualistScore: +1, investigatorScore: 0 }
            ]
        },
        {
            question: "When working on a project, I:",
            choices: ["Prefer to plan everything in advance", "Like to dive in and figure things out as I go"],
            weights: [
                { reformerScore: +1, enthusiastScore: 0 },
                { enthusiastScore: +1, reformerScore: 0 }
            ]
        },
        {
            question: "I feel most comfortable when:",
            choices: ["I have control over the situation", "Things are peaceful and harmonious"],
            weights: [
                { challengerScore: +1, peacemakerScore: 0 },
                { peacemakerScore: +1, challengerScore: 0 }
            ]
        },
        {
            question: "I tend to:",
            choices: ["Be skeptical and cautious", "Trusting and optimistic"],
            weights: [
                { loyalistScore: +1, enthusiastScore: 0 },
                { enthusiastScore: +1, loyalistScore: 0 }
            ]
        },
        {
            question: "In leadership roles, I:",
            choices: ["Take charge and make decisions", "Encourage collaboration and consensus"],
            weights: [
                { challengerScore: +1, peacemakerScore: 0 },
                { peacemakerScore: +1, challengerScore: 0 }
            ]
        },
        {
            question: "I get energized by:",
            choices: ["Solving complex problems", "Engaging with people socially"],
            weights: [
                { investigatorScore: +1, enthusiastScore: 0 },
                { enthusiastScore: +1, investigatorScore: 0 }
            ]
        },
        {
            question: "When others depend on me, I:",
            choices: ["Feel responsible and take charge", "Feel appreciated and valued"],
            weights: [
                { reformerScore: +1, helperScore: 0 },
                { helperScore: +1, reformerScore: 0 }
            ]
        },
        {
            question: "My biggest challenge is:",
            choices: ["Being too critical or perfectionistic", "Being too emotional or reactive"],
            weights: [
                { reformerScore: +1, individualistScore: 0 },
                { individualistScore: +1, reformerScore: 0 }
            ]
        },
        {
            question: "When I’m stressed, I:",
            choices: ["Take action and confront the issue", "Withdraw and avoid conflict"],
            weights: [
                { challengerScore: +1, peacemakerScore: 0 },
                { peacemakerScore: +1, challengerScore: 0 }
            ]
        },
        {
            question: "I tend to be:",
            choices: ["Very focused and intense", "More laid-back and easy-going"],
            weights: [
                { reformerScore: +1, peacemakerScore: 0 },
                { peacemakerScore: +1, reformerScore: 0 }
            ]
        },
        {
            question: "In my free time, I:",
            choices: ["Prefer intellectual or creative pursuits", "Enjoy socializing and relaxing"],
            weights: [
                { investigatorScore: +1, enthusiastScore: 0 },
                { enthusiastScore: +1, investigatorScore: 0 }
            ]
        },
        {
            question: "I usually:",
            choices: ["Prefer to be alone and recharge", "Get energy from being around others"],
            weights: [
                { investigatorScore: +1, enthusiastScore: 0 },
                { enthusiastScore: +1, investigatorScore: 0 }
            ]
        },
        {
            question: "I tend to be:",
            choices: ["More goal-oriented than relationship-oriented", "More relationship-oriented than goal-oriented"],
            weights: [
                { achieverScore: +1, helperScore: 0 },
                { helperScore: +1, achieverScore: 0 }
            ]
        },
        {
            question: "When things go wrong, I:",
            choices: ["Seek to fix the situation", "Try to maintain my inner peace"],
            weights: [
                { reformerScore: +1, peacemakerScore: 0 },
                { peacemakerScore: +1, reformerScore: 0 }
            ]
        },
        {
            question: "I often find myself:",
            choices: ["Worrying about the future", "Focused on enjoying the present"],
            weights: [
                { loyalistScore: +1, enthusiastScore: 0 },
                { enthusiastScore: +1, loyalistScore: 0 }
            ]
        },
        {
            question: "I am more motivated by:",
            choices: ["Achievement and success", "Feeling secure and appreciated"],
            weights: [
                { achieverScore: +1, peacemakerScore: 0 },
                { peacemakerScore: +1, achieverScore: 0 }
            ]
        }
    ];

    const questions = isDetailedVersion ? [...simpleQuestions, ...detailedQuestions] : simpleQuestions;

    // Variables for personality scores
    let reformerScore = 0, helperScore = 0, achieverScore = 0, individualistScore = 0;
    let investigatorScore = 0, loyalistScore = 0, enthusiastScore = 0, challengerScore = 0, peacemakerScore = 0;

    let currentQuestionIndex = 0;

    // Function to display the current question and choices
    function displayCurrentQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById('question');
        const choiceContainers = document.getElementById('choices');
        choiceContainers.innerHTML = ''; // Clear previous choices

        questionElement.textContent = currentQuestion.question;
        currentQuestion.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('choices');
            button.addEventListener('click', () => handleChoiceClick(index));
            choiceContainers.appendChild(button);
        });
    }

    // Function to handle the user's choice and update the score
    function handleChoiceClick(choiceIndex) {
        const currentQuestion = questions[currentQuestionIndex];
        const selectedChoiceWeight = currentQuestion.weights[choiceIndex];

        // Update scores based on the selected choice
        reformerScore += selectedChoiceWeight.reformerScore || 0;
        helperScore += selectedChoiceWeight.helperScore || 0;
        achieverScore += selectedChoiceWeight.achieverScore || 0;
        individualistScore += selectedChoiceWeight.individualistScore || 0;
        investigatorScore += selectedChoiceWeight.investigatorScore || 0;
        loyalistScore += selectedChoiceWeight.loyalistScore || 0;
        enthusiastScore += selectedChoiceWeight.enthusiastScore || 0;
        challengerScore += selectedChoiceWeight.challengerScore || 0;
        peacemakerScore += selectedChoiceWeight.peacemakerScore || 0;

        // Move to the next question
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayCurrentQuestion();
        } else {
            calculateEnneagramType();
        }
    }

    // Function to calculate and display the Enneagram type
    function calculateEnneagramType() {
        const results = [
            { type: "Reformer", score: reformerScore },
            { type: "Helper", score: helperScore },
            { type: "Achiever", score: achieverScore },
            { type: "Individualist", score: individualistScore },
            { type: "Investigator", score: investigatorScore },
            { type: "Loyalist", score: loyalistScore },
            { type: "Enthusiast", score: enthusiastScore },
            { type: "Challenger", score: challengerScore },
            { type: "Peacemaker", score: peacemakerScore }
        ];

        results.sort((a, b) => b.score - a.score);

        const topType = results[0].type;
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Your dominant Enneagram type is: ${topType}`;
    }

    // Start the quiz by displaying the first question
    displayCurrentQuestion();
}

// Example usage:
// Start the quiz with the simple version
displayQuiz();

// To start the detailed version, pass `true` to the function:
// displayQuiz(true);
