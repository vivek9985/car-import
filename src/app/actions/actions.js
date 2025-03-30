"use server";

export async function sendCarRequest(formData) {
  // Get form data
  const carBrand = formData.get("carBrand");
  const carType = formData.get("carType");
  const productionYear = formData.get("productionYear");
  const kilometers = formData.get("kilometers");
  const budget = formData.get("budget");
  const contactInfo = formData.get("contactInfo");
  const additionalInfo = formData.get("additionalInfo");

  // Validate form data
  if (
    !carBrand ||
    !carType ||
    !productionYear ||
    !kilometers ||
    !budget ||
    !contactInfo
  ) {
    throw new Error("Sva obavezna polja moraju biti popunjena");
  }

  // In a real application, you would send an email here
  // For example, using a service like Nodemailer, SendGrid, or Resend

  // Example of how you might format the email content
  const emailContent = `
    Novi zahtev za uvoz automobila:
    
    Marka: ${carBrand}
    Model: ${carType}
    Godina proizvodnje: ${productionYear}
    Kilometraža: ${kilometers}
    Budžet: €${budget}
    Kontakt: ${contactInfo}
    Dodatne informacije: ${additionalInfo || "Nije navedeno"}
  `;

  console.log("Email would be sent with content:", emailContent);

  // For demonstration purposes, we'll just wait a bit to simulate sending
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real application, you would handle errors from your email service

  return { success: true };
}
