window.onload = function () {
    document.getElementById("date").textContent = `Server Time: ${Date()}`
}

window.onload = function () {
    const myJson = fetch("./quetions.json")
        .then(response => response.json())
        .then(data => console.log(data))
}

function addQuestion() {

    // Creating a new list item
    let liNode = document.createElement("li")

    // Create a new text node for the question
    let liText = document.createTextNode(
        document.getElementById("question").value
    )

    let liTextDiv = document.createElement("div")
    liTextDiv.append(liText)
    liTextDiv.classList.add("red-test")

    // Create a new tag node for the question
    let liTagsList = document.createTextNode(
        document.getElementById("tags").value.split(",")
    )



    // Create a line break element
    let lineBreak = document.createElement("br");


    liNode.append(liTextDiv)
    liNode.append(lineBreak)
    liNode.append(liTagsList)

    document.getElementById("taskList").appendChild(liNode)

}
