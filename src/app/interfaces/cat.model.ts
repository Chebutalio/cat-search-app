export interface Cat {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds?: Breed[];
}

export interface Breed {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  life_span: string;
  weight: {
    imperial: string;
    metric: string;
  };
  wikipedia_url?: string;
}
