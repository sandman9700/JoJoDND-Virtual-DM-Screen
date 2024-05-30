$("#Stats").click(function () {
  $(".TopLine, #PowStats, #RngStats, #RemStats, #AblStats, #EnhStats, #RevStats, #IndStats, #HiveStats, #ActStats, #statbox, #featStats").toggle();
});


$("#random").click(function () {
  $("#randomBox").toggle();
});

$("#theTrack").click(function () {
  $("#ultTrack").toggle();
});

$("#weaponTitle").click(function () {
  $("#weaponBox").toggle();
});

$("#diceTitle").click(function () {
  $("#diceBox").toggle();
});

$("#Notes").click(function () {
  $("#noteBox").toggle();
});


$("#QuirkyText").click(function () {
  $("#QuirkyBox").toggle();
});

$("#Key").click(function () {
  $("#Rules").toggle();
});

$("#PowStats").click(function () {
  $("#PowTable").toggle();
});

$("#RngStats").click(function () {
  $("#RngTable").toggle();
});

$("#RemStats").click(function () {
  $("#RemTable").toggle();
});

$("#AblStats").click(function () {
  $("#AblTable").toggle();
});

$("#EnhStats").click(function () {
  $("#EnhTable").toggle();
});

$("#RevStats").click(function () {
  $("#RevTable").toggle();
});

$("#IndStats").click(function () {
  $("#IndTable").toggle();
});

$("#HiveStats").click(function () {
  $("#HiveTable").toggle();
});

$("#ActStats").click(function () {
  $(".ActTable").toggle();
});

$("#featStats").click(function () {
  $(".featTable").toggle();
});

$("#FeatTitle").click(function () {
  $("#FeatDiv").toggle();
});


//Toggles
$("#statConv").click(function () {
  $("#StatsCont").toggle();
  $("#lineA").toggle();
  $("#statConv").toggleClass("off");
});


$("#ruleToggle").click(function () {
  $("#KeyCont").toggle();
  $("#lineB").toggle();
  $("#ruleToggle").toggleClass("off");
});


$("#diceToggle").click(function () {
  $("#diceCont").toggle();
  $("#lineE").toggle();
  $("#diceToggle").toggleClass("off");
});

$("#noteToggle").click(function () {
  $("#NotesCont").toggle();
  $("#lineF").toggle();
  $("#noteToggle").toggleClass("off");
});

$("#randToggle").click(function () {
  $("#randomCont").toggle();
  $("#lineG").toggle();
  $("#randToggle").toggleClass("off");
});

$("#weaponRef").click(function () {
  $("#weaponCont").toggle();
  $("#lineI").toggle();
  $("#weaponRef").toggleClass("off");
});

$("#ultimate").click(function () {
  $("#theTrack").toggle();
  $("#linej").toggle();
  $("#ultimate").toggleClass("off");
});


// NoteBox
var generalVal = $("#general").val();
var abilityVal = $("#ability").val();
var planVal = $("#plan").val();

// Set Items in localStorage
localStorage.setItem("general", generalVal);
localStorage.setItem("ability", abilityVal);
localStorage.setItem("plan", planVal);

// Retrieve and set items in HTML elements
$("#general").html(localStorage.getItem("general");
$("#ability").html(localStorage.getItem("ability");
$("#plan").html(localStorage.getItem("plan");