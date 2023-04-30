function doGet(e) {
  var x = HtmlService.createTemplateFromFile("Index");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
}

function getSheetData()  { 
  var a= SpreadsheetApp.openById("1HBUNclaFrfihLcrn9lV1vwiVLFtJk1sjZmOyDk3UpRM");
  var b = a.getSheetByName('Data'); 
  var c = b.getDataRange();
  return c.getValues();  
}