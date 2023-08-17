import { CollectionRepository } from "../repositories/collection.repository";

export const getAllCollections = async () => {
  return CollectionRepository.find();
};
