function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    return !book.borrows[0].returned ? acc + 1 : acc;
  }, 0);
}

//.sort & .reduce
//books.genre = will return string
//use .sort to find common genres -
//for loop that stops at numbered return (top 5 genres only)


function getMostCommonGenres(books) {
  let genres = books.reduce((acc, book) => {
    if (acc[book.genre]) {
      acc[book.genre]++;
    } else {
      acc[book.genre] = 1;
    }
    return acc;
  }, {});
  genresKeys = Object.keys(genres);
  genres = genresKeys.map((genreKey) => {
    return { name: genreKey, count: genres[genreKey] };
  });
  genres.sort((good, better) => better.count - good.count);
  return genres.slice(0, 5);
}

function getMostPopularBooks(books) {
  //let popularBooks = [];
  const groupById = books.reduce((acc, book) => {
    acc[book.id] = book.borrows.length;
    return acc;
  }, {});
  const keys = Object.keys(groupById);
  let sorted = keys.sort((keyA, keyB) => groupById[keyB] - groupById[keyA]);
  let newArr = sorted.map((id) => {
    let book = books.find((book) => book.id === id);
    let count = groupById[id];
    return { name: book.title, count: count };
  });
  return newArr.slice(0, 5);
}

/*
function getMostPopularBooks(books) {
  const groupById = books.reduce((acc, book) => {
    acc[book.id] = book.borrows.length;
    return acc;
  }, {});
  const keys = Object.keys(groupById);
  let sorted = keys.sort((keyA, keyB) => groupById[keyB] - groupById[keyA]);
  let newArr = sorted.map((id) => {
    let book = books.find((book) => book.id === id);
    let count = groupById[id];
    return { name: book.title, count: count };
  });
  return newArr.slice(0, 5);
} */

//returning an array needs an empty array >[]
//create const to get author object needed for result
//if (book.authorId === author.id) {
//popularAuthors.count += book.borrows.length; **converted to ternary**
// return { name: authorName, count: count };
//use books.authorId and authors.id to find how many times a book has been borrowed by each author
//compare books.authorId to authors.id
//.sort the most popular top to bottom
//for loop that stops numbered returned at 5 (let i < 5)

function getMostPopularAuthors(books, authors) {
  let topFiveAuthors = [];
  authors.forEach((author) => {
    let popularAuthors = {
      name: author.name.first + " " + author.name.last,
      count: 0,
    };
    books.forEach((book) => {
      return book.authorId === author.id
        ? (popularAuthors.count += book.borrows.length)
        : 0;
    });
    topFiveAuthors.push(popularAuthors);
  });
    topFiveAuthors.sort((bottom, top) => top.count - bottom.count);
  return topFiveAuthors.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
