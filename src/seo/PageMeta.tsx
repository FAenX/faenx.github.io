import { Helmet } from "react-helmet-async";

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

const SITE = "https://faenx.github.io";
const OG_IMAGE = `${SITE}/logo.png`;

export default function PageMeta({ title, description, path, keywords }: PageMetaProps) {
  const url = `${SITE}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content="Emmanuel K. Davidson" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      {keywords && keywords.length > 0 ? (
        <meta name="keywords" content={keywords.join(", ")} />
      ) : null}
    </Helmet>
  );
}
