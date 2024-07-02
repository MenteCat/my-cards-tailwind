import { CardData } from "./components/types";

export const CARD: CardData[]= [
    {
      plan: "Basic",
      storage: "100GB",
      monthly: "£1.99/Month",
      benefits: [
        { svg: "http://www.w3.org/2000/svg", itemone: "100 GB of storage"},
        { svg: "http://www.w3.org/2000/svg", itemtwo: "Option to add members"},
        { svg: "http://www.w3.org/2000/svg", itemthree: "Extra member benefits"}
      ],
    },
    {
      plan: "Standard",
      storage: "200GB",
      monthly: "£3.99/Month",
      benefits: [
        { svg: "http://www.w3.org/2000/svg", itemone: "200 GB of storage"},
        { svg: "http://www.w3.org/2000/svg", itemtwo: "Option to add members"},
        { svg: "http://www.w3.org/2000/svg", itemthree: "Extra member benefits"}
      ],
    },
    {
      plan: "Premium",
      storage: "2TB",
      monthly: "£8.99/Month",
      benefits: [
        { svg: "http://www.w3.org/2000/svg", itemone: "2 TB of storage"},
        { svg: "http://www.w3.org/2000/svg", itemtwo: "Option to add members"},
        { svg: "http://www.w3.org/2000/svg", itemthree: "Extra member benefits"}
      ],
    },
  ];