const wrapper = document.querySelector('.wrapper'),
qrInput = wrapper.querySelector('.form input'),
generateBtn = wrapper.querySelector('.form button'),
qrImg = wrapper.querySelector('.qr-code img');

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = 'Generando código QR...';
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${qrValue}`;
    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerText = 'Generar código QR';
    });
});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value) {
        wrapper.classList.remove('active');
    }
});

qrInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('btn').click();
  }
  });

