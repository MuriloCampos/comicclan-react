import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

import {
  Container,
  BackButton,
  Center,
  BookImage,
  BookDescription,
  Top,
  Title,
  Info,
  InfoLine,
  BookInfo,
  InfoDetail,
  Summary,
  Bottom,
  RandomBookList,
} from './styles';

import {
  selectedBook,
  getBookDetailRequest,
} from '../../store/modules/books/actions';

import generateRandomNumbers from '../../utils/generateRandomNumbers';

import Book from '../../components/Book';
import Header from '../../components/Header';
import BackIcon from '../../assets/SVG/BackIcon.svg';
import FullStar from '../../assets/SVG/FullStar.svg';
import EmptyStar from '../../assets/SVG/EmptyStar.svg';
import placeholder from '../../assets/SVG/placeholder.svg';

export default function BookDetails() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  let book = {};
  let books = {};
  const { name } = useParams();

  const data = useSelector((state) => state.books.books);
  const bookDetail = useSelector((state) => state.books.selectedBook);
  if (bookDetail !== null && data !== null) {
    book = bookDetail;
    books = data;
  }

  useEffect(() => {
    setLoading(false);
  }, [bookDetail]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (bookDetail === null) {
      dispatch(getBookDetailRequest(name.replace('hashtag', '#')));
    }
  }, [book]);

  const stars = [
    {
      id: 1,
      status: false,
    },
    {
      id: 2,
      status: false,
    },
    {
      id: 3,
      status: false,
    },
    {
      id: 4,
      status: false,
    },
    {
      id: 5,
      status: false,
    },
  ];

  for (let count = 0; count < book.rating; count += 1) {
    stars[count].status = true;
  }

  function handleBookClick(bookName) {
    dispatch(
      selectedBook(data.filter((bookData) => bookData.name === bookName))
    );
  }

  return (
    <Container>
      <Header />

      <BackButton to="/">
        <img src={BackIcon} alt="Back to Collection" />
        Back to Collection
      </BackButton>

      <Center>
        {loading ? (
          <Loader type="Grid" color="#777777" height={80} width={80} />
        ) : (
          <>
            {book && book.image ? (
              <>
                <BookImage>
                  <img src={placeholder} alt="Book Cover" />
                </BookImage>
                <BookDescription>
                  <Top>
                    <Title>
                      {book.name} ({book.year})
                    </Title>
                    {stars.map((star) =>
                      star.status ? (
                        <img src={FullStar} alt="Star" key={star.id} />
                      ) : (
                        <img src={EmptyStar} alt="No Star" key={star.id} />
                      )
                    )}
                  </Top>
                  <Info>
                    <InfoLine>
                      <BookInfo>Writer:</BookInfo>
                      <InfoDetail>{book.writer}</InfoDetail>
                    </InfoLine>

                    <InfoLine>
                      <BookInfo>Artist:</BookInfo>
                      <InfoDetail>{book.artist}</InfoDetail>
                    </InfoLine>

                    <InfoLine>
                      <BookInfo>Publication:</BookInfo>
                      <InfoDetail>{book.publication}</InfoDetail>
                    </InfoLine>

                    <InfoLine>
                      <BookInfo>Owner:</BookInfo>
                      <InfoDetail>{book.owner}</InfoDetail>
                    </InfoLine>
                  </Info>
                  <Summary>{book.summary}</Summary>
                </BookDescription>
              </>
            ) : (
              <Loader type="Grid" color="#777777" height={80} width={80} />
            )}
          </>
        )}
      </Center>

      <Bottom>
        <hr />
        <h1>Other Random Books</h1>

        {books && books.length > 0 && (
          <RandomBookList>
            {generateRandomNumbers(5).map((randomNumber) => {
              return (
                <button
                  type="button"
                  onClick={() => handleBookClick(books[randomNumber].name)}
                  key={books[randomNumber].name}
                >
                  <Link
                    to={`/book/${books[randomNumber].name.replace(
                      '#',
                      'hashtag'
                    )}`}
                  >
                    <Book book={books[randomNumber]} />
                  </Link>
                </button>
              );
            })}
          </RandomBookList>
        )}
      </Bottom>
    </Container>
  );
}
