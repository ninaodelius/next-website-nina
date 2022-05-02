import styled from 'styled-components'

const FooterSection = styled.div`
background: #000;
color: #fff;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
bottom: 0;
`
const Footer = () => {
  return (
    <FooterSection>
        <p>{new Date().getFullYear()}</p>
    </FooterSection>
  )
}

export default Footer