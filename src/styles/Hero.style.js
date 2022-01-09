import styled from 'styled-components';


const Conthero = styled.div`
    margin-top: 0 auto;
    text-align: left;
    background-color: #202020;
    margin-top:56px ;
    padding: 20px;
    @media only screen and (min-width: 900px){
        margin-top:0px ;

    }
`;

const Styleh2 = styled.p`
    color: #FFFE;
    font-size: 32px;
    line-height: 40px;

`;

const Parph = styled.p`
    font-size: 30px;
    line-height: 45px;
    color: white;
    letter-spacing: 5px
    width: 100px;

`;

const Icono = styled.nav`
    color: #ff8906;
    font-size: 40px;
`;

const Lora = styled.div`
    font-family: 'Lora', serif;

`;

export const Image = styled.img`

   width: 40vh;
   border-radius:10px;
   padding: 0 auto;

   /* margin-left: 0 auto;
   margin-right: 0 auto; */


`;
export const Img = Image;
export const Fontlora = Lora;
export const Par = Parph;
export const Conth = Conthero;
export const H2 = Styleh2;
export const Ic = Icono;

