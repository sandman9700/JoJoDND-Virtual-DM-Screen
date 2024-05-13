$("#Stats").click(function () {
  $(".TopLine, #PowStats, #RngStats, #RemStats, #AblStats, #EnhStats, #RevStats, #IndStats, #HiveStats, #ActStats, #statbox, #featStats").toggle();
});


$("#random").click(function () {
  $("#randomBox").toggle();
});

$("#track").click(function () {
  $("#initiative").toggle();
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
  $("#Stats").toggle();
  $("#lineA").toggle();
  $("#statConv").toggleClass("off");
});


$("#ruleToggle").click(function () {
  $("#Key").toggle();
  $("#lineC").toggle();
  $("#ruleToggle").toggleClass("off");
});


$("#diceToggle").click(function () {
  $("#diceTitle").toggle();
  $("#lineE").toggle();
  $("#diceToggle").toggleClass("off");
});

$("#noteToggle").click(function () {
  $("#Notes").toggle();
  $("#lineF").toggle();
  $("#noteToggle").toggleClass("off");
});

$("#randToggle").click(function () {
  $("#random").toggle();
  $("#lineG").toggle();
  $("#randToggle").toggleClass("off");
});

$("#weaponRef").click(function () {
  $("#weaponTitle").toggle();
  $("#lineI").toggle();
  $("#weaponRef").toggleClass("off");
});

$("#initiativeTrack").click(function () {
  $("#track").toggle();
  $("#linej").toggle();
  $("#initiativeTrack").toggleClass("off");
});


//Tracker
