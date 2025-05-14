// tugas ke 2
function tambah() {
<<<<<<< HEAD
    const input = document.getElementById("input");
    const text = input.value.trim();

    if (!text) {
        alert("Masukkan teks terlebih dahulu!");
        return;
    }

    const id = window.todoStorage.saveToStorage(text);
    window.todoStorage.createTodoItem(text, id);
    input.value = "";
    input.focus();
}

function reset() {
    const container = document.getElementById("output_container");
    if (container.children.length === 0) {
        alert("Paragraf tidak ditemukan!");
        return;
    }

    if (confirm("Apakah Anda yakin ingin menghapus semua data?")) {
        container.innerHTML = "";
        window.todoStorage.clearStorage();
=======
    let teks = document.getElementById("input").value;
    let inputfield = document.getElementById("input");

    if(!teks.trim()) {
        alert("Masukkan teks terlebih dahulu!");
        return;
    }

    let oli = document.createElement("li");
    oli.className = "todo-item";

    let ospan = document.createElement("span");
    ospan.textContent = teks;
    oli.appendChild(ospan);

    let hapusButton = document.createElement("button");
    hapusButton.textContent = "Hapus";
    hapusButton.className = "hapus-item";
    hapusButton.onclick = function() {
        oli.remove();
    };
    oli.appendChild(hapusButton);

    document.getElementById("output_container").appendChild(oli);
    document.getElementById("input").value = "";
    inputfield.focus()
}

function reset(){
    let container = document.getElementById("output_container")
    if (container.children.length > 0) {
        if (confirm("Apakah Anda yakin ingin menghapus semua data?")) {
            container.innerHTML = ""
        }
    } else {
        alert("Paragraf tidak ditemukan!")
>>>>>>> 13fd211 (pull)
    }
}