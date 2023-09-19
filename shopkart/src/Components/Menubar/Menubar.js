import { useData } from "../../Contexts/DataContext/DataContext";
import "./Menubar.css";
export const Menubar = () => {
  const {
    state: { MenubarData },
  } = useData();
  console.log(MenubarData);
  return (
    <nav className="menubar-container">
      <div>
        {MenubarData.map(({ id, name }) => (
          <a href="" key={id}>
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
};
