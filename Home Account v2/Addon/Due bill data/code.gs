function doGet() {
  var ss = SpreadsheetApp.openById("1HBUNclaFrfihLcrn9lV1vwiVLFtJk1sjZmOyDk3UpRM");
  var sheet = ss.getSheetByName("full data Jony");

var Bill_id = sheet.getRange("cb2").getValue(); 
var Now_Bil_id = Bill_id + 1;
var last_trx_date = sheet.getRange("ca2").getValue(); 
var duee = sheet.getRange("bx2").getValue();

  var template = HtmlService.createTemplateFromFile('Index');

  const options5 = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const longDate5 = last_trx_date.toLocaleDateString('en-US', options5);
  
    let due_v;
    const all_d = sheet.getRange("bx2").getValue();
    const last_u = sheet.getRange("bz2").getValue();
    
    if (all_d === last_u) {
    due_v = 'fa-solid fa-circle-check text-primary';
    } 
    else {
    due_v  = 'fa-solid fa-circle-xmark text-danger';
}
  
  
  
  
  template.duee = duee;
  template.due_vv = due_v;
  template.last_trx_datee = longDate5;
  template.Bill_id = Bill_id;
  template.Now_Bil_id = Now_Bil_id;




  return template.evaluate()
                  .setTitle("Home Account - Display")
                  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}