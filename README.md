
## Tensor Processor SDK - Typescript

### Installation

- Package manager  
  `npm install @tynevosa/tensor-processor`

### Example
```typescript
  import Tpu from "@tynevosa/tensor-processor";

  const client: Tpu = new Tpu({
    apiKey: YOUR_TPU_API_KEY,
  });

  // Run model
  client.prediction({
    model: "Stable Lightning",
    input: {
      "prompt": "a panda eating bamboo"
    }
  })
  .then((result) => {
    console.log(result);
  });
```