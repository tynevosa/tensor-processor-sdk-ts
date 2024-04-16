export type PredictionInput = {
  model: string;
  input: object;
};

export type PredictionOutput = {
  output: object;
  time: number;
}

export type PredictionHistory = {
  input: object;
  result: object;
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
