import React from "react";
import styled from "styled-components";
import Section from "./Section";
import WideContainer from "./WideContainer";
import Content from "./Content";
import cogs from "../assets/icons/cogs.png";
import mail from "../assets/icons/mail.png";
import person from "../assets/icons/person.png";

/* Three Column Component that supports Headings/Subheadings and 3-card rows */

const CardDesc = styled.p`
    margin-top: 0;
`;

const CardHeading = styled.h2`
    font-size: 2.4rem;
    color: #155480;
    font-weight: 600;
`;

const CardIcon = styled.img`
    padding: 1rem;
    height: 150px;
`;

const CardSection = styled(Section)`
    margin: 2rem;
    padding: 2rem 0;
    padding-bottom: 5rem;

    @media screen and (min-width: 960px) {
        padding: 0;
        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
        }
    }
`;

const Heading = styled.h1`
    font-size: 3.2rem;
`;

const StyledContent = styled(Content)`
    text-align: center;
`;

const StyledHeaderContent = styled(Content)`
    justify-content: center;
    text-align: center;
`;

const StyledSection = styled(Section)`
    padding-top: 3rem;
    margin-left: 0;
`;

const StyledWideContainer = styled(WideContainer)``;

const Subheading = styled.h2`
    font-size: 2.4rem;
`;

// Holds Data for the 3rd row (which is 3-column cards)
const cardContent = [
    {
        id: "card1",
        icon: person,
        title: "Easy employee management",
        desc:
            "View, change employee coverage and update profile information with streamlined features"
    },
    {
        id: "card2",
        icon: mail,
        title: "Quick invoice management",
        desc:
            "Make payments, view invoices and send deduction files in just a few clicks."
    },
    {
        id: "card3",
        icon: cogs,
        title: "Convenient account control",
        desc:
            "Find reports, view messages and save payment details to stay on top of your account."
    }
];

export default class extends React.Component {
    render() {
        const cardItems = cardContent.map(cardContent => (
            <CardSection key={cardContent.id} flexbasis="1/3">
                <CardIcon src={cardContent.icon} />
                <CardHeading>{cardContent.title}</CardHeading>
                <CardDesc>{cardContent.desc}</CardDesc>
            </CardSection>
        ));
        return (
            <>
                <StyledWideContainer bgcolor="col-light-blue" txtcolor="black">
                    <StyledHeaderContent>
                        <StyledSection flexbasis="100%">
                            <Heading>Smart Simplicity</Heading>
                            <Subheading>
                                Be empowered to have full control over your
                                account
                            </Subheading>
                        </StyledSection>
                    </StyledHeaderContent>
                    <StyledContent>{cardItems}</StyledContent>
                </StyledWideContainer>
            </>
        );
    }
}
