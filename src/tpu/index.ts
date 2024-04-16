import { Base } from "../base";
import { 
  Category, 
  GetModelListInput, 
  Model, 
  PredictionHistory, 
  PredictionInput, 
  PredictionOutput, 
} from "./types";

// Class that extends the Base class and implements the TPU API
export class Tpu extends Base {
  // Mothod to get model list
  async getModels(getModelListInput: GetModelListInput): Promise<Model[]> {
    const output = await this.request<Model[]>('/model/list', {
      method: "POST",
      body: JSON.stringify(getModelListInput)
    });
    return output;
  }

  // Mothod to get specific model
  async getModel(modelName: string): Promise<Model> {
    const output = await this.request<Model>(`/model/get/${modelName}`);
    return output;
  }

  // Method to get categories
  async getCategories(): Promise<Category[]> {
    const output = await this.request<Category[]>('/collection/list');
    return output;
  }

  // Method to get prediction history
  async predictionHistory(): Promise<PredictionHistory> {
    const output = await this.request<PredictionHistory>('/prediction/history');
    return output;
  }

  // Method to create a prediction
  async prediction(predictionInput: PredictionInput): Promise<PredictionOutput> {
    const output = await this.request<PredictionOutput>('/prediction', {
      method: "POST",
      body: JSON.stringify(predictionInput),
    });
    return output;
  }
}
