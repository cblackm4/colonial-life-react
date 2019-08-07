import React from "react";
import styled from "styled-components";
import Container from "./Container";

const FootNote = styled.p`
    text-align: center;
    font-size: 1.2rem;
    margin: 5rem;
`;

const Heading = styled.h1`
    color: black;
    text-align: center;
    font-size: 3.6rem;
    font-family: Oswald, sans-serif;
    margin-top: 8rem;
    padding: 2rem;
`;

const StyledContainer = styled(Container)``;

const Footer = props => {
    return (
        <StyledContainer>
            <Heading>{props.text}</Heading>
            <FootNote>
                <em>{props.footnote}</em>
            </FootNote>
        </StyledContainer>
    );
};

export default Footer;
