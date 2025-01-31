import AcordeonData from "../../data/AcordeonData";
import Accordeon from "./Acordeon";

export default function AcordeonList() {
  return (
    <div className="container">
      {AcordeonData.map((elm) => {
        return (
          <Accordeon
            key={elm.id}
            title={elm.title}
            description={elm.description}
          />
        );
      })}
    </div>
  );
}
