import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { selectedBook } from '../../store/modules/books/actions';

import Book from '../Book';

import { Container, BookLi, BookList } from './styles';

export default function HomeBookList({ data }) {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  function handleBookClick(bookName) {
    dispatch(selectedBook(books.filter((book) => book.name === bookName)));
  }

  return (
    <Container>
      <BookList>
        {data.map((book) => (
          <button
            type="button"
            onClick={() => handleBookClick(book.name)}
            key={book.name}
          >
            <Link to={`/book/${book.name.replace('#', 'hashtag')}`}>
              <BookLi>
                <Book book={book} />
              </BookLi>
            </Link>
          </button>
        ))}
      </BookList>

      {data.length > 0 ? <hr /> : ''}
    </Container>
  );
}

HomeBookList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
