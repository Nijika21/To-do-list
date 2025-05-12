// tugas ke 2
function tambah() {
    const teks = document.getElementById("input").value.trim();
    const inputfield = document.getElementById("input");

    if (!teks) {
        alert("Masukkan teks terlebih dahulu!");
        return;
    }

    const id = Date.now();
    render(teks, id);
    saveToStorage(teks);
    inputfield.value = "";
    inputfield.focus();
}

function reset() {
    if (document.getElementById("output_container").children.length > 0) {
        if (confirm("Apakah Anda yakin ingin menghapus semua data?")) {
            document.getElementById("output_container").innerHTML = "";
            clearStorage();
        }
    } else {
        alert("Paragraf tidak ditemukan!");
    }
}