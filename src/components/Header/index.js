import { NavLink, Container, Logo, GroupNav } from './style/style'

export default function Header({children}) {
    return <Container>{children}</Container>
}

Header.NavLink = ({children, ...restProps}) => <NavLink {...restProps} >{children}</NavLink>

Header.Logo = ({children}) => <Logo>{children}</Logo>

Header.GroupNav = ({children}) => <GroupNav>{children}</GroupNav>