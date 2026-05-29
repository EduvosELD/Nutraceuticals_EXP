document.addEventListener('DOMContentLoaded', function() {
    let currentAudio = null;

    // Select all buttons that have a data-audio attribute
    const buttons = document.querySelectorAll('button[data-audio]');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const audioSrc = this.getAttribute('data-audio');

            if (audioSrc) {
                // Stop the current audio if it's playing
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }

                // Create and play the new audio
                currentAudio = new Audio(encodeURI(audioSrc));
                currentAudio.play().catch(error => {
                    console.error("Audio playback failed:", error);
                });
            }
        });
    });
});