var today = Date();
var month = today.substring(4,7);
var day = today.substring(8,10);
var currentDay = month+day;

if (currentDay==="Jan29") {
  document.write("MARCH 1")
}
else if (currentDay==="Jan30") {
  document.write("MARCH 2")
}
else if (currentDay==="Jan31") {
  document.write("MARCH 3")
}
else if (currentDay==="Mar31") {
  document.write("MAY 1")
}
else if (currentDay==="May31") {
  document.write("JULY 1")
}
else if (currentDay==="Aug31") {
  document.write("OCTOBER 1")
}
else if (currentDay==="Oct31") {
  document.write("DECEMBER 1")
}
else if (month==="Jan") {
  document.write("FEBRUARY"+ " " + day)
}
else if (month==="Feb") {
  document.write("MARCH"+ " " + day)
}
else if (month==="Mar") {
  document.write("APRIL"+ " " + day)
}
else if (month==="Apr") {
  document.write("MAY"+ " " + day)
}
else if (month==="May") {
  document.write("JUNE"+ " " + day)
}
else if (month==="Jun") {
  document.write("JULY"+ " " + day)
}
else if (month==="Jul") {
  document.write("AUGUST"+ " " + day)
}
else if (month==="Aug") {
  document.write("SEPTEMBER"+ " " + day)
}
else if (month==="Sep") {
  document.write("OCTOBER"+ " " + day)
}
else if (month==="Oct") {
  document.write("NOVEMBER"+ " " + day)
}
else if (month==="Nov") {
  document.write("DECEMBER"+ " " + day)
}
else if (month==="Dec") {
  document.write("JANUARY"+ " " + day)
}
