document.addEventListener('DOMContentLoaded', () => {
    const speakButton = document.getElementById('speak-btn');
    const textInput = document.getElementById('text-input');

    speakButton.addEventListener('click', () => {
        const text = textInput.value;
        if (text.trim() !== '') {
            speakText(text);
        }
    });

    function speakText(text) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);
    }
});
