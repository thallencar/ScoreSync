class Player{
    vitoria;
    empate;
    derrota;
    pontos ;

    constructor(vitoria, empate, derrota, pontos ){
        this.vitoria = vitoria;
        this.empate = empate;
        this.derrota = derrota;
        this.pontos  = pontos ;
    };
}


var elementoTabela = document.getElementById("score-table")


document.querySelectorAll(".score-cell").forEach((cell) => {
    cell.addEventListener("click", function() {
        this.textContent = parseInt(this.textContent) + 1;
    })
    
});

