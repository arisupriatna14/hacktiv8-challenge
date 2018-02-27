// [Exercise-3] - Mengenal penggunaan Conditional if-else dalam JavaScript
var nama = "Ari Supriatna";
var peran = " ";

if (nama == " ") {
   console.log("Nama harus di isi!");
} 
   else if (peran == " ") {
      console.log("Hallo " + nama + " pilih peranmu untuk memulai game!");
   }
      else if (peran == "Kevin") {
         console.log("Selamat datang di Dunia Proxytia " + nama);
         console.log("Hallo " + peran + " " + nama + ", Kamu dapat menyerang dengan senjatamu!");
      }
         else if (peran == "Stuart") {
            console.log("Selamat datang di Dunia Proxytia " + nama);
            console.log("Hallo " + peran + " " + nama + ", Kamu dapat menyerang dengan senjatamu!");
         }
            else if (peran == "Bob") {
               console.log("Selamat datang di Dunia Proxytia " + nama);
               console.log("Hallo " + peran + " " + nama + ", Kamu dapat menyerang dengan senjatamu!");
            } 
               else if (peran == "Gru") {
                  console.log("Selamat datang di Dunia Proxytia " + nama);
                  console.log("Hallo " + peran + " " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
               }