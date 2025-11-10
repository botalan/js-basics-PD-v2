let club = [
     {vārds: "Artis", uzvārds: "Vācietis", loma: "leader", stundas: 6},
     {vārds: "Aleksis", uzvārds: "Ritvars", loma: "leader", stundas: 4},
     {vārds: "Oskars", uzvārds: "Krinbergs", loma: "member", stundas: 7},
     {vārds: "Adrians", uzvārds: "Jansons", loma: "member", stundas: 5},
     {vārds: "Rihards", uzvārds: "Poters", loma: "member", stundas: 8},
     {vārds: "Jānis", uzvārds: "Ozols", loma: "member", stundas: 10},
     {vārds: "Aivars", uzvārds: "Raims", loma: "member", stundas: 12}
]
for(let i = 0; i < club.length; i++){
    if(club[i].loma === "leader"){
        console.log(club[i].vārds)
    }
}
sum = 0
for(let x = 0; x < club.length; x++){
    sum += club[x].stundas
}
console.log(sum)