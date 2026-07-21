import './App.css';
import React from 'react';
import SeoShell from './components/SeoShell';
import BigNumberSections from './components/overlay/BigNumberSections';
import SiteNav from './components/SiteNav';
import PageMeta from './seo/PageMeta';
import JsonLd from './seo/JsonLd';

export type ThemeMode = 'light' | 'dark';

function App() {
  React.useEffect(() => {
    const localMode = localStorage.getItem('mode');
    const preferredMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialMode = (localMode as ThemeMode) || preferredMode;
    document.documentElement.setAttribute('data-theme', initialMode);
  }, []);

  return (
    <>
      <PageMeta
        title="Emmanuel K. Davidson | Platform Systems, Data Platforms, and Agent Systems"
        description="Emmanuel K. Davidson builds platform infrastructure, biodiversity intelligence platforms, agent systems, and applied analytics products across Kubernetes, cloud platforms, GitOps, analytics systems, and model-gateway operations."
        path="/"
        keywords={[
          "Emmanuel Davidson",
          "Emmanuel K. Davidson",
          "platform systems",
          "data platforms",
          "agent systems",
          "cloud architect",
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
            "Portfolio of Emmanuel K. Davidson spanning platform infrastructure, biodiversity intelligence platforms, agent systems, and applied analytics.",
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
