import Button from "../UI/Button";

function ButtonFilter() {
  const onClickHander = (event) => {
    document.querySelector("#filter-menu").classList.toggle("active")
  }

  return (
    <Button className={'button-filter'} onClick={onClickHander}>
      <img loading="lazy" src="img/svg/Filter.svg" alt="" />
      <span>Фильтры</span>
    </Button>
  );
}

export default ButtonFilter;
