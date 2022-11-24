import React from 'react';
import logo from '../../assets/logodio.png';
import { Button } from '../Button';
import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, Wrapper, UserPicture} from './styles';
import { IHeader } from './types';

const Header = ({autenticado}: IHeader) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <UserPicture src={logo} alt='Logo da dio' />
                    { autenticado ? (
                        <>
                            <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                        ) : null }
                </Row>
                <Row>
                    { autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/78282542?s=400&u=676297fe3d1dfe2f9274a95f3dbd69875d43456a&v=4" />
                    ) : (
                        <>
                            <MenuRight href='#'>Home</MenuRight>
                            <Button title='Entrar' />
                            <Button title='Cadastrar' />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }