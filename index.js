const Alexa = require('alexa-sdk');

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};


var rootURL = "<audio src = \"https://s3.amazonaws.com/musicianhelper/";
var endURL = ".mp3\"/>";
var notes = {
    cQ: rootURL + "C4Q" + endURL,
    dQ: rootURL + "D4Q" + endURL,
    eQ: rootURL + "E4Q" + endURL,
    fQ: rootURL + "F4Q" + endURL,
    gQ: rootURL + "G4Q" + endURL,
    aQ: rootURL + "A4Q" + endURL,
    bQ: rootURL + "B4Q" + endURL,
    hcQ: rootURL + "C5Q" + endURL,
    d: rootURL + "D4" + endURL,
    e: rootURL + "E4" + endURL,
    f: rootURL + "F4" + endURL,
    g: rootURL + "G4" + endURL,
    a: rootURL + "A4" + endURL,
    b: rootURL + "B4" + endURL,
    hc: rootURL + "C5" + endURL
};


const handlers = {

    'LaunchRequest': function (){
        //Give me a musical note to play. For example say:,
        this.emit(':ask', 'Give me a musical note to play. For example say: A, B, C, or D.', 'Choose a note.');
    },

    'AllNotes': function() {
        const audioFile = `${notes.cQ}`;
        this.emit(':ask', `${audioFile}`, 'How was that?');
    },

    'CNote': function() {
        const audioFile = `${notes.c}`;
        this.emit(':ask', `${audioFile}`, 'How was that?');
    },

    'DNote': function() {
        const audioFile = `${notes.d}`;
        this.emit(':ask', `${audioFile}`, 'How was that?');
    },

    'ENote': function() {
        const audioFile = `${notes.e}`;
        this.emit(':ask', `${audioFile}`, 'How was that?');
    },

    'FNote': function() {
        const audioFile = `${notes.f}`;
        this.emit(':ask', `${audioFile}`, 'How was that?');
    },

    'GNote': function() {
        const audioFile = `${notes.g}`;
        this.emit(':ask', `${audioFile}`, 'How was that?.');
    },

    'ANote': function() {
        const audioFile = `${notes.a}`;
        this.emit(':ask', `${audioFile}`, 'How was that?');
    },

    'BNote': function() {
        const audioFile = `${notes.b}`;
        this.emit(':ask', `${audioFile}`, 'How was that?');
    },

    'HCNote': function() {
        const audioFile = `${notes.hc}`;
        this.emit(':ask', `${audioFile}`, 'How was that?');
    },

    'Unhandled': function() {
        this.emit(':tell', 'Sorry, I don\'t understand.');
    }
};
