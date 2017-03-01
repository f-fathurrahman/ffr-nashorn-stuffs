// for compatibility (?)
var console = {log: print};

var IntArray = Java.type("int[]");

var array = new IntArray(4);
array[0] = 5;
array[1] = 2;
array[2] = 1;
array[3] = 32;

for( i = 0; i < 4; i++) {
  console.log(i, array[i]);
}

try {
  array[1] = 33;
} catch(e) {
  print("An exception is caught!");
  print(e.message);
}

