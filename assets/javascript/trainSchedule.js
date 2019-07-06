
// object for configuing firebase (need to figure out the specifics)

// var config = {
//     apiKey: "AIzaSyA_QypGPkcjPtylRDscf7-HQl8ribnFeIs",
//     authDomain: "time-sheet-55009.firebaseapp.com",
//     databaseURL: "https://time-sheet-55009.firebaseio.com",
//     storageBucket: "time-sheet-55009.appspot.com"
// };

// firebase.initializeApp(config);

// var database = firebase.database();
// 2. Button for adding Employees
$("#submit-button").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDest = $("#destination-input").val().trim();
    var trainNext = $("#train-time-input").val().trim(); ("MM/DD/YYYY").format("X");
    var trainFreq = moment($("#frequency-input").val().trim());
    // var minutesAway = moment().endOf(trainDest).fromNow();
    console.log(trainName);
    // Creates local "temporary" object for holding employee data
    var searchTrain = {
        name: trainName,
        destination: trainDest,
        arrival: trainNext,
        frequency: trainFreq
    };

    // Uploads train data to the database
    // database.ref().push(searchTrain)

