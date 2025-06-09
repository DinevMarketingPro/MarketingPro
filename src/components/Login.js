import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #121212;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
`;

const FormWrapper = styled.div`
  background-color: #1e1e1e;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(255, 102, 0, 0.5);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  color: #ff6600;
  text-align: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ff6600;
  border-radius: 5px;
  background-color: #2a2a2a;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffa94d;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ff6600;
  color: #121212;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #ffa94d;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Вход с:', email, password);
    // По-късно ще добавим REST API логика
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Вход</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Имейл"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Парола"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Вход</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
