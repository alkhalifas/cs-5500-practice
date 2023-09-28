window.onload = function() {

    const list = document.getElementById('Top5');
    const inp = document.getElementById('inp');
    const btn = document.getElementById('btn');

    list.innerHTML = '';
    const myHistory = [];
    const MAX_HISTORY = 5;

    btn.onclick = () => {
        if (inp.value !== '') {

            // Push value into the list
            myHistory.push(inp.value)

            list.innerHTML = '';

            // loop through the array, and display all the search terms in the list
            for (const itemText of myHistory) {

                // create list li element
                const listItem = document.createElement('li');

                // assign textContent
                listItem.textContent = itemText;

                // append to list
                list.appendChild(listItem);
            }

        }

        // maintain history if its greater than of equal to 5
        if (myHistory.length >= MAX_HISTORY) {
            // shift to remove element
            myHistory.shift()
        }

        inp.value = '';

        inp.focus();
    }
}