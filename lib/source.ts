import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";
import { createOpenAPI, attachFile } from "fumadocs-openapi/server";

export const source = loader({
  baseUrl: "/",
  icon(icon) {
    if (icon && icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    }
  },
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile,
  },
});

export const openapi = createOpenAPI({
  // Path to the OpenAPI schema relative to the public directory
  definition: "./public/ziit.json",
  generateCodeSamples(endpoint) {
    return [
      {
        lang: "js",
        label: "JavaScript",
        source: `import { fetch } from "ofetch";

// Replace the endpoint URL with the actual path from your API
const response = await fetch("https://ziit.app/api/endpoint", {
  method: "${endpoint.method.toUpperCase()}",
  ${endpoint.method.toLowerCase() !== "get" ? "body: { /* your data here */ }," : ""}
});`,
      },
    ];
  },
});