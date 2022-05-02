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
font-size: 8rem;
font-weight: 900;
padding:1rem;
`;
const Pagetext = styled.p`
color: #000;
font-size: 5rem;
font-weight: 700;
`

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>Who is she</Heading>
        <Pagetext>a superstar first-year developer student</Pagetext>
      </Hero>
</>
  )
}
