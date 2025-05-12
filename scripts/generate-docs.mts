import * as OpenAPI from "fumadocs-openapi";

export async function generateDocs() {
  await OpenAPI.generateFiles({
    input: ["./scripts/api.yaml"],
    output: "./content/docs",
    per: "operation",
  });
}

generateDocs().catch(console.error);
