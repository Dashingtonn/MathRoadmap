document.getElementById("button1").addEventListener('click', () => {
    const answer = document.getElementById("answerbutton1");
    const currentOpacity = getComputedStyle(answer).opacity;

    if (currentOpacity === '1') {
        answer.style.opacity = '0';
        document.getElementById("button1content").innerText = "Click to conceal answer";
    } else {
        answer.style.opacity = '1';
        document.getElementById("button1content").innerText = "Click to reveal answer";
    }
});
document.getElementById("button2").addEventListener('click', () => {
    const answer = document.getElementById("answerbutton2");
    const currentOpacity = getComputedStyle(answer).opacity;

    if (currentOpacity === '1') {
        answer.style.opacity = '0';
        document.getElementById("button2content").innerText = "Click to conceal answer";
    } else {
        answer.style.opacity = '1';
        document.getElementById("button2content").innerText = "Click to reveal answer";
    }
});