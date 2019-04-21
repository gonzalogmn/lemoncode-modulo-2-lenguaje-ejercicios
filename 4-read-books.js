// Operadores
const isBookRead = (books, titleToSearch) =>  {
    const book = books.find(book => book.title == titleToSearch);
    return book ? book.isRead : false; 
};
// ----------

const books = [
    {
        title: "1984",
        isRead: true
    },
    {
        title: "The Godfather",
        isRead: false
    },
    {
        title: "Dracula",
        isRead: true
    }
]


console.log(isBookRead(books, "Dracula"));
console.log(isBookRead(books, "The Godfather"));
console.log(isBookRead(books, "1984"));
console.log(isBookRead(books, "Unknown book"));