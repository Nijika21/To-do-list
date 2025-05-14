// tugas ke 2
function tambah() {
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
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        tambah()
    }
})

function reset() {
    const container = document.getElementById("output_container");
    if (container.children.length === 0) {
        alert("Paragraf tidak ditemukan!");
        return;
    }

    if (confirm("Apakah Anda yakin ingin menghapus semua data?")) {
        container.innerHTML = "";
        window.todoStorage.clearStorage();
    }
}