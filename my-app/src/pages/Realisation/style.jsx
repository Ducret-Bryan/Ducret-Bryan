import styled from "styled-components";
import { rem } from "../../utils/_functions";
import colors from "../../utils/style/colors";

export const RealisationMain = styled.main``

export const ClientList = styled.ul`
padding: ${rem(6)};
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
gap: ${rem(16)};
color: ${colors.white_opacity50}; 
`

export const Filter = styled.div`
padding: 0 ${rem(16)};
`

export const ButtonFilter = styled.button`
background-color: transparent;
border: 0;
color: ${colors.white_opacity50};
cursor: pointer;
font-size: ${rem(16)};
`

export const SelectFilter = styled.select`
width: 100%;
padding: ${rem(6)};
background-color: transparent;
border: none;
border: ${rem(2)} solid ${colors.white_opacity50};
color: ${colors.white_opacity70};
outline: none;
-webkit-border-radius: ${rem(5)};
-moz-border-radius: ${rem(5)};
-ms-border-radius: ${rem(5)};
-o-border-radius: ${rem(5)};
border-radius: ${rem(5)};

& > option {
    background-color: ${colors.background};
    height: ${rem(25)};
}
`

export const ProjectGalery = styled.div`
padding: ${rem(16)};
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: ${rem(16)};
`