function texttool(action) {
    const inputElement = document.getElementById("input-box")
    const resultElement = document.getElementById("result-box")

    switch (action) {
        case 'uppercase':
            resultElement.innerText = inputElement.value.toUpperCase()
            break;

        case 'CapitalizeCase':
            resultElement.innerText = inputElement.value.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
            break;

        case 'lowercase':
            resultElement.innerText = inputElement.value.toLowerCase()
            break;

        case 'charcount':
            resultElement.innerText = `CHARACTER-COUNT : ${inputElement.value.length}`
            break;

        case 'wordcount':
            resultElement.innerText = `WORD-COUNT :${inputElement.value.split(" ").length}`
            break;

        default:
            inputElement.value = ""
            resultElement.innerText = ""
            break;
    }
}