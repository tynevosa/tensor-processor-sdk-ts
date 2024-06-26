import fetch from "isomorphic-unfetch";

type Config = {
  apiKey: string;
  baseUrl?: string;
  timeout?: number;
};

export abstract class Base {
  private apiKey: string;
  private baseUrl: string;
  protected timeout: number;

  constructor(config: Config) {
    // Set the API key and base URL for the class instance
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || "http://95.217.158.17:5000/api";
    this.timeout = config.timeout || 600; // seconds
  }

  protected async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    // Construct the URL for the request
    const url = `${this.baseUrl}${endpoint}`;
    // Set the headers for the request
    const headers = {
      "Content-Type": "application/json",
      "tpu-api-key": this.apiKey,
    };
    const config = Object.assign({}, options, { headers });

    const response = await fetch(url, config);
        // If the response is OK, parse the JSON and return it
    if (response.ok) {
      const data = await response.json();
      return data as T;
    }
      // If the response is not OK, throw an error
    throw new Error(response.statusText);
  }
}
