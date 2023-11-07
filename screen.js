$("#Stats").click(function() {
  $(".TopLine, #PowStats, #RngStats, #RemStats, #AblStats, #EnhStats, #RevStats, #IndStats, #HiveStats, #ActStats, #statbox").toggle();
});

$("#Vamp").click(function() {
  $("#Calc").toggle();
});

$("#random").click(function() {
  $("#randomBox").toggle();
});

$("#weaponTitle").click(function() {
  $("#weaponBox").toggle();
});

$("#trackerTitle").click(function() {
  $("#SECalc").toggle();
});

$("#diceTitle").click(function() {
  $("#diceBox").toggle();
});

$("#Notes").click(function() {
  $("#noteBox").toggle();
});


$("#QuirkyText").click(function() {
  $("#QuirkyBox").toggle();
});

$("#Key").click(function() {
  $("#Rules").toggle();
});

$("#PowStats").click(function() {
  $("#PowTable").toggle();
});

$("#RngStats").click(function() {
  $("#RngTable").toggle();
});

$("#RemStats").click(function() {
  $("#RemTable").toggle();
});

$("#AblStats").click(function() {
  $("#AblTable").toggle();
});

$("#EnhStats").click(function() {
  $("#EnhTable").toggle();
});

$("#RevStats").click(function() {
  $("#RevTable").toggle();
});

$("#IndStats").click(function() {
  $("#IndTable").toggle();
});

$("#HiveStats").click(function() {
  $("#HiveTable").toggle();
});

$("#ActStats").click(function() {
  $(".ActTable").toggle();
});

$("#FeatTitle").click(function() {
  $("#FeatDiv").toggle();
});
//Calc Code Yay!!!!!!!!!!!
var lvl = "1";
var baseNRG = 0;

$('.levelSelect').change(function() {
  lvl = parseInt($('.levelSelect').val());
  baseNRG = ((lvl * 20) - 20)
  updateDisplay();
});

function updateDisplay() {
  var newContent = "";

  newContent = "<p>" + baseNRG + " Vampire Energy Points</p>"

  $("#VampireCalc").html(newContent);
}
updateDisplay();

$("#addTwo").click(function() {
  baseNRG += parseInt("2")
  updateDisplay()
});

$("#subOne").click(function() {
  baseNRG--
  updateDisplay()
});

$("#addOne").click(function() {
  baseNRG++
  updateDisplay()
});

$("#subTwo").click(function() {
  baseNRG -= parseInt("2")
  updateDisplay()
});

$("#addFour").click(function() {
  baseNRG += parseInt("4")
  updateDisplay()
});

$("#addTen").click(function() {
  baseNRG += parseInt("10")
  updateDisplay()
});

$("#subTen").click(function() {
  baseNRG -= parseInt("10")
  updateDisplay()
});

$("#subTwenty").click(function() {
  baseNRG -= parseInt("20")
  updateDisplay()
});

$("#subHundred").click(function() {
  baseNRG -= parseInt("100")
  updateDisplay()
});

$("#makeVamp").click(function() {
  baseNRG -= parseInt("250")
  updateDisplay()
});

var Mod;
var Type = 1;
var Cha = 10;
//SE Tracker
$('#ChaScore').change(function() {
  var ChaBox = $("#ChaScore")
  updateSE();
  ChaBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      var Cha = parseInt($('#ChaScore')());
    }
  })
  modSet();
  updateSE();
});

$(".StandTypeSelect").change(function() {
  var Type = parseInt($(".StandTypeSelect").val());
});

function modSet() {
  var Mod;
  switch (Type) {
    case 1:
      Mod = 2;
      break;
    case 2:
      Mod = 3;
      break;
    case 3:
      Mod = 2;
      break;
    case 4:
      Mod = 5;
      break;
    case 5:
      Mod = 3;
      break;
    case 6:
      Mod = 3;
      break;
    case 7:
      Mod = 3;
      break;
    case 8:
      Mod = 3;
      break;
    case 9:
      Mod = 3;
      break;
    case 10:
      Mod = 5;
      break;
    case 11:
      Mod = 2;
      break;
    default:
      Mod = 0
      break;
  }
  updateSE();
}


var baseStandNRG = 0;

function updateSE() {
  var baseStandNRG = ((parseInt(Cha) * parseInt(Mod)) / 10);
  var SE = "";
  SE = "<p>" + baseStandNRG + "</p>"

  $("#currentSE").html(SE);
}

updateSE();




function countUp() {
  baseStandNRG++;
    var SE = document.getElementById('currentSE');
   var i = parseInt(SE.value, 10);
   SE.value++;
  updateSE();
}

function countDown() {
     var SE = document.getElementById('currentSE');
   var i = parseInt(SE.value, 10);
  SE.value--
  updateSE();
}


//Toggles
  $("#statConv").click(function() {
    $("#Stats").toggle();
    $("#lineA").toggle();
    $("#statConv").toggleClass("off");
  });

$("#vampCalc").click(function() {
  $("#Vamp").toggle();
  $("#lineB").toggle();
  $("#vampCalc").toggleClass("off");
});

$("#ruleToggle").click(function() {
  $("#Key").toggle();
  $("#lineC").toggle();
  $("#ruleToggle").toggleClass("off");
});

$("#featToggle").click(function() {
  $("#FeatTitle").toggle();
  $("#lineH").toggle();
  $("#featToggle").toggleClass("off");
});

$("#nrg").click(function() {
  $("#trackerTitle").toggle();
  $("#lineD").toggle();
  $("#nrg").toggleClass("off");
});

$("#diceToggle").click(function() {
  $("#diceTitle").toggle();
  $("#lineE").toggle();
  $("#diceToggle").toggleClass("off");
});

$("#noteToggle").click(function() {
  $("#Notes").toggle();
  $("#lineF").toggle();
  $("#noteToggle").toggleClass("off");
});

$("#randToggle").click(function() {
  $("#random").toggle();
  $("#lineG").toggle();
  $("#randToggle").toggleClass("off");
});

$("#weaponRef").click(function() {
  $("#weaponTitle").toggle();
  $("#lineI").toggle();
  $("#weaponRef").toggleClass("off");
});

//$("hr").hide();