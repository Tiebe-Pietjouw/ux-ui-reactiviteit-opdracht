"use client"

interface ArticleLayoutProps {
  title: string
  subtitle?: string
  date?: string
  author?: string
  heroImage?: string
  children: React.ReactNode | React.ReactNode[]
}

export default function ArticleLayout({
  title,
  subtitle,
  date,
  author,
  heroImage,
  children,
}: ArticleLayoutProps) {
  return (
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Image */}
      {heroImage && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-auto object-cover max-h-96"
          />
        </div>
      )}

      {/* Article Header */}
      <header className="mb-10 border-b-2 border-gray-200 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Article Metadata */}
        <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
          {date && (
            <time dateTime={date} className="flex items-center">
              <span className="mr-2">📅</span>
              {date}
            </time>
          )}
          {author && (
            <div className="flex items-center">
              <span className="mr-2">✍️</span>
              <span className="font-medium text-gray-700">{author}</span>
            </div>
          )}
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </article>
  )
}
