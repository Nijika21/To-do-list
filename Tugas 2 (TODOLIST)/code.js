// versi 1 (sesuai PPT)
{ function tambahver1() {
    let teks = "paragraf ini akan dihapus"
    let p = document.createElement("p");
    p.innerText = teks
    p.id = "penghapusan1";
    document.getElementById("container_output1").appendChild(p);
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
    document.getElementById("inputver2").value - "";
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