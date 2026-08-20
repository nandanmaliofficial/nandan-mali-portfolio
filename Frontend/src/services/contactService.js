import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const submitContactForm = async (formData) => {
  try {
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      project_type: formData.projectType,
      budget: formData.budget,
      message: formData.message,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      {
        publicKey: PUBLIC_KEY,
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to send message.");
    }

    return response;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw new Error("Unable to send your inquiry. Please try again.");
  }
};