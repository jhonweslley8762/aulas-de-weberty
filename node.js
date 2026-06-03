let botão1 = document.getElementById('btn1');
let menu = document.getElementById('menu-tela')

function renderizar(){
    menu.innerHTML = ''
    let novaArea = document.createElement('div');
    novaArea.classList.add('aparece')
    let msg = document.createElement('h3');
    msg.textContent = 'aaaa';
    novaArea.appendChild(msg);
    menu.appendChild(novaArea);
}

botão1.addEventListener('click', function(){
    renderizar();
})