// Set Date
const TODAY = new Date();
const DD = String(TODAY.getDate()).padStart(2, '0');
const MM = String(TODAY.getMonth() + 1).padStart(2, '0');
const YYYY = TODAY.getFullYear();
const DATE = YYYY + MM + DD;

var welcome = {};

// --------------  things that vary from task to task --------------
welcome.task = {};
welcome.task.blurb = '<b>"Improving performances through attention and self-control training"</b> ' +
    'aims to explore the individual differences in response to mental training. ' +
    'We hope that this study will provide valuable information about the effects of training on the brain and behavior.';
welcome.task.time = '60 minutes';

// --------------  things that vary between ethics approvals --------------
welcome.ethics = {};
welcome.ethics.name = 'Improving performances through attention and self-control training';
welcome.ethics.invite = "You are invited to participate in a study to test individual differences in response to training in college students. " +
    "The study will help us learn the potential individual differences in training and performance";
welcome.ethics.description = 'We will schedule you for 10 separate mental training sessions using computerized working memory task. ' +
    'You will also be asked to complete brief questionnaires related to stress and mood. The total time for each visit will be less than 60 min each day';
welcome.ethics.risk = 'There is very little risk to you to participate in this study. ' +
    'You may be uncomfortable filling our information about stress and mood and mental training';


// ----------------------- function to start the task ------------------
welcome.run = function() {
    document.getElementById("welcome").innerHTML =
        welcome.section.header +
        welcome.section.consent
};

// ------------- actions to take at the end of each click ----------------
welcome.click = {};
welcome.click.start = function() {
    welcome.helpers.setDisplay('start', 'none');
    welcome.helpers.setDisplay('consent', '');
    welcome.helpers.setHeader(' ');
};

welcome.click.demographics = function() {
    // Get Day number
    daynumber = "practice";
    wmttype = "c-wmt";
    partID = "9999";
    welcome.helpers.setDisplay("demographics", "none");
    welcome.helpers.setDisplay("header", "none");
    jsPsych.data.addProperties({  // record the condition assignment in the jsPsych data
        ID: 9999,
        ID_DATE: partID + "_" + DATE,
        daynumber: daynumber,
        wmttype: wmttype,
    });
    // start the jsPsych experiment
    start_practice()
};


// ------------- html for the various sections ----------------
welcome.section = {};
welcome.section.header =
    '<!-- ####################### Heading ####################### -->' +
    '<a name="top"></a>' +
    '<h1 style="text-align:center; width:1200px" id="header" class="header">' +
    '   &nbsp; Working Memory Training</h1>';

welcome.section.consent =
    '	<!-- ####################### Consent ####################### -->' +
    '	<div class="consent" style="width:1000px">' +
    '		<!-- Text box for the splash page -->' +
    '		<div class="consent" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:right">' +
    '			<p align="center"><b>TEXAS TECH UNIVERSITY<br></b>' + welcome.ethics.name + '</p>' +
    '			<p><b>Purpose of Study</b></p>' +
    '			<p>' + welcome.ethics.invite + '</p>' +
    '			<p><b>Description of Study</b></p>' +
    '			<p>' + welcome.ethics.description + '</p>' +
    '			<p>' + welcome.ethics.risk + '</p>' +
    '			<p align="center">' +
    '           <input type="button" id="consentButton" class="consent jspsych-btn" value="Continue" onclick="welcome.click.demographics()" >' +
    '			</p>' +
    '		</div><br><br></div>';


// ----------------------- helper functions ------------------

welcome.helpers = {};
welcome.helpers.getRadioButton = function(name) { // get the value of a radio button
    var i, radios = document.getElementsByName(name);
    for (i = 0; i < radios.length; i = i + 1) {
        if (radios[i].checked) {
            return (radios[i].value);
        }
    }
    return ("NA");
};
welcome.helpers.setDisplay = function(theClass, theValue) { // toggle display status
    var i, classElements = document.getElementsByClassName(theClass);
    for (i = 0; i < classElements.length; i = i + 1) {
        classElements[i].style.display = theValue;
    }
};
welcome.helpers.setVisibility = function(theClass, theValue) { // toggle visibility
    var i, classElements = document.getElementsByClassName(theClass);
    for (i = 0; i < classElements.length; i = i + 1) {
        classElements[i].style.visibility = theValue;
    }
};
welcome.helpers.setHeader = function(theValue) { // alter the header
    document.getElementById("header").innerText = theValue;
};