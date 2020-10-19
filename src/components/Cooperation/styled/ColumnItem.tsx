import styled from 'styled-components';

const ColumnItem = styled.div<{gridRow?:string ;gridArea?:string;}>`
  grid-row:${(props)=>props.gridRow};
  margin-bottom: 15px;
  @media only screen and (min-width: 1024px) {
    grid-area:${(props) => props.gridArea};
    display: inline-block;
    margin: 0;
  }
`;

export default ColumnItem;
