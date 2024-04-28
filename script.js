// Array para armazenar os itens do estoque
let stock = [];

// Função para adicionar um item ao estoque
function addItem(event) {
    event.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value);

    if (itemName && itemQuantity) {
        const item = {
            name: itemName,
            quantity: itemQuantity
        };

        stock.push(item);
        displayItems();
        document.getElementById('form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para exibir os itens do estoque na página
function displayItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    stock.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name} - Quantidade: ${item.quantity}</span>
            <button onclick="editItem(${index})">Editar</button>
            <button onclick="deleteItem(${index})">Deletar</button>
        `;
        itemList.appendChild(li);
    });
}

// Função para editar um item do estoque
function editItem(index) {
    const newName = prompt('Digite o novo nome do item:');
    const newQuantity = parseInt(prompt('Digite a nova quantidade:'));

    if (newName && newQuantity) {
        stock[index].name = newName;
        stock[index].quantity = newQuantity;
        displayItems();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para deletar um item do estoque
function deleteItem(index) {
    const confirmation = confirm('Tem certeza que deseja deletar este item?');
    if (confirmation) {
        stock.splice(index, 1);
        displayItems();
    }
}

// Event listener para o formulário de adição de item
document.getElementById('form').addEventListener('submit', addItem);

// Exibindo os itens iniciais (caso existam)
displayItems();
