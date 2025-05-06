import { source, openapi } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents, { createRelativeLink } from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { metadataImage } from "@/lib/metadata";
import { APIPage } from "fumadocs-openapi/ui";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      editOnGithub={{
        owner: "0pandadev",
        repo: "ziit-docs",
        sha: "main",
        path: `/content/docs/${page.file.path}`,
      }}
      tableOfContent={{
        style: "clerk",
      }}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            a: createRelativeLink(source, page),
            img: (props) => {
              return <ImageZoom {...props} />;
            },
            pre: (props) => (
              <CodeBlock {...props}>
                <Pre>{props.children}</Pre>
              </CodeBlock>
            ),
            APIPage: (props) => <APIPage {...openapi.getAPIPageProps(props)} />,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return metadataImage.withImage(page.slugs, {
    title: page.data.title,
    description: page.data.description,
    metadataBase:
      process.env.NODE_ENV === "production"
        ? new URL("https://docs.ziit.app")
        : undefined,
  });
}