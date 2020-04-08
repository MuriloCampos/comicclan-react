import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { booksSuccess, selectedBook } from './actions';

export function* booksRequest() {
  const response = yield call(api.get, 'comics');

  yield put(booksSuccess(response.data));
}

export function* getBookDetailRequest({ payload }) {
  const { bookName } = payload;
  console.tron.log(bookName);
  const response = yield call(api.get, 'comics', {
    params: {
      q: bookName,
    },
  });

  yield put(selectedBook(response.data));
}

export default all([
  takeLatest('@books/BOOKS_REQUEST', booksRequest),
  takeLatest('@books/GET_BOOK_DETAIL_REQUEST', getBookDetailRequest),
]);
