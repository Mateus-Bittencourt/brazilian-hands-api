import customerRepository from "../repositories/customer.repository.js";

const createOrUpdateCustomer = async (newCustomer) => {
  const foundCustomer = await customerRepository.findCustomerByDocument(
    newCustomer.document
  );
  const customer = foundCustomer
    ? await customerRepository.updateCustomer(newCustomer)
    : await customerRepository.createCustomer(newCustomer);
  console.log(customer);
  console.log(typeof customer);
  if (!customer) throw new Error("Error creating customer");
  return customer;
};

export default {
  createOrUpdateCustomer,
};
