export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 sm:px-6 mt-auto">
      <div className="max-w-3xl mx-auto">
        <div className="divider" style={{ margin: '0 0 24px 0' }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Built with{' '}
            <span className="text-white">React</span>,{' '}
            <span className="text-white">Spring Boot</span>, and{' '}
            <span className="text-white">YouTube Data API v3</span>
          </p>
          <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
            Trackify &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
