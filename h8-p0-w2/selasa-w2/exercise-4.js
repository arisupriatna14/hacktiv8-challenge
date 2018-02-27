var tanggal = 14;
var bulan = 8;
var tahun = 1999;
var keterangan = " ";

switch(bulan) {
	case 1: {
		keterangan = "Januari";
		break;
	}
	case 2: {
		keterangan = "Februari"
		break;
	}
	case 3: {
		keterangan = "Maret"
		break;
	}
	case 4: {
		keterangan = "April";
		break;
	}
	case 5: {
		keterangan = "Mei"
		break;
	}
	case 6: {
		keterangan = "Juni";
		break;
	}
	case 7: {
		keterangan = "Juli";
		break;
	}
	case 8: {
		keterangan = "Agustus";
		break;
	}
	case 9: {
		keterangan = "September";
		break;
	}
	case 10: {
		keterangan = "Oktober";
		break;
	}
	case 11: {
		keterangan = "November";
		break;
	}
	case 12: {
		keterangan = "Desember";
	}
	default: {
		console.log("Bulang tidak tersedia");
	}
}

console.log(tanggal + " " + keterangan + " " + tahun);