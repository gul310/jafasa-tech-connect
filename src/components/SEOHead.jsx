import { useEffect } from 'react';

/**
 * SEOHead: dynamically manages page document title, meta descriptions, and schema
 */
export default function SEOHead({
  title = "Jafasa Tech Solutions — Technology That Builds Your Future",
  description = "Technology company, software development agency, and professional technology training platform across Khyber Pakhtunkhwa (KPK), Pakistan.",
  canonical = "",
  schema = null
}) {
  useEffect(() => {
    // Set document title
    document.title = title.includes("Jafasa") ? title : `${title} | Jafasa Tech Solutions`;

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Set Open Graph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = document.title;
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = description;

    // Set JSON-LD Schema if supplied
    let schemaScript = document.getElementById('page-json-ld');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'page-json-ld';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, canonical, schema]);

  return null;
}
