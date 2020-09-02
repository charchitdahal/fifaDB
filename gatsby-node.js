const path = require(`path`)
const fs = require('fs');

exports.createPages = async ({ actions }) => {
    const { createPage } = actions;
    const data = JSON.parse(
        fs.readFileSync('./content/fifa_raw.json',{encoding: 'utf-8'})
    );

    const blogPostTemplate = path.resolve(`src/templates/page.js`)

    data.pages.forEach(page => {
            createPage({

                path: "/"+ page.short_name.replace(/ /g, ''),
                component: blogPostTemplate,
                context: page,
    });
});
}