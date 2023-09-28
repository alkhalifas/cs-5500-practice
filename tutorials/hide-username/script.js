window.onload = function hideEmail(email) {

    const list = document.getElementById('emails')

    list.innerHTML = '';

    const emails = [
        'jon@northeastern.edu',
        'ari@khoury.edu',
        'jk_neu.edu',
        'jsned@',
        'aime@neu.edu'];

    for (const email of emails) {
        if(email) {
            const listItem = document.createElement('li');
            const atIndex = email.indexOf('@')
            const endOfEmail = email.slice(atIndex)
            console.log("atIndex: ", atIndex)
            listItem.textContent = `*****${endOfEmail}`
            list.appendChild(listItem);
        }
    }
}