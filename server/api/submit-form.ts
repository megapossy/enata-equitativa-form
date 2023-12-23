import { client } from "#nuxt-tawing-supabase";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  // console.log({...body})
  const { error } = await client
    .from("candidates")
    .insert({ 
      ...body
    });
  if (error)
    throw createError({
      statusCode: 400,
      statusMessage: "Server Error: " + error.message,
    });
});
