import styled from 'styled-components';

export const Container = styled.div`
  hr {
    max-width: 1384px;
    margin: 0 28px 67px 28px;

    border: 1px solid #535353;
  }
`;

export const BookList = styled.ul`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  list-style: none;
  margin-bottom: 69px;
  align-items: flex-start;

  button {
    background: transparent;
    border: 0;
    a {
      text-decoration: none;
    }
  }
`;

export const BookLi = styled.li`
  margin-right: 96px;
`;

export const BookImg = styled.img``;

export const BookName = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 9px;

  color: #cccccc;
`;

export const BookOwner = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #cccccc;
`;

export const OwnedBy = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-right: 8px;

  color: #999999;
`;
