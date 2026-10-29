function fn_ValForm(){
    var msg = "";
    var Iregex = "^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$";
    var sNama = document.getElementById("nama");
    var sEmail = document.getElementById("email");
    var iUmur = document.getElementById("umur");
    var sKategori = "";
    var sPilihan = document.getElementById("kategori");

    if(sNama == ""){
        msg += "\nNama tidak boleh kosong";
    }
    if(sEmail == ""){
        msg += "\nEmail tidak boleh kosong";
    }
    if(iUmur == ""){
        msg += "\nUmur tidak boleh kosong";
    }
    if(sEmail != Iregex){
        msg += "\nEmail hanya menerima huruf kecil";
    }
    if(sPilihan == ""){
        msg += "\nPilihan tidak boleh kosong";
    }

    if(iUmur <= 14){
        sKategori = "Kategori Junior";
    }else{
        sKategori = "Kategori Senior";
    }
    switch(sPilihan){
        case "C":
            
            break;
    }

    if(msg != ""){
        alert("Peringatan: " + msg);
        return false;
    }else{
        return true;
    }
}