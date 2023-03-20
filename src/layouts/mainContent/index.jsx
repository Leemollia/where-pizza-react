import { useGetAllCardsQuery } from "../../store/api/cardsApi.js";
import {  } from "../../store/slice/modalCardSlice";

import ProductGroup from "../../components/ProductGroup";
import Skeleton from "../../components/Skeleton";
import ModalCard from "../../components/ModalCard";
import { useSelector } from "react-redux";

function MainContent() {
  const modalData = useSelector((state) => state.modalCard.cardData);
  console.log(modalData);
  const {data = [], isError, isLoading, error} = useGetAllCardsQuery();

  if (isError) {
    return <div>Ошибка: {error}</div>;
  } else if (isLoading) {
    return Array(20).map(skeleton => <Skeleton />);
  } else {
    return (
      <section className="main-content">
        {Object.entries(data).map((category) => (
          <ProductGroup
            key={category}
            category={category[0]}
            items={category[1]}
          />
        ))}
        
        <ModalCard></ModalCard>
      </section>
    );
  }
}

export default MainContent;
