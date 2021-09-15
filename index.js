const sw = require('stopword')

;(async() => {
  const inputKalimat = 'Dua hari kemudian aku dan Seli memutuskan menonton Ali berlatih. Aku akhirnya memang tahu kenapa Ali bisa bergabung dengan tim basket. Lihatlah, sepuluh kali Ali diminta melemparkan bola ke keranjang dari jarak 6,75 meter, dari area tiga poin, sewaktu latihan shooting, dia tidak gagal walau sekali. Juga saat mendribel bola, gerakan Ali lincah, tidak ada yang bisa merebut bola darinya. Kapten tim dan murid kelas dua belas bertepuk tangan menyemangati, menepuk-nepuk bahu Ali. Itu hebat sekali, bahkan pemain profesional butuh latihan panjang untuk melakukannya, Tapi Ali." Jangankan melihat dia memegang bola basket, di benakku, yang ada hanyalah bayangan dia sering diusir guru karena bertingkah saat pelajaran olahraga. Aku menghela napas perlahan. Pasti ada sesuatu di baliknya. Si biang kerok ini pasti berbuat curang.'
  const inputKalimatSplit = inputKalimat.split(' ')
  const inputKalimatSW = sw.removeStopwords(inputKalimatSplit, sw.id)
  const inputKalimatRemove = (inputKalimatSplit.filter(kata => !(inputKalimatSW.includes(kata)))).map(data => data.toLowerCase())
  console.log(`-> Berhasil menghapus "${inputKalimatSplit.length - inputKalimatSW.length}" kata...\n-`)
  console.log(`+ Kalimat Asli :\n${inputKalimatSplit.join(' ')}\n-`)
  console.log(`+ Kalimat Stopword :\n${inputKalimatSW.join(' ')}\n-`)
  console.log(`+ Kata Yang Dihapus :\n${[...new Set(inputKalimatRemove)]}`)
})()