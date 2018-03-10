/**
Buatlah sebuah algoritma untuk kasus berikut:
Seorang pengajar sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:
 - Nilai 80 - 100: A
 - Nilai 65 - 79: B
 - Nilai 50 - 64: C
 - Nilai 35 - 49: D
 - Nilai 0 - 34: E

 Tampilkan desc nilai dan nama siswa saat pengajar tersebut memasukkan nilai dan nama yang dia inginkan.

NOTED:
Jika nilai mahasiswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
**/

STORE "Nama" with value 'Ari Supriatna'
STORE "Nilai" with value 80 

IF 'Nilai' GREATER THAN TO 100
    THEN 'Nilai Invalid'
ELSE IF 'Nilai' GREATER THAN EQUALS TO 80 OR 'Nilai' LESS THAN EQUALS TO 100
    THEN 'A'
ELSE IF 'Nilai' GREATER THAN EQUALS TO 65 OR 'Nilai' LESS THAN EQUALS TO 79
    THEN 'B'
ELSE IF 'Nilai' GREATER THAN EQUALS TO 50 OR 'Nilai' LESS THAN EQUALS TO 64
    THEN 'C'
ELSE IF 'Nilai' GREATER THAN EQUALS TO 35 OR 'Nilai' LESS THAN EQUALS TO 49
    THEN 'D'
ELSE IF 'Nilai' GREATER THAN EQUALS TO 0 OR 'Nilai' LESS THAN EQUALS TO 34
    THEN 'E'
ELSE IF 'Nilai' LESS THAN 0
    THEN 'Nilai Invalid'
END IF