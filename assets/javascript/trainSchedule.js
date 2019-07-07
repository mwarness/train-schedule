
// object for configuing firebase (need to figure out the specifics)

var config = {
    apiKey: "AIzaSyAR2X6iPzbdWIqmsngcoN5_6TGs6nsVtZ4",
    authDomain: "trainschedule-hw7-2019.firebaseio.com",
    databaseURL: "https://trainschedule-hw7-2019.firebaseio.com/",
    storageBucket: "time-sheet-55009.appspot.com"
};

// firebase.initializeApp(config);

var database = firebase.database();
//  buttons from input
$("#submit-button").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDest = $("#destination-input").val().trim();
    var trainNext = $("#train-time-input").val().trim(); ("HH:mm");
    var trainFreq = moment($("#frequency-input").val().trim());
    // console.log(trainName);
    // console.log(trainDest);
    // console.log(trainNext);
    // console.log(trainFreq);
    var currentTime = moment().format("HH:mm");
    console.log(currentTime);
    // var minutesAway= moment(currentTime -= trainNext).format("HH:mm");
     var minutesAway = moment().endOf(trainNext).fromNow(currentTime).format("HH:mm");
    console.log(minutesAway);
   
    // Creates local "temporary" object for holding employee data
    var searchTrain = {
        name: trainName,
        destination: trainDest,
        arrival: trainNext,
        frequency: trainFreq
    };
    

    // Uploads train data to the database
    // database.ref().push(searchTrain)

});