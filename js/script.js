document.querySelectorAll('.mesa').forEach(mesa => {

    mesa.addEventListener('click', () => {

        const statusAtual = mesa.getAttribute('data-status');
        let novoStatus;

        if (statusAtual === 'disponivel') {
            novoStatus = 'reservado';
        } 

        else if (statusAtual === 'reservado') {
            novoStatus = 'em-uso';
        } 

        else {
            novoStatus = 'disponivel';
        }
        
        mesa.setAttribute('data-status', novoStatus);

    });
});