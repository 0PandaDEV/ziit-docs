import * as OpenAPI from "fumadocs-openapi";

export async function generateDocs() {
  await OpenAPI.generateFiles({
    input: ["https://docs.ziit.app/openapi.yml"],
    output: "./content/docs",
    groupBy: "none",
    name: () => "index",
  });
}

generateDocs().catch(console.error);
