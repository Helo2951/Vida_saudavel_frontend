const sendButton = document.querySelector("#sendButton")
sendButton.addEventListener("click", sendDataToServer)

export async function sendDataToServer(e) {
    e.preventDefault();
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    if (name === '' || email === '') {
        alert("Preencha os campos para continuar!");
        return 
    }

    const data = {
        name,
        email,
        message,
    }

    await fetch(`http://localhost:3333/clients`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)  
    }).then((response) => {
        if (!response.ok){
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json()
    }).then((responseData) => {
        console.log('Dados enviados com sucesso: ', responseData);
    }).catch((error) => {
        console.error('Erro ao enviar os dados: ', error)
    })
}
