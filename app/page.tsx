import { ArticleCard } from "@/components/Article"

export default function Home() {
  const articles = [
    {
      id: 1,
      title: "Leidt AI-slop tot de dood van sociale media?",
      excerpt:
        "Sociale media slibben dicht met AI-gegenereerde video's. Maar willen we daar in 2026 nog naar kijken?",
      date: "2 januari 2026",
      readTime: "5 min leestijd",
      imageUrl: "/images/Foto article 1.png",
    },
    {
      id: 2,
      title: "Vibecoding - zo maak je in enkele minuten je eigen games, websites en apps met AI",
      excerpt: "Hoe je met AI in een paar seconden een spel maakt, of zelfs een complete app opbouwt, zonder zelf code te schrijven.",
      date: "23 januari 2026",
      readTime: "10 min leestijd",
      imageUrl: "/images/Foto article 2.png",
    },
    {
      id: 3,
      title: "Artikel 3",
      excerpt: "De derde artikel wordt hier weergegeven. Voeg uw PDF toe aan de public/articles map.",
      date: "28 april 2026",
      readTime: "7 min leestijd",
      imageUrl: "/images/Foto article 3.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Opdracht Reactiviteit
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hieronder een overzicht van de 3 artikels van De Standaard die in deze opdracht worden gebruikt. Klik op een artikel om de volledige lay-out te kunnen bekijken.
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
    </div>
  )
}
