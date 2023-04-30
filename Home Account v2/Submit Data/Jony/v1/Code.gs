function doGet(request) {

  return HtmlService.createTemplateFromFile('Index').evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/1HBUNclaFrfihLcrn9lV1vwiVLFtJk1sjZmOyDk3UpRM/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Data Jony");

  ws.appendRow([
    formObject.bill_id,
    formObject.submit_date,
    formObject.bill_date,
    formObject.o_name,
    formObject.o_o_name,
    formObject.phone,
    formObject.it_1,
    formObject.wt_1,
    formObject.pr_1,
    formObject.it_2,
    formObject.wt_2,
    formObject.pr_2,
    formObject.it_3,
    formObject.wt_3,
    formObject.pr_3,
    formObject.it_4,
    formObject.wt_4,
    formObject.pr_4,
    formObject.it_5,
    formObject.wt_5,
    formObject.pr_5,
    formObject.it_6,
    formObject.wt_6,
    formObject.pr_6,
    formObject.it_7,
    formObject.wt_7,
    formObject.pr_7,
    formObject.it_8,
    formObject.wt_8,
    formObject.pr_8,
    formObject.it_9,
    formObject.wt_9,
    formObject.pr_9,
    formObject.it_10,
    formObject.wt_10,
    formObject.pr_10,
    formObject.it_11,
    formObject.wt_11,
    formObject.pr_11,
    formObject.it_12,
    formObject.wt_12,
    formObject.pr_12,
    formObject.it_13,
    formObject.wt_13,
    formObject.pr_13,
    formObject.it_14,
    formObject.wt_14,
    formObject.pr_14,
    formObject.it_15,
    formObject.wt_15,
    formObject.pr_15,
    formObject.it_16,
    formObject.wt_16,
    formObject.pr_16,
    formObject.it_17,
    formObject.wt_17,
    formObject.pr_17,
    formObject.it_18,
    formObject.wt_18,
    formObject.pr_18,
    formObject.it_19,
    formObject.wt_19,
    formObject.pr_19,
    formObject.it_20,
    formObject.wt_20,
    formObject.pr_20,
    formObject.owing,
    formObject.submitting,
    formObject.submitting_date,
    formObject.phonek

  ]);
}