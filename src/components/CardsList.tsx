import Card from "./Card.tsx";
import "../main.css";
import { CARD } from "../data.tsx";
import { CardData } from "./types.tsx";

function CardsList() {
  return (
    <>
      {/* Global Container */}
      <div className="flex items-center justify-center min-h-screen bg-gray-800">
        {/* Cards container */}
        <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
          {CARD.map((item: CardData, index: number) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CardsList;
