export default function Footer() {
  return (
    <footer className="section py-20">
      <div className="section-content">
        <div className="section-divider mb-16" />
        
        <div className="flex items-center justify-between">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-6">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9.5 8.5L16 12L9.5 15.5V8.5Z" fill="white" />
                <rect x="2" y="4" width="20" height="16" rx="3" stroke="white" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white">Trackify</p>
              <p className="text-caption">&copy; {new Date().getFullYear()} All rights reserved</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-right">
            <p className="text-caption mb-2">Built with</p>
            <div className="flex items-center gap-4">
              <span className="badge">React</span>
              <span className="badge">Spring Boot</span>
              <span className="badge">YouTube API</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
