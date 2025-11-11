import Script from "next/script";

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  pageTitle?: string;
  pageDescription?: string;
}

export function FAQSchema({ faqs, pageTitle, pageDescription }: FAQSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    headline: pageTitle,
    description: pageDescription,
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}