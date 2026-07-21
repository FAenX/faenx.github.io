import { Helmet } from "react-helmet-async";

export type ZoneId =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "contact";

export interface ZoneMetaConfig {
  title: string;
  description: string;
  path: string;
}

const SITE = "https://faenx.github.io";
const NAME = "Emmanuel K. Davidson";

const zoneMetas: Record<ZoneId, ZoneMetaConfig> = {
  home: {
    title: `${NAME} — Platform Systems, Data Platforms, and Agent Systems`,
    description:
      "Emmanuel K. Davidson designs production systems across platform infrastructure, biodiversity intelligence platforms, analytics delivery, and agent-enabled operations. Kubernetes, AWS, GitOps, Spark, Dremio, and model-gateway infrastructure.",
    path: "/",
  },
  about: {
    title: `About — ${NAME}`,
    description:
      "About Emmanuel K. Davidson: Platform Engineering Leader building production systems across cloud infrastructure, biodiversity intelligence, analytics, and agent-system operations.",
    path: "/#about",
  },
  experience: {
    title: `Work Experience — ${NAME}`,
    description:
      "Professional experience across Rusha platform systems, TierraViva data platforms, AI agent operations, enterprise data reliability, and production delivery at One World Analytics, The Jitu, and Touch Inspiration.",
    path: "/#experience",
  },
  projects: {
    title: `Projects — ${NAME}`,
    description:
      "Selected projects span platform systems, biodiversity intelligence, applied analytics, and agent-enabled operations, including Rusha, TierraViva AI, AI agents on Hermes, and this portfolio system.",
    path: "/#projects",
  },
  skills: {
    title: `Technical Skills — ${NAME}`,
    description:
      "Technical skills: Kubernetes (ArgoCD, KEDA, Sealed Secrets), AWS (EKS, S3, Glue, CloudFormation), Airflow, Spark, dbt, Delta Lake, Dremio, NestJS, gRPC, LLM automation, Terraform, observability.",
    path: "/#skills",
  },
  education: {
    title: `Education & Certifications — ${NAME}`,
    description:
      "Education: PG Diploma in Project Planning & Management (University of Nairobi), BSc Biochemistry (University of Eldoret). Certifications: AWS Certified Solutions Architect, Google Data Analytics.",
    path: "/#education",
  },
  contact: {
    title: `Contact — ${NAME}`,
    description:
      "Connect with Emmanuel K. Davidson on LinkedIn for platform infrastructure, biodiversity intelligence, analytics, and agent-system engagements.",
    path: "/contact/",
  },
};

/**
 * ZoneMeta renders per-zone Helmet tags (title, description, canonical,
 * Open Graph, Twitter card) for the current portfolio sections.
 */
export default function ZoneMeta({ zone }: { zone: ZoneId }) {
  const meta = zoneMetas[zone];
  const url = `${SITE}${meta.path}`;
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={zone === "home" ? "website" : "profile"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </Helmet>
  );
}
