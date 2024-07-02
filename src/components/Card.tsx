import { CardData } from "./types";


interface CardProps {
  data: CardData;
}


function Card({ data }: CardProps) {
  const { plan, storage, monthly, benefits } = data;

  return (
    <>
      <div className="bg-gray-700 rounded-xl hover:bg-green-700 text-white transition-all duration-700 transform hover:scale-105">
        {/* Upper card container */}
        <div className="p-8 mx-3 mt-3 rounded-t-xl bg-gray-800">
          <div className="text-center uppercase font-mono">{plan}</div>
          <h2 className="mt-10 font-mono text-5xl text-center">{storage}</h2>
          <h3 className="mt-2 font-mono text-center">{monthly}</h3>
          <div className="flex justify-center">
            <a
              href="#"
              className="font-mono text-center inline-block px-10 py-3 my-6 border border-green-700 rounded-lg duration-200 hover:bg-green-700"
            >
              Purchase
            </a>
          </div>
        </div>
        {/* Middle border */}
        <div className="border-t border-gray-700"></div>
        {/* Lower Card Container */}
        <div className="p-8 mx-3 mb-3 rounded-b-xl bg-gray-800">
          {/* List Container */}
          <div className="flex flex-col space-y-2">
            {/* List Item 1 */}
            {benefits.map((benefit) => (
              <div className="flex justify-center">
                <svg
                  xmlns={benefit.svg}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">{benefit.itemone || benefit.itemtwo || benefit.itemthree}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
