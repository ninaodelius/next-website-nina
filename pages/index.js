import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
height: 90vh;
display:flex;
justify-content: center;
align-items: center;
background: #fff;
`;

const Heading = styled.h1`
color: #000;
font-size: 10rem;
font-weight: 900;
padding: 1rem;
`;

const Pagetext = styled.p`
display:flex-wrap;
justify-content:space-around;
color: #000;
font-size: 5rem;
font-weight: 700;
`
export default function Home() {
  return (
     <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>Hello</Heading>
        <Pagetext>Fancy seeing you here 👋</Pagetext>
        </Hero>
</>
  );
};
