function findAccountById(accounts, id) {
  let foundId = accounts.find((account) => account.id === id);
  return foundId;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((abc, xyz) =>
    abc.name.last.toLowerCase() > xyz.name.last.toLowerCase() ? 1 : -1
  );
  //console.log(accounts);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    book.borrows.filter((borrower) =>
      borrower.id === account.id ? acc++ : false
    );
    //console.log(acc);
    return acc;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  books.forEach((book) => {
    if (!book.borrows[0].returned && account.id == book.borrows[0].id) {
      let match = {
        ...book,
        author: authors.find((author) => author.id == book.authorId),
      };
      result.push(match);
    }
  });
  //console.log(result);
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
