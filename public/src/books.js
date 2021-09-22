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

function partitionBooksByBorrowedStatus(books) {
  const booksBorrowed = books.filter(
    (book) => book.borrows[0].returned === false
  );
  const booksReturned = books.filter(
    (book) => book.borrows[0].returned === true
  );

  let finalArr = [[...booksBorrowed], [...booksReturned]];
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

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

