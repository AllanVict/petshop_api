import { Request, Response } from "express";
import MongoDB from "../models/MongoDB";
import { PetsFunctions } from "../models/PetsModels";

export const Home = async (req: Request, res: Response) => {
  const result = await PetsFunctions.getAll();
  res.json(result);
};

export const Dogs = async (req: Request, res: Response) => {
  const dogsReturn = await PetsFunctions.findFromType("dog");
  return res.json(dogsReturn); //.then((result) => res.send(result));
};
export const Cats = async (req: Request, res: Response) => {
  const catReturn = await PetsFunctions.findFromType("cat");
  return res.json(catReturn);
};
export const Fishes = async (req: Request, res: Response) => {
  const result = await PetsFunctions.findFromType("fish");
  res.json(result);
};

export const Search = async (req: Request, res: Response) => {
  const name: string = req.body.search;
  const optionType: string = req.body.selectOption;
  const result = await PetsFunctions.getFromName(name, optionType);
  console.log(name);
  console.log(optionType);
  return res.json(result);
};
