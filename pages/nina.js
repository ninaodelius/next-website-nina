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

export default function Dota() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading></Heading>
        <Pagetext>this is how good she is</Pagetext>
      </Hero>
</>
  )
}
