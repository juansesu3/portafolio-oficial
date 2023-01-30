import styled from "styled-components";

const Lora = styled.div`
    font-family: 'Lora', serif;
    margin-top:56px ;

`;

const Titulo = styled.h1`
    font-size: 40px;
    
    line-height: 50px;
    padding: 0PX 20px;
    color: #000;
    background-color: #1d1d1d;

`;

const Text = styled.p`
    font-size: 20px;
    line-height: 35px;
    padding: 0PX 20px;
    color: #000;
    
`;

const Gridlayers = styled.section`
    display: grid;
    margin-top:250px ;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(27, 1fr);
    
`;




const Griduno = styled.div`
background-color: #1d1d1d;
background-image: url("https://res.cloudinary.com/dv08oqgvx/image/upload/v1641673593/AmazonasSprint3/jpd7afxkjzmvacx49akj.png" );
background-repeat: no-repeat;
grid-column: 2/10;
grid-row: 1/10;

width: 100%;
`;

const Griddos = styled.div`
background-color: #1d1d1d;
box-shadow: 12px 16px 32px #0e0d2776;
grid-column: 2/10;
grid-row: 3/9;
padding: 40px 24px ;
border-radius:20px ;
border:1px solid #35faff;
@media only screen and (min-width:920px){
    grid-column: 6/10;
    grid-row: 3/7;

}
`;

const Stylh2 = styled.p`
color: #FFFE;
font-size: 24px;
line-height: 32px;
`;

const Stylp = styled.p`
color: #A7A9BE;
font-size: 20px;
line-height: 32px;

`;

const Gridtres = styled.div`
background-color: #1d1d1d;
background-image: url("https://res.cloudinary.com/dv08oqgvx/image/upload/v1636298420/l6wmsgodsiup2wnktjxi.png" );
background-repeat: no-repeat;
grid-column: 2/10;
grid-row: 10/20;

`;

const Gridcuatro = styled.div`
background-color: #1d1d1d;
box-shadow: 12px 16px 32px #0e0d2776;
grid-column: 2/10;
grid-row: 12/18;
padding: 40px 24px ;
border-radius:20px ;
border:1px solid #35faff;
@media only screen and (min-width:920px){
    grid-column: 6/10;
    grid-row: 12/16;

}
`;

const Gridcinco = styled.div`
background-color: #1d1d1d;
background-image: url("https://res.cloudinary.com/dv08oqgvx/image/upload/v1641676927/AmazonasSprint3/lztkiypzyx4oucvria9o.png" );
background-repeat: no-repeat;

grid-column: 2/10;
grid-row: 19/28;


`;

const Gridseis = styled.div`
background-color: #1d1d1d;
box-shadow: 12px 16px 32px #0e0d2776;
grid-column: 2/10;
grid-row: 21/27;
padding: 40px 24px ;
border-radius:20px ;
border:1px solid #35faff;
@media only screen and (min-width:920px){
    grid-column: 6/10;
    grid-row: 21/25;

}

`;

const Contbutt = styled.div`
    display: flex;
    
    align-items: center;
    flex-direction: column;
    bottom: 0px;

`;
const Buttuno = styled.button`
    background-color: #35faff ;
    border: 2px solid #FF8906;
    
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    height: 48px;
    margin: 10px;
    &:hover {
        
        background-color: #FF8906;
        color: #FFFE;
        
    
  }
 
`;
export const Anchor = styled.a`
    width: 100%;
    text-decoration:none;
    color:  #FFf;
    background-color:#29b3c4;
    border: 2px solid #0d6efd;;
    text-align:center;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 100px;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    height: 48px;
    margin: 10px;
    &:hover{
    color: #FFFE ; 
    background-color:  #000b53;
    border: 2px solid #35faff;
    }
`;
const Buttdos = styled.button`
    background-color: #35faff;
    color: #FFFE ;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    height: 48px;
    margin: 10px;
    &:hover {
        /* box-shadow: 0px 0px 10px white;      */
        background-color:  #000b53;
    border: 2px solid #35faff;
        color: #FF8906;
      
  }
  .anchor{
      padding-top: 40px;
      margin-top: 100px ;
      background: blue;
  }
`;

export const Image = styled.img`
   width: 40vh;
   border-radius:10px;
   padding: 0 auto;
`;


export const Butt2 = Buttdos;
export const Butt1 = Buttuno;
export const Contbu = Contbutt;
export const Stp = Stylp;
export const Sth2 = Stylh2;
export const Grid1 = Griduno;
export const Grid2 = Griddos;
export const Grid3 = Gridtres;
export const Grid4 = Gridcuatro;
export const Grid5 = Gridcinco;
export const Grid6 = Gridseis;
export const Gridstyle = Gridlayers;
export const Textstyle = Text;
export const Fontlora = Lora;
export const Tittle = Titulo;
export const Img = Image;