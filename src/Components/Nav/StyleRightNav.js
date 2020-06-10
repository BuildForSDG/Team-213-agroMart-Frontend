import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 0px 18px 35px;
  }

  li a{
    text-decoration:none;
    color:var(--primaryColor);
  }

  li a:hover{
    color:var(--secondColor);
    transition: transform 0.3s ease-in-out;
  }

  
 
  

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--lighterOrange);
    z-index: 1;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: -70px;
    height: 100vh;
    width: 300px;
    font-size:16px;
    font-wight:400;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li a{
      color: var(--primaryColor);
    }
     li a:hover{
    color:var(--white);
     transition: transform 0.3s ease-in-out;
  }
  }
`;


export default Ul;
