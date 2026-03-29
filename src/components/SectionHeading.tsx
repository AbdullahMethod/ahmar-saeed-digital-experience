import AnimatedSection from './AnimatedSection';

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <AnimatedSection className="text-center mb-16">
    <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text inline-block mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full" />
  </AnimatedSection>
);

export default SectionHeading;
