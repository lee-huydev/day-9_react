import { Header, Footer } from '../components';

export default function Layout ({ children }) {
   return (
      <>
         <Header>
               <Header.NavLink to='/'>
                  <Header.Logo>MindX</Header.Logo>
               </Header.NavLink>
            <Header.GroupNav>
               <Header.NavLink to='/user'>User</Header.NavLink>
               <Header.NavLink to='/login'>Log In</Header.NavLink>
               <Header.NavLink to='/signup'>Sign Up</Header.NavLink>
            </Header.GroupNav>
         </Header>
         {children}
         <Footer>
            <Footer.Text>Give me your hand !</Footer.Text>
         </Footer>
      </>
   );
};
