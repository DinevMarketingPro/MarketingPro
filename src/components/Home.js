import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Основен контейнер с тъмен фон и fade-in
const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  background-color: #121212;
  color: #ff6600;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  transition: opacity 1.5s ease-in;
  text-align: center;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0 0 15px rgba(255, 102, 0, 0.5);
`;

// Заглавие с текстова сянка
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #ff6600;
  text-shadow: 0 0 10px #ffffff;
`;

// Параграфи със стилизиране
const Paragraph = styled.p`
  font-size: 1.3rem;
  max-width: 600px;
  line-height: 1.6;
  color: #ffffff;
  text-shadow: 0 0 5px #000000aa;
  margin-bottom: 30px;
`;

// Контейнер за бутоните с флекс разположение
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

// Стил на бутоните с ефект при hover
const Button = styled.button`
  background-color: transparent;
  color: #ff6600;
  border: 2px solid #ff6600;
  padding: 12px 30px;
  margin: 10px 0;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  min-width: 180px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff6600;
    color: #121212;
  }
`;

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Container fadeIn={fadeIn}>
      <Title>Добре дошли в MarketingPro</Title>
      <Paragraph>
        Тук можете да поръчате уебсайт, визитки или видеоклип за вашия бизнес.
      </Paragraph>
      <Paragraph>Изберете една от услугите в менюто, за да започнете.</Paragraph>

      <ButtonsContainer>
        <Button>Заявки</Button>
        <Button>Вход / Регистрация</Button>
        <Button>Контакти</Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Home;
