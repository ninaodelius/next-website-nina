import styled from 'styled-components'

const FooterSection = styled.div`
background: #000;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
flex:1;
margin-bottom:0;
    width: 100%;
    min-height: 5vh;
    bottom: 0;
    position: sticky;
`
const Footer = () => {
  return (
    <FooterSection>
        <p>{new Date().getFullYear()}</p>
    </FooterSection>
  )
}

export default Footer