import workerService from "../services/worker.service.js";

const createWorker = async (req, res) => {
  const newWorker = req.body;

  try {
    const worker = await workerService.createWorker(newWorker);
    res.status(201).send({ worker });
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

export default { createWorker };
