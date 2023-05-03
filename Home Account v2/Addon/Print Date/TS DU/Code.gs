function doGet() {
  var ss = SpreadsheetApp.openById("1HBUNclaFrfihLcrn9lV1vwiVLFtJk1sjZmOyDk3UpRM");
  var sheet = ss.getSheetByName("full data Jony");

var duee = sheet.getRange(bx2).getValue(); 

  var template = HtmlService.createTemplateFromFile('Index');

  template.duee = duee;




  return template.evaluate()
                  .setTitle("Home Account - Display")
                  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

