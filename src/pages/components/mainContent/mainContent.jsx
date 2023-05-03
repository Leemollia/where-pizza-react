import { useSelector } from "react-redux";
import { useGetAllCardsQuery } from "../../../store/api/cardsApi.js";

import ProductGroup from '../../../components/ProductGroup.jsx'
import Skeleton from "../../../components/Skeleton";
import ModalCard from "../../../components/ModalCard";

import Portal from "../../../components/Portal.js";

function MainContent() {
  const {isOpen, cardData} = useSelector((state) => state.modalCard);

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
        {isOpen && <Portal children={<ModalCard data={cardData} isOpen={isOpen}></ModalCard>}/>}
      </section>
    );
  }
}

export default MainContent;
