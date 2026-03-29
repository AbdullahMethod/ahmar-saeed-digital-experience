const Footer = () => (
  <footer className="py-10 px-4 text-center border-t border-border relative z-10">
    <div className="flex items-center justify-center gap-2 mb-3">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
        <span className="font-display text-sm font-bold text-primary-foreground">AS</span>
      </div>
      <span className="font-display font-semibold text-foreground">Ahmar Saeed</span>
    </div>
    <p className="text-muted-foreground text-sm mb-3">
      © {new Date().getFullYear()} All rights reserved.
    </p>
    <p className="text-muted-foreground text-xs">
      Made by{' '}
      <a
        href="https://abdullahcoded.blogspot.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/80 font-medium underline underline-offset-2 transition-colors"
      >
        Abdullah Bin Shahid
      </a>
    </p>
  </footer>
);

export default Footer;
