import { ArticleCard } from "@/components/Article"

export default function Home() {
  const articles = [
    {
      id: 1,
      title: "Was het verzet van Dario Amodei tegen minister Hegseth het 'Ik ben Spartacus!'-moment van Silicon Valley?",
      excerpt:
        "Een analyse van het standpunt van Dario Amodei en hoe dit de technologieindustrie beïnvloedt...",
      date: "28 April 2026",
      readTime: "5 min leestijd",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Artikel 2 Titel",
      excerpt: "Beschrijving van het tweede artikel...",
      date: "28 April 2026",
      readTime: "7 min leestijd",
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Artikel 3 Titel",
      excerpt: "Beschrijving van het derde artikel...",
      date: "28 April 2026",
      readTime: "6 min leestijd",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            De Standaard Artikelen
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Een verzameling van artikelen uit De Standaard, geanalyseerd en gepresenteerd
            volgens UX/UI-principes van goede informatiedesign.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Beschikbare Artikelen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              date={article.date}
              readTime={article.readTime}
              imageUrl={article.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Over dit project
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Dit project is gebouwd als onderdeel van een cursusopdrachtover UX/UI-analyse en
            implementatie. Elk artikel is geanalyseerd op basis van UX- en UI-principes,
            inclusief visuele hiërarchie, typografie, leesbaarheid en interactie.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Het doel is aan te tonen hoe bestaande content kritisch kan worden geëvalueerd
            en vervolgens op een gebruikersvriendelijke en visueel aantrekkelijke manier
            kan worden gepresenteerd in een Next.js-webapplicatie.
          </p>
        </div>
      </section>
    </div>
  )
}
