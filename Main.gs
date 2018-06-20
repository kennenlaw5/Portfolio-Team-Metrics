function dataPull() { // this calls the other 2 functions
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //var ui = SpreadsheetApp.getUi(); // Not sure if this will be used. TBD
  grab();
  //var inputSecond = []; inputSecond = grasp();
}

function grab() { // first sheet -- return an array with data grabbed
  Logger.log("grab data from first sheet");
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ui = SpreadsheetApp.getUi();
  var sheets = ss.getSheets();
  var sheet = ss.getSheetByName(sheets[sheets.length-1].getSheetName());
  var range = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn());
  var arr = range.getValues();
  var sorted = [];
  var CA = arr[1][34];
  CA = CA.split(", ");
  CA = CA[1] + " " + CA[0];
  Logger.log(CA);
  var count=0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i][1]!="First Name"){
      sorted[count] = [count+1];
      sorted[count][1] = arr[i][0];         // last
      sorted[count][2] = arr[i][1];         // first
      sorted[count][3] = arr[i][7];         // home #
      sorted[count][4] = arr[i][8];         // work #
      sorted[count][5] = arr[i][9];         // email
      sorted[count][6] = arr[i][10];        // account #
      sorted[count][7] = arr[i][13];        // maturity date
      sorted[count][8] = arr[i][27];        // vin
      sorted[count][9] = arr[i][28];        // year
      sorted[count][10] = arr[i][29];       // make/model
      count++;
    }
  }
  Logger.log(sorted);
  var names = [];
  var found = false;
  for (i = 0; i < sheets.length && !found; i++) {
    names[i]=sheets[i].getSheetName();
    if (names[i].toUpperCase() == CA) { sheet = ss.getSheetByName(names[i]); found = true; Logger.log(names[i]); }
  }
  if (found) {
    sheet.getRange(25, 2, sorted.length, sorted[i].length).setValues(sorted); // Disable comment to paste values onto target
  } else {
    var notify = ui.alert("Error", "Function could not find CA: " + CA + ". Would you like to report this issue?", ui.ButtonSet.YES_NO);
    if (notify == ui.Button.YES) { 
      MailApp.sendEmail('kennen.lawrence@a2zsync.com','HELP Portfolio Metrics',"Function could not find CA: " + CA + "\nAvailable sheet Names:\n" + names);
      ss.toast("Email was sent successfully! Your issue will be adressed shortly.", "Success!");
    } else if (notify == ui.Button.NO) {
      Logger.log('User cancelled');
      ss.toast("Action was cancelled. Email was not sent.", "Action Cancelled");
    }
  }
}

//function grasp() { // second sheet -- return an array with data grabbed
//  Logger.log("grab data from second sheet");
//  var arr = [];
//  
//  return arr;
//}