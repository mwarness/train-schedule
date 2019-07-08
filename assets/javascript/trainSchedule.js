
// object for configuing firebase (need to figure out the specifics)

var config = {
    apiKey: "AIzaSyAR2X6iPzbdWIqmsngcoN5_6TGs6nsVtZ4",
    authDomain: "trainschedule-hw7-2019.firebaseio.com",
    databaseURL: "https://trainschedule-hw7-2019.firebaseio.com/",
    storageBucket: "time-sheet-55009.appspot.com"
};

firebase.initializeApp(config);

var database = firebase.database();
//  buttons from input
$("#submit-button").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDest = $("#destination-input").val().trim();
    var trainNext = $("#train-time-input").val().trim();
    var trainFreq = $("#frequency-input").val().trim();

    console.log(trainName);
    console.log(trainDest);
    console.log(trainNext);
    console.log(trainFreq);

    var currentTime = moment().format("HH:mm");
    console.log(currentTime);

    // var minutesAway= moment(currentTime -= trainNext).format("HH:mm");
    var minutesAway = trainNext -= moment().fromNow(currentTime); ("HH:mm");
    console.log(minutesAway);

    //grab user input for first train time and converts into military time with moment
    trainNext = moment($("#train-time-input").val().trim(), "HH:mm").format("HH:mm");

    //grab user input for train freq and converts into mins with moment
    trainFreq = moment($("#frequency-input").val().trim(), "m").format("m");

    //variable to convert first train time
    var convertFirstTrain = moment(trainNext, "hh:mm").subtract(1, "years");
    console.log(convertFirstTrain);

    // Difference between the times
    var timeDifference = moment().diff(moment(convertFirstTrain), "minutes");
    console.log(timeDifference);

    // Time difference
    var timeRemainder = timeDifference % trainFreq;
    console.log(timeRemainder);

    // Mins till next train
    var minTillNext = trainFreq - timeRemainder;
    console.log(minTillNext);

    //var for next train time
    var nextTrainTime = moment().add(minTillNext, "minutes").format("HH:mm ");
    console.log(nextTrainTime);

    // creates object for train data
    var searchTrain = {
        name: trainName,
        destination: trainDest,
        arrival: trainNext,
        frequency: trainFreq,
        minutesTillNextTrain: minTillNext,
        nextTrainArrival: nextTrainTime
    };



    // Uploads train data to the database
    database.ref().push(searchTrain)

});