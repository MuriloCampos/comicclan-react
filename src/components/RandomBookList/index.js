import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { selectedBook } from '../../store/modules/books/actions';
import { Container } from './styles';
import Book from '../Book';

export default function RandomBookList({ data }) {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  function handleBookClick(bookName) {
    dispatch(selectedBook(books.filter((book) => book.name === bookName)));
  }

  return (
    <Container>
      <ul>
        {data.map((randomBook) => (
          <>
            {randomBook.name ? (
              <button
                type="button"
                onClick={() => handleBookClick(randomBook.name)}
                key={randomBook.name}
              >
                <Link to={`/book/${randomBook.name.replace('#', 'hashtag')}`}>
                  <li key={randomBook.name}>
                    <Book book={randomBook} />
                  </li>
                </Link>
              </button>
            ) : (
              ''
            )}
          </>
        ))}
      </ul>
    </Container>
  );
}

RandomBookList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
