function doGet(e){
  return HtmlService.createTemplateFromFile("Index")
                     .evaluate()
                     .setTitle("Home Account V2 - Select Client - Some Data")
                     .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}