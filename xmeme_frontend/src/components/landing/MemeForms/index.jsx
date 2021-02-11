import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Details } from './styles';
import {MemeForm} from './CreateMemeForm';
import { Header } from 'components/theme';

export const MemeForms = () => { return(
  <>
  <Header />
  <Wrapper as={Container} id="contact">
    
    <Details>
      <MemeForm />
    </Details>
    
  </Wrapper>
  </>
)};
