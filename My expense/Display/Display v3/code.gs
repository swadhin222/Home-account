function doGet() {
  var ss = SpreadsheetApp.openById("1wnOUOYNrVhZVlScuzH71Bw0Kl3FmGxO6E5kCIZ7L94s");
  var sheet = ss.getSheetByName("code");

var it_st_1 = sheet.getRange(6  , 8).getValue(); 
var it_st_2 = sheet.getRange(7  , 8).getValue(); 
var it_st_3 = sheet.getRange(8  , 8).getValue(); 
var it_st_4 = sheet.getRange(9  , 8).getValue(); 
var it_st_5 = sheet.getRange(10 , 8).getValue(); 
var it_st_6 = sheet.getRange(11 , 8).getValue(); 
var it_st_7 = sheet.getRange(12 , 8).getValue(); 
var it_tr_1 = sheet.getRange(6  , 9).getValue(); 
var it_tr_2 = sheet.getRange(7  , 9).getValue(); 
var it_tr_3 = sheet.getRange(8  , 9).getValue(); 
var it_tr_4 = sheet.getRange(9  , 9).getValue(); 
var it_tr_5 = sheet.getRange(10 , 9).getValue(); 
var it_tr_6 = sheet.getRange(11 , 9).getValue(); 
var it_tr_7 = sheet.getRange(12 , 9).getValue(); 
var it_tk_1 = sheet.getRange(6  , 10).getValue(); 
var it_tk_2 = sheet.getRange(7  , 10).getValue(); 
var it_tk_3 = sheet.getRange(8  , 10).getValue(); 
var it_tk_4 = sheet.getRange(9  , 10).getValue(); 
var it_tk_5 = sheet.getRange(10 , 10).getValue(); 
var it_tk_6 = sheet.getRange(11 , 10).getValue(); 
var it_tk_7 = sheet.getRange(12 , 10).getValue();
var it_ct_1 = sheet.getRange(6  , 6).getValue(); 
var it_ct_2 = sheet.getRange(7  , 6).getValue(); 
var it_ct_3 = sheet.getRange(8  , 6).getValue(); 
var it_ct_4 = sheet.getRange(9  , 6).getValue(); 
var it_ct_5 = sheet.getRange(10 , 6).getValue(); 
var it_ct_6 = sheet.getRange(11 , 6).getValue(); 
var it_ct_7 = sheet.getRange(12 , 6).getValue();
var it_st_Total = sheet.getRange(14 , 8).getValue(); 
var it_tr_Total = sheet.getRange(14  , 9).getValue();
var total_taka = sheet.getRange(14 , 10).getValue();
var total_trx = sheet.getRange(14 , 6).getValue();
var months = sheet.getRange("i2").getValue();

  var template = HtmlService.createTemplateFromFile('index');

  template.it_st_1 = it_st_1;
  template.it_st_2 = it_st_2;
  template.it_st_3 = it_st_3;
  template.it_st_4 = it_st_4;
  template.it_st_5 = it_st_5;
  template.it_st_6 = it_st_6;
  template.it_st_7 = it_st_7;
  template.it_tr_1 = it_tr_1;
  template.it_tr_2 = it_tr_2;
  template.it_tr_3 = it_tr_3;
  template.it_tr_4 = it_tr_4;
  template.it_tr_5 = it_tr_5;
  template.it_tr_6 = it_tr_6;
  template.it_tr_7 = it_tr_7;
  template.it_tk_1 = it_tk_1;
  template.it_tk_2 = it_tk_2;
  template.it_tk_3 = it_tk_3;
  template.it_tk_4 = it_tk_4;
  template.it_tk_5 = it_tk_5;
  template.it_tk_6 = it_tk_6;
  template.it_tk_7 = it_tk_7;
  template.it_ct_1 = it_ct_1;
  template.it_ct_2 = it_ct_2;
  template.it_ct_3 = it_ct_3;
  template.it_ct_4 = it_ct_4;
  template.it_ct_5 = it_ct_5;
  template.it_ct_6 = it_ct_6;
  template.it_ct_7 = it_ct_7;
  template.it_st_Total = it_st_Total;
  template.it_tr_Total = it_tr_Total;
  template.total_taka  = total_taka ;
  template.total_trx = total_trx;
  template.months = months;



  return template.evaluate()
                  .setTitle("Swadhin Expense - 2023 - display")
                  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

