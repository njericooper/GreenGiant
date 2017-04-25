function () {
  var a = 5;
  try {
    a();
  } catch (e) {
    e instanceof Error; // true
  }
  console.console.log('you got here!');
}
