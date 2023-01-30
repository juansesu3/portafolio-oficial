import styled from "styled-components";

    export const Gridlayoutfooter = styled.div`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(4, 1fr);
        background-color:#1d1d1d ;
        color: #FFFE;
        padding: 0px 20px;
        margin-top:100px ;
        
        
        
    
    `;
export const Grid1foot = styled.div`
    background-color: ##202020 ;
    grid-column: 1/10;
    grid-row: 1/2;
    text-align: center;
 `;
 export const Grid2foot = styled.div`
    background-color: ##202020 ;
    grid-column: 1/6;
    grid-row: 2/3;
    text-align: center;
    font-family: 'Mochiy Pop P One', sans-serif;
    color:#ff8906;

`;
export const Grid3foot = styled.div`
    background-color: ##202020 ;
    grid-column: 1/6;
    grid-row: 3/4;
    text-align: center;
   
 `;
 export const Grid4foot = styled.div`
    background-color: ##202020 ;
    grid-column: 2/3;
    grid-row: 4/5;
    text-align: center;
    font-size:40px ;
    
    &:hover{
        
        font-size:60px;
    }
`;
export const Grid5foot = styled.div`
    background-color: ##202020 ;
    grid-column: 4/5;
    grid-row: 4/5;
    text-align: center;
    font-size:40px ;
    color: green;
    &:hover{
        
        font-size:60px;
    }
 `;
 export const Grid6foot = styled.div`
    background-color: ##202020 ;
    grid-column: 3/4;
    grid-row: 4/5;
    text-align: center;
    font-size:40px ;
    &:hover{
        
        font-size:60px;
    }
`;
