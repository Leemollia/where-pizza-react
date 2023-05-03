import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-page">
      <div className="container">
        <div className="error-page__inner">
          <h1>Ой!</h1>
          <img src="./img/svg/not-found.svg" alt="Картинка Not Found" />
          <p>К сожалению, такая страница не найдена :(</p>
          <Link to="/" className="button">
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
