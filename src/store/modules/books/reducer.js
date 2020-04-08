import produce from 'immer';

const INITIAL_STATE = {
  books: null,
  selectedBook: null,
};

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@books/BOOKS_SUCCESS':
      return produce(state, (draft) => {
        draft.books = action.payload.books;
      });
    case '@books/SELECTED_BOOK':
      return produce(state, (draft) => {
        draft.selectedBook = action.payload.bookInfo[0];
      });
    default:
      return state;
  }
}
