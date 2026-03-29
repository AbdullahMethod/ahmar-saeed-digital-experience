const FloatingBlobs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="floating-blob w-96 h-96 bg-glow-cyan top-20 -left-48 animate-float-slow" />
    <div className="floating-blob w-80 h-80 bg-glow-purple top-1/2 -right-40 animate-float" />
    <div className="floating-blob w-72 h-72 bg-glow-blue bottom-20 left-1/3 animate-float-slow" style={{ animationDelay: '2s' }} />
    <div className="floating-blob w-64 h-64 bg-glow-pink top-1/3 left-1/4 animate-pulse-glow" />
    <div className="floating-blob w-56 h-56 bg-glow-orange bottom-1/3 right-1/4 animate-float" style={{ animationDelay: '4s' }} />
    <div className="floating-blob w-48 h-48 bg-glow-green top-2/3 -left-20 animate-float-slow" style={{ animationDelay: '3s' }} />
  </div>
);

export default FloatingBlobs;
