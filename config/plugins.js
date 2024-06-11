module.exports = ({ env }) => ({
    email: {
        provider: 'sendmail',
        providerOptions: {},
        settings: {
            defaultFrom: 'noreply@example.com',
            defaultReplyTo: 'noreply@example.com',
        },
    },
});
