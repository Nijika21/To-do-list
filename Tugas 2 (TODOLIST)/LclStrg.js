// local storage
const storageKey = 'todoItems';

document.addEventListener('DOMContentLoaded', () => {
    const savedItems = JSON.parse(localStorage.getItem(storageKey)) || [];
    savedItems.forEach(item => {
        createTodoItem(item.text, item.id);
    });
});

function saveToStorage(text) {
    const items = getItemsFromStorage();
    const newItem = { 
        id: Date.now(), 
        text: text 
    };
    items.push(newItem);
    localStorage.setItem(storageKey, JSON.stringify(items));
    return newItem.id;
}

function getItemsFromStorage() {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
}

function deleteFromStorage(id) {
    const items = getItemsFromStorage();
    const updatedItems = items.filter(item => item.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(updatedItems));
}

function clearStorage() {
    localStorage.removeItem(storageKey);
}

function createTodoItem(text, id) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = id;

    const span = document.createElement("span");
    span.textContent = text;
    li.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.className = "hapus-item";
    deleteBtn.onclick = () => {
        li.remove();
        deleteFromStorage(id);
    };
    li.appendChild(deleteBtn);

    document.getElementById("output_container").appendChild(li);
}

window.todoStorage = {
    saveToStorage,
    clearStorage,
    createTodoItem
};