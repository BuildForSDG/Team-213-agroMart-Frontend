import styled from 'styled-components';

const Nav = styled.nav`
  width: 80%;
  margin: 0 auto;
  height: 55px;
  font-size:16px;
  font-weight:400;
  padding: 0 20px 0 0;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 10px 0 ;
   
    font-size:24px;
    color:var(--primaryColor);
  }
  .logo span{
    color:var(--secondColor);
  }
`;
export default Nav;
