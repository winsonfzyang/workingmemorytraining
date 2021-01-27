// Import and set up questionnaire labels
function populateQs(start, end, qs, qs_options){
    diff = end-start;
    var Qs = [];
    for (var i=0; i<=diff; i++) {
        Qs[i] = {
            prompt: "<p class='q_para'>" + qs[0][i+start] + '. ' + qs[1][i+start] + "</p>",
            name: qs[0][i+start],
            labels: qs_options,
            required: true,
            horizontal: true,};
    }
    return Qs
};
function populateQIDs(start, end, qs, qs_options){
    diff = end-start;
    var Qs = [];
    for (var i=0; i<=diff; i++) {
        Qs[i] = {
            prompt: "<p class='q_para'>" + qs[0][i+start] + '. ' + qs[1][i+start] + "</p>",
            name: qs[0][i+start],
            labels: qs_options[i+start],
            required: false,
            horizontal: true,};
    }
    return Qs
};

// AES
var AES_Qs1 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "aes_qs_pg1"
    },
    preamble: "<p class='q_title'>Please rate each of the following statements on a scale of 1 ('strongly agree') to 5 ('strongly disagree') regarding the breath-counting task you just completed. " +
        "Please do not leave any items blank</p>",
    questions: populateQs(1, 9, aes_csv, aes_options),
    scale_width: 700,
};
var AES_Qs2 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "aes_qs_pg2"
    },
    preamble: "<p class='q_title'>Please rate each of the following statements on a scale of 1 ('strongly agree') to 5 ('strongly disagree') regarding the breath-counting task you just completed. " +
        "Please do not leave any items blank</p>",
    questions: populateQs(10, 18, aes_csv, aes_options),
    scale_width: 700,
};
var AES_Qs3 = {
    type: 'survey-likert',
    data: {
        exp_id: "questionnaire",
        trial_id: "aes_qs_pg3"
    },
    preamble: "<p class='q_title'>Please rate each of the following statements on a scale of 1 ('strongly agree') to 5 ('strongly disagree') regarding the breath-counting task you just completed. " +
        "Please do not leave any items blank</p>",
    questions: populateQs(19, 26, aes_csv, aes_options),
    scale_width: 700,
};


var aes_block = [];
aes_block.push(AES_Qs1);
aes_block.push(AES_Qs2);
aes_block.push(AES_Qs3);
