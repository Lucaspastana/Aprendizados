
 // fetch('pessoas.json')
   // .then( response => response.json())
    //.then(json => carregaElemento(json))
  axios('pessoas.json')
    .then(resposta => carregaElemento(resposta.data))
  function carregaElemento(json){
    const table = document.createElement('table');
    for(let pessoa of json ){
      const tr = document.createElement('tr')

      let td1 = document.createElement('td')
      td1.innerHTML = pessoa.NOME;
      tr.appendChild(td1)

      let td2 = document.createElement('td')
      td1.innerHTML = pessoa.SALARIO;
      tr.appendChild(td2)

      let td3 = document.createElement('td')
      td1.innerHTML = pessoa.IDADE;
      tr.appendChild(td3)

      table.appendChild(tr)
    }
    const resultado = document.querySelector('.container');
    resultado.appendChild(table)
  }