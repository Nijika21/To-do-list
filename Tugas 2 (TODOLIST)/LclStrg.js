// local storage
document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
});

const storageKey = 'todoItems';

function saveToStorage(text) {
    const items = JSON.parse(localStorage.getItem(storageKey)) || [];
    items.push({ id: Date.now(), text });
    localStorage.setItem(storageKey, JSON.stringify(items));
}

function loadFromStorage() {
    const items = JSON.parse(localStorage.getItem(storageKey)) || [];
    items.forEach(item => render(item.text, item.id));
}

function removeFromStorage(id) {
    let items = JSON.parse(localStorage.getItem(storageKey)) || [];
    items = items.filter(item => item.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(items));
}

function clearStorage() {
    localStorage.removeItem(storageKey);
}

function render(text, id) {
    const oli = document.createElement("li");
    oli.className = "todo-item";
    oli.dataset.id = id;

    const ospan = document.createElement("span");
    ospan.textContent = text;
    oli.appendChild(ospan);

    const hapusButton = document.createElement("button");
    hapusButton.textContent = "Hapus";
    hapusButton.className = "hapus-item";
    hapusButton.onclick = () => {
        oli.remove();
        removeFromStorage(id);
    };
    oli.appendChild(hapusButton);

    document.getElementById("output_container").appendChild(oli);
}