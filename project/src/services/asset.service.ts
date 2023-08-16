import { CreateAsset } from "../dtos/create-asset.dto";
import { AssetRepository } from "../repositories/asset.repository";

export const createAsset = async (data: CreateAsset) => {
  const asset = AssetRepository.create(data);
  return AssetRepository.save(asset);
};

export const getAssetById = async (id: string) => {
  return AssetRepository.findOneByOrFail({ id });
};

export const getAllAssets = async () => {
  return AssetRepository.find();
};

export const deleteAssetById = async (id: string) => {
  return AssetRepository.delete({ id });
};
