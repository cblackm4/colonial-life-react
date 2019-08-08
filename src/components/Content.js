import styled from "styled-components";
import Container from "../components/Container";

const Content = styled(Container)`
    padding: 0 2rem;
    @media screen and (min-width: 1200px) {
        display: flex;
        flex-direction: ${({ reverse }) => reverse === "true" && "row-reverse"};
        max-width: 1190px;
    }
`;

export default Content;
