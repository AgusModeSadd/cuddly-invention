let isAdmin = false;
let jawabanList = [];

function masuk() {
    let nama = document.getElementById('nama').value;
    if (nama === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    if (nama === "123123") {
        isAdmin = true;
        document.querySelector('.page1').style.display = 'none';
        document.querySelector('.adminPage').style.display = 'block';
    } else {
        document.querySelector('.page1').style.display = 'none';
        document.querySelector('.page2').style.display = 'block';
    }
}

function jawab(jawaban) {
    let alasan = document.getElementById('alasan').value;
    let nama = document.getElementById('nama').value || 'Anonim';

    jawabanList.push({ nama, jawaban, alasan });

    document.querySelector('.page2').style.display = 'none';
    document.querySelector('.thankYouPage').style.display = 'block';
}

function lihatJawaban() {
    let jawabanListElement = document.getElementById('jawabanList');
    jawabanListElement.innerHTML = '';

    jawabanList.forEach((entry, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${entry.nama}, ${entry.jawaban}`;
        jawabanListElement.appendChild(li);
    });

    document.querySelector('.adminPage').style.display = 'none';
    document.querySelector('.jawabanPage').style.display = 'block';
}

function keluar() {
    window.location.href = "https://chat.whatsapp.com/FlhdUu5f2lG0OeugzKaW7u";
}