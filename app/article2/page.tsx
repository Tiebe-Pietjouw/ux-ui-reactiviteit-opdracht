import { ArticleLayout } from "@/components/Article"

export default function Article2() {
  return (
    <ArticleLayout
      title="Artikel 2 Titel"
      subtitle="Add your subtitle here"
      date="28 April 2026"
      author="Auteur Naam"
      heroImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop"
    >
      <section className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add your article content here.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
          Eerste Sectie
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Voeg hier de content van uw artikel in. Dit is een template om u op weg te helpen.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
          Tweede Sectie
        </h2>
        <p className="text-gray-700 leading-relaxed">
          U kunt citaten, lijsten, afbeeldingen en andere elementen toevoegen.
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-4 py-2 bg-gray-50 italic text-gray-700 my-6">
          "Voeg een citaat in om belangrijke punten te benadrukken"
        </blockquote>

        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
          Kernpunten
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Eerste belangrijk punt</li>
          <li>Tweede belangrijk punt</li>
          <li>Derde belangrijk punt</li>
        </ul>
      </section>
    </ArticleLayout>
  )
}
