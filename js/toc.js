export default function createToc(tocContainer, container) {
    const headings = container.querySelectorAll("h2, h3, h4, h5");
    let tocElementString = "";    

    for (let i = 0; i < headings.length; i++) {
        let element = headings[i];

        let elementLink = `<a href="#${element.id}">${element.textContent}</a>`

        element.innerHTML = elementLink;

        tocElementString += `<li class="toc-${element.tagName}">${elementLink}</li>`
    }

    tocContainer.innerHTML = `<ul>${tocElementString}</ul>`;
}