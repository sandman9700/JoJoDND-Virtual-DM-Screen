 var newContent = ""

$("#Stats").click(function () {
  $(".TopLine, #PowStats, #RngStats, #RemStats, #AblStats, #EnhStats, #RevStats, #IndStats, #HiveStats, #ActStats, #statbox, #featStats").toggle();
});


$("#random").click(function () {
  $("#randomBox").toggle();
});

$("#theTrack").click(function () {
  $("#ultTrack").toggle();
});

$("#economy").click(function () {
  $("#actioN").toggle();
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

$("#actionEconomy").click(function () {
  $("#economy").toggle();
  $("#lineK").toggle();
  $("#actionEconomy").toggleClass("off");
});

if (localStorage.getItem("general")) {
  $("#general").val(localStorage.getItem("general"));
}
if (localStorage.getItem("ability")) {
  $("#ability").val(localStorage.getItem("ability"));
}
if (localStorage.getItem("plan")) {
  $("#plan").val(localStorage.getItem("plan"));
}

// Save items to localStorage on textarea change
$("#general").on('textarea', function () {
  localStorage.setItem("general", $(this).val());
});

$("#ability").on('textarea', function () {
  localStorage.setItem("ability", $(this).val());
});

$("#plan").on('textarea', function () {
  localStorage.setItem("plan", $(this).val());
});

function getData() {
  $.getJSON("actionEconomy.json", function(data) {
      cData = data;
  })}
