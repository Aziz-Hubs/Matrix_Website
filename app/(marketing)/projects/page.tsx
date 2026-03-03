import { client, projectsQuery } from '@/lib/sanity';
import { PageBackground } from '@/components/ui/page-background';
import ProjectsHero from '@/components/projects/projects-hero';
import ProjectsStats from '@/components/projects/projects-stats';
import ProjectsGrid from '@/components/projects/projects-grid';
import { Locale } from '@/lib/i18n';

export const metadata = {
  title: 'Our Projects | Matrix Business Technologies',
  description:
    'Explore our portfolio of successful IT projects across government, education, healthcare, and private sectors in Jordan.',
};

interface PageProps {
  params: Promise<{
    locale?: string;
  }>;
}

export default async function ProjectsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale: Locale = (resolvedParams?.locale || 'en') as Locale;
  const projects = await client.fetch(projectsQuery);

  return (
    <PageBackground>
      <ProjectsHero locale={locale} />
      <ProjectsStats locale={locale} />
      <ProjectsGrid projects={projects} locale={locale} />
    </PageBackground>
  );
}
