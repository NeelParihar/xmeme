import React, { useContext } from 'react';
import { Container } from 'components/common';
import { name, linkedinUrl, githubUrl } from 'data/config';
import { ThemeContext } from 'providers/ThemeProvider';
import crio from 'assets/illustrations/crio.png';
import linkedinLogo from 'assets/illustrations/linkedin_white.png';
import githubLogo from 'assets/illustrations/github_white.png';

import { Wrapper, Flex, Details } from './styles';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper>
      <Flex>
        <Details className={` ${theme === 'light' ? 'footer-light' : 'footer-dark'}`}>
          <Container>
            <div className="root-container">
              <div>
              </div>{' '}
              <div className="powered">
                  <p>Created with ❤️ by {name}</p>
                  
              </div>{' '}
              
              <div>
                {' '}
                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                  <img width="45" src={linkedinLogo} alt="Linkedin" />
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <img width="45" src={githubLogo} alt="GitHub" />
                </a>
              </div>
            </div>
          </Container>
        </Details>{' '}
        {/* <Links>
          <a key="0" href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Follow me on GitHub">
            <img width="24" src="/icons/github.svg" alt="GitHub" />
          </a>
        </Links> */}
      </Flex>
    </Wrapper>
  );
};
