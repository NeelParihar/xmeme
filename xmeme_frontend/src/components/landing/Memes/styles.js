
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
  
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 21em ;
  gap: 2rem 0rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
export const Modal = styled.div`
.modal {
  font-size: 12px;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#000')};
  box-shadow: 0 8px 6px -6px black;
  border-radius: 5px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  overflow: auto;
  height: 550px;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  
}

.modal > .header {
  width: 100%;
  border-bottom: 1px solid gray;
  font-size: 18px;
  text-align: center;
  padding: 5px;
}
.modal > .content {
  width: 100%;
  padding: 10px 5px;
}
.modal > .actions {
  width: 100%;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
}
.modal > .close {
  cursor: pointer;
  position: absolute;
  display: block;
  padding:2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 19px;
  border: 1px solid #cfcece;
}`

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

export const Content = styled.div`
  padding: 0.5rem 0;
  display: flex;
  align-items: baseline;
  justify-content: baseline;
  flex-direction:column;
  
  .datediv{
    margin-left: auto;
    order: 0;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
    font-size: 10px;
  }
 
`;

export const Stats = styled.div`
  display: flex;
  

  div {
    display: flex;
    margin-top: 2rem;

    img {
      margin: 0;
    }
    

    span {
      color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
      margin-left: 0.5rem;
      font-size: 14px;
    }
  }
  .editMeme-btn{
    margin-left: auto;
    order: 2;
  cursor: pointer;
  }
  
  img{
    cursor: pointer;
  }
  
`;
