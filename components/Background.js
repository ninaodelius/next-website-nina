import styled from 'styled-components';


const Bkgimg = styled.div`
display:flex;
position: relative;
background-size: cover;
`

const Background = () => {
    return(
<Bkgimg>
<img src={'./images/bokeh.jpg'} /></Bkgimg>
    );
};

export default Background;