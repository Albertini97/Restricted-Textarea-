document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('message');
    const charCount = document.getElementById('char-count');

    textarea.addEventListener('input', function() {
        const currentLength = textarea.value.length;
        charCount.textContent = `${currentLength} / 250`;

        if (currentLength >= 250) {
            textarea.classList.add('limit-reached');
        } else {
            textarea.classList.remove('limit-reached');
        }
    });
});