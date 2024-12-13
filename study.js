let i = 0;
while (i < 3) { 
  comsole.log( i );
  i++;
}

let b = 0;
do {
  console.log( b );
  b++;
} while (b < 3);


for (let i=0; i < 3; i++) { 
  alert( i ); 
}

function showMessage() {
    alert( 'Всем привет!' );
  }
  showMessage();

  const greet = function(name) {
    console.log("Привет, " + name + "!");
  };

  const sum = (a, b) => {
    return a + b;
  };