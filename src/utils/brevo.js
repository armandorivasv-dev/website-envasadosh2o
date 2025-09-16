const { TransactionalEmailsApi, TransactionalEmailsApiApiKeys } = require('@getbrevo/brevo');

if (!process.env.NEXT_PUBLIC_BREVO_API_KEY) {
  throw new Error('La variable de entorno NEXT_PUBLIC_BREVO_API_KEY no está definida');
}

// Crear instancia de la API de correos transaccionales
const transactionalEmailsApi = new TransactionalEmailsApi();

// Configurar la API key usando el método correcto
transactionalEmailsApi.setApiKey(TransactionalEmailsApiApiKeys.apiKey, process.env.NEXT_PUBLIC_BREVO_API_KEY);

module.exports = {
  transactionalEmailsApi,
};
