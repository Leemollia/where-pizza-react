import { useState, useEffect } from "react";
import ContentCombo from "./components/ContentCombo";
import ContentDeserts from "./components/ContentDeserts";
import ContentDrinks from "./components/ContentDrinks";
import ContentPizza from "./components/ContentPizza";
import ContentSauce from "./components/ContentSauce";
import ContentSnacks from "./components/ContentSnacks";
import ContentSushi from "./components/ContentSushi";

function MainContent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://leemollia.github.io/where-pizza/database.json")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      
      <section className="main-content">
        <ContentPizza items={items} />
        <ContentSushi items={items} />
        <ContentSnacks items={items} />
        <ContentDeserts items={items} />
        <ContentDrinks items={items} />
        <ContentSauce items={items} />
        <ContentCombo items={items} />
      </section>
    );
  }
}

export default MainContent;
