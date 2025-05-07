// tambah paragraf
function tambah() {
    let p = document.createElement("p");
    p.innerText = "paragraf yang akan ditambahkan dan dihapus"
    p.id = "penghapusan";
    document.getElementById("container").appendChild(p);
}

function hapus() {
    let container= document.getElementById("container");
    let target = document.getElementById("penghapusan");
    if (target) {
        container.removeChild(target);
    }
    else{
        alert("paragraf tidak ditemukan!")
    }
}
