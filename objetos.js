console.clear()

let carro = {
    cor: "verde",
    placa:  "SUP1RA",
    turbo: false,
    modelo: "Audi A3 Sportback",
    areofoicer: true
}

let carro2 = {
    cor: "preto",
    placa:  "2y638f",
    turbo: true,
    modelo: "BMW i3",
    areofoicer: false
}

let carro3 = {
    cor: "preto",
    placa:  "h32189f",
    turbo: true,
    modelo: "Ferrari 296 GTB",
    areofoicer: true
}

let carro4 = {
    cor: "vermelho",
    placa:  "uiy12",
    turbo: true,
    modelo: "Honda Civic",
    areofoicer: true
}

let carro5 = {
    cor: "azul",
    placa:  "q3q112",
    turbo: false,
    modelo: "Land Rover Discovery",
    areofoicer: false
}

delete carro.placa

delete carro2.cor

delete carro3.turbo

delete carro4.modelo

delete carro5.areofoicer

for (let propriedade in carro) {
    
    console.log(`${propriedade} : ${carro[propriedade]}`)
}

for (let propriedade in carro2) {
    
    console.log(`${propriedade} : ${carro2[propriedade]}`)
}

for (let propriedade in carro3) {
    
    console.log(`${propriedade} : ${carro3[propriedade]}`)
}

for (let propriedade in carro4) {
    
    console.log(`${propriedade} : ${carro4[propriedade]}`)
}

for (let propriedade in carro5) {
    
    console.log(`${propriedade} : ${carro5[propriedade]}`)
}

console.log(carro, carro2, carro3, carro4, carro5)



function musica (nome, artista, duracao, curtidas, genero ) {
    this.nome = nome;
    this.artista = artista;
    this.lancamento = duracao;
    this.curtidas = curtidas;
    this.genero = genero;
}

let music = new musica(
    "ASSOBIO DERRUBA HELIOPOLIS",
    "DJ KS 011",
    "3:07mim",
    "80K", 
    "funck"
)
    
let music2 = new musica(
    "MEGA AGUDO - BOLINHA DE GOLF",
    "CLUB DA D27",
    "3:14mim",
    "78K", 
    "funck"
)

let music3 = new musica(
    "BEAT MATA PROFESSORA 2.0",
    "DJ KS 011",
    "2:15mim",
    "100K", 
    "funck"
)

let music4 = new musica(
    "BEAT MATA PROFESSORA",
    "DJ KS 011",
    "2:15mim",
    "120K", 
    "funck"
)

let music5 = new musica(
    "MULHER DE VERDADE GOSTA MESMO É DE ??",
    "DJ NEGRESKO",
    "3:00mim",
    "96K", 
    "funck"
)

let music6 = new musica(
    "MONTAGEM ELIGITE AEMULATIO",
    "DJ JEAN 011",
    "1:36mim",
    "241K", 
    "funck"
)

let music7 = new musica(
    "SET DJ KS 011 1.0",
    "DJ KS 011",
    "7:40mim",
    "127K", 
    "funck"
)

let music8 = new musica(
    "SET FINAL DO ANO 3",
    "DJ KS 011 e MC GW",
    "2:24mim",
    "231K", 
    "funck"
)

let music9 = new musica(
    "MONTAGEM GAME 196",
    "DJ BLAKES",
    "3:45mim",
    "237K", 
    "funck"
)

let music10 = new musica(
    "A LENDA - VIAGEM MULTIVERSAL DE HELIOPOLIS",
    "DJ BLAKES e MANDELÃO ORIGINAL",
    "2:46mim",
    "153K", 
    "funck"
)


for (let propriedade in music) {
    
    console.log(`${propriedade} : ${music[propriedade]}`)
}

for (let propriedade in music2) {
    
    console.log(`${propriedade} : ${music2[propriedade]}`)
}

for (let propriedade in music3) {
    
    console.log(`${propriedade} : ${music3[propriedade]}`)
}

for (let propriedade in music4) {
    
    console.log(`${propriedade} : ${music4[propriedade]}`)
}

for (let propriedade in music5) {
    
    console.log(`${propriedade} : ${music5[propriedade]}`)
}

for (let propriedade in music6) {
    
    console.log(`${propriedade} : ${music6[propriedade]}`)
}

for (let propriedade in music7) {
    
    console.log(`${propriedade} : ${music7[propriedade]}`)
}

for (let propriedade in music8) {
    
    console.log(`${propriedade} : ${music8[propriedade]}`)
}

for (let propriedade in music9) {
    
    console.log(`${propriedade} : ${music9[propriedade]}`)
}

for (let propriedade in music10) {
    
    console.log(`${propriedade} : ${music10[propriedade]}`)
}