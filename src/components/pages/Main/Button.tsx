import { IButton } from "../../../types/components"
import * as S from "../../../styles/components/pages/Main/Button";

export const Button = (props : IButton) => {
    return <S.ButtonContainer {...props}>
        <img src={props.icon} />
        {props.content}
    </S.ButtonContainer>
}