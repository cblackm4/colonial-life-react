import styled from "styled-components";
import Container from "./Container";

const WideContainer = styled(Container)`
    background-color: ${({ bgcolor }) =>
        (bgcolor === "col-blue" && "#155480") ||
        (bgcolor === "col-white" && "#FFF") ||
        (bgcolor === "col-light-blue" && "#edf5fa")};
    color: ${({ txtcolor }) =>
        (txtcolor === "black" && "#000") || (txtcolor === "white" && "#FFF")};
    max-width: 100%;
`;

export default WideContainer;
