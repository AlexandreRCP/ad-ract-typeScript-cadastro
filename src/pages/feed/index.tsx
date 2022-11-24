import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';
import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={85} nome='Alexandre Paiva' image="https://avatars.githubusercontent.com/u/78282542?s=400&u=676297fe3d1dfe2f9274a95f3dbd69875d43456a&v=4" />
                <UserInfo percentual={65} nome='Pablo Henrique' image="https://avatars.githubusercontent.com/u/78282542?s=400&u=676297fe3d1dfe2f9274a95f3dbd69875d43456a&v=4" />
                <UserInfo percentual={40} nome='Ricardo Palmeiras' image="https://avatars.githubusercontent.com/u/78282542?s=400&u=676297fe3d1dfe2f9274a95f3dbd69875d43456a&v=4" />
                <UserInfo percentual={35} nome='São Paulo' image="https://avatars.githubusercontent.com/u/78282542?s=400&u=676297fe3d1dfe2f9274a95f3dbd69875d43456a&v=4" />
                <UserInfo percentual={30} nome='Jasmin Rodriguês' image="https://avatars.githubusercontent.com/u/78282542?s=400&u=676297fe3d1dfe2f9274a95f3dbd69875d43456a&v=4" />
            </Column>
        </Container>
    </>)
}

export { Feed }