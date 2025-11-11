"use client"

interface DownloadCardProps {
  fileName: string
  description: string
  thumbnailUrl?: string
  downloadUrl?: string
  comingSoon?: boolean
  tag?: string
}

export function DownloadCard({
  fileName,
  description,
  thumbnailUrl,
  downloadUrl,
  comingSoon = false,
  tag = "file",
}: DownloadCardProps) {
  return (
    <div
      className="bg-card border border-border rounded-sm overflow-hidden hover:border-primary transition-all duration-200 group cursor-pointer"
    >
      {/* Thumbnail */}
      {thumbnailUrl && (
        <div className="aspect-video bg-muted overflow-hidden relative">
          <img
            src={thumbnailUrl || "/placeholder.svg"}
            alt={`${fileName} preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Coming Soon Placeholder */}
      {!thumbnailUrl && !downloadUrl && (
        <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
          <div className="text-center">
            <div className="terminal-text text-muted-foreground mb-2 text-lg">Coming Soon</div>
          </div>
          {/* Blinking animation */}
          <style>{`
            @keyframes blink-coming-soon {
              0%, 49%, 100% { opacity: 1; }
              50%, 99% { opacity: 0.3; }
            }
            .coming-soon-blink {
              animation: blink-coming-soon 2s infinite;
            }
          `}</style>
          <div className="absolute inset-0 coming-soon-blink pointer-events-none bg-gradient-to-br from-primary/10 to-secondary/10" />
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1">
            <h3 className="terminal-text text-sm text-primary truncate">{fileName}</h3>
            {tag && (
              <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-secondary/20 text-secondary rounded-sm font-mono">
                {tag}
              </span>
            )}
          </div>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-4">{description}</p>

        {/* Download Button */}
        {downloadUrl && !comingSoon ? (
          <a
            href={downloadUrl}
            download
            className="w-full inline-flex items-center justify-center px-3 py-2 text-xs terminal-text bg-primary text-primary-foreground rounded-sm hover:shadow-lg transition-all duration-200"
          >
            ↓ Download
          </a>
        ) : (
          <button
            disabled
            className="w-full px-3 py-2 text-xs terminal-text bg-muted text-muted-foreground rounded-sm opacity-50 cursor-not-allowed"
          >
            ⧖ Coming Soon
          </button>
        )}
      </div>
    </div>
  )
}
