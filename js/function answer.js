function answer(choice) {
    if (choice === 'yes') {
        alert('Ура!');
        showConfetti();
        showImages('img/yes.png'); 
    } else if (choice === 'no') {
        alert(':(');
        showImages('img/no.png'); 
    }
}

function showConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;

        confettiContainer.appendChild(confetti);
    }

   
}

function showImages(imageSrc) {
    const imagesContainer = document.getElementById('images-container');
    imagesContainer.innerHTML = ''; 

    const image = document.createElement('img');
    image.src = imageSrc;

    imagesContainer.appendChild(image);
    imagesContainer.style.display = 'block'; 
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
