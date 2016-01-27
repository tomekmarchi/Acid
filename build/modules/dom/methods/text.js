//text
var nodeTextContent = domPropertyMethod('textContent'),
    nodeText = domPropertyMethod('innerText'),
    nodeValue = domPropertyMethod('nodeValue'),
    textValue = (node, value, other) => {
        var child = firstNode(node, value, other);
        if (child) {
            return nodeValue(child, value, other);
        }
        return nodeTextContent(node, value, other);
    };
