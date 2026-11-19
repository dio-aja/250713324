var targetNode;

function init() {
  targetNode = document.getElementById("hasil").firstChild;
}

function hitungKurs(id) {
  var inputEl = document.getElementById(id);
  var hasilUsd = parseFloat(inputEl.value) / 18246;
  targetNode.data = hasilUsd.toFixed(2);

  var listBaru = document.createElement("li");
  var teksRiwayat = document.createTextNode("Rp " + inputEl.value + " = US$" + hasilUsd.toFixed(2));
  listBaru.appendChild(teksRiwayat);

  var listRiwayat = document.getElementById("riwayat");
  listRiwayat.appendChild(listBaru);
}