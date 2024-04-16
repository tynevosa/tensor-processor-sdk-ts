
## Tensor Processor SDK - Typescript

### Installation

- Package manager  
  `npm install @tynevosa/tensor-processor`

### Example
```typescript
  import Tpu from "@tynevosa/tensor-processor";

  const client: Tpu = new Tpu({
    apiKey: TPU_API_KEY,
  });

  // Run model
  client.prediction({
    model: MODEL_NAME,
    input: {
      // Model Input
    }
  })
  .then((result) => {
    console.log(result);
  });
```