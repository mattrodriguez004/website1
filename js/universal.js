
nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > 223) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


/* {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const spotifyFrames = document.querySelectorAll('iframe[src*="open.spotify.com"]');

function shuffleSpotifyTracks() {
    const spotifyFramesArray = Array.from(spotifyFrames);
    const shuffledFrames = shuffle(spotifyFramesArray);
    const container = document.querySelector('.spotify-player-container');
    container.innerHTML = '';
    shuffledFrames.forEach(frame => {
        container.appendChild(frame);
    });
}

const shuffleButton = document.getElementById('shuffleButton');
if (shuffleButton) {
    shuffleButton.addEventListener('click', shuffleSpotifyTracks);
}
*/
