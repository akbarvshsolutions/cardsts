
import { Fragment } from "react";
import "./styles.css";
import Card from "./comoonents/Cards/Card";
import data from "./data.json";

export default function App() {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 30
        }}
      >
        {data.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            onClick={() => {}}
            imageUrl={card.imageUrl}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </Fragment>
  );
}

