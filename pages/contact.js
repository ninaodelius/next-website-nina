import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
height: 90vh;
display:flex;
justify-content: center;
align-items: center;
background: #fff;
flex-wrap: wrap;
`;

const Heading = styled.h1`
display:flex-wrap;
justify-content:auto;
color: #000;
font-size: 6rem;
font-weight: 900;
padding: 1rem;
`;

const Pagetext = styled.a`
display:flex-wrap;
justify-content:auto;
color: #000;
font-size: 5rem;
font-weight: 700;
padding: 1rem;
`
export default function Contact() {
    return (
    <>
    <Head>
      <title>Contact Page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero>
      <Heading>Ask me out for coffee</Heading>
      <Pagetext> 
     <a href={'nina.odelius@gmail.com'}> Email </a>
     /
     <a href={'https://www.linkedin.com/in/nina-odelius/'}> LinkedIn </a>
      </Pagetext>
    </Hero>
    </>
    )
  }

