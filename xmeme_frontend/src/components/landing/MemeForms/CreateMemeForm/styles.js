
import styled from 'styled-components';

export const Error = styled.span`
  color: #ff4136;
`;

export const Center = styled.div`
  text-align: left;

  h4 {
    font-weight: normal;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }
  
`;

export const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;
  
`;

export const Wrapper = styled.div`
  .submit-btn {
    background: ${({ theme }) => (theme === 'light' ? '#7C8DFF' : '#7C8DFF')};
    border-radius: 7px 7px 7px 7px;
    border: 5px solid ${({ theme }) => (theme === 'light' ? '#7C8DFF' : '#7C8DFF')};
    font-weight: bold;
  }
  label{
    margin-bottom: 500px;
  }
  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }
`;

export const Grid = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: flex-center;
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
padding-right: 2rem;
  justify-content: center;
  
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
    order: 2;
  }

  div {
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }

  

`;
