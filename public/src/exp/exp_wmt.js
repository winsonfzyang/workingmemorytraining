/* ************************************ */
/* Define experimental variables */
/* ************************************ */

// Set task variables
var sequence = [];
var wmt_fixation_stim = "<img class='center-fit' src='../img/WMT/cross.bmp'>"
var n_back_set = ["../img/WMT/1f.bmp", "../img/WMT/2f.bmp", "../img/WMT/3f.bmp", "../img/WMT/4f.bmp",
    "../img/WMT/5f.bmp", "../img/WMT/6f.bmp", "../img/WMT/7f.bmp", "../img/WMT/8f.bmp"];
var n_back_instr_set = ["../img/WMT/intro1.bmp", "../img/WMT/intro2.bmp", "../img/WMT/intro3.bmp", "../img/WMT/intro4.bmp"];

// Constants
const nbackarray14 = [0, 1, 2, 3];
const nbackarray13 = [0, 1, 2];
const PERCENTCORRECTPRACT = 0.40;
const PERCENTCORRECT = 0.30;
const FIXATION_DURATION = 1000; // 1000
const PICTURE_DURATION = 2000; // 2000
const FDBCK_DUR = 1000; // 1000
const BREAK_DUR = 50000; // 50 seconds break
const NTRIALS = 20; // 20 trials
const NTRIALSPRAC = 5; // five practice trials
const NTESTINGBLOCKS = 3; // No. of blocks for pre/post-training test
const NTRAININGBLOCKS = 8; // Need to change to 8
var HOWMANYBACK;
var SEQLENGTH;
var letter1;

function shuffle(array) {array.sort(() => Math.random() - 0.5)}
function permutator(inputArr) {
    results = [];

    function permute(arr, memo) {
        var cur, memo = memo || [];

        for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }

        return results;
    }

    return permute(inputArr);
}

// Set instructions helpers
var wmt_instrhelper = {};

wmt_instrhelper.page1a =
    "<div class='WMT_instr'>" +
    "<p><img src='../img/WMT/nbackkeys.bmp' alt='nbackkeys' width='800'></p>" +
    "</div>";
wmt_instrhelper.page1b =
    "<div class='WMT_instr'>" +
    "<p><img src='../img/WMT/instrsample.bmp' alt='instrsample' width='800'></p>" +
    "</div>";

wmt_instrhelper.page2_1back =
    "<div class='WMT_instr'>" +
    "<p><img src='../img/WMT/instr1back.bmp' alt='instr1back' width='800'></p>" +
    "</div>";

wmt_instrhelper.page2_2back =
    "<div class='WMT_instr'>" +
    "<p><img src='../img/WMT/instr2back.bmp' alt='instr2back' width='800'></p>" +
    "</div>";

wmt_instrhelper.page2_3back =
    "<div class='WMT_instr'>" +
    "<p><img src='../img/WMT/instr3back.bmp' alt='instr3back' width='800'></p>" +
    "</div>";

wmt_instrhelper.page2_4back =
    "<div class='WMT_instr'>" +
    "<p><img src='../img/WMT/instr4back.bmp' alt='instr4back' width='800'></p>" +
    "</div>";

wmt_instrhelper.page3 =
    "<div class='WMT_instr'>" +
    "<p><img src='../img/WMT/instrpg2.bmp' alt='instrpg2' width='800'></p>" +
    "</div>";

wmt_instrhelper.page4 =
    "<div class='WMT_instr'>" +
    "<p><img src='../img/WMT/instrpg3.bmp' alt='instrpg3' width='800'></p>" +
    "</div>";

wmt_instrhelper.conditional =
    "<div class='WMT_instr'>" +
    "<p>Great job and thank you for completing the practice block.</p>" +
    "<p>Would you like to practice the task one more time?" +
    "<p>Press <b style='color:#677be9 !important;'>y</b> to practice again. Press <b style='color:#d72965 !important;'>n</b> to skip the practice.</p>" +
    "</div>";

wmt_instrhelper.rwmt_transition =
    "<div class='WMT_instr'>" +
    "<p>Thank you for completing the practice block. We will now proceed to the experimental block.</p>" +
    "<p>This time, there will not be any feedback, so you will have to carry on until the task is finished. </p>" +
    "<p>The sequence for the experiment may not be in consecutive order, i.e., 1-2-3-4, but in different order, e.g., 2-4-1-3. </p>" +
    "<p>The experiment will start once you press the button.</p>" +
    "</div>";

wmt_instrhelper.cwmt_transition =
    "<div class='WMT_instr'>" +
    "<p>Thank you for completing the practice block. We will now proceed to the experimental block.</p>" +
    "<p>This time, there will not be any feedback, so you will have to carry on until the task is finished. </p>" +
    "<p>The experiment will start once you press the button.</p>" +
    "</div>";

wmt_instrhelper.break_block =
    "<div class='WMT_instr'>" +
    "<p class='continue_next'>Great job and thank you! You are now finished with this block." +
    "<br>We will have a short <b>" + BREAK_DUR/1000 + " seconds</b> break before we continue.</p>" +
    "</div>";

wmt_instrhelper.end_block =
    "<div class='WMT_instr'>" +
    "<p class='continue_next'>You may now continue with the next block.</p>" +
    "</div>";

/* Instructions */
var wmt_instr = {
    type: 'instructions',
    data: {
        exp_id: "WMT",
        trial_id: "instructions"
    },
    pages: [
        // Page 1
        wmt_instrhelper.page1a, wmt_instrhelper.page1b,
        wmt_instrhelper.page2_1back, wmt_instrhelper.page2_2back, wmt_instrhelper.page2_3back,  wmt_instrhelper.page2_4back,
        wmt_instrhelper.page3,
        wmt_instrhelper.page4,
    ],
    show_clickable_nav: true,
    show_page_number: true,
};
/* N-back Instructions */
function makeNbackInstr() {

    Nbackinstr = [];
    for (var i = 0; i <= 3; ++i) {
        N_back_instr_i = {
            type: 'html-keyboard-response',
            data: {
                exp_id: "WMT",
                phase: "nback-instr"
            },
            stimulus: "<p><img src=" + n_back_instr_set[i] + " width='800'></p>",
        };
        Nbackinstr[i] = N_back_instr_i;
    }
    return Nbackinstr
}
N_back_instr = makeNbackInstr();
/* Fixation */
var WMT_fixation = {
    type: "html-keyboard-response",
    data: {exp_id: "WMT", trial_id: "fixation", stimulus: "fixation"},
    stimulus: wmt_fixation_stim,
    choices: jsPsych.NO_KEYS,
    trial_duration: FIXATION_DURATION, // milliseconds
};
/* N Back sequence trials */
var n_back_trial = {
    on_start: function(trial) {
        HOWMANYBACK = jsPsych.timelineVariable('nback', true);
        phase = jsPsych.timelineVariable('phase', true);
        nback = jsPsych.timelineVariable('nback', true);
        mymatch = jsPsych.timelineVariable('match', true);

        if (sequence.length < HOWMANYBACK) {
            letter = jsPsych.randomization.sampleWithoutReplacement(n_back_set, 1)[0]
        } else {
            if (jsPsych.timelineVariable('match', true) == true) { // If match
                letter = sequence[sequence.length - HOWMANYBACK];
            } else { // Not match
                possible_letters = jsPsych.randomization.sampleWithoutReplacement(n_back_set, 2);
                if (possible_letters[0] != sequence[sequence.length - HOWMANYBACK]) {
                    letter = possible_letters[0];
                } else {
                    letter = possible_letters[1];
                }
            }
        }
        sequence.push(letter);
        letter1 = "<img class='center-fit' src=" + letter + ">";
        letter = letter.replace(/^.*[\\\/]/, '');
        trial.stimulus = letter1;
        trial.data = {
            exp_id: 'WMT',
            phase: phase,
            nback: nback,
            match: mymatch,
            stimulus: letter,
        };
    },
    type: 'html-keyboard-response',
    choices: ['A', 'L'],
    stimulus: "",
    data: "",
    trial_duration: PICTURE_DURATION,
    response_ends_trial: false,
    // post_trial_gap: POSTTRIAL_DURATION,
    on_finish: function (data) {
        if (data.match == true) {
            data.correct = (data.key_press === 65)
        }
        if (data.match == false) {
            data.correct = (data.key_press === 76)
        }
    }
}
/* feedback */
var feedback = {
    type: 'html-keyboard-response',
    data: {
        exp_id: "WMT",
        phase: "feedback",
    },
    stimulus: function() {
        check = JSON.parse(jsPsych.data.getLastTrialData().values()[0]["correct"]);

        if (check === true) {
            return "<div class='WMT_feedback' style='color:green;'>Correct!</div>";
        } else {
            return "<div class='WMT_feedback' style='color:red;'>Incorrect!</div>";
        }

    },
    choices: jsPsych.NO_KEYS,
    trial_duration: FDBCK_DUR,
    on_finish: function(data) {

    }
};
var overallfeedback = {
    type: 'html-keyboard-response',
    stimulus: function(){
        test_trials = jsPsych.data.get().values().filter(trial => trial.phase == 'practice');
        lastRow = test_trials[test_trials.length-1];

        test_trials = test_trials.filter(trial => trial.nback == lastRow["nback"]);

        HOWMANYBACK = lastRow["nback"]
        SEQLENGTH = test_trials.length;

        test_trials = test_trials.slice(HOWMANYBACK, SEQLENGTH);
        n_match = test_trials.filter(trial => trial.match == true).length;
        n_nonmatch = test_trials.filter(trial => trial.match == false).length;


        all_correct = test_trials.filter(trial => trial.correct == true).length;
        n_correct = test_trials.filter(trial => trial.match == true && trial.correct == true).length;
        false_alarms = test_trials.filter(trial => trial.match == false && trial.correct == false).length;

        percentage = all_correct/(SEQLENGTH-HOWMANYBACK) * 100;

        html =
            "<div class='WMT_feedback' style='width:900px;'>"+
            "<p>All done!</p>"+
            "<p>Accuracy: " + percentage + "%"+
            "<br>Hits: " + n_correct/n_match  * 100 + "% matching items."+
            "<br>Incorrect: " + false_alarms/n_nonmatch  * 100 + "% non-matching items.</p>" +
            "<p>Press any key to begin.</p>" +
            "</div>";

        return html;
    },
}
/* Transition */
var wmt_transition = {
    on_start: function(trial) {
        wmttype = jsPsych.data.get().values()[0].wmttype
        if (wmttype === "r-wmt"){transition_instructions = wmt_instrhelper.rwmt_transition}
        if (wmttype === "c-wmt"){transition_instructions = wmt_instrhelper.cwmt_transition}

        trial.pages = [
            transition_instructions,
        ];

        trial.data = {
            exp_id: "WMT",
            trial_id: "endpractice"
        };
    },


    type: 'instructions',
    data: '',
    pages: '',
    show_clickable_nav: true,
    show_page_number: true,
};
var wmt_blocktransition = {
    type: 'instructions',
    data: {exp_id: "WMT", trial_id: "blocktransition"},
    pages: [
        // Page 1
        wmt_instrhelper.end_block,
    ],
    show_clickable_nav: true,
    show_page_number: true,
};
var wmt_blockbreak = {
    type: 'html-keyboard-response',
    data: {exp_id: "WMT", trial_id: "blocktransition", stimulus: "break"},
    stimulus: wmt_instrhelper.break_block,
    choices: jsPsych.NO_KEYS,
    trial_duration: BREAK_DUR,
};
/* Sound */
const snd1 = new Audio("../sound/wmt_bgmusic.wav"); snd1.loop = true;
var wmt_bgmusic = {
    start: "",
    stop: ""};
wmt_bgmusic.start = {
    type: 'call-function',
    data: {
        exp_id: "WMT",
        trial_id: "bg-music-break-start"
    },
    func: function() {snd1.play()}
};
wmt_bgmusic.stop = {
    type: 'call-function',
    data: {
        exp_id: "WMT",
        trial_id: "bg-music-break-stop"
    },
    func: function() {snd1.pause(); snd1.currentTime = 0;}
};

// Make sequence
function makeNbackSeq(TYPE){
    n_back_sequences = [];
    for (var i = 0; i <= 3; ++i) {
        NBACK=i+1
        n_back_sequences[i] = createseqence(NBACK, TYPE);
    }

    return n_back_sequences
}
function createseqence(NBACK, TYPE){
    if (TYPE === 'practice'){
        SEQLENGTH = NTRIALSPRAC + NBACK;
        NMATCHTRIALS = PERCENTCORRECTPRACT*NTRIALSPRAC;
        NNONMATCHTRIALS = NTRIALSPRAC - NMATCHTRIALS;
    } else if (TYPE === 'exp') {
        SEQLENGTH = NTRIALS + NBACK;
        NMATCHTRIALS = PERCENTCORRECT*NTRIALS;
        NNONMATCHTRIALS = NTRIALS - NMATCHTRIALS;
    }

    FIRSTNTRIALS = NBACK


    firsttrials = Array(FIRSTNTRIALS).fill({match: false, nback: NBACK, seqlen: SEQLENGTH, phase: TYPE});
    matchtrials = Array(NMATCHTRIALS).fill({match: true, nback: NBACK, seqlen: SEQLENGTH, phase: TYPE});
    unmatchtrials = Array(NNONMATCHTRIALS).fill({match: false, nback: NBACK, seqlen: SEQLENGTH, phase: TYPE});

    n_back_trials = matchtrials.concat(unmatchtrials);

    shuffle(n_back_trials);

    n_back_trials = firsttrials.concat(n_back_trials);
    if (TYPE === 'practice'){
        n_back_sequence = {
            timeline: [WMT_fixation, n_back_trial, feedback],
            timeline_variables: n_back_trials,
        }

    } else if (TYPE === 'exp') {
        n_back_sequence = {
            timeline: [WMT_fixation, n_back_trial],
            timeline_variables: n_back_trials,
        }
    }

    return n_back_sequence
}
n_back_sequences_practice = makeNbackSeq('practice');
n_back_sequences_exp = makeNbackSeq('exp');

// Practice block
var wmt_prac_block = [];
wmt_prac_block.push(wmt_instr);
for (var i = 0; i <= 3; ++i) {
    wmt_prac_block.push(N_back_instr[i]);
    wmt_prac_block.push(n_back_sequences_practice[i]);
    wmt_prac_block.push(overallfeedback);
}

// define ending message trial
var ending_screen = {
    type: "html-button-response",
    data: {
        exp_id: "ending",
        trial_id: "ending"
    },
    choices: ['Click here to continue'],
    on_trial_start: function() { setTimeout(function() {setDisplay("jspsych-btn","")}, 1000)},
    stimulus: "Practice session has ended. Please notify the experimenter!",
};

// Transition and condition to practice again or proceeed to experiment
var pre_if_trial = {
    type: 'html-keyboard-response',
    stimulus: wmt_instrhelper.conditional,
    choices: ['y', 'n']
}
var if_node = {
    timeline: [...wmt_prac_block, pre_if_trial],
    loop_function: function(){
        check = jsPsych.data.getLastTrialData().values()[0];
        if(check.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('n')){
            return false; // skip repeat
        } else {
            return true;
        }
    }
};

var conditional_block = [];
conditional_block.push(if_node);
conditional_block.push(wmt_transition);

var conditional_practice = [];
conditional_practice.push(if_node);
conditional_practice.push(ending_screen);


// Real WMT blocks
function wmtblock(WMTTYPE, TESTTYPE, NBACKARRAY){
    exp_block = [];
    allpermutes = permutator(NBACKARRAY);
    possiblepermutes = allpermutes.length;

    if (WMTTYPE === "c-wmt"){
        allbackarray = Array(possiblepermutes).fill(NBACKARRAY)
    } else if (WMTTYPE === "r-wmt"){
        allbackarray = permutator(NBACKARRAY);
    }

    if (TESTTYPE === "training"){NBLOCKS = NTRAININGBLOCKS}
    if (TESTTYPE === "testing"){NBLOCKS = NTESTINGBLOCKS}


    for (var x = 1; x <= NBLOCKS; ++x) {

        nbackindex = Math.floor(Math.random() * allbackarray .length)
        targetindex = allbackarray[nbackindex]
        allbackarray.splice(nbackindex, 1);

        for (var i = 0; i <= (NBACKARRAY.length -1); ++i) {
            nbacktest_i = targetindex[i]
            exp_block.push(N_back_instr[nbacktest_i]);
            exp_block.push(n_back_sequences_exp[nbacktest_i]);
        }
        // inter-
        if (TESTTYPE === "training"){
            exp_block.push(wmt_bgmusic.start);
            exp_block.push(wmt_blockbreak);
            exp_block.push(wmt_bgmusic.stop);
        }
        exp_block.push(wmt_blocktransition);
    }
    return exp_block
}

rwmt_exp_block = wmtblock('r-wmt', 'training', nbackarray14)
cwmt_exp_block = wmtblock('c-wmt', 'training', nbackarray14)

// Pre-Test block
rwmt_test_block = wmtblock('r-wmt', 'testing', nbackarray13)
cwmt_test_block = wmtblock('c-wmt', 'testing', nbackarray13)
