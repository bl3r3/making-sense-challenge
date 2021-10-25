import React, { FC } from 'react';

// Styled Components
import Container from './Card.styled';
import HeaderCard from './Header/HeaderContent/HeaderCard.styled';
import Headline from './Header/HeaderContent/Headline.styled';
import Subtitle from './Header/HeaderContent/Subtitle.styled';
import Avatar from './Header/HeaderContent/Avatar.styled';
import Paragraph from './Header/HeaderContent/Paragraph.styled';
import Actions from './Actions/Actions.styled';
import ActionsContent from './Actions/ActionsContent.styled';
import Link from './Actions/Link.styled';
import Like from './Actions/Like';
import { AvatarContainer } from './Header/AvatarContainer.styled';
import { HeaderContainer } from './Header/HeaderContainer.styled';
import { Content } from './Content.styled';

// IMAGES
import AvatarImg from '../../images/Oval.png';

interface CardProps {
    contentParagraph: string;
    link1: string;
    link2: string;
}

const SimpleCard: FC = ({ contentParagraph, link1, link2 }: CardProps) => (
    <Container>
        <Content>
            <HeaderCard>
                <AvatarContainer>
                    <Avatar src={AvatarImg} alt="Avatar" />
                </AvatarContainer>
                <HeaderContainer>
                    <Headline>Headline 5</Headline>
                    <Subtitle>Subtitle</Subtitle>
                </HeaderContainer>
            </HeaderCard>
            <Paragraph>{contentParagraph}</Paragraph>
            <Actions>
                <ActionsContent>
                    <Link href="/">{link1}</Link>
                    <Link href="/">{link2}</Link>
                </ActionsContent>
                <ActionsContent>
                    <Like />
                </ActionsContent>
            </Actions>
        </Content>
    </Container>
);

export default SimpleCard;
