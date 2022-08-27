const kebabCase = require("lodash/kebabCase")

exports.createPages = async ({ actions, graphql }) => {
  const categoryTemplate = require.resolve("./src/templates/category.js")

  const result = await graphql(`
    query {
      allStrapiActivity {
        edges {
          node {
            title
            slug

            categories {
              type
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("error loading categories", result.errors)
    return
  }

  const activities = result.data.allStrapiActivity.edges

  const categoriesSet = new Set()

  activities.forEach(activite => {
    const { categories } = activite.node
    categories.forEach(({ type }) => {
      categoriesSet.add(type)
    })

    //console.log(JSON.stringify({categoriesSet},null,2))
    const categoriesList = Array.from(categoriesSet)

    categoriesList.forEach(type => {
      actions.createPage({
        path: `/categories/${kebabCase(type)}/`,
        component: categoryTemplate,
        context: {
          type,
        },
      })
    })
  })
}
