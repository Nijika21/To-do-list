document.getElementById("info").addEventListener('click', function() {
    alert("Versi 1: Sesuai dengan PPT\n" + "Versi 2: Penyesuaian dengan input\n" + "Versi 3: Penyesuaian dengan input, hapus button di list, dan reset value"
    );
});

// versi 1 (sesuai dengan PPT)
function tambahver1() {
    let teks = "paragraf ini akan dihapus"
    let p = document.createElement("p");
    // p.style.margin = "0 20px"
    p.innerText = teks
    p.id = "penghapusan1";
    document.getElementById("container_output1").appendChild(p)
}

function hapusver1() {
    let container= document.getElementById("container_output1");
    let target = document.getElementById("penghapusan1");
    if (target) {
        container.removeChild(target);
    }
    else{
        alert("Paragraf tidak ditemukan di versi ke-1!")
    }
}

// Versi 2 (penyesuaian dengan input)
function tambahver2() {
    let teks = document.getElementById("inputver2").value
    if (!teks.trim()) {
        alert("Masukkan teks terlebih dahulu!");
        return;
    }

    let p = document.createElement("p");
    p.innerText = teks
    p.id = "penghapusan2";
    document.getElementById("container_output2").appendChild(p);
    document.getElementById("inputver2").value = "";
}

function hapusver2() {
    let container= document.getElementById("container_output2");
    let target = document.getElementById("penghapusan2");
    if (target) {
        container.removeChild(target);
    }
    else{
        alert("Paragraf tidak ditemukan di versi ke-2!")
    }
}

// Versi 3 (penyesuaian dengan input, hapus button di list, dan reset value)
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