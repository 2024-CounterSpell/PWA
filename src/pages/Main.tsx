import { CreateAccountIcon, LoginIcon } from "../assets";
import { Button } from "../components/pages/Main/Button";
import * as S from "../styles/pages/Main";
import { IButton } from "../types/components";

const RegisterButton: IButton = {
    width: "80%",
    height: "2.8rem",
    content: "회원가입",
    color: "#27B77F",
    bgColor: "#fff",
    borderRadius: "13px",
    fontSize: "16px",
    icon: CreateAccountIcon,
}

const LoginButton: IButton = {
    width: "80%",
    height: "2.8rem",
    content: "로그인",
    color: "#fff",
    bgColor: "#27B77F",
    borderRadius: "13px",
    fontSize: "16px",
    icon: LoginIcon,
}

const MainPage = () => {
    return <S.Container>
        <S.LogoWrap>

        </S.LogoWrap>
        <S.ButtonWrap>
            <Button {...RegisterButton}></Button>
            <Button {...LoginButton}></Button>
        </S.ButtonWrap>
    </S.Container>
}

export default MainPage;