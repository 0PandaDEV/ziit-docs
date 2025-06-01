import * as OpenAPI from "fumadocs-openapi";

export async function generateDocs() {
  await OpenAPI.generateFiles({
    input: [
      "https://ziit.app/openapi.yaml",
    ],
    output: "./content/docs",
    per: "operation",
  });
}

generateDocs().catch(console.error);
