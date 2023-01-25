import { useState, useEffect } from "react";
import ContentCombo from "../../components/MainContent/components/ContentCombo";
import ContentDeserts from "../../components/MainContent/components/ContentDeserts";
import ContentDrinks from "../../components/MainContent/components/ContentDrinks";
import ContentPizza from "../../components/MainContent/components/ContentPizza";
import ContentSauce from "../../components/MainContent/components/ContentSauce";
import ContentSnacks from "../../components/MainContent/components/ContentSnacks";
import ContentSushi from "../../components/MainContent/components/ContentSushi";
import Skeleton from "../../components/Skeleton";

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
    return <Skeleton />;
  } else {
    return (
      <section className="main-content">
          <ContentPizza {...items} />
          <ContentSushi {...items} />
          <ContentSnacks {...items} />
          <ContentDeserts {...items} />
          <ContentDrinks {...items} />
          <ContentSauce {...items} />
          <ContentCombo {...items} />
      </section>
    );
  }
}

export default MainContent;
