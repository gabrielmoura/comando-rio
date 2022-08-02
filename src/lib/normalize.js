function pops(params) {
    const popx = [
        'vazio',
        'Acidente/enguiço sem vítima',
        'Acidente com vítima(s)',
        'Acidente com vítima(s) fatal(is)',
        'Incêndio em veículo(s)',
        'Bolsão dágua em via',
        'Alagamentos e enchentes',
        'Manifestação em local público',
        'Incêndio em imóvel',
        'Sinais de trânsito com mau funcionamento',
        'Reintegração de Posse',
        'Queda de árvore',
        'Queda de poste',
        'Acidente com queda de carga',
        'Incêndio no entorno de vias públicas',
        'Incêndio dentro de túneis',
        'Vazamento de água / esgoto',
        'Falta de luz / Apagão',
        'Implosão',
        'Queda de estrutura de alvenaria',
        'Vazamento de gás',
        'Evento em local público ou particular',
        'Atropelamento',
        'Afundamento de Pista / Buraco na via',
        'Abalroamento',
        'Obra em local público',
        'Operação policial',
        'Bloco de Rua',
        'Deslizamento',
        'Animal em local público',
        'Acionamento de sirenes',
        'Alagamento',
        'Enchente',
        'Lâmina dágua',
        'Acidente ambiental',
        'Bueiro',
        'Resgate ou remoção de Animais Terrestres e Aéreos',
        'Remoção de Animais Mortos na Areia',
        'Resgate de Animal Marinho Preso em rede / Encalhado',
        'Incendio em vegetacao',
        'Galho sobre fiação',
    ];

    if (params <= 40) {
        return popx[params];
    } else {
        return popx[0];
    }
}

module.exports = {pops}