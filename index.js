const slugify = require("slugify")

const helpers = plop => {
    plop.setDefaultInclude({helpers: true})

    plop.setHelper("slugify", text => {
        const options = {
            lower: true,
            remove: /['.]/g,
        }

        const slug = slugify(text, options)
        return slug
    })
}

module.exports = helpers
