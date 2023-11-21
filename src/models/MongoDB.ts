import { Schema, model, Model, connection } from "mongoose";

export type PetType = "dog" | "cat" | "fish";

export type ApiStyle = {
  types: PetType;
  image: any;
  name: string;
  color: string;
  sex: "Masculino" | "Feminino";
};

export const schema = new Schema<ApiStyle>({
  types: { type: String },
  image: { type: String },
  name: { type: String },
  color: { type: String },
  sex: { type: String },
});

const modelName: string = "MongoDB";

export default connection && connection.models[modelName]
  ? (connection.models[modelName] as Model<ApiStyle>)
  : model<ApiStyle>(modelName, schema, "pet_shop");
