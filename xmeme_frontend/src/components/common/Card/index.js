import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#7C8DFF')};
`;
