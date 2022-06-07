import { useState, useEffect } from "react";
import ContentCombo from "./components/ContentCombo";
import ContentDeserts from "./components/ContentDeserts";
import ContentDrinks from "./components/ContentDrinks";
import ContentPizza from "./components/ContentPizza";
import ContentSauce from "./components/ContentSauce";
import ContentSnacks from "./components/ContentSnacks";
import ContentSushi from "./components/ContentSushi";
import Skeleton from "./components/Skeleton";

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
    return console.log(items), <Skeleton />
  } else {console.log(items)
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
