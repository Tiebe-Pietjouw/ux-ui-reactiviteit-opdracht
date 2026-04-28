import { ArticleLayout } from "@/components/Article"

export default function Article1() {
  return (
    <ArticleLayout
      title="Leidt AI-slop tot de dood van sociale media?"
      subtitle="De grote vraag voor 2026 is: willen we blijven kijken naar eindeloze stromen AI-gegenereerde video's?"
      date="2 januari 2026"
      author="Dominique Deckmyn"
      heroImage="/images/Foto article 1.png"
    >
      <section className="space-y-6">
        {/* Introduction */}
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          De grootste technologische doorbraak van 2025, of toch die met de zichtbaarste gevolgen, 
          zijn de videogenerators als Sora en Veo. Waardoor iedereen nu in enkele seconden een realistisch 
          uitziende video kan maken over elk onderwerp.
        </p>
        <p className="text-gray-700 leading-relaxed">
          De grote vraag voor 2026 is dan ook simpel: willen we daarnaar blijven kijken? Sociale media slibben 
          de jongste maanden angstwekkend snel dicht met AI-slop: video&apos;s met mensen die niet bestaan 
          en gebeurtenissen die zich nooit hebben voorgedaan.
        </p>

        {/* Main Section 1 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
          Algoritmes bepalen wat we zien
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet alleen te maken met de enorm 
          toegenomen productie, maar ook met wat algoritmes ons aanbevelen. Met keuzes die bedrijven als 
          Meta, Google en Bytedance (TikTok) voor ons maken.
        </p>
        <p className="text-gray-700 leading-relaxed">
          De hoeveelheid AI-content in je feed is dus niet neutraal. Die wordt actief gestuurd door de platformen,
          en dat beïnvloedt rechtstreeks wat we nog te zien krijgen van professionele makers en van mensen die 
          we echt kennen.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 my-6">
          <p className="text-blue-900 font-medium">
            📊 Feit: Als je op YouTube een nieuw account aanmaakt, dan is 20 procent van de video's 
            die je worden aangeboden van AI afkomstig.
          </p>
        </div>

        {/* Main Section 2 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
          Drie tijdperken van sociale media
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mark Zuckerberg beschrijft de evolutie van sociale media in drie fases:
        </p>

        <div className="space-y-3">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                1
              </span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Eerste tijdperk</h3>
              <p className="text-gray-700">We deelden ons eigen leven op Facebook en Instagram</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                2
              </span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Tweede tijdperk</h3>
              <p className="text-gray-700">We veranderden onze focus naar de levens van celebrities en influencers</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                3
              </span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Derde tijdperk</h3>
              <p className="text-gray-700">Een stortvloed van AI-gegenereerde video's zonder enige beperking</p>
            </div>
          </div>
        </div>

        {/* Critical Insight */}
        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 my-8">
          <p className="text-gray-800 italic text-lg">
            "Hoe meer AI in onze feed, hoe minder video's we bekijken van professionele makers 
            en van onze eigen vrienden."
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Nochtans hadden sociale media ooit een duidelijke bestaansreden: we wilden volgen wat er gebeurt 
          met echte mensen. De vraag is dus of wij als gebruikers echt zó veranderd zijn, of vooral het aanbod 
          dat ons opgedrongen wordt.
        </p>

        {/* Main Section 3 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
          Wat Zuckerberg verwacht
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Zuckerberg stelt voor dat AI-inhoud er gewoon bovenop komt. Zijn visie: algoritmes tonen 
          ons altijd precies wat we graag zien, en nu kunnen videogenerators daarvan eindeloos meer 
          genereren. Nog meer kattenvideo's, onmogelijke stunts, spectaculaire taarten of wat ook 
          je ding mag zijn.
        </p>
        
        <p className="text-gray-700 leading-relaxed mt-4">
          Die beelden zijn niet echt. Die mensen bestaan niet, die dingen zijn nooit gebeurd. 
          Maar Zuckerberg gaat ervan uit dat dat er niet toe doet: "U wilt kattenvideo's, 
          u krijgt kattenvideo's die nog veel schattiger zijn dan in het echt."
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Diezelfde logica werkt trouwens ook in andere niches op het internet: gebruikers krijgen almaar 
          meer van precies wat ze al bekeken, zelfs wanneer dat steeds minder met de realiteit te maken heeft.
        </p>

        {/* Main Section 4 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
          De kritische vraag
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Maar zelf ben ik de afgelopen twee maanden uiterst gevoelig geworden voor AI-slop: 
          vanaf het moment dat ik de indruk krijg dat een video AI-gegenereerd is, klik ik 'm weg. 
          Net zoals ik stop met een tekst te lezen zodra ik vermoed dat ChatGPT de voornaamste auteur was.
        </p>
        <p className="text-gray-700 leading-relaxed">
          In het begin was AI-video nog nieuw en verrassend. Er valt soms nog te lachen met sommige 
          Sora-fragmenten, maar het novelty-effect slijt snel wanneer je merkt hoe weinig er nog écht 
          sociaal is aan zo&apos;n feed.
        </p>

        <blockquote className="border-l-4 border-red-500 pl-6 py-4 my-8 bg-red-50 italic text-gray-800">
          "Wat precies is de sociale dimensie van kijken naar een eindeloze stroom van door een 
          computer gegenereerde video's, aanbevolen door een algoritme?"
        </blockquote>

        {/* Nuance */}
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
          Waar AI wel thuis hoort
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Er is heus wel een plaats voor AI-video. Bijvoorbeeld om speciale effecten te produceren 
          in films. En er zijn creatieve mensen die toffe, vaak heel grappige video's maken die zonder 
          AI onbetaalbaar duur zouden zijn.
        </p>
        
        <p className="text-gray-700 leading-relaxed mt-4">
          Maar horen ze thuis op Instagram en Facebook? Dat waren toch 'sociale' media, nietwaar? 
          In die zin zien we nu de dood van sociale media. Al lijkt Zuckerberg daar niet echt van 
          wakker te liggen.
        </p>

        {/* Conclusion */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <p className="text-sm text-gray-600 font-medium">
            ✍️ Dominique Deckmyn is elke vrijdag te horen in de podcast 'Bits & atomen'.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Rubrieken: De Technocraat, Artificiële intelligentie, Cultuur en media
          </p>
        </div>
      </section>
    </ArticleLayout>
  )
}
