function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/1wnOUOYNrVhZVlScuzH71Bw0Kl3FmGxO6E5kCIZ7L94s/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Submit data");

  ws.appendRow([
    formObject.o_name,
    formObject.o_o_name,
    formObject.amount,
    formObject.b_date
  ]);
}