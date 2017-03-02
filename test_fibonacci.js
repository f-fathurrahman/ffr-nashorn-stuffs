function fibonacci(n) {
  if (n < 2)
    return 1;
  else
    return fibonacci(n-2) + fibonacci(n-1);
}

var log;

if (typeof Java !== 'undefined'){
  log = print;
}
else {
  log = console.log;
}

var res;
for (var i = 30; i < 35; i++){
  var start = new Date();
  res = fibonacci(i);
  var end = new Date();
  log("Input: " + i + " Result: " + res + ", Time: " + (end - start));
}
