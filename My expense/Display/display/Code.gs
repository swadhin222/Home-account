function doGet(e){
  return HtmlService.createTemplateFromFile("index")
                     .evaluate()
                     .setTitle("Home Account - Display")
                     .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function sub(v){
  var ss = SpreadsheetApp.openById("1wnOUOYNrVhZVlScuzH71Bw0Kl3FmGxO6E5kCIZ7L94s");
  var sheet = ss.getSheetByName("code");
  var  flag  =  1 ;
  var lr = sheet.getLastRow();
      for(var i = 2;i <= lr;i++){
  if(v.roll == sheet.getRange(i, 1).getValue()){
      flag = 0;
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
var months = sheet.getRange(2 , 9).getValue();
var h1 = sheet.getRange(1, 3).getValue();  
var h2 = sheet.getRange(1, 5).getValue();  
var h3 = sheet.getRange(1, 6).getValue();  
var h4 = sheet.getRange(1, 7).getValue();  
var h5 = sheet.getRange(1, 8).getValue();  
var h6 = sheet.getRange(1, 9).getValue();  
var h7 = sheet.getRange(1, 10).getValue();  
var b1 = sheet.getRange(i, 4).getValue();
var b2 = sheet.getRange(i, 3).getValue();  
var b3 = sheet.getRange(i, 4).getValue();  
var m1 = sheet.getRange(i, 5).getValue();  
var m2 = sheet.getRange(i, 6).getValue();  
var m3 = sheet.getRange(i, 7).getValue();  
var m4 = sheet.getRange(i, 8).getValue();  
var m5 = sheet.getRange(i, 9).getValue();  
var m6 = sheet.getRange(i, 94).getValue();
var owner = sheet.getRange(i, 70).getValue();
var phone = sheet.getRange(i, 6).getValue();

var it1 = sheet.getRange(i, 7).getValue();
var qt1 = sheet.getRange(i, 8).getValue();
var pr1 = sheet.getRange(i, 9).getValue();
var to1 = sheet.getRange(i, 81).getValue();
var it2 = sheet.getRange(i, 10).getValue();
var qt2 = sheet.getRange(i, 11).getValue();
var pr2 = sheet.getRange(i, 12).getValue();
var to2 = sheet.getRange(i, 82).getValue();
var it3 = sheet.getRange(i, 13).getValue();
var qt3 = sheet.getRange(i, 14).getValue();
var pr3 = sheet.getRange(i, 15).getValue();
var to3 = sheet.getRange(i, 83).getValue();
var it4 = sheet.getRange(i, 16).getValue();
var qt4 = sheet.getRange(i, 17).getValue();
var pr4 = sheet.getRange(i, 18).getValue();
var to4 = sheet.getRange(i, 84).getValue();
var it5 = sheet.getRange(i, 19).getValue();
var qt5 = sheet.getRange(i, 20).getValue();
var pr5 = sheet.getRange(i, 21).getValue();
var to5 = sheet.getRange(i, 85).getValue();
var it6 = sheet.getRange(i, 22).getValue();
var qt6 = sheet.getRange(i, 23).getValue();
var pr6 = sheet.getRange(i, 24).getValue();
var to6 = sheet.getRange(i, 86).getValue();
var it7 = sheet.getRange(i, 25).getValue();
var qt7 = sheet.getRange(i, 26).getValue();
var pr7 = sheet.getRange(i, 27).getValue();
var to7 = sheet.getRange(i, 87).getValue();
var it8 = sheet.getRange(i, 28).getValue();
var qt8 = sheet.getRange(i, 29).getValue();
var pr8 = sheet.getRange(i, 30).getValue();
var to8 = sheet.getRange(i, 88).getValue();
var it9 = sheet.getRange(i, 31).getValue();
var qt9 = sheet.getRange(i, 32).getValue();
var pr9 = sheet.getRange(i, 33).getValue();
var to9 = sheet.getRange(i, 89).getValue();
var it10 = sheet.getRange(i, 34).getValue();
var qt10 = sheet.getRange(i, 35).getValue();
var pr10 = sheet.getRange(i, 36).getValue();
var to10 = sheet.getRange(i, 90).getValue();
var it11 = sheet.getRange(i, 37).getValue();
var qt11 = sheet.getRange(i, 38).getValue();
var pr11 = sheet.getRange(i, 39).getValue();
var to11 = sheet.getRange(i, 91).getValue();
var it12 = sheet.getRange(i, 40).getValue();
var qt12 = sheet.getRange(i, 41).getValue();
var pr12 = sheet.getRange(i, 42).getValue();
var to12 = sheet.getRange(i, 92).getValue();
var it13 = sheet.getRange(i, 43).getValue();
var qt13 = sheet.getRange(i, 44).getValue();
var pr13 = sheet.getRange(i, 45).getValue();
var to13 = sheet.getRange(i, 93).getValue();
var it14 = sheet.getRange(i, 46).getValue();
var qt14 = sheet.getRange(i, 47).getValue();
var pr14 = sheet.getRange(i, 48).getValue();
var to14 = sheet.getRange(i, 94).getValue();
var it15 = sheet.getRange(i, 49).getValue();
var qt15 = sheet.getRange(i, 50).getValue();
var pr15 = sheet.getRange(i, 51).getValue();
var to15 = sheet.getRange(i, 95).getValue();
var it16 = sheet.getRange(i, 52).getValue();
var qt16 = sheet.getRange(i, 53).getValue();
var pr16 = sheet.getRange(i, 54).getValue();
var to16 = sheet.getRange(i, 96).getValue();
var it17 = sheet.getRange(i, 55).getValue();
var qt17 = sheet.getRange(i, 56).getValue();
var pr17 = sheet.getRange(i, 57).getValue();
var to17 = sheet.getRange(i, 97).getValue();
var it18 = sheet.getRange(i, 58).getValue();
var qt18 = sheet.getRange(i, 59).getValue();
var pr18 = sheet.getRange(i, 60).getValue();
var to18 = sheet.getRange(i, 98).getValue();
var it19 = sheet.getRange(i, 61).getValue();
var qt19 = sheet.getRange(i, 62).getValue();
var pr19 = sheet.getRange(i, 63).getValue();
var to19 = sheet.getRange(i, 99).getValue();
var it20 = sheet.getRange(i, 64).getValue();
var qt20 = sheet.getRange(i, 65).getValue();
var pr20 = sheet.getRange(i, 66).getValue();
var to20 = sheet.getRange(i, 100).getValue();
var tqty75 = sheet.getRange(i, 73).getValue();
var subtotal = sheet.getRange(i, 74).getValue();
var owing = sheet.getRange(i, 67).getValue();
var sub_owi = sheet.getRange(i, 75).getValue();

var submit = sheet.getRange(i, 68).getValue();
var due = sheet.getRange(i, 76).getValue();



  var data ='<head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>Bootstrap demo</title> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer"/> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"> <style>.colls{height: 150PX; border-radius: 15px;}.immg{height:120px; width: 120px; position: absolute; right: 30px; top: -50px;}.title{padding-top: 70px; padding-left: 20px;}.prag{padding-left: 20px;}.taka{position: absolute; right: 25px; bottom: 10px;}.border-none{border: none;}.s1{background-image: linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%); color: rgb(12, 53, 3);}.s2{background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%); color: white;}.s3{background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%); color: white;}.s4{background-image: linear-gradient(to top, #b224ef 0%, #7579ff 100%); color: white;}.s5{background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%); color: white;}.s6{background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%); color: rgb(12, 53, 3);}.s7{background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%); color: white;}.s8{background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); color: rgb(12, 53, 3);}@media only screen and (min-width: 800px){.colls{height: 180PX; border-radius: 15px;}.title{padding-top: 100px; padding-left: 20px;}.immg{height:130px; width: 130px; position: absolute; right: 30px; top: -50px;}}</style></head> <body> <div class="container"> <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3"> <div class="col mt-5 pt-4"> <div class="s1 colls position-relative shadow"> <img class="img-thumbnail immg rounded-circle border-none" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHT0zP7Baoc2P5lAC7BoFDKSk2egy23dThQyd7bhk3_bAUTcWUUXsimCGw5DrBJeC46FoNMTMuI8YO2QLR2eMaKeLkIBSrlyhY-444ZcsScSCasg5_SXnp_o8fhndO7M6GIxnklqL6OMVyRDRWTVmdRnf7OLb1iST_qmOErJ70ShzSVOo3szKu4pio/s1600/Untitled%20design%20%2820%29.png" alt=""> <h4 class="title">চাল</h4> <p class="prag"><i class="fa-solid fa-fire"></i> '+it_ct_1+' Times</p><h2 class="taka">BDT: '+it_tk_1+'</h2> </div></div><div class="col mt-5 pt-4"> <div class="s2 colls position-relative shadow"> <img class="img-thumbnail immg rounded-circle border-none" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXlp2HdyjXlpQ03LJaJ0lshhQEC17nQOwFq6ifRp2LUOr4-8JNx9Y_NJElNkaN-5rzrn7L4zgi6FSyQN2u16TCdQtsk6gDtNNy4ZUXGNBR3Rr3WjtKb83ya9jhtY8XBURZ-WrGDN8-UZM7RTK3CTbugeTi-mxEcVmDpe7pLNuYRDz5OkgodmgpoueJ/s1600/Untitled%20design%20%2819%29.png" alt=""> <h4 class="title">মেডিসিন বা.</h4> <p class="prag"><i class="fa-solid fa-fire"></i> '+it_ct_2+' Times</p><h2 class="taka">BDT: '+it_tk_2+'</h2> </div></div><div class="col mt-5 pt-4"> <div class="s3 colls position-relative shadow"> <img class="img-thumbnail immg rounded-circle border-none" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDNVDrM7FnSd3FbZ5wEyjEPzFe6gmi88FYQkAhjxteF_UdAo9fpFVjECf4-3nEyBMKiFpY3ZPVZavwJOPYXcWIJoc7nJeKT0fIY02-zdmHM70Rg4-hj8uhj5_SNqIaGvkJDjmXMJsg-Iiyev9DDGEbGDI3WYMtHp2XTsrvw5HxCoLCKPwhYG_538su/s1600/Untitled%20design%20%2822%29.png" alt=""> <h4 class="title">এক্সট্রা খাবার</h4> <p class="prag"><i class="fa-solid fa-fire"></i> '+it_ct_3+' Times</p><h2 class="taka">BDT: '+it_tk_3+'</h2> </div></div><div class="col mt-5 pt-4"> <div class="s4 colls position-relative shadow"> <img class="img-thumbnail immg rounded-circle border-none" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7mE0_BAfeDN0wwNAPwP6__p2tisdJZoqE8s12S18pV219Bd-epzmfXor6CSo5kSku3MBRXsGRUmXf9Es6t7z-YmoqUnTx-vKe0M3wwuINu9B0skPDUf76_cyKS_il8gUMHkED_HEnu1lRZYpR20z386iuL9mRrw-Cgh_QfwScLSa5dEhtS0Id5fH2/s1600/Untitled%20design%20%2823%29.png" alt=""> <h4 class="title">সেলফ খরচ</h4> <p class="prag"><i class="fa-solid fa-fire"></i> '+it_ct_4+' Times</p><h2 class="taka">BDT: '+it_tk_4+'</h2> </div></div><div class="col mt-5 pt-4"> <div class="s5 colls position-relative shadow"> <img class="img-thumbnail immg rounded-circle border-none" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhj-hTOHHYEnAdcUUMykK3lb2RVCDiwdMgRXGUY_6BMPp2jelEe3-fVrdhkxjzpBc7rLVgPVA8wQjBpIaABCNF_zXSn2Of97GpAQxLLY54jKi5q5O8eRT1xseVPQVj8m3bQOHrMEMePM3bELBPNIO9b0zycJGb30xcYVlB-IEKD7gd9jkHK3FfvVodQ/s1600/Untitled%20design%20%2824%29.png" alt=""> <h4 class="title">ডোমেইন হোস্টিং</h4> <p class="prag"><i class="fa-solid fa-fire"></i> '+it_ct_5+' Times</p><h2 class="taka">BDT: '+it_tk_5+'</h2> </div></div><div class="col mt-5 pt-4"> <div class="s6 colls position-relative shadow"> <img class="img-thumbnail immg rounded-circle border-none" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHeKEC2rrcIN5_KtfedK4TXjdtBVJhwg6_vBV5L42iOn-yY-75SgA02_Yy5DLm-unxzfOXRVvN2VvD23EGyOwesKOC50IIQQC74a6ds0FDtgRV36iV--IldjP2TqhxMAvhcuAGb-vWMQ8zmCJuL8Lll-799S_u7ssD45mj-IplG3u_i2MUzAas45s4/s1600/Untitled%20design%20%2826%29.png" alt=""> <h4 class="title">ইন্টারনেট বিল</h4> <p class="prag"><i class="fa-solid fa-fire"></i> '+it_ct_6+' Times</p><h2 class="taka">BDT: '+it_tk_6+'</h2> </div></div><div class="col mt-5 pt-4"> <div class="s7 colls position-relative shadow"> <img class="img-thumbnail immg rounded-circle border-none" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWscWTD8lU1tPVoEuYrTKPk4pJuJE5-XGFG1Zq5rKadJmZInHkRj3PA0BnPDRKSq_Q_ywDWyhwVb2rBxp7_6hz8o5bcIcyzfMheRC02-_4CmLqrrulp4IvQiOiNoz8g5jGV-tX8E49comrQqQxyDcsZMINDbM4PisXFb_nF2uF6BQjDcWiQaErcK1j/s1600/Untitled%20design%20%2828%29.png" alt=""> <h4 class="title">এক্সট্রা টাকা</h4> <p class="prag"><i class="fa-solid fa-fire"></i> '+it_ct_7+' Times</p><h2 class="taka">BDT: '+it_tk_7+'</h2> </div></div><div class="col mt-5 pt-4"> <div class="s8 colls position-relative shadow"> <img class="img-thumbnail immg rounded-circle border-none" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPrHfZGCBH4IfpGQBPkuMliOGL-Xxf_BgCWj3ydzs7HgLpno3Y5KTvskWkPf5Iz2fdKG8HWE9g6EB1Dch-id9EaSKT2OQjVz8vgWP5xfWwBb1jPmfdCbe_jGqalTQjpxaf5WYy2Sbyzo5GFO31A_fHgVoZ8JEYNyck8Vo5DDMoVptpTHwJSKylo9mi/s1600/Untitled%20design%20%2829%29.png" alt=""> <h4 class="title">Total</h4> <p class="prag"><i class="fa-solid fa-fire"></i> '+total_trx+' Trx</p><h2 class="taka">BDT: '+total_taka+'</h2> </div></div></div></div><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script> </body>';
  return data;
    }
   }
     if(flag==1){
  var data ='<section class="container"><div class=" mt-4 pt-3 pb-3 ps-2 ru bg-light text-center"><h5>Bill is not found.</h5></div></section>';
      return data;
    } 
    };
