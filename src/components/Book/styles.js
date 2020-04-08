import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  img {
    width: 200px;
    height: 300px;
    margin-bottom: 16px;
  }
`;

export const BookName = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 9px;
  width: 210px;
  word-break: break-word;

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
