function dataPull() { // this calls the other 2 functions
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //var ui = SpreadsheetApp.getUi(); // Not sure if this will be used. TBD
  var inputFirst  = [[]]; inputFirst = grab();
  Logger.log(inputFirst);
  //var inputSecond = []; inputSecond = grasp();
}

function grab() { // first sheet -- return an array with data grabbed
  Logger.log("grab data from first sheet");
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var range = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn());
  var arr = range.getValues();
  var sorted = [[]];
  var CA = arr[1][34];
  CA = CA.split(",");
  CA = CA[1] + " " + CA[0];
  Logger.log(CA);
  for (var i = 0; i < arr.length; i++) {
    if(arr[i][0]=="First Name"){
      sorted[i]= [i+1];
      sorted[i][1] = arr[i][0];         // last
      sorted[i][2] = arr[i][1];         // first
      sorted[i][3] = arr[i][7];         // home #
      sorted[i][4] = arr[i][8];         // work #
      sorted[i][5] = arr[i][9];         // email
      sorted[i][6] = arr[i][10];        // account #
      sorted[i][7] = arr[i][13];        // maturity date
      sorted[i][8] = arr[i][27];        // vin
      sorted[i][9] = arr[i][28];        // year
      sorted[i][10] = arr[i][29];        // make/model
      /*sorted[i][10] = arr[i][34];       // advisor This isn't needed. You only need to pull arr[i][34] once to get the name, but it won't be included in the array*/
    }
  }
  Logger.log(sorted);
}

//function grasp() { // second sheet -- return an array with data grabbed
//  Logger.log("grab data from second sheet");
//  var arr = [];
//  
//  return arr;
//}