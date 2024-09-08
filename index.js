const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const myh2 = document.getElementById("myh2");
const myh3 = document.getElementById("myh3");


noBtn.onclick = function(){
    myh2.textContent = "";

    stylesheet = document.styleSheets[0];

    myh2.style.display = "none";

    yesBtn.style.display = "none";

    noBtn.style.display = "none";

    rule = ".bg-text {  animation: expand 1s forwards ease-out; }";

    stylesheet.insertRule(rule, stylesheet.cssRules.length);

    setTimeout(function() {
        document.getElementById("myh3").textContent = "Hey I know it's hard....";
        }, 1000);

    setTimeout(function() {
    document.getElementById("myh3").textContent = "But you have to keep going...okay?";
    }, 1000 * 4);

    setTimeout(function() {
        document.getElementById("myh3").textContent = "Just because you're going through this doesn't mean you have to experience it alone.";
    }, 1000 * 7.5);

    setTimeout(function() {
        document.getElementById("myh3").textContent = "I'm always here for you.";
    }, 1000 * 13);

    setTimeout(function() {
        document.getElementById("myh3").textContent = "You are special. Never stop being proud of who you are.";
        rule = "#myh3 {  animation: blurText 1.2s forwards ease-in-out; }";
        stylesheet.insertRule(rule, stylesheet.cssRules.length);
    }, 1000 * 16); 
    
    noBtnClicked = true;
}

yesBtn.onclick = function(){
    myh2.textContent = "";

    stylesheet = document.styleSheets[0];

    myh2.style.display = "none";

    yesBtn.style.display = "none";

    noBtn.style.display = "none";

    rule = ".bg-text {  animation: expand 1s forwards ease-out; }";

    stylesheet.insertRule(rule, stylesheet.cssRules.length);

    setTimeout(function() {
        document.getElementById("myh3").textContent = "Good!";
        }, 1000);

    setTimeout(function() {
    document.getElementById("myh3").textContent = "Keep smiling...Okay?";
    }, 1000 * 3);

    setTimeout(function() {
        document.getElementById("myh3").textContent = "Keep your face always toward the sunshine, and shadows will fall behind you.";
    }, 1000 * 6);

    setTimeout(function() {
        document.getElementById("myh3").textContent = "It is never too late to be what you might have been.";
    }, 1000 * 11);

    setTimeout(function() {
        document.getElementById("myh3").textContent = "You will face many defeats in your life, but never let yourself be defeated.";
        rule = "#myh3 {  animation: blurText 1.2s forwards ease-in-out; }";
        stylesheet.insertRule(rule, stylesheet.cssRules.length);
    }, 1000 * 15); 
    
}

