//click
document.querySelector("#lightbulb1").addEventListener("click", e => e.target.style.backgroundColor = "black");

//keys
const keydown = key => {
    key = key.toUpperCase();

    //colors
    const keyColor = document.querySelector("#key");

    if (key === 'A') {
        return keyColor.style.backgroundColor = "purple";
    } else if (key === 'S') {
        return keyColor.style.backgroundColor = "gray";
    } else if (key === 'D') {
        return keyColor.style.backgroundColor = "pink";
    }

    //append
    const createKey = (key, color) => {
        const keyAppend = document.createElement("div");
    
        Object.assign(keyAppend.style, {
            display         : "flex",
            justifyContent  : "center",
            alignItems      : "center",
    
            width           : "200px",
            height          : "200px",
            border          : "4px black solid",
            margin          : "10px",
            fontSize        : "100px",
            backgroundColor : color
        });

        keyAppend.appendChild(document.createTextNode(key));
    
        document.querySelector("#keys-append").appendChild(keyAppend);
    };

    if (key === 'Q') {
        return createKey(key, "lightblue");
    } else if (key === 'W') {
        return createKey(key, "orange");
    } else if (key === 'E') {
        return createKey(key, "brown");
    }
};

//desktop
document.addEventListener("keydown", e => keydown(e.key));

//mobile
document.querySelectorAll(".keyboard input").forEach(e => {
    e.addEventListener("input", e => keydown(e.target.value.slice(-1)));
});
