const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const myh2 = document.getElementById("myh2");
const bgText = document.querySelector(".bg-text");

function createH3() {
    const h3 = document.createElement("h3");
    h3.id = "myh3";
    bgText.appendChild(h3);
    return h3;
}

function handleButtonClick(messages) {
    const myh3 = createH3();
    
    myh2.textContent = "";
    myh2.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    const stylesheet = document.styleSheets[0];
    stylesheet.insertRule(".bg-text { animation: expand 1s forwards ease-out; }", stylesheet.cssRules.length);

    messages.forEach((message, index) => {
        setTimeout(() => {
            myh3.textContent = message;
            if (index === messages.length - 1) {
                stylesheet.insertRule("#myh3 { animation: blurText 1.2s forwards ease-in-out; }", stylesheet.cssRules.length);
            }
        }, 1000 * (index * 3 + 1));
    });
}

noBtn.onclick = function() {
    handleButtonClick([
        "Hey I know it's hard....",
        "But you have to keep going...okay?",
        "Just because you're going through this doesn't mean you have to experience it alone.",
        "I'm always here for you.",
        "You are special. Never stop being proud of who you are."
    ]);
}

yesBtn.onclick = function() {
    handleButtonClick([
        "Good!",
        "Keep smiling...Okay?",
        "Keep your face always toward the sunshine, and shadows will fall behind you.",
        "It is never too late to be what you might have been.",
        "You will face defeats in life, but never let yourself be defeated."
    ]);
}

