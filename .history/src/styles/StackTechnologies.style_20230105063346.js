import styled from "styled-components";
import { Button } from "bootstrap";




export const Container = styled.div`
    margin-top: 39px ;

`;

export const SubContainer = styled.div`
display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;


`
export const ImagenesCarrousel = styled.img`
width: 100%;
@media (min-width: 400px){
    width: 400px;
    margin: auto;

}

`;
export const Tiulo = styled.div`
font-size:40px ;
font-weight:  bold;
text-align: center;
background: #110e2d;
color: white;
padding-bottom:10px ;
padding-top:10px ;

`;