import { Base } from "../base";
import { 
  Category, 
  GetModelListInput, 
  Model, 
  PredictionHistory, 
  PredictionInput, 
  PredictionResult, 
  PredictionStatus, 
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
  async prediction(predictionInput: PredictionInput): Promise<PredictionStatus | null | string> {
    const response = await this.request<PredictionStatus>('/prediction', {
      method: "POST",
      body: JSON.stringify(predictionInput),
    });
    // return output;
    try {
      const start_time = Date.now();
      while (true) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const status = await this.request<PredictionStatus>(`/prediction/status/${response.id}`);
        if (status.status === "pending") {
          if ((Date.now() - start_time) / 1000 > this.timeout) {
              return "Execution Timeout!";
          }
        } else {
          if (status.status === "success") {
            const result = await this.request<PredictionResult>(`/prediction/result/${status.prediction_id}`);
            return result.output;
          } else {
            return null;
          }
        }
      }
    } catch (error) {
      return null;
    }
  }
}
