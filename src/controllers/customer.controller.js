import customerService from "../services/customer.service.js";

const createOrUpdateCustomer = async (req, res) => {
  const newCustomer = req.body;

  try {
    const customer = await customerService.createOrUpdateCustomer(newCustomer);
    res.status(201).send({ customer });
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

export default { createOrUpdateCustomer };
