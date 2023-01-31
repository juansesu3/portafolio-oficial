import styled from "styled-components";





export const Container = styled.div`
    margin-top: 39px ;
    background-color: #1d1d1d;
    

`;

export const SubContainer = styled.div`
display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #1d1d1d;


`
export const ImagenesCarrousel = styled.img`
width: 100%;
@media (min-width: 400px){
    width: 400px;
    margin: auto;

}

`;
export const Tiulo = styled.div`
background-color: #1d1d1d;
font-size:40px ;
font-weight:  bold;
text-align: center;
background: #1d1d1d;
color: white;
padding-bottom:10px ;
padding-top:10px ;

`;

export const ASC = styled.a`
color: #1d1d1d;
text-decoration:none;
font-weight:  bold;
&:hover{
    color: #1d1d1d;
    font-weight:  1000;
    
}
&:active {
    color: red;
  }



`