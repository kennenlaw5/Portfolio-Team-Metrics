function dataPull() { // this calls the other 2 functions
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //var ui = SpreadsheetApp.getUi(); // Not sure if this will be used. TBD
  var inputFirst  = []; inputFirst = grab();
  //var inputSecond = []; inputSecond = grasp();
}

function grab() { // first sheet -- return an array with data grabbed
  Logger.log("grab data from first sheet");
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var range = ss.getRan
  var arr = [];
  
  return arr;
}

//function grasp() { // second sheet -- return an array with data grabbed
//  Logger.log("grab data from second sheet");
//  var arr = [];
//  
//  return arr;
//}