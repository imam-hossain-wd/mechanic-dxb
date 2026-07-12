import { services } from '@/data/services/services';
import { notFound } from 'next/navigation'
import { SiteConfig } from '@/config/siteConfig';
import ServiceDetailsPage from '@/pages/ServicesPage/ServiceDetailsPage';


// Dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services?.find((s) => s?.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found | Car Repair Mechanic Dubai",
      description: "The requested service could not be found in Dubai.",
    }
  }
  return {
    title: service.metaTitle || `${service.name} in Dubai |Car Repair Mechanic Dubai`,
    description: service.metaDescription || service?.intro?.content,
    alternates: {
      canonical: `${SiteConfig.url}/services/${service.slug}`,
    }
  }
}



export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s?.slug === slug);
  if (!service) return notFound();


  return (
    <>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      /> */}
      <ServiceDetailsPage service={service} />
    </>
  );
}
