import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

export const dynamic = "force-static";

interface TreeNode {
  $id: string;
  type?: string;
  name?: string;
  url?: string;
  index?: TreeNode;
  children?: TreeNode[];
}

function generateSitemap(
  root: TreeNode,
  baseUrl: string = "https://docs.ziit.app"
): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  function traverse(node: TreeNode): void {
    if (!node) return;

    if (node.type === "page" && node.url) {
      const fullUrl = baseUrl + (node.url === "/" ? "" : node.url);
      sitemap.push({
        url: fullUrl,
        changeFrequency: node.url === "/" ? "monthly" : "monthly",
        priority: node.url === "/" ? 1 : 0.8,
      });
    }

    if (node.type === "folder" && node.index && node.index.url) {
      const fullUrl = baseUrl + (node.index.url === "/" ? "" : node.index.url);
      sitemap.push({
        url: fullUrl,
        lastModified: new Date(),
        changeFrequency: node.index.url === "/" ? "monthly" : "monthly",
        priority: node.index.url === "/" ? 1 : 0.8,
      });
    }

    if (node.children && node.children.length) {
      node.children.forEach((child) => traverse(child));
    }
  }

  traverse(root);
  return sitemap;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap(source.pageTree as TreeNode);
}