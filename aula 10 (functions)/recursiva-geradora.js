//O conceito de função recursiva baseia-se na ideia de dividir um problema em subproblemas menores e resolver cada subproblema recursivamente. 

function Contouer(max){
    if(max >= 10) return
    max++;

    console.log(max);
    Contouer(max);
}

Contouer(8);


function* generator(i) {
    yield i;
    yield i + 10;
  }
  
  const gen = generator(10);
  
  console.log(gen.next().value);
  // Expected output: 10
  
  console.log(gen.next().value);