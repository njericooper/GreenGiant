// this array  method is called forEach is kind of like jQuery $.each

[1, 2, 3].forEach(function(v) {
  console.log(v);
});


// filter an Array
[1, 2, 3].forEach(function (v){
  return v < 3;
}); //will return[1, 2]

[5, 10, 15].map(function (v){
  return v * 2;
}); // will return [10, 20, 30]
