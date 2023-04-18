function doGet(e){
  return HtmlService.createTemplateFromFile("index")
                     .evaluate()
                     .setTitle("CodyLab")
                     .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function sub(v){
  var ss = SpreadsheetApp.openById("1HBUNclaFrfihLcrn9lV1vwiVLFtJk1sjZmOyDk3UpRM");
  var sheet = ss.getSheetByName("full data");
  var  flag  =  1 ;
  var lr = sheet.getLastRow();
      for(var i = 2;i <= lr;i++){
  if(v.roll == sheet.getRange(i, 1).getValue()){
      flag = 0;
var tt = sheet.getRange(1, 2).getValue(); 
var h1 = sheet.getRange(1, 3).getValue();  
var h2 = sheet.getRange(1, 5).getValue();  
var h3 = sheet.getRange(1, 6).getValue();  
var h4 = sheet.getRange(1, 7).getValue();  
var h5 = sheet.getRange(1, 8).getValue();  
var h6 = sheet.getRange(1, 9).getValue();  
var h7 = sheet.getRange(1, 10).getValue();  
var b1 = sheet.getRange(i, 4).getValue();
var b2 = sheet.getRange(i, 3).getValue();  
var b3 = sheet.getRange(i, 4).getValue();  
var m1 = sheet.getRange(i, 5).getValue();  
var m2 = sheet.getRange(i, 6).getValue();  
var m3 = sheet.getRange(i, 7).getValue();  
var m4 = sheet.getRange(i, 8).getValue();  
var m5 = sheet.getRange(i, 9).getValue();  
var m6 = sheet.getRange(i, 94).getValue();
var owner = sheet.getRange(i, 70).getValue();
var phone = sheet.getRange(i, 6).getValue();

var it1 = sheet.getRange(i, 7).getValue();
var qt1 = sheet.getRange(i, 8).getValue();
var pr1 = sheet.getRange(i, 9).getValue();
var to1 = sheet.getRange(i, 81).getValue();
var it2 = sheet.getRange(i, 10).getValue();
var qt2 = sheet.getRange(i, 11).getValue();
var pr2 = sheet.getRange(i, 12).getValue();
var to2 = sheet.getRange(i, 82).getValue();
var it3 = sheet.getRange(i, 13).getValue();
var qt3 = sheet.getRange(i, 14).getValue();
var pr3 = sheet.getRange(i, 15).getValue();
var to3 = sheet.getRange(i, 83).getValue();
var it4 = sheet.getRange(i, 16).getValue();
var qt4 = sheet.getRange(i, 17).getValue();
var pr4 = sheet.getRange(i, 18).getValue();
var to4 = sheet.getRange(i, 84).getValue();
var it5 = sheet.getRange(i, 19).getValue();
var qt5 = sheet.getRange(i, 20).getValue();
var pr5 = sheet.getRange(i, 21).getValue();
var to5 = sheet.getRange(i, 85).getValue();
var it6 = sheet.getRange(i, 22).getValue();
var qt6 = sheet.getRange(i, 23).getValue();
var pr6 = sheet.getRange(i, 24).getValue();
var to6 = sheet.getRange(i, 86).getValue();
var it7 = sheet.getRange(i, 25).getValue();
var qt7 = sheet.getRange(i, 26).getValue();
var pr7 = sheet.getRange(i, 27).getValue();
var to7 = sheet.getRange(i, 87).getValue();
var it8 = sheet.getRange(i, 28).getValue();
var qt8 = sheet.getRange(i, 29).getValue();
var pr8 = sheet.getRange(i, 30).getValue();
var to8 = sheet.getRange(i, 88).getValue();
var it9 = sheet.getRange(i, 31).getValue();
var qt9 = sheet.getRange(i, 32).getValue();
var pr9 = sheet.getRange(i, 33).getValue();
var to9 = sheet.getRange(i, 89).getValue();
var it10 = sheet.getRange(i, 34).getValue();
var qt10 = sheet.getRange(i, 35).getValue();
var pr10 = sheet.getRange(i, 36).getValue();
var to10 = sheet.getRange(i, 90).getValue();
var it11 = sheet.getRange(i, 37).getValue();
var qt11 = sheet.getRange(i, 38).getValue();
var pr11 = sheet.getRange(i, 39).getValue();
var to11 = sheet.getRange(i, 91).getValue();
var it12 = sheet.getRange(i, 40).getValue();
var qt12 = sheet.getRange(i, 41).getValue();
var pr12 = sheet.getRange(i, 42).getValue();
var to12 = sheet.getRange(i, 92).getValue();
var it13 = sheet.getRange(i, 43).getValue();
var qt13 = sheet.getRange(i, 44).getValue();
var pr13 = sheet.getRange(i, 45).getValue();
var to13 = sheet.getRange(i, 93).getValue();
var it14 = sheet.getRange(i, 46).getValue();
var qt14 = sheet.getRange(i, 47).getValue();
var pr14 = sheet.getRange(i, 48).getValue();
var to14 = sheet.getRange(i, 94).getValue();
var it15 = sheet.getRange(i, 49).getValue();
var qt15 = sheet.getRange(i, 50).getValue();
var pr15 = sheet.getRange(i, 51).getValue();
var to15 = sheet.getRange(i, 95).getValue();
var it16 = sheet.getRange(i, 52).getValue();
var qt16 = sheet.getRange(i, 53).getValue();
var pr16 = sheet.getRange(i, 54).getValue();
var to16 = sheet.getRange(i, 96).getValue();
var it17 = sheet.getRange(i, 55).getValue();
var qt17 = sheet.getRange(i, 56).getValue();
var pr17 = sheet.getRange(i, 57).getValue();
var to17 = sheet.getRange(i, 97).getValue();
var it18 = sheet.getRange(i, 58).getValue();
var qt18 = sheet.getRange(i, 59).getValue();
var pr18 = sheet.getRange(i, 60).getValue();
var to18 = sheet.getRange(i, 98).getValue();
var it19 = sheet.getRange(i, 61).getValue();
var qt19 = sheet.getRange(i, 62).getValue();
var pr19 = sheet.getRange(i, 63).getValue();
var to19 = sheet.getRange(i, 99).getValue();
var it20 = sheet.getRange(i, 64).getValue();
var qt20 = sheet.getRange(i, 65).getValue();
var pr20 = sheet.getRange(i, 66).getValue();
var to20 = sheet.getRange(i, 100).getValue();
var subtotal = sheet.getRange(i, 74).getValue();
var owing = sheet.getRange(i, 67).getValue();
var sub_owi = sheet.getRange(i, 75).getValue();

var submit = sheet.getRange(i, 68).getValue();
var due = sheet.getRange(i, 76).getValue();


let submitring_date;
const date3 = sheet.getRange(i, 2).getValue();
if (date3 === "") {
  submitring_date = "";
} else {
  const options3 = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const longDate3 = date3.toLocaleDateString('en-US', options3);
  submitring_date = longDate3;
}

let bill_date;
const date4 = sheet.getRange(i, 3).getValue();
if (date4 === "") {
  bill_date = "";
} else {
  const options4 = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const longDate4 = date4.toLocaleDateString('en-US', options4);
  bill_date = longDate4;
}


let submit_date_day;
const date5 = sheet.getRange(i, 69).getValue();
if (date5 === "") {
  submit_date_day = "";
} else {
  const options5 = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const longDate5 = date5.toLocaleDateString('en-US', options5);
  submit_date_day = longDate5;
}


  var data ='<head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"> <style>.ru{border-radius: 8px;}.rut{border-radius: 8px 8px 0px 0px;}.rub{border-radius: 0px 0px 8px 8px;}.fs-7{font-size: 11px;}</style> </head> <div class="bg-warning"> <div class=""> <section class="container"> <div class="row mt-4 pt-3 pb-3 ps-2 ru shadow bg-light"> <div class="col"> <label for="bill_id" class="text-secondary">Bill ID </label> <h6 id="bill_id">'+v.roll+' </h6> </div><div class="col"> <label for="Tr_ID" class="text-secondary">Due Balance </label> <h6 id="Tr_ID">BDT: '+due+' </h6> </div></div></section> <section class="container"> <div class="row mt-4 pt-3 pb-3 ps-2 ru shadow bg-light"> <div class="col"> <label for="" class="text-secondary">Bill To </label> <h6 id="name">Mr. '+owner+' </h6> <address>1461 - Kanchan, Rupgonj, Nayaranganj. </address> <h6 id="phone">(+880) '+phone+' </h6> <h6> </h6> </div><div class="col"> <div class="col"> <label for="bill_date" class="text-secondary">Bill Date</label> <div class="d-flex"> <h6 id="bill_date">'+bill_date+'</h6> </div></div><div class="col"> <label for="Tr_ID" class="text-secondary">Submiting date</label> <div class="d-flex"> <h6 id="bill_date">'+submitring_date+'</h6> </div></div></div></div></section> <section class="container mt-4 pt-3 pb-3 ru bg-light shadow"> <div class="row mt-2"> <table class="table"> <thead class="fs-7 text-secondary"> <tr> <th scope="col" class="ps-3">SL </th> <th scope="col" class="col-3">ITEMS </th> <th scope="col" class="col-1">QTY </th> <th scope="col" class="col-2">RATE </th> <th scope="col" class="col-2 text-end pe-3">Subtotal </th> </tr></thead> <tbody> <tr> <td scope="row" class="col-1 ps-3">01</td><td class="col-3">'+it1+'</td><td class="col-1">'+qt1+'</td><td class="col-2">'+pr1+'</td><th class="col-2 text-end pe-3">'+to1+'</th> </tr><tr> <td scope="row" class="col-1 ps-3">02</td><td class="col-3">'+it2+'</td><td class="col-1">'+qt2+'</td><td class="col-2">'+pr2+'</td><th class="col-2 text-end pe-3">'+to2+'</th> </tr><tr> <td scope="row" class="col-1 ps-3">03</td><td class="col-3">'+it3+'</td><td class="col-1">'+qt3+'</td><td class="col-2">'+pr3+'</td><th class="col-2 text-end pe-3">'+to3+'</th> </tr><tr> <td scope="row" class="col-1 ps-3">04</td><td class="col-3">'+it4+'</td><td class="col-1">'+qt4+'</td><td class="col-2">'+pr4+'</td><th class="col-2 text-end pe-3">'+to4+'</th> </tr><tr> <td scope="row" class="col-1 ps-3">05</td><td class="col-3">'+it5+'</td><td class="col-1">'+qt5+'</td><td class="col-2">'+pr5+'</td><th class="col-2 text-end pe-3">'+to5+'</th> </tr><tr> <td scope="row" class="col-1 ps-3">06</td><td class="col-3">'+it6+'</td><td class="col-1">'+qt6+'</td><td class="col-2">'+pr6+'</td><th class="col-2 text-end pe-3">'+to6+'</th> </tr><tr> <td scope="row" class="col-1 ps-3">07</td><td class="col-3">'+it7+'</td><td class="col-1">'+qt7+'</td><td class="col-2">'+pr7+'</td><th class="col-2 text-end pe-3">'+to7+'</th> </tr><tr> <td scope="row" class="col-1 ps-3">08</td><td class="col-3">'+it8+'</td><td class="col-1">'+qt8+'</td><td class="col-2">'+pr8+'</td><th class="col-2 text-end pe-3">'+to8+'</th> </tr><tr> <td scope="row" class="col-1 ps-3">09</td><td class="col-3">'+it9+'</td><td class="col-1">'+qt9+'</td><td class="col-2">'+pr9+'</td><th class="col-2 text-end pe-3">'+to9+'</th> </tr><tr> <td scope="row" class="col-1 ps-3">10</td><td class="col-3">'+it10+'</td><td class="col-1">'+qt10+'</td><td class="col-2">'+pr10+'</td><th class="col-2 text-end pe-3">'+to10+'</th> </tr><tr> <td scope="row" class="col-1 ps-3">11</td><td class="col-3">'+it11+'</td><td class="col-1">'+qt11+'</td><td class="col-2">'+pr11+'</td><th class="col-2 text-end pe-3">'+to11+'</th> </tr><tr> <td scope="row" class="col-1 ps-3">12</td><td class="col-3">'+it12+'</td><td class="col-1">'+qt12+'</td><td class="col-2">'+pr12+'</td><th class="col-2 text-end pe-3">'+to12+'</th> </tr><tr> <td scope="row" class="col-1 ps-3">13</td><td class="col-3">'+it13+'</td><td class="col-1">'+qt13+'</td><td class="col-2">'+pr13+'</td><th class="col-2 text-end pe-3">'+to13+'</th> </tr><tr> <td scope="row" class="col-1 ps-3">14</td><td class="col-3">'+it14+'</td><td class="col-1">'+qt14+'</td><td class="col-2">'+pr14+'</td><th class="col-2 text-end pe-3">'+to14+'</th> </tr><tr> <td scope="row" class="col-1 ps-3">15</td><td class="col-3">'+it15+'</td><td class="col-1">'+qt15+'</td><td class="col-2">'+pr15+'</td><th class="col-2 text-end pe-3">'+to15+'</th> </tr><tr> </tbody> </table> </div></section> <section class="container"> <div class="row mt-1 ru shadow bg-light"> <div class="d-flex justify-content-between rut pt-2"> <div class="fw-bold pt-2 pb-2">Subtotal </div><div class="fw-bold pt-2 pb-2">BDT: '+subtotal+' </div></div><div class="d-flex justify-content-between text-secondary "> <div class="pt-2 pb-2">Owing </div><div class="pt-2 pb-2">BDT: '+owing+' </div></div><div class="d-flex justify-content-between text-dark "> <div class="pt-2 pb-2"> </div><div class="pt-2 pb-2 border-black border-top fw-bold">(Subtotal + Owing) BDT: '+sub_owi+' </div></div><div class="d-flex justify-content-between text-danger "> <div class="pt-2 pb-2">Submitting </div><div class="pt-2 pb-2">( '+submit_date_day+' ) </div><div class="pt-2 pb-2">BDT: '+submit+' </div></div><div class="d-flex justify-content-between bg-warning text-back rub pb-2"> <div class=" fw-bold pt-2 pb-2">Due </div><div class="fw-bold pt-2 pb-2">BDT: '+due+' </div></div></div></section> <section class="container mb-5"> <div class="row mt-4 pt-3 pb-3 ps-2 ru bg-light"> <div class="d-flex justify-content-between"> <div class="fw-bold pt-2 pb-2"> <div class="text-secondary">Sign </div><div>Swadhin Das </div></div><div class="fw-bold pt-2 pb-2 border"> </div><div class="fw-bold pt-2 pb-2"> <div class="text-secondary">For more info </div><div> <a class="link-underline-none" href="https://www.facebook.com/90.rsraj">FB - @90.rsraj </a> </div></div></div></div></section> </div><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"> </script> </div>';
  return data;
    }
   }
     if(flag==1){
  var data ='<section class="container"><div class=" mt-4 pt-3 pb-3 ps-2 ru bg-light text-center"><h5>Bill is not found.</h5></div></section>';
      return data;
    } 
    };