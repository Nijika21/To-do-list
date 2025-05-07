// tambah paragraf
function tambah() {
    let teks = document.getElementById("input").value
    let p = document.createElement("p");
    p.innerText = teks
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
