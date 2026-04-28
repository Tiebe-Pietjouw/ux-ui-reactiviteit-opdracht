"use client"

import Link from "next/link"

interface ArticleCardProps {
  id: number
  title: string
  excerpt: string
  date: string
  readTime?: string
  imageUrl?: string
}

export default function ArticleCard({
  id,
  title,
  excerpt,
  date,
  readTime,
  imageUrl,
}: ArticleCardProps) {
  return (
    <Link href={`/article${id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer h-full">
        {/* Card Image */}
        {imageUrl && (
          <div className="relative h-48 overflow-hidden bg-gray-200">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Card Content */}
        <div className="p-6">
          {/* Date */}
          <p className="text-sm text-gray-500 mb-2">
            {date} {readTime && `• ${readTime}`}
          </p>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-base line-clamp-3 mb-4">
            {excerpt}
          </p>

          {/* Read More Link */}
          <div className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            Lees meer
            <span className="ml-2">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
