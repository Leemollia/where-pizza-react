import { useGetAllCardsQuery } from "../../../store/api/cardsApi.js";

import {
  ListSkeletonCardItem,
  SkeletonCardItem,
} from "../../../components/Skeletons.jsx";
import HeadingFilter from "../../../components/HeadingFilter.jsx";
import CardItem from "../../../components/CardItem.jsx";

export default function MainContent() {
  const { data = [], isError, isLoading, error } = useGetAllCardsQuery();

  if (isError) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <section className="main-content">
      {isLoading
        ? Array(4)
            .fill(<ListSkeletonCardItem />)
            .map((skeleton, index) => <ListSkeletonCardItem key={index} />)
            
        : Object.entries(data).map(([category, items]) => (
            <div className="group-content" key={category}>
              <HeadingFilter category={category} />
              <div className="content">
                {items.map((item) => (
                  <CardItem key={item.id} data={item} />
                ))}
              </div>
            </div>
          ))}
    </section>
  );
}
