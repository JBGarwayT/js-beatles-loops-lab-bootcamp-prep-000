// add solution here
function theBeatlesPlay(musicians, instruments) {
  var empty = [] ;
  for (var i = 0; i < musicians.length; i++) {
    empty.push (`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts(array) {
  var i = 0;
  while(i < array.length) {
    array[i] = array[i]+"!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var empty = [];
<<<<<<< HEAD
  var i = number;
  do {
    empty.push("I love the Beatles!");
    i = i + 1;
  }
  while (i < 15 );
  return empty;
}

=======
  var i = 0
  do {
    empty.push("I love the Beatles!", i + 1);
  }
  while (empty < 8 );
  return empty;
}
>>>>>>> 355ef2f42cc2907f0d7a02cf8629a4c8d90409d1
