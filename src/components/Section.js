import styled from "styled-components";

const Section = styled.div`
    @media screen and (min-width: 960px) {
        flex-basis: ${({ flexbasis }) =>
            (flexbasis === "1/3" && "33%") ||
            (flexbasis === "2/3" && "66%") ||
            (flexbasis === "1/2" && "50%") ||
            (flexbasis === "full" && "100%")};
    }
`;

export default Section;
