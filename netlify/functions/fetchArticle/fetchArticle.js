// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const {
  Client
} = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})


exports.handler = async function (event, context) {
  const response = await notion.pages.retrieve({
    page_id: event.queryStringParameters.page_id,
  })
  return {
      statusCode: 200,
      body: JSON.stringify({
          response
      }),
  };
}