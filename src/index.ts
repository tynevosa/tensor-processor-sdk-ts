// Import the necessary modules and classes
import { Base } from "./base";
import { Tpu } from "./tpu";
import { applyMixins } from "./utils";

// Define the TensorProcessor class which extends Base and implements TPU APIs
class TensorProcessor extends Base {}
interface TensorProcessor extends Tpu {}

// Add the methods and properties of Tpu class to TensorProcessor using applyMixins
applyMixins(TensorProcessor, [Tpu]);

export default TensorProcessor;
