export async function graphqlRequest<TData, TVariables = unknown>(
  query: string,
  variables?: TVariables
): Promise<TData> {
  const response = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  const json = await response.json();
  
  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(json.errors[0].message);
  }
  
  return json.data;
}
