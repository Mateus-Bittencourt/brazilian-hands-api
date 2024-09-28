import customerRepository from "../repositories/customer.repository.js";
import { sendMessage } from "./zapzap.service.js"; // Certifique-se que o caminho está correto

const createOrUpdateCustomer = async (newCustomer) => {
  try {
    const foundCustomer = await customerRepository.findCustomerByDocument(
      newCustomer.document
    );

    // Atualiza ou cria o cliente
    const customer = foundCustomer
      ? await customerRepository.updateCustomer(newCustomer)
      : await customerRepository.createCustomer(newCustomer);

    console.log(customer);

    // Garante que o cliente foi criado ou atualizado corretamente
    if (!customer) {
      throw new Error("Error creating/updating customer");
    }

    // Envia a mensagem pelo WhatsApp
    const messageResponse = await sendMessage("+5519996693962", "Message sent");
    console.log(messageResponse);

    if (messageResponse.status === "error") {
      throw new Error(messageResponse.message);
    }

    return customer;

  } catch (error) {
    console.error("Error in createOrUpdateCustomer: ", error.message);
    throw error;
  }
};

export default {
  createOrUpdateCustomer,
};

