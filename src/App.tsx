import './App.css';
import SeoShell from './components/SeoShell';
import BigNumberSections from './components/overlay/BigNumberSections';
import SiteNav from './components/SiteNav';
import PageMeta from './seo/PageMeta';
import JsonLd from './seo/JsonLd';

function App() {
  return (
    <>
      <PageMeta
        title="Emmanuel K. Davidson | Platform Engineering, Data Platform Engineering, Agent Systems, Applied Analytics"
        description="Emmanuel K. Davidson is a Platform Engineering Leader and Cloud & Data Architect working across four domains: Platform Engineering, Data Platform Engineering, Agent Systems, and Applied Analytics. KCNA-certified, AWS Solutions Architect Associate, building production systems on Kubernetes, GitOps, analytics stacks, and agent operations."
        path="/"
        keywords={[
          "Emmanuel Davidson",
          "Emmanuel K. Davidson",
          "Platform Engineering",
          "Data Platform Engineering",
          "Agent Systems",
          "Applied Analytics",
          "Cloud & Data Architect",
          "KCNA",
          "Kubernetes and Cloud Native Associate",
          "AWS Certified Solutions Architect Associate",
          "kubernetes",
          "gitops",
          "spark",
          "dremio",
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Emmanuel K. Davidson",
          url: "https://faenx.github.io/",
          description:
            "Portfolio of Emmanuel K. Davidson spanning four domains of expertise: Platform Engineering, Data Platform Engineering, Agent Systems, and Applied Analytics.",
        }}
      />
      <SiteNav />
      <div className="app-ui">
        <BigNumberSections />
      </div>
      <SeoShell />
    </>
  );
}

export default App;
