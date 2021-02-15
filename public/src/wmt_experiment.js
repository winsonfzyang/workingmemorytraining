/* **************************************** */
/* Set up experiment procedure and timeline */
/* **************************************** */

// Set up Training Save functions
function CloseTrainingSave() {
    $.ajax({
        type: "POST",
        url: "/wmt-training-data",
        data: JSON.stringify(jsPsych.data.get().values()),
        contentType: "application/json"
    })
    // jsPsych.data.displayData()
}
function FinishTrainingSave() {
    $.ajax({
        type: "POST",
        url: "/wmt-training-data",
        data: JSON.stringify(jsPsych.data.get().values()),
        contentType: "application/json"
    })
        .done(function() {
            window.location.href = "finish";
        })
        .fail(function() {
            alert("Problem occurred while writing data to Dropbox. " +
                "Data will be saved to your computer. " +
                "Please contact the experimenter regarding this issue!");
            var csv = jsPsych.data.get().csv();
            var filename = jsPsych.data.get().values()[0].ID_DATE + "_day_" + jsPsych.data.get().values()[0].daynumber + ".csv";
            downloadCSV(csv, filename);
            window.location.href = "finish";
        });
    // jsPsych.data.displayData()
}


// Set up Testing Save functions
function CloseTestingSave() {
    $.ajax({
        type: "POST",
        url: "/wmt-testing-data",
        data: JSON.stringify(jsPsych.data.get().values()),
        contentType: "application/json"
    })
    // jsPsych.data.displayData()
}
function FinishTestingSave() {
    $.ajax({
        type: "POST",
        url: "/wmt-testing-data",
        data: JSON.stringify(jsPsych.data.get().values()),
        contentType: "application/json"
    })
        .done(function() {
            window.location.href = "finish";
        })
        .fail(function() {
            alert("Problem occurred while writing data to Dropbox. " +
                "Data will be saved to your computer. " +
                "Please contact the experimenter regarding this issue!");
            var csv = jsPsych.data.get().csv();
            var filename = jsPsych.data.get().values()[0].ID_DATE + "_day_" + jsPsych.data.get().values()[0].daynumber + ".csv";
            downloadCSV(csv, filename);
            window.location.href = "finish";
        });
    // jsPsych.data.displayData()
}

// define welcome message trial
var welcome_screen = {
    type: "html-button-response",
    data: {
        exp_id: "welcome",
        trial_id: "welcome"
    },
    choices: ['Click here to continue'],
    on_trial_start: function() { setTimeout(function() {setDisplay("jspsych-btn","")}, 1000)},
    stimulus: "Welcome to the experiment.",
};
welcome_block = [];
welcome_block.push(welcome_screen);


// Set up full screen mode
// bc_exp.push({type: 'fullscreen', fullscreen_mode: true}); /* enter fullscreen mode */
// bc_exp.push({type: 'fullscreen', fullscreen_mode: false }); /* exit fullscreen mode */

// For Training
function start_CWMT_Day() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: true,
        on_interaction_data_update: function(data) {
            var trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [
            ...welcome_block,
            ...cwmt_exp_block,
            ...aes_block

        ],

        /* on_close currently not working */
        on_close: function() {
            CloseTrainingSave()
        },
        on_finish: function() {
            FinishTrainingSave()
        }
    });
}
function start_RWMT_Day() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: true,
        on_interaction_data_update: function(data) {
            var trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [
            ...welcome_block,
            ...rwmt_exp_block,
            ...aes_block

        ],

        /* on_close currently not working */
        on_close: function() {
            CloseTrainingSave()
        },
        on_finish: function() {
            FinishTrainingSave()
        }
    });
}

// For Pre-Testing
function start_RWMT_PreTest() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: false,
        on_interaction_data_update: function(data) {
            trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [
            ...welcome_block,
            ...rwmt_test_block,
            ...stroop_block
        ],

        /* on_close currently not working */
        on_close: function() {
            CloseTestingSave()
        },
        on_finish: function() {
            FinishTestingSave()
        }
    });
}
function start_CWMT_PreTest() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: false,
        on_interaction_data_update: function(data) {
            trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [
            ...welcome_block,
            ...cwmt_test_block,
            ...stroop_block
        ],

        /* on_close currently not working */
        on_close: function() {
            CloseTestingSave()
        },
        on_finish: function() {
            FinishTestingSave()
        }
    });
}

// For Post-Testing
function start_RWMT_PostTest() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: false,
        on_interaction_data_update: function(data) {
            trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [
            ...welcome_block,
            ...rwmt_test_block,
            ...stroop_block
        ],

        /* on_close currently not working */
        on_close: function() {
            CloseTestingSave()
        },
        on_finish: function() {
            FinishTestingSave()
        }
    });
}
function start_CWMT_PostTest() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: false,
        on_interaction_data_update: function(data) {
            trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [
            ...welcome_block,
            ...cwmt_test_block,
            ...stroop_block
        ],

        /* on_close currently not working */
        on_close: function() {
            CloseTestingSave()
        },
        on_finish: function() {
            FinishTestingSave()
        }
    });
}

// For fMRI-Practice
function start_practice() {

    /* start the experiment */
    jsPsych.init({
        show_progress_bar: false,
        on_interaction_data_update: function(data) {
            trial = jsPsych.currentTrial();
            trial.data.screen_focus = data.event;
        },

        timeline: [
            ...welcome_block,
            ...conditional_practice
        ],

    });
}