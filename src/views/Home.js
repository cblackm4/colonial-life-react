import React from "react";
import styled from "styled-components";
import WideContainer from "../components/WideContainer";
import Cards from "../components/Cards";
import Content from "../components/Content";
import Section from "../components/Section";
import comsoon from "../assets/topimg.png";
import displays from "../assets/midimg.png";

const StyledContent = styled(Content)``;

const StyledSection = styled(Section)`
    padding: 4rem 2rem;

    @media screen and (min-width: 960px) {
        padding: 4rem 0rem;
    }
`;

const SectionHeading = styled.h1`
    font-family: ${({ ffamily }) =>
        (ffamily === "oswald" && "Oswald, sans-serif") ||
        (ffamily === "osans" && "Open Sans, sans-serif;")};
    font-size: ${({ size }) =>
        (size === "sm-heading" && "3.2rem") ||
        (size === "lg-heading" && "4rem")};
`;

const SectionImage = styled.img`
    height: ${({ imgsize }) =>
        (imgsize === "sm-img" && "20rem") || (imgsize === "lg-img" && "20rem")};

    @media screen and (min-width: 960px) {
        height: ${({ imgsize }) =>
            (imgsize === "sm-img" && "20rem") ||
            (imgsize === "lg-img" && "40rem")};
    }
`;

const SectionSubHeading = styled.h2`
    font-size: ${({ subsize }) =>
        (subsize === "sm-subheading" && "2.4rem") ||
        (subsize === "lg-subheading" && "3.2rem")};
`;

const StyledSubSection = styled(Section)`
    display: flex;
    justify-content: ${({ imgalign }) =>
        (imgalign === "img-left" && "flex-start") ||
        (imgalign === "img-center" && "center")};
    margin: auto;
`;

const StyledWideContainer = styled(WideContainer)``;

// Holds most of the styling and information for the components. This should make changes to content or containers easier. Could probably have better property names ¯\_(ツ)_/¯
const content = [
    {
        // Styles
        id: "top",
        bgcolor: "col-blue",
        flexMain: "2/3",
        flexSec: "1/3",
        txtcolor: "white",
        font: "oswald",
        size: "lg-heading",
        img: comsoon,
        imgsize: "sm-img",
        imgalign: "img-center",
        subsize: "lg-subheading",
        // Content
        heading: "Fewer clicks, more control",
        subheading: "Your benefits experience simplified.",
        content:
            "Your online account is more effcient than ever with everything you need just a few clicks away -- avaliable on your computer or smartphone*. And there's even more to come with future updates to further improve your experience."
    },
    {
        // Styles
        id: "middle",
        bgcolor: "col-white",
        flexMain: "1/2",
        flexSec: "1/2",
        rev: "true",
        font: "osans",
        size: "sm-heading",
        img: displays,
        imgsize: "lg-img",
        imgalign: "img-left",
        subsize: "sm-subheading",
        // Content
        heading: "Built for you",
        subheading: "Everything right at your fingertips.",
        content:
            "Your personalized dashboard gives you a comprehensive view of your account with the most up-to-date information. Based on real-time data, your account will immediately reflect updates such as:<ul><li>Payment information</li><li>Enrolled employee status</li><li>Updated account details</li></ul>And allow you to check-off your most important tasks:<ul><li>Transfer files</li><li>Run reports</li><li>Remove coverage</li>"
    }
];

export default class extends React.Component {
    render() {
        // Generates 2-Column sections based on content data. This could be it's own componenet if more content were on this page.
        const contentItems = content.map(content => (
            <StyledWideContainer
                key={content.id}
                bgcolor={content.bgcolor}
                txtcolor={content.txtcolor}
            >
                <StyledContent reverse={content.rev}>
                    <StyledSection flexbasis={content.flexMain}>
                        <SectionHeading
                            ffamily={content.font}
                            size={content.size}
                        >
                            {content.heading}
                        </SectionHeading>
                        <SectionSubHeading subsize={content.subsize}>
                            {content.subheading}
                        </SectionSubHeading>
                        <p
                            // This is safe, were not looking for user input
                            dangerouslySetInnerHTML={{
                                __html: content.content
                            }}
                        />
                    </StyledSection>
                    <StyledSubSection
                        flexbasis={content.flexSec}
                        imgalign={content.imgalign}
                    >
                        <SectionImage
                            src={content.img}
                            imgsize={content.imgsize}
                        />
                    </StyledSubSection>
                </StyledContent>
            </StyledWideContainer>
        ));

        return (
            <>
                {contentItems}
                <Cards />
            </>
        );
    }
}
