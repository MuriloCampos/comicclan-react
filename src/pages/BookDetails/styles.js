import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    max-width: 768px;
  }
`;

export const BackButton = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-decoration-line: underline;
  color: #777777;
  margin-top: 32px;
  margin-left: 40px;
  margin-bottom: 36px;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  margin-left: 26px;
  max-height: 520px;

  margin-bottom: 72px;
`;

export const BookImage = styled.div`
  margin-right: 24px;

  > img {
    width: 340px;
    height: 520px;
  }
`;

export const BookDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 28px;
  max-width: 1022px;
  height: 436px;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  margin-right: 39px;
  @media only screen and (max-width: 768px) {
    margin-top: 25px;
  }

  color: #aaaaaa;
`;

export const Info = styled.div`
  margin-bottom: 44px;
`;

export const InfoLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  line-height: 19px;
`;

export const BookInfo = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #999999;
  margin-right: 9px;
`;

export const InfoDetail = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #cccccc;
`;

export const Summary = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #cccccc;
`;

export const Bottom = styled.div`
  display: flex;
  margin-left: 26px;
  margin-right: 30px;
  flex-direction: column;
  max-height: 448px;

  hr {
    height: 1;
    max-width: 1384px;
    margin: 0 28px 32px 28px;

    border: 1px solid #535353;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 620px;
  }

  > h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    color: #aaaaaa;
    margin-bottom: 32px;
  }
`;

export const RandomBookList = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  align-items: flex-start;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  button {
    background: transparent;
    border: 0;
    a {
      text-decoration: none;
    }

    div {
      margin-right: 50px;
      align-items: center;
    }
  }
`;
