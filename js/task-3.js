function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddigWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
    const totalWidth = contentWidth + paddigWidth * 2 + borderWidth * 2;
    return totalWidth;

}

console.log(getElementWidth("50px", "8px", "4px"));