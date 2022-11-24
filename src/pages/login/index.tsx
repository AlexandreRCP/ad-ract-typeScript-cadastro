import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { IFormData } from './types';

const schema = yup.object({
    email: yup.string().required("Campo obrigatório").email("email não é válido!"),
    password: yup.string().required("Campo obrigatório").min(3, "No minímo 3 caracteres"),
  }).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors }, } = useForm<IFormData>({
        resolver: yupResolver[schema],
        mode: 'onChange', defaultValues: {
            email: "",
            password: "",
          }
    });

    const onSubmit = async (FormData: IFormData) => {
        try {
            const { data } = await api.get(`users?email=${FormData.email}&senha=${FormData.password}`)
            if(data.length === 1) {
                navigate('/feed')
            } else {
                alert('Email ou senha inválido')
            }
        } catch {
            alert('Houve um erro, tente novamente.')
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e 
                        entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name='email' control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name='password' control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title='Entrar' variant='secundary' type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText><a href="/cadastro">Criar Conta</a></CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }