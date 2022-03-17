// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const {
  Client
} = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

exports.handler = async function (event, context) {
  const response = await notion.databases.query({
      database_id: process.env.NOTION_DB_ID,
  })
  console.log(response)
  return {
      statusCode: 200,
      body: JSON.stringify({
          response
      }),
  };
}