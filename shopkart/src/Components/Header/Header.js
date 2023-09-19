import { useData } from "../../Contexts/DataContext/DataContext";
import "./Header.css";
export const Header = () => {
  const {
    state: { toggleMenubar },
    dispatch,
  } = useData();
  const handleClick = () => {
    dispatch({ type: "TOGGLE_MENUBAR" });
  };
  return (
    <header className="header">
      <div className="header-container">
        {" "}
        <h1>ShopKart</h1>
        <img src="/img/star-1.svg" id="star-1" />
        {!toggleMenubar ? (
          <button onClick={handleClick}>
            {" "}
            <img src="/img/dropdown.svg" className="dropdown-btn" />
          </button>
        ) : (
          <button onClick={handleClick}>
            <img src="/img/x.svg" className="dropdown-btn" />
          </button>
        )}
        <p>
          <a href="">wishlist(0)</a>
          <a href="">bag(0)</a>
        </p>
      </div>
    </header>
  );
};
