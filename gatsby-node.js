const { createFilePath } = require(`gatsby-source-filesystem`)
const { array } = require("prop-types")

exports.createPages = async function({actions, graphql}){
    /*
    const {data} = await graphql(`
        query TkdTulListQuery {
            allDataJson {
                edges {
                    node {
                        tules {
                            name
                            image
                            rank
                            slug
                        }
                    }
                }
            }
        }
    `)
    */

    //console.log(data)

}