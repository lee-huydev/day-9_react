import React, { useState } from 'react';
import { Form } from '../components';
const SignUp = () => {
   const [user, setUser] = useState({
      username: '',
      password: '',
      confirm: '',
   });
   const [error, setError] = useState('');
   const isInValid = user.username === '' || user.password === '' || user.confirm === '';
   const isCorrect = user.password === user.confirm;
   const local = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
   const handleSubmit = (e) => {
      e.preventDefault();
      if (isInValid) {
         setError('Please enter full fill!');
         return;
      }
      if (!isCorrect) {
         setError('Password does not match, Please enter again!');
         return;
      }
      const data = { user: user.username, password: user.password };
      localStorage.setItem('user', JSON.stringify([...local, data]));
      setUser({ username: '', password: '', confirm: '' });
   };
   return (
      <Form>
         <Form.Title>Sign Up</Form.Title>
         {error && <Form.Error>{error}</Form.Error>}
         <Form.Frame onSubmit={handleSubmit}>
            <Form.Wrapper>
               <Form.Input
                  type="text"
                  value={user.username}
                  onChange={({ target }) => setUser({ ...user, username: target.value })}
               />
               <Form.Label isValid={user.username}>Username</Form.Label>
            </Form.Wrapper>
            <Form.Wrapper>
               <Form.Input
                  type="password"
                  value={user.password}
                  onChange={({ target }) => setUser({ ...user, password: target.value })}
               />
               <Form.Label isValid={user.password}>Password</Form.Label>
            </Form.Wrapper>
            <Form.Wrapper>
               <Form.Input
                  type="password"
                  value={user.confirm}
                  onChange={({ target }) => setUser({ ...user, confirm: target.value })}
               />
               <Form.Label isValid={user.confirm}>Confirm password</Form.Label>
            </Form.Wrapper>
            <Form.Submit type="submit">Sign Up</Form.Submit>
         </Form.Frame>
      </Form>
   );
};

export default SignUp;
