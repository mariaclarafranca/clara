function selecMenu(sectionId) {
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function calculaIdadeMinima(event) {
    event.preventDefault();
    const idade = parseInt(document.getElementById('idadeMinima').value);
    const unidade = document.querySelector('input[name="unidadeMinima"]:checked').value;
    
    if (isNaN(idade) || idade < 1) {
        document.getElementById('resultMinima').innerText = 'Por favor, insira uma idade válida.';
        return;
    }

    let idadeEmAnos = unidade === 'meses' ? idade / 12 : idade;
    let resultado = Math.floor((idadeEmAnos / 2) + 7);
    let mensagem = idadeEmAnos < 13 ? "Você não pode namorar!" : `Você só pode namorar alguém a partir dos ${resultado} anos.`;
    document.getElementById('resultMinima').innerText = mensagem;
}

function calculaIdadeMaxima(event) {
    event.preventDefault();
    const idade = parseInt(document.getElementById('idadeMaxima').value);
    const unidade = document.querySelector('input[name="unidadeMaxima"]:checked').value;

    if (isNaN(idade) || idade < 1) {
        document.getElementById('resultMaxima').innerText = 'Por favor, insira uma idade válida.';
        return;
    }

    let idadeEmAnos = unidade === 'meses' ? idade / 12 : idade;
    let resultado = (idadeEmAnos - 7) * 2;
    if (resultado > 100) {
        resultado = 100;
    }
    let mensagem = idadeEmAnos >= 100 ? "Pessoas acima de 100 anos não podem namorar." : `A idade máxima que você pode namorar é ${resultado} anos.`;
    document.getElementById('resultMaxima').innerText = mensagem;
}

function comparaIdades(event) {
    event.preventDefault();
    const idade1 = parseInt(document.getElementById('idade1').value);
    const idade2 = parseInt(document.getElementById('idade2').value);
    const unidade1 = document.querySelector('input[name="unidadeComparativo1"]:checked').value;
    const unidade2 = document.querySelector('input[name="unidadeComparativo2"]:checked').value;

    if (isNaN(idade1) || isNaN(idade2) || idade1 < 1 || idade2 < 1) {
        document.getElementById('resultComparativo').innerText = 'Por favor, insira idades válidas.';
        return;
    }

    let idadeEmAnos1 = unidade1 === 'meses' ? idade1 / 12 : idade1;
    let idadeEmAnos2 = unidade2 === 'meses' ? idade2 / 12 : idade2;

    const idadeMinima = Math.floor((idadeEmAnos1 / 2) + 7);
    const idadeMaxima = (idadeEmAnos2 - 7) * 2;

    let mensagem;
    if (idadeEmAnos1 < 13 || idadeEmAnos2 < 13) {
        mensagem = "Vocês não podem namorar!";
    } else if (idadeEmAnos2 >= idadeMinima && idadeEmAnos1 <= idadeMaxima) {
        mensagem = "Vocês podem namorar!";
    } else {
        mensagem = "Vocês não podem namorar!";
    }
    document.getElementById('resultComparativo').innerText = mensagem;
}

function comparaIdadeTrisal(event) {
    event.preventDefault();
    const idade1 = parseInt(document.getElementById('idadeTri1').value);
    const idade2 = parseInt(document.getElementById('idadeTri2').value);
    const idade3 = parseInt(document.getElementById('idadeTri3').value);
    const unidade1 = document.querySelector('input[name="unidadeTrisal1"]:checked').value;
    const unidade2 = document.querySelector('input[name="unidadeTrisal2"]:checked').value;
    const unidade3 = document.querySelector('input[name="unidadeTrisal3"]:checked').value;

    if (isNaN(idade1) || isNaN(idade2) || isNaN(idade3) || idade1 < 1 || idade2 < 1 || idade3 < 1) {
        document.getElementById('resultTrisal').innerText = 'Por favor, insira idades válidas.';
        return;
    }

    let idadeEmAnos1 = unidade1 === 'meses' ? idade1 / 12 : idade1;
    let idadeEmAnos2 = unidade2 === 'meses' ? idade2 / 12 : idade2;
    let idadeEmAnos3 = unidade3 === 'meses' ? idade3 / 12 : idade3;

    if (idadeEmAnos1 > 100 || idadeEmAnos2 > 100 || idadeEmAnos3 > 100) {
        document.getElementById('resultTrisal').innerText = 'Pessoas acima de 100 anos não podem namorar.';
        return;
    }

    const minIdade1 = Math.floor((idadeEmAnos1 / 2) + 7);
    const maxIdade1 = (idadeEmAnos1 - 7) * 2;
    const minIdade2 = Math.floor((idadeEmAnos2 / 2) + 7);
    const maxIdade2 = (idadeEmAnos2 - 7) * 2;
    const minIdade3 = Math.floor((idadeEmAnos3 / 2) + 7);
    const maxIdade3 = (idadeEmAnos3 - 7) * 2;

    let mensagem;
    if ((idadeEmAnos2 >= minIdade1 && idadeEmAnos2 <= maxIdade1) &&
        (idadeEmAnos3 >= minIdade1 && idadeEmAnos3 <= maxIdade1) &&
        (idadeEmAnos1 >= minIdade2 && idadeEmAnos1 <= maxIdade2) &&
        (idadeEmAnos3 >= minIdade2 && idadeEmAnos3 <= maxIdade2) &&
        (idadeEmAnos1 >= minIdade3 && idadeEmAnos1 <= maxIdade3) &&
        (idadeEmAnos2 >= minIdade3 && idadeEmAnos2 <= maxIdade3)) {
        mensagem = "O trisal pode namorar!";
    } else {
        mensagem = "O trisal não pode namorar!";
    }
    document.getElementById('resultTrisal').innerText = mensagem;
}
