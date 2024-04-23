export type PredictionInput = {
  model: string;
  input: object;
};

export type PredictionStatus = {
  id: number;
  status: string;
  message?: string;
  prediction_id?: number;
}

export type PredictionResult = {
  input: PredictionInput;
  output?: any;
  time?: number;
  cost?: number;
}

export type PredictionHistory = {
  input: object;
  output: object;
  cost: number;
  model: string;
}

export type GetModelListInput = {
  page: number;
  count: number;
  collection_id?: number;
}

export type Model = {
  cover_image_url: string;
  name: string;
  short_desc: string;
  description: string;
  run_count: number;
  urls: object;
  default_example: object;
  api_schema: object;
  collection_id: number[];
}

export type Category = {
  name: string;
  slug: string;
  description: string;
}
