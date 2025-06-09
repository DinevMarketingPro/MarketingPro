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

const ErrorMsg = styled.p`
  color: #ff4d4d;
  margin-bottom: 10px;
`;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Паролите не съвпадат');
      return;
    }

    // Проверяваме дали имейлът вече съществува (ще добавим реална логика с json-server)
    try {
      const res = await fetch(`http://localhost:5000/users?email=${email}`);
      const existingUsers = await res.json();
      if (existingUsers.length > 0) {
        setError('Този имейл вече е регистриран');
        return;
      }

      // Добавяме нов потребител
      const newUser = { email, password };
      await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      alert('Регистрацията е успешна! Може да влезете с вашите данни.');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError('Грешка при връзката със сървъра');
      console.error(err);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Регистрация</Title>
        <form onSubmit={handleSubmit}>
          {error && <ErrorMsg>{error}</ErrorMsg>}
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
          <Input
            type="password"
            placeholder="Потвърдете паролата"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit">Регистрация</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Register;
