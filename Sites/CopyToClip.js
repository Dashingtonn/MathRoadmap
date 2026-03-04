function myFunction() {
    let copyText = document.getElementById("discord");
    navigator.clipboard.writeText(copyText.innerText);

    let tooltip = document.getElementById("myTooltip");
    tooltip.innerText = "Copied: " + copyText.innerText;
}
function outFunc() {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerText = "Copy to clipboard";
}