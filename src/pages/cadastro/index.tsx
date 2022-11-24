import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Column, Container, Title, TitleRegister, Wrapper, SubTitle, Description, Account, SpanText, } from "./styles";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { ButtonTwo } from "../../components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é obrigatório").email("Digite um email valido"),
    password: yup.string().required("senha obrigatoria").min(4, "Senha deve conter minimo 4 caracteres").max(12, "Senha deve conter no máximo 12 caracteres"),}).required();

export function Cadastro() {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), mode: "onBlur", defaultValues: { email: "", password: "", name: "", } });

    const onSubmit = (data: {}) => {
        navigate('/feed')
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais
                        tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>

                <Column>
                    <Wrapper>
                        <TitleRegister>Comece agora grátis</TitleRegister>
                        <SubTitle>Crie sua conta e make the change._</SubTitle>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" control={control} placeholder="Nome completo" leftIcon={<MdPerson />} errorMessage={errors?.name?.message} />
                            <Input name="email" type="email" control={control} placeholder="E-mail" leftIcon={<MdEmail />} errorMessage={errors?.email?.message} />
                            <Input name="password" type="password" control={control} placeholder="Password" leftIcon={<MdLock />} errorMessage={errors?.password?.message} />
                            <ButtonTwo title="Criar minha conta" />
                        </form>
                        <Description>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as
                            Políticas de Privacidade e os Termos de Uso da DIO.
                        </Description>
                        <Account>
                            Já tenho conta.
                            <SpanText href="/login"> Fazer login</SpanText>
                        </Account>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}