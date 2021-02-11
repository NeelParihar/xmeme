import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }
`;

export const Details = styled.div`
  flex: 2;
  padding-right: 2rem;
  
  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
  
  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }
`;

export const Preview = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
 

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
    flex-direction: row;
    order: 2;
  }
  div {
    font-weight: light;
    line-height: 1;
    color: #c7c7c7;
  }
  
`;

export const Item = styled.div`
  width: 100%;

  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
  img {
    margin: 0;
  }
  
`;