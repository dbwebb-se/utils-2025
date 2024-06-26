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

export {
    parseYoutube,
    parseInfo,
    parseWarning,
};
