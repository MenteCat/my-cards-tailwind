export interface Benefit {
    svg: string;
    itemone?: string;
    itemtwo?: string;
    itemthree?: string;
  }
  
  export interface CardData {
    plan: string;
    storage: string;
    monthly: string;
    benefits: Benefit[];
  }
  