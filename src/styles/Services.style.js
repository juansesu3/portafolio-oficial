import styled from "styled-components";

const Contgridservicios = styled.div`
    background: linear-gradient( 135deg, #FEB692 0%, #EA5455 100%) ;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-template-rows: 70px;
`;

    const Gridbuno = styled.div`
        grid-column: 2/6;
        grid-row: 1/1;
    `;

const Gridbdos = styled.div`
    grid-column: 2/8;
    grid-row: 2/3;
`;

const Gridbtres = styled.div`
    grid-column: 2/8;
    grid-row: 4/5;
`;

const Gridbcuatro = styled.div`
    grid-column: 2/8;
    grid-row: 6/7;
`;

const Styletittlser = styled.h4`
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    

`;

const Styleh5 = styled.h5`
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;


`;

const Stylepr = styled.p`
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    line-height: 32px;


`;

const Stylebtn = styled.button`
    background-color: #0e0d27;
    border: 2px solid #FF8906;
    color: #FF8906;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    height: 48px;
    width: 280px;
    margin: 0px;
    position: relative;
    bottom: 10px;

`;

export const Contser = Contgridservicios;
export const Gridb1 = Gridbuno;
export const Gridb2 = Gridbdos;
export const Gridb3 = Gridbtres;
export const Gridb4 = Gridbcuatro;
export const Stlh4 = Styletittlser;
export const Stlh5 = Styleh5;
export const Stylpr = Stylepr;
export const Stylbt = Stylebtn;