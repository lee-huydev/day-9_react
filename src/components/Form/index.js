import { Container, Title, Submit, Frame, Input, Wrapper, Label, Error } from './style/style'

export default function Form({children}) {
    return <Container>{children}</Container>
}

Form.Title = ({children}) => <Title>{children}</Title>

Form.Wrapper = ({children}) => <Wrapper>{children}</Wrapper>

Form.Label = ({children, ...restProps}) => <Label {...restProps} >{children}</Label>

Form.Input = ({children, ...restProps}) => <Input {...restProps} >{children}</Input>

Form.Submit = ({children, ...restProps}) => <Submit {...restProps} >{children}</Submit>

Form.Frame = ({children, ...restProps}) => <Frame {...restProps} >{children}</Frame>

Form.Error = ({children}) => <Error>{children}</Error>
