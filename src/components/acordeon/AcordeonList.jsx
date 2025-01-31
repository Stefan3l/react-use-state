import AcordeonData from "../../data/AcordeonData";

export default function AcordeonList() {
  return (
    <div className="container">
      {AcordeonData.map((elm) => {
        <div className="acordeon" key={elm.id}>
          <div className="acordeon-title">
            <h1 className="title">{elm.title}</h1>
            <button>+</button>
          </div>
          <div className="acordeon-text">
            <p className="text">{elm.description}</p>
          </div>
        </div>;
      })}
    </div>
  );
}
