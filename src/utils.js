export const makeElement = ({
    tag = 'div',
    innerText,
    id,
    classes,
    placeholder,
    type,
    value,
    innerHTML,
    style,
    // dataName,
}) => {
    let element = document.createElement(tag);
    if (innerText) element.innerText = innerText;
    if (id) element.id = id;
    if (classes) element.classList.add(...classes);
    if (placeholder) element.placeholder = placeholder;
    if (type) element.type = type;
    if (value) element.value = value;
    if (innerHTML) element.innerHTML = innerHTML;
    if (style) element.style.cssText = style;
    // if (dataName) element.setAttribute('data-station-name', dataName);
    return element;
};

export const appendChilds = (parent, childs) => {
    childs.forEach((child) => {
        parent.appendChild(child);
    });
};

export const clearAllContents = (parents) => {
    parents.textContent = '';
};