// File: ./api/submitForm/controllers/submitForm.js

'use strict';

module.exports = {
    async create(ctx) {
        const { email, fullName, tribe, leader } = ctx.request.body;

        // Compose email content
        const emailContent = `
      <p>Email: ${email}</p>
      <p>Full Name: ${fullName}</p>
      <p>Tribe: ${tribe}</p>
      <p>Leader: ${leader}</p>
    `;

        // Send email using Strapi Email plugin
        await strapi.plugins['email'].services.email.send({
            to: 'webdev.zad@gmail.com', // Recipient email address
            from: 'no-reply@yourdomain.com', // Sender email address
            subject: 'New Form Submission',
            html: emailContent,
        });

        // Optionally, you can send a response back to the frontend indicating that the form submission was successful
        return { message: 'Form submitted successfully' };
    },
};
