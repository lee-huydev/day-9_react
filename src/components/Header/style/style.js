import styled from 'styled-components/macro';
import { NavLink as ReactNav } from 'react-router-dom';

export const Container = styled.div`
   background-color: rgb(238, 200, 26);
   width: 100%;
   padding: 30px 40px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const NavLink = styled(ReactNav)`
   text-decoration: none;
   font-weight: 500;
   font-size: 20px;
   color: #fff;
   margin-left: 20px;
   &:hover {
      cursor: pointer;
   }
   &.active {
       color: red;
   }
`;

export const Logo = styled.h1`
   font-size: 30px;
   margin: 0;
`;

export const GroupNav = styled.div``;
