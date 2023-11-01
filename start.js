$(document).ready(function () {
    for (let i = 0; i < 9; i++) {
        const btn = document.getElementById(`btn${i}`);
        const content = document.getElementById(`collapseContent${i}`);
        const icon = document.getElementById(`collapseIcon${i}`);
        btn.addEventListener('click', () => {
            for (let j = 0; j < 9; j++) {
                const otherContent = document.getElementById(`collapseContent${j}`);
                const otherIcon = document.getElementById(`collapseIcon${j}`);
                if (i === j) {
                    if (content.style.display === 'none') {
                        content.style.display = 'block';
                        icon.textContent = '-';
                    } else {
                        content.style.display = 'none';
                        icon.textContent = '+';
                    }
                } else {
                    otherContent.style.display = 'none';
                    otherIcon.textContent = '+';
                }
            }
        });
    }
});








