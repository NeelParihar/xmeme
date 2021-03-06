import styled from 'styled-components';

export const Wrapper = styled.div`
  .footer-dark {
    width: 100%;
    padding: 4rem 0rem 2rem 0rem;
    background: #7C8DFF;
    color: #fff;
  }
  .footer-light {
    width: 100%;
    padding: 4rem 0rem 2rem 0rem;
    background: #7C8DFF;
    color: #fff;
  }

  @media (min-width: 680px) {
    .root-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  a img {
    margin-right: 15px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.2rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Details = styled.div`
  h2,
  a,
  span {
    color: #fff;
    margin-bottom: 10px;
  }
`;
