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
  var ss = SpreadsheetApp.openById("100N-SugMsKmTW4tFS4-jE-d6TW-TS3TgOVQSWxAemVw");
  var sheet = ss.getSheetByName("full sheets");
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

  var data ='<head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"> <style>.ru{border-radius: 8px;}.rut{border-radius: 8px 8px 0px 0px;}.rub{border-radius: 0px 0px 8px 8px;}.fs-7{font-size: 11px;}</style> </head> <div class="bg-warning"> <div class=""> <section class="container"> <div class="row mt-4 pt-3 pb-3 ps-2 ru shadow bg-light"> <div class="col"> <label for="bill_id" class="text-secondary">Bill ID </label> <h6 id="bill_id">'+v.roll+' </h6> </div><div class="col"> <label for="Tr_ID" class="text-secondary">Due Balance </label> <h6 id="Tr_ID">BDT: '+m6+' </h6> </div></div></section> <section class="container"> <div class="row mt-4 pt-3 pb-3 ps-2 ru shadow bg-light"> <div class="col"> <label for="" class="text-secondary">Bill To </label> <h6 id="name">Mr. '+b2+' </h6> <address>1461 - Kanchan, Rupgonj, Nayaranganj. </address> <h6 id="phone">(+880) 1760030867 </h6> <h6> </h6> </div><div class="col"> <div class="col"> <label for="bill_date" class="text-secondary">Bill Date</label> <div class="d-flex"> <h6 id="bill_date">14 Apr 2023</h6> <p class="ms-1">(SUN)</p></div></div><div class="col"> <label for="Tr_ID" class="text-secondary">Submit date</label> <div class="d-flex"> <h6 id="bill_date">14 Apr 2023</h6> <p class="ms-1">(SUN)</p></div></div></div></div></section> <section class="container mt-4 pt-3 pb-3 ru bg-light shadow"> <div class="row mt-2"> <table class="table"> <thead class="fs-7 text-secondary"> <tr> <th scope="col" class="ps-3">SL </th> <th scope="col" class="col-3">ITEMS </th> <th scope="col" class="col-1">QTY </th> <th scope="col" class="col-2">RATE </th> <th scope="col" class="col-2 text-end pe-3">Subtotal </th> </tr></thead> <tbody> <tr> <td scope="row" class="col-1 ps-3">01</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr><tr> <td scope="row" class="col-1 ps-3">02</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr><tr> <td scope="row" class="col-1 ps-3">03</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr><tr> <td scope="row" class="col-1 ps-3">04</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr><tr> <td scope="row" class="col-1 ps-3">05</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr><tr> <td scope="row" class="col-1 ps-3">06</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr><tr> <td scope="row" class="col-1 ps-3">07</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr><tr> <td scope="row" class="col-1 ps-3">08</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr><tr> <td scope="row" class="col-1 ps-3">09</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr><tr> <td scope="row" class="col-1 ps-3">10</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr><tr> <td scope="row" class="col-1 ps-3">11</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr><tr> <td scope="row" class="col-1 ps-3">12</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr><tr> <td scope="row" class="col-1 ps-3">13</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr><tr> <td scope="row" class="col-1 ps-3">14</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr><tr> <td scope="row" class="col-1 ps-3">15</td><td class="col-3">Algon</td><td class="col-1">5</td><td class="col-2">1400</td><th class="col-2 text-end pe-3">3400</th> </tr></tbody> </table> </div></section> <section class="container"> <div class="row mt-1 ru shadow bg-light"> <div class="d-flex justify-content-between rut pt-2"> <div class="fw-bold pt-2 pb-2">Subtotal </div><div class="fw-bold pt-2 pb-2">BDT: 10,200 </div></div><div class="d-flex justify-content-between text-secondary "> <div class="pt-2 pb-2">Owing </div><div class="pt-2 pb-2">BDT: 10,200 </div></div><div class="d-flex justify-content-between text-dark "> <div class="pt-2 pb-2"> </div><div class="pt-2 pb-2 border-black border-top fw-bold">(Subtotal + Owing) BDT: 10,200 </div></div><div class="d-flex justify-content-between text-danger "> <div class="pt-2 pb-2">Submitting </div><div class="pt-2 pb-2">(14 April 2023) </div><div class="pt-2 pb-2">BDT: 10,200 </div></div><div class="d-flex justify-content-between bg-warning text-back rub pb-2"> <div class=" fw-bold pt-2 pb-2">Due </div><div class="fw-bold pt-2 pb-2">BDT: 10,200 </div></div></div></section> <section class="container mb-5"> <div class="row mt-4 pt-3 pb-3 ps-2 ru bg-light"> <div class="d-flex justify-content-between"> <div class="fw-bold pt-2 pb-2"> <div class="text-secondary">Sign </div><div>Swadhin Das </div></div><div class="fw-bold pt-2 pb-2 border"> </div><div class="fw-bold pt-2 pb-2"> <div class="text-secondary">For more info </div><div> <a class="link-underline-none" href="https://www.facebook.com/90.rsraj">FB - @90.rsraj </a> </div></div></div></div></section> </div><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"> </script> </div>';
  return data;
    }
   }
     if(flag==1){
  var data ='<section class="container"><div class=" mt-4 pt-3 pb-3 ps-2 ru bg-light text-center"><h5>Bill is not found.</h5></div></section>';
      return data;
    } 
    };