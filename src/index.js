// Definir uma matriz para armazenar heróis da Marvel e seus níveis
let heroisMarvel = [
    {nome: "Home de Ferro", xp: 950 },
    {nome: "Capitão América", xp: 4500 },
    {nome: "Thor", xp: 12000 },
    {nome: "Hulk", xp: 7200 },
    {nome: "Viúva Negra", xp: 1800 },
    {nome: "Gavião Arqueiro", xp: 1200 },
    {nome: "Pantera Negra", xp: 2000 },
    {nome: "Visão", xp: 20000 },
    {nome: "Feiticeira Escarlate", xp: 15000 },
    {nome: "Homem Formiga", xp: 1000 }
    ];

    // Função para determinar o nível do herói
    function determinarNivel(xp) {
        if (xp <= 1000) {
            return "Ferro";
        } else if (xp >= 1001 && xp <= 2000) {
            return "Bronze";
        } else if (xp >= 2001 && xp <= 6000) {
            return "Prata";
        } else if (xp >= 6001 && xp <= 7000) {
            return "Ouro";
        } else if (xp >= 7001 && xp <= 8000) {
            return "Platina Diamante";
        } else if (xp >= 8001 && xp <= 9000) {
            return "Ascendente";
        } else if (xp >= 9001 && xp <= 10000) {
            return "Imortal";
        } else {
            return "Radiante";
        }
    }
    
    // Atualizar a matriz com os níveis
    heroisMarvel = heroisMarvel.map(heroi => {
        heroi.nivel = determinarNivel(heroi.xp);
        return heroi;
    });
    
    // Exibir os heróis da Marvel e seus níveis
    heroisMarvel.forEach(heroi => {
        console.log(`O Herói de nome ${heroi.nome} está no nível de ${heroi.nivel}`);
    });
