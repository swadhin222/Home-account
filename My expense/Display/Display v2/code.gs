function doGet() {
  var ss = SpreadsheetApp.openById("1wnOUOYNrVhZVlScuzH71Bw0Kl3FmGxO6E5kCIZ7L94s");
  var sheet = ss.getSheetByName("code");

var it_ct_1 = sheet.getRange(6  , 6).getValue(); 
var it_ct_2 = sheet.getRange(7  , 6).getValue(); 
var it_ct_3 = sheet.getRange(8  , 6).getValue(); 
var it_ct_4 = sheet.getRange(9  , 6).getValue(); 
var it_ct_5 = sheet.getRange(10 , 6).getValue(); 
var it_ct_6 = sheet.getRange(11 , 6).getValue(); 
var it_ct_7 = sheet.getRange(12 , 6).getValue(); 
var it_tk_1 = sheet.getRange(6  , 10).getValue(); 
var it_tk_2 = sheet.getRange(7  , 10).getValue(); 
var it_tk_3 = sheet.getRange(8  , 10).getValue(); 
var it_tk_4 = sheet.getRange(9  , 10).getValue(); 
var it_tk_5 = sheet.getRange(10 , 10).getValue(); 
var it_tk_6 = sheet.getRange(11 , 10).getValue(); 
var it_tk_7 = sheet.getRange(12 , 10).getValue();
var total_trx = sheet.getRange(14 , 6).getValue();
var total_taka = sheet.getRange(14 , 10).getValue();
var months = sheet.getRange("i2").getValue();

  var template = HtmlService.createTemplateFromFile('index');

  template.it_ct_1 = it_ct_1;
  template.it_ct_2 = it_ct_2;
  template.it_ct_3 = it_ct_3;
  template.it_ct_4 = it_ct_4;
  template.it_ct_5 = it_ct_5;
  template.it_ct_6 = it_ct_6;
  template.it_ct_7 = it_ct_7;
  template.it_tk_1 = it_tk_1;
  template.it_tk_2 = it_tk_2;
  template.it_tk_3 = it_tk_3;
  template.it_tk_4 = it_tk_4;
  template.it_tk_5 = it_tk_5;
  template.it_tk_6 = it_tk_6;
  template.it_tk_7 = it_tk_7;
  template.total_trx = total_trx;
  template.total_taka = total_taka;
  template.months = months;



  return template.evaluate()
                  .setTitle("Home Account - Display")
                  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

