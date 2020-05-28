import styled from 'styled-components';
import img from './bg1.jpg';


const HeroImgContainer = styled.div`
width: 100%;
    
   img{
        background-image: url(${img});
        width:100%;
    background-size:cover;
    height: 100vh;
    background-position:center;
   }
   
    
`;

export default HeroImgContainer;
