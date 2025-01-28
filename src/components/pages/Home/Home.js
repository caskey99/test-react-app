import React from 'react';
import Card from '../../Card/Card';
import { cardData } from "../../../static/data";

const Home = () => (
  <div>
    <h1>Добро пожаловать!</h1>
    <p>Это главная страница нашего приложения.</p>
    {/* <Link to="/about">О нас</Link> | <Link to="/blog">Блог</Link> | <Link to="/contact">Контакты</Link> */}
    <div className="cards_container">
        {cardData.map((card) => (
          <Card key={card.id} image={card.image} caption={card.caption} />
        ))}
      </div>
  </div>
);

export default Home;
