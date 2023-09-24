function updateDate() {
    document.getElementById("date").textContent = Date()
}

window.onload = function () {
    document.getElementById("date").textContent = Date()
}

function alertMe() {
    window.alert('THIS IS AN ALERT!')
}

/**
 * Creates a button node
 * @param text
 * @returns {HTMLButtonElement}
 */
function createButtonNode(text, node) {

    let buttonNode = document.createElement("button")
    let buttonNodeText = document.createTextNode(text)
    buttonNode.appendChild(buttonNodeText)
    buttonNode.addEventListener("click", function(){edit(node)})
    return buttonNode
}

/**
 * Creates and adds a table to the page
 */
function addTable() {
    const tableNode = document.createElement("table");

    let total = 3;

    for (let i=0; i<total; i++) {
        let trNode = document.createElement("tr")
        let tdNode = document.createElement("td");
        let tdText = document.createTextNode(`Cell (${i+1},0) `);
        let tdButton = createButtonNode('Edit Text', tdNode)

        tdNode.appendChild(tdText);
        tdNode.appendChild(tdButton);
        trNode.appendChild(tdNode);
        tableNode.appendChild(trNode)
    }

    document.getElementById("table").appendChild(tableNode)
}

/**
 * Edits the node when clicked
 * @param node
 */
function edit(node) {
    let newNode = document.createElement("input")
    newNode.type = "text"
    node.replaceChild(newNode, node.childNodes[0])
}

