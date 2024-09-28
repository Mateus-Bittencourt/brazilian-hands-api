import { Client } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

// Instancia o cliente do WhatsApp
const client = new Client();
let isClientReady = false;

client.on("qr", (qr) => {
  // Gera o QR Code no terminal para autenticação
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("WhatsApp Client is ready!");
  isClientReady = true;
});

client.on("auth_failure", (msg) => {
  // Log de falha de autenticação
  console.error("Auth failure: ", msg);
});

// Inicializa o cliente
client.initialize();

// Função para enviar mensagens
export const sendMessage = async (number, message) => {
  try {
    if (!isClientReady) {
      throw new Error("WhatsApp Client is not ready yet.");
    }

    // O número deve estar no formato internacional com o sufixo '@c.us'
    const chatId = `${number}@c.us`;
    await client.sendMessage(chatId, message);
    return { status: "success", message: "Message sent" };
  } catch (error) {
    console.error("Error sending message: ", error.message);
    return { status: "error", message: error.message };
  }
};
