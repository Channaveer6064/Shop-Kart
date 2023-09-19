import { useData } from "../../Contexts/DataContext/DataContext";
import { Header } from "../Header/Header";
import { Menubar } from "../Menubar/Menubar";
import "./Banner.css";

export const Banner = () => {
  const {
    state: { toggleMenubar },
  } = useData();
  return (
    <div className="banner-container">
      <img src="/img/Rectangle.png" className="banner-reactangle-1" />{" "}
      <Header />
      <div className="banner-menubar">
        {" "}
        <Menubar />
      </div>
      {!toggleMenubar ? (
        <>
          {" "}
          <h1>
            <span id="fresh">fresh</span>
            <span id="year">2022</span>
            <span id="look">look</span>
          </h1>
          <div className="banner-reactangle-2"></div>
          <img src="/img/model.png" id="model-img" />
          <p id="jacket-details">
            <span>oregon jacket</span>
            <span>$ 124</span>
          </p>
          <img src="/img/star-3.png" id="star-3" />
          <img src="/img/star-2.png" id="star-2" />
          <img src="/img/line-2.png" id="line-2" />
          <button className="banner-btn">
            <span>show more</span>
            <img src="/img/vector.svg" />
          </button>
        </>
      ) : (
        <>
          <Menubar />
        </>
      )}
    </div>
  );
};
