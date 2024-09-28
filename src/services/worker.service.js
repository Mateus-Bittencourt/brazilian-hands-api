import workerRepository from "../repositories/worker.repository.js";

const createWorker = async (newWorker) => {
  const foundWorker = await workerRepository.findWorkerByDocument(
    newWorker.document
  );
  if (foundWorker) throw new Error("Work already registered");
  const worker = await workerRepository.createWorker(newWorker);
  return worker;
};

export default {
  createWorker,
};
