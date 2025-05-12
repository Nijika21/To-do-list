// tugas ke 2
function tambahver3() {
    let teks = document.getElementById("inputver3").value;

    if(!teks.trim()) {
        alert("Masukkan teks terlebih dahulu!");
        return;
    }

    let oli = document.createElement("oli");
    oli.className = "todo-item";

    let ospan = document.createElement("ospan");
    ospan.textContent = teks;
    oli.appendChild(ospan);

    let hapusButton = document.createElement("button");
    hapusButton.textContent = "Hapus";
    hapusButton.className = "hapus-item";
    hapusButton.onclick = function() {
        oli.remove();
        // fix bug bruh
        adjustScroll();
    };
    oli.appendChild(hapusButton);

    document.getElementById("container_output3").appendChild(oli);
    document.getElementById("inputver3").value = "";

    // scroll saat item melebihi kartu
    scrollToBottom();
}

function resetver3(){
    let container = document.getElementById("container_output3")
    if (container.children.length > 0) {
        if (confirm("Apakah Anda yakin ingin menghapus semua data?")) {
            container.innerHTML = ""
        }
    } else {
        alert("Paragraf yang ingin direset tidak ditemukan di versi ke-3!")
    }
}