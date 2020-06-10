import styled from 'styled-components';


const GridWrapper = styled.div`
  display: grid;
  grid-template-areas:
  "Aside AdsList AdsList AdsList"
  

  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
 height:100vh;
 
`;

export default GridWrapper;
