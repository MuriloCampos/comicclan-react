import React from 'react';
import PropTypes from 'prop-types';

import { Container, BookName, OwnedBy, BookOwner } from './styles';
import placeholder from '../../assets/SVG/placeholder.svg';

export default function Book({ book }) {
  return (
    <Container>
      <img src={placeholder} alt="Book Cover" />
      <BookName>{book.name}</BookName>
      <div>
        <OwnedBy>Owned By</OwnedBy>
        <BookOwner>{book.owner}</BookOwner>
      </div>
    </Container>
  );
}

Book.propTypes = {
  book: PropTypes.arrayOf(PropTypes.object).isRequired,
};
