import * as OpenAPI from "fumadocs-openapi";

export async function generateDocs() {
  await OpenAPI.generateFiles({
    input: [
      "https://raw.githubusercontent.com/0PandaDEV/Ziit/refs/heads/main/public/openapi.yaml",
    ],
    output: "./content/docs",
    per: "operation",
  });
}

generateDocs().catch(console.error);
