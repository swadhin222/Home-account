function doGet(e){
  return HtmlService.createTemplateFromFile("Index")
                     .evaluate()
                     .setTitle("Home Account V2 - Select Client - Display")
                     .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}