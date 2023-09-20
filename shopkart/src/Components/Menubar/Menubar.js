import { NavLink } from "react-router-dom";
import { useData } from "../../Contexts/DataContext/DataContext";
import "./Menubar.css";
export const Menubar = () => {
  const {
    state: { MenubarData, ProductData },
  } = useData();
  console.log(MenubarData);
  return (
    <nav className="menubar-container">
      <div>
        {MenubarData.map((i) => (
          <>
            <a href="" key={i.id}>
              {i.name === "Our Products" ? (
                <div className="our-products">
                  {i.name}{" "}
                  <div id="product-list">
                    {" "}
                    {i.child.map(({ id, name }) => (
                      <span
                        key={id}
                        style={{
                          margin: "5px",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <>{i.name}</>
              )}
            </a>
          </>
        ))}
      </div>
    </nav>
  );
};
