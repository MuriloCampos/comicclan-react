export function booksRequest() {
  return {
    type: '@books/BOOKS_REQUEST',
  };
}

export function booksSuccess(books) {
  return {
    type: '@books/BOOKS_SUCCESS',
    payload: { books },
  };
}

export function selectedBook(bookInfo) {
  return {
    type: '@books/SELECTED_BOOK',
    payload: { bookInfo },
  };
}

export function getBookDetailRequest(bookName) {
  return {
    type: '@books/GET_BOOK_DETAIL_REQUEST',
    payload: { bookName },
  };
}

export function booksFailure() {
  return {
    type: '@books/BOOKS_FAILURE',
  };
}
