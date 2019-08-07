import styled from "styled-components";
import Container from "../components/Container";

const Content = styled(Container)`
    @media screen and (min-width: 960px) {
        display: flex;
        flex-direction: ${({ reverse }) => reverse === "true" && "row-reverse"};
        max-width: 1190px;
    }
`;

export default Content;
