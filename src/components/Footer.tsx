const Footer = () => (
  <footer className="py-8 px-4 text-center border-t border-border relative z-10">
    <div className="flex items-center justify-center gap-2 mb-2">
      <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
        <span className="font-display text-xs font-bold text-primary-foreground">AS</span>
      </div>
      <span className="font-display font-semibold text-foreground text-sm">Ahmar Saeed</span>
    </div>
    <p className="text-muted-foreground text-xs">
      © {new Date().getFullYear()} All rights reserved.
    </p>
  </footer>
);

export default Footer;
