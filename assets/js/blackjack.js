//Cada player terá uma pontuação diferente
const players = document.querySelectorAll('.player');
players.forEach(player => {
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

function atualizaPlacarTotal(player) {
  const scoreCell = player.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
  scoreCell.textContent = player.vitoria * 3 + player.empate;
}

//Função para resetar o placar
function reiniciarPlacar() {
  players.forEach(player => {
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
}

