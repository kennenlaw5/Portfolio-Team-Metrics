# Portfolio-Team-Metrics
Portfolio Team Metrics repo for the code to run the sheet. Will pull variables from a imported sheet (name TBD) and pull values from it and add them to a User Specified Sheet Name (will most likely be a dropdown from the menu itself). Will MOST LIKELY have to pull a different set of values from a DIFFERENT sheet and put those values on the same User-Specified sheet as previously used but in different locations. RECOMMENDATION: Create three SEPARATE functions, one to retrieve the input and pass the input to the two functions for pulling the data from the two sheets to put them back on the main sheet. This will permit fewer .getValues() calls to the API per Function which will allow the two functions to collectively exectue faster than if they were in one function. 
