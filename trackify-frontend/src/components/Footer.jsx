export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 mt-12 animate-fade-in delay-500">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-6" style={{ borderRadius: '16px' }}>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Built with ❤️ using{' '}
            <span className="font-medium text-white">React</span>,{' '}
            <span className="font-medium text-white">Spring Boot</span>, and{' '}
            <span className="font-medium text-white">YouTube Data API v3</span>
          </p>
          <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
            Trackify &copy; {new Date().getFullYear()} &mdash; Calculate playlist lengths instantly
          </p>
        </div>
      </div>
    </footer>
  );
}
