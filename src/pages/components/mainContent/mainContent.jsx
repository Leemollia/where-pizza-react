import { useSelector } from "react-redux";
import { useGetAllCardsQuery } from "../../../store/api/cardsApi.js";

import ProductGroup from "../../../components/ProductGroup.jsx";
import {
  ListSkeletonCardItem,
  SkeletonCardItem,
} from "../../../components/Skeletons.jsx";
import ModalCard from "../../../components/ModalCard";

import Portal from "../../../util/Portal.js";

function MainContent() {
  const { isOpen, cardData } = useSelector((state) => state.modalCard);

  const { data = [], isError, isLoading, error } = useGetAllCardsQuery();

  if (isError) {
    return <div>Ошибка: {error}</div>;
  // } else {
    } else if (isLoading) {
    return (
      <section className="main-content">
        {Array(4)
          .fill(<ListSkeletonCardItem />)
          .map((skeleton, index) => (
            <ListSkeletonCardItem key={index} />
          ))}
      </section>
    );
  }
   else {
    return (
      <section className="main-content">
        {Object.entries(data).map((category) => (
          <ProductGroup
            key={category}
            category={category[0]}
            items={category[1]}
          />
        ))}
        {isOpen && (
          <Portal
            children={<ModalCard data={cardData} isOpen={isOpen}></ModalCard>}
          />
        )}
      </section>
    );
  }
}

export default MainContent;
