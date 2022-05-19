import styled from 'styled-components/macro'

export const Container = styled.div`
   max-width: 450px;
   width: 100%;
   background-color: rgb(209,174,147, 0.5);
   padding: 60px 68px 40px;
   margin: 20px auto;
`

export const Title = styled.h2`
    color: #fff;
    font-size: 30px;
`
export const Label = styled.label`
    position:absolute;
    left: 20px;
    top: ${props => props.isValid === '' ? '15px' : '8px'};
    font-size: ${props => props.isValid === '' ? '16px' : '12px'};
    color: #333;
    pointer-events: none;
`

export const Input = styled.input`
    width: 100%;
    padding: 25px 20px 5px;
    border: none;
    border-radius: 5px;
    outline: none;
    &:focus + ${Label}{
        font-size: 12px;
        top: 8px
    }
`

export const Submit = styled.button`
    width: 100%;
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
    background-color: rgb(238,200,26);
    color: #fff;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

export const Frame = styled.form``

export const Wrapper = styled.div`
    position: relative;
    margin-bottom: 20px;
`

export const Error = styled.div`
  /* background: #e87c03; */
  /* border-radius: 4px; */
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 16px;
  color: #e87c03;
  /* padding: 5px 20px; */
`;


