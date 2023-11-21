import MongoDB from "./MongoDB";

type PetType = "dog" | "cat" | "fish";

export type PetsTypes = [
  {
    id: number;
    type: PetType;
    image: any;
    name: string;
    color: string;
    sex: string;
  }
];

export const PetsFunctions = {
  getAll: async () => {
    try {
      return await MongoDB.find({});
    } catch (error) {
      console.error("Erro ao obter todos os registros:", error);
      throw error; // Rejoga o erro para que o chamador possa lidar com ele
    }
  },
  findFromType: async (type: PetType) => {
    return await MongoDB.find({ type });
  },
  getFromName: async (name: string, type: string) => {
    try {
      const query: any = {};

      if (name && type) {
        query.name = { $regex: new RegExp(`^${name}`, "i") };
        query.type = type;
      } else if (name) {
        query.name = { $regex: new RegExp(`^${name}`, "i") };
      } else if (type) {
        query.type = type;
      }

      return await MongoDB.find(query);
    } catch (error) {
      console.error("Erro ao obter animais por nome e tipo:", error);
      throw error;
    }
  },
};
