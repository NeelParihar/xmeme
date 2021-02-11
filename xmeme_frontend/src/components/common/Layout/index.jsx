import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Footer } from 'components/theme';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { name } from 'data/config';
import { Global } from './styles';

import './fonts.css';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <>
      <GatsbySeo
        title={`XMeme | ${name}`}
        description="A Meme website created by Neel Parihar"
        canonical={url}
        openGraph={{
          type: 'website',
          title: `XMeme | ${name} `,
          site_name: `XMeme | ${name}`,
          locale: 'en_IN',
          url,
          description:
            "A Meme website created by Neel Parihar",
         
        }}
        
      />
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  );
};
