
import styled from 'styled-components';


const FooterContainer = styled.footer`
  .footer {
    background: var(--primaryColor);
    color: var(--white);
    padding-top: 3rem;
    bottom:0;
    width:100%;
  }
  .footerBottom {
    width:100%;
    heigth: 20px;
    padding: 1rem 0 .2rem;
    background:var(--white);
    text-align:center;
    color:var(--primaryColor);
  }
   li{
    font-size:1rem;
    font-weight:400;
    color: var(--lightGreen);
  }
  ul li a {
    text-decoration: none;
    color: var(--lightGreen);
  }

  ul li a:hover{
    color:var(--secondColor);
    transition: 0.2s;
  }
 .formGroup {
  position: relative;
  padding: 15px 0 0;
  margin-top: 5px;
  width: 80%;
}

.formField {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid var(--lightGreen);
  outline: 0;
  color: var(--lightGreen);
  padding: 3px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .formLabel {
    cursor: text;
    top: 20px;
  }
}

.formLabel {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: var(--lightGreen);
}

.formField:focus {
  ~ .formLabel {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    color: var(--ligherOrange);
    font-weight:700;    
  }
  padding-bottom: 6px;  
  border-width: 3px;
  border-image: linear-gradient(to right, var(--lightGreen),var(--secondColor));
  border-image-slice: 1;
}
.subBtn {
    font: inherit;
    border: 0;
    outline: 0;
    border-radius: 5em;
    box-sizing: border-box;
    background:var(--lightGreen);
    color:var(--primaryColor);
    padding: 6px 15px;
    margin-top:20px;
}
.subBtn:hover{
  background:var(--lighterOrange);
  color:var(--white);
  transition:all 0.2s;
}



`;
export default FooterContainer;
