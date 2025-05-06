import * as OpenAPI from "fumadocs-openapi";

export async function generateDocs() {
  await OpenAPI.generateFiles({
    input: ["./content/docs/api/ziit.yaml"],
    output: "./content/docs/",
    per: "operation",
    groupBy: "route",
  });
}

generateDocs().catch(console.error);
