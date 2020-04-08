import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 28px;
  margin-right: 28px;

  > h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 32px;

    color: #aaaaaa;
  }

  > form {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 28px;
    margin-bottom: 35px;

    border: 3px solid #777777;
    box-sizing: border-box;
    border-radius: 8px;

    svg {
      color: #5a5a5a;
      width: 30px;
      height: 30px;

      margin-left: 18px;
    }
  }
`;

export const Search = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0;
  background-color: transparent;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-indent: 10px;

  height: 60px;
  width: 90%;

  :placeholder-shown {
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;

    color: #5a5a5a;
  }

  > svg {
    color: #777777;
    width: 24px;
    height: 24px;
    margin-right: 18px;
    margin-left: 18px;
  }

  > span {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;

    color: #5a5a5a;
  }
`;

export const Filters = styled.div`
  margin-bottom: 28px;
`;
