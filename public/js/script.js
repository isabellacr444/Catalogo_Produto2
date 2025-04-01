// Função para deletar o card
function deletarCard(cardId) {
    // Encontrando o card pelo seu ID
    const card = document.getElementById(cardId);
    
    if (card) {
        // Remover o card do DOM
        card.remove();
        console.log(`Card ${cardId} deletado com sucesso!`); // Mensagem no console
    } else {
        console.log(`Card com ID ${cardId} não encontrado.`);
    }
}
