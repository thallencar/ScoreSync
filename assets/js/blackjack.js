//TABELA 1 - Pontuação Geral
//Cada player terá uma pontuação diferente
const players1 = document.querySelectorAll('.table-bj-pts-gerais .player');
players1.forEach(player => {
  player.vitoria = 0;
  player.empate = 0;
  player.derrota = 0;

  player.addEventListener('click', () => {
    atualizaPlacar(player, 'vitoria');
  });

  //nextElementSibling, para percorrer os elementos (players)
  const vitoriaCell = player.nextElementSibling;
  const empateCell = vitoriaCell.nextElementSibling;
  const derrotaCell = empateCell.nextElementSibling;

  empateCell.addEventListener('click', () => {
    atualizaPlacar(player, 'empate');
  });

  derrotaCell.addEventListener('click', () => {
    atualizaPlacar(player, 'derrota');
  });
});

function atualizaPlacar(player, type) {
  //Atualiza a pontuação do jogador
  player[type]++;

  //Atualiza as células com as pontuações
  const vitoriaCell = player.nextElementSibling;
  const empateCell = vitoriaCell.nextElementSibling;
  const derrotaCell = empateCell.nextElementSibling;

  vitoriaCell.textContent = player.vitoria;
  empateCell.textContent = player.empate;
  derrotaCell.textContent = player.derrota;

  atualizaPlacarTotal(player);
}

//Função para resetar o placar
function atualizaPlacarTotal(player) {
  const scoreCell = player.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
  scoreCell.textContent = player.vitoria * 3 + player.empate;
}

//TABELA 2 - Rodadas
const players2 = document.querySelectorAll('.table-bj-rodadas .player');
players2.forEach(player => {
  player.jack = 0;
  player.apostaMaiorQueDealer = 0;
  player.apostaMenorQueDealer = 0;
  player.apostaEstourada = 0;

  player.addEventListener('click', () => {
    atualizaPlacar2(player, 'jack');
  });

  const jackCell = player.nextElementSibling;
  const apostaMaiorQueDealerCell = jackCell.nextElementSibling;
  const apostaMenorQueDealerCell = apostaMaiorQueDealerCell.nextElementSibling;
  const apostaEstouradaCell = apostaMenorQueDealerCell.nextElementSibling;

  apostaMaiorQueDealerCell.addEventListener('click', () => {
    atualizaPlacar2(player, 'apostaMaiorQueDealer');
  });

  apostaMenorQueDealerCell.addEventListener('click', () => {
    atualizaPlacar2(player, 'apostaMenorQueDealer');
  });

  apostaEstouradaCell.addEventListener('click', () => {
    atualizaPlacar2(player, 'apostaEstourada');
  });
});

function atualizaPlacar2(player, type) {
  player[type]++;

  const jackCell = player.nextElementSibling;
  const apostaMaiorQueDealerCell = jackCell.nextElementSibling;
  const apostaMenorQueDealerCell = apostaMaiorQueDealerCell.nextElementSibling;
  const apostaEstouradaCell = apostaMenorQueDealerCell.nextElementSibling;

  jackCell.textContent = player.jack;
  apostaMaiorQueDealerCell.textContent = player.apostaMaiorQueDealer;
  apostaMenorQueDealerCell.textContent = player.apostaMenorQueDealer;
  apostaEstouradaCell.textContent = player.apostaEstourada;
}

function reiniciarPlacar() {
  // Reiniciar TABELA 1
  players1.forEach(player => {
    player.vitoria = 0;
    player.empate = 0;
    player.derrota = 0;

    const vitoriaCell = player.nextElementSibling;
    const empateCell = vitoriaCell.nextElementSibling;
    const derrotaCell = empateCell.nextElementSibling;

    vitoriaCell.textContent = 0;
    empateCell.textContent = 0;
    derrotaCell.textContent = 0;

    atualizaPlacarTotal(player);
  });

  // Reiniciar TABELA 2
  players2.forEach(player => {
    player.jack = 0;
    player.apostaMaiorQueDealer = 0;
    player.apostaMenorQueDealer = 0;
    player.apostaEstourada = 0;

    const jackCell = player.nextElementSibling;
    const apostaMaiorQueDealerCell = jackCell.nextElementSibling;
    const apostaMenorQueDealerCell = apostaMaiorQueDealerCell.nextElementSibling;
    const apostaEstouradaCell = apostaMenorQueDealerCell.nextElementSibling;

    jackCell.textContent = 0;
    apostaMaiorQueDealerCell.textContent = 0;
    apostaMenorQueDealerCell.textContent = 0;
    apostaEstouradaCell.textContent = 0;
  });
}
