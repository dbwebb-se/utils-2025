function parseYoutube(container) {
    const treeToParse = container.innerHTML;
    const regexp = /\<p\>\[YOUTUBE src\=([a-zA-Z0-9\-]+)\s.*caption=”(.*)”.*\]\<\/p\>/gi;
    const newTree = treeToParse.replace(
        regexp,
        "<div class='embed-container'><iframe src='https://www.youtube.com/embed/$1' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe></div><p>$2</p>"
    );

    container.innerHTML = newTree;
}

function parseInfo(container) {
    const treeToParse = container.innerHTML;
    const regexp = /\<p\>\[INFO\]([.\s\S]*)\[\/INFO\]<\/p\>/gim;
    const newTree = treeToParse.replace(
        regexp,
        "<div class='info'>$1</div>"
    );

    container.innerHTML = newTree;
}

function parseWarning(container) {
    const treeToParse = container.innerHTML;
    const regexp = /\<p\>\[WARNING\]([.\s\S]*)\[\/WARNING\]<\/p\>/gim;
    const newTree = treeToParse.replace(
        regexp,
        "<div class='warning'>$1</div>"
    );

    container.innerHTML = newTree;
}

function parseImg(container) {
    const treeToParse = container.innerHTML;
    const regexp = /\<p\>\[FIGURE src=(.*)\s.*]\<\/p\>/gim;
    const newTree = treeToParse.replace(
        regexp,
        `<picture>
            <img src="https://dbwebb.se/$1" />
        </picture>
        `
    );

    container.innerHTML = newTree;
}

function parseAsciinema(container) {
    const treeToParse = container.innerHTML;
    const regexp = /\<p\>\[ASCIINEMA src=(.*)\s.*]\<\/p\>/gim;
    const newTree = treeToParse.replace(
        regexp,
        `<script src="https://asciinema.org/a/$1.js" id="asciicast-$1" async></script>`
    );

    container.innerHTML = newTree;
}

export {
    parseYoutube,
    parseInfo,
    parseWarning,
    parseImg,
    parseAsciinema,
};
