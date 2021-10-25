// Styled Components
import { FC } from 'react';
import Media from './Media/Media.styled';
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
import Image from '../../images/Bitmap.png';

const Card: FC = () => (
    <Container>
        <Media src={Image} alt="" />
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
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                eiusmod tempor
            </Paragraph>
            <Actions>
                <ActionsContent>
                    <Link href="/">ACTION 1</Link>
                    <Link href="/">ACTION 2</Link>
                </ActionsContent>
                <ActionsContent>
                    <Like />
                </ActionsContent>
            </Actions>
        </Content>
    </Container>
);

export default Card;
