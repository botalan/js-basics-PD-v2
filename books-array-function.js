let books = [
    {title: "Dog Town", author: "Luize Pastore", isAvailable: true},
    {title: "Sleepy Hallow", author: "Washington Irving", isAvailable: false}
]

function printBooksInfo(attribute){
for(let i = 0; i < books.length; i++){
    if(attribute === "title"){
        console.log(books[i].title)
    }else if(attribute === "author"){
        console.log(books[i].author)
}
}
}
printBooksInfo("title")
printBooksInfo("author")