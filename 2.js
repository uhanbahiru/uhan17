function cek(username) {
		var nama = /^[a-z_.] (8, 12)$/;
		return nama.test(username);
		}
if (cek("uhan_bahiru")){
	alert("username diterima");
}
else
	alert("ganti username!");
	
function uji (password) {
	var pass = /^[a-z]+[0-9]+[a-z][0-9]+[a-z]+[0-9]+[a-z]+[0-9]+[a-z]s/;
	return pass.test(password);
}

if (uji("b4b1b3go")){
	alert("password benar");
}
else
	alert("password salah");
	