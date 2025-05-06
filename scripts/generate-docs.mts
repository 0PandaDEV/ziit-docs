import * as OpenAPI from "fumadocs-openapi";

export async function generateDocs() {
  await OpenAPI.generateFiles({
    input: ["./scripts/openapi.yaml"],
    output: "./content/docs",
    groupBy: "none",
    name: () => "index",
  });
}

generateDocs().catch(console.error);
