import styled from 'styled-components';

export const Container = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    align-items: flex-start;

    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }

    button {
      background: transparent;
      border: 0;

      a {
        text-decoration: none;

        li {
          @media only screen and (max-width: 768px) {
            margin-bottom: 30px;
          }

          div {
            @media only screen and (max-width: 768px) {
              align-items: center;
            }
          }
        }
      }
    }
  }
`;
