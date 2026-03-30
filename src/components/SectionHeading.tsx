import AnimatedSection from './AnimatedSection';

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <AnimatedSection className="text-center mb-16">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground inline-block mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-grey-1 via-grey-3 to-grey-5" />
  </AnimatedSection>
);

export default SectionHeading;
