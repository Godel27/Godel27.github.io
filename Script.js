document.getElementById('playButton').addEventListener('click', function() {
    var music = document.getElementById('romanticMusic');
    if (music.paused) {
        music.play();
        this.textContent = 'Pause Romantic Music';
    } else {
        music.pause();
        this.textContent = 'Play Romantic Music';
    }
});
