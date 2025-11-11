import Script from "next/script";

interface HowToSchemaProps {
  steps: Array<{
    name: string;
    text: string;
  }>;
  title: string;
  description: string;
  timeRequired?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
}

export function HowToSchema({
  steps,
  title,
  description,
  timeRequired,
  estimatedCost,
}: HowToSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description: description,
    totalTime: timeRequired,
    estimatedCost: estimatedCost
      ? {
          "@type": "MonetaryAmount",
          currency: estimatedCost.currency,
          value: estimatedCost.value,
        }
      : undefined,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: step.text,
        },
      ],
    })),
  };

  return (
    <Script
      id="howto-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}