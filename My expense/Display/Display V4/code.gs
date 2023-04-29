function doGet(e) {
  var x = HtmlService.createTemplateFromFile("Index");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
}

function getSheetData()  { 
  var a= SpreadsheetApp.openById("1wnOUOYNrVhZVlScuzH71Bw0Kl3FmGxO6E5kCIZ7L94s");
  var b = a.getSheetByName('Submit data'); 
  var c = b.getDataRange();
  return c.getValues();  
}