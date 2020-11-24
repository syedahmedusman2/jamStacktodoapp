module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-create-client-paths',
            options: {prefix: [`/app/*`]}
        }
    ]
};