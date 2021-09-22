const { findAccountById } = require("./accounts");

function findAuthorById(authors, id) {
  let findAuthor = authors.find((author) => author.id === id);
  //console.log(findAuthor);
  return findAuthor;
}

function findBookById(books, id) {
  let findBook = books.find((book) => book.id === id);
  //console.log(findBook);
  return findBook;
}

/* [**helper function**] */
//created this helper function for partitionBooksByBorrowedStatus()
function borrowed(books) {
  let booksOut = books.filter(
    (book) => book.borrows[0].returned === false
  );
  //console.log(booksOut);
  return booksOut;
}

function partitionBooksByBorrowedStatus(books) {
  let booksBorrowed = borrowed;
  const booksReturned = books.filter(
  (book) => book.borrows[0].returned === true
   );
   const booksGone = booksBorrowed(books);
  let finalArr = [[...booksGone], [...booksReturned]]
  //let finalArr = [[...booksBorrowed], [...booksReturned]];
  // console.log(finalArr);
  return finalArr;
}

  //return newArr;
  //if findAccountById() === books.id
  //.push.borrows.id into the findAccountsById
  //if borrows.id matches accounts.id return borrowers info
  //along with status of borrows.returned: true or false
  //loop through and stop at 10 borrowes (let i = 10) .slice(0, 11)
  //console.log(newArr);


function getBorrowersForBook(book, accounts) {
  let accountId = findAccountById;
  let newArr = book.borrows.map((borrower) => {
    const name = accountId(accounts, borrower.id);
    return { ...name, returned: borrower.returned };
  });
  return newArr.slice(0, 10);
}

//for getBorrowersForBook function 
//I used the findAccountById() function from the accounts.js page

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

