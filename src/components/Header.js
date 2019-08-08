import React from "react";
import styled from "styled-components";
import Container from "./Container";

const Logo = styled.img`
    width: 200px;
    padding: 2rem 2rem;

    @media screen and (min-width: 1200px) {
        margin-left: 0.5rem;
    }
`;

const StyledContainer = styled(Container)``;

const Header = props => {
    return (
        <StyledContainer>
            <Logo src={props.img} />
        </StyledContainer>
    );
};

export default Header;
