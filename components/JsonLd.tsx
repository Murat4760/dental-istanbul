/** Renders a JSON-LD <script>. Data comes from lib/schema.ts builders. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // schema objects are our own trusted, static data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
