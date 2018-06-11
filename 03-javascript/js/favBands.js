// Declare an array of my favorite bands
// They are lowercase to make comparison less restrictive.
var favoriteBands = [
  'thundercat',
  'courtney barnett',
  'parquet courts',
  'animal collective',
  'dj koze',
  'kendrick lamar'
];

// What is the user's favorite band? Store that.
var userBand = prompt("What's your favorite band?");
userBand = userBand.toLowerCase();

// Is the lowercase version of the userBand in my bands array?
if(favoriteBands.indexOf(userBand) != -1){
  // They're in my array! Nice.
  document.write("<h1>sick, they're awesome</h1>");
}
else {
  // They're not in there! I must not like them.
  document.write("<h1>nah I don't like 'em.<h1>");
}