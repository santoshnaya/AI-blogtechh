interface VideoEmbedProps {
  videoId: string
  title?: string
  className?: string
}

export function VideoEmbed({ videoId, title = "Video", className = "" }: VideoEmbedProps) {
  return (
    <div className={`relative aspect-video overflow-hidden rounded-lg ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}

// Example usage in a page:
// <VideoEmbed videoId="dQw4w9WgXcQ" title="Example AI Tutorial" />