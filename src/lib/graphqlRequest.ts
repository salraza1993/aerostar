export async function graphqlRequest<TData, TVariables = unknown>(
  query: string,
  variables?: TVariables
): Promise<TData> {
  const response = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await response.json();
  
  if (json.errors) {
    throw new Error(json.errors[0].message);
  }
  
  return json.data;
}
