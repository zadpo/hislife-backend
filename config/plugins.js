module.exports = ({ env }) => ({
    email: {
        provider: 'strapi-provider-email-strapi-cloud',
        providerOptions: {},
        settings: {
            defaultFrom: 'noreply@example.com',
            defaultReplyTo: 'noreply@example.com',
        },
    },
});
