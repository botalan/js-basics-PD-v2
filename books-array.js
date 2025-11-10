let books = [
    {title: "Dog Town", author: "Luize Pastore", isAvailable: true},
    {title: "Sleepy Hallow", author: "Washington Irving", isAvailable: false}
]
for(let i=0; i < books.length; i++){
    console.log("Nosaukums: " + books[i].title + " (pieejama: " + books[i].isAvailable + ")")
}