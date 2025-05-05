export const runtime = 'edge';
import { metadataImage } from "@/lib/metadata";
import { ImageResponse } from "next/og";

export const GET = metadataImage.createAPI(async (page) => {
  const size = {
    width: 1200,
    height: 630,
  };

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "#191919",
          width: "100%",
          height: "100%",
          color: "#E6E6E6",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width="48"
          height="48"
          src={`${process.env.CF_PAGES_URL ? `https://${process.env.CF_PAGES_URL}`
            : process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
          }/logo.svg`}
          alt='Logo'
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              fontWeight: "bolder",
              fontSize: "52px",
              marginBottom: "10px",
            }}
          >
            {page.data.title}
          </div>
          <div
            style={{
              color: "#A6A6A6",
              fontSize: "36px",
            }}
          >
            {page.data.description}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}