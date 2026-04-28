import { ArticleLayout, Figure } from "@/components/Article"

export default function Article2() {
  return (
    <ArticleLayout
      title="Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI"
      subtitle="Waarom zou je een app gebruiken die geld kost of een abonnement vereist, en toch niet helemaal doet wat je nodig hebt? Met vibecoding maak je een app of website op maat. Of liever: AI maakt die voor je."
      date="23 januari 2026"
      author="Dominique Deckmyn"
      heroImage="/images/Foto article 2.png"
    >
      <section className="space-y-6">
        {/* Introduction */}
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Het is nog maar januari, maar 'vibecoding', ofwel coderen met AI, maakt al een goede kans 
          om het woord van 2026 te worden. AI gebruiken om je eigen apps en websites te bouwen is 
          eigenlijk al twee jaar in opmars.
        </p>
        <p className="text-gray-700 leading-relaxed">
          De jongste weken lijkt het fenomeen in een stroomversnelling te zijn gekomen. Onder meer omdat 
          de nieuwste versies van Claude, Gemini en ChatGPT zo betrouwbaar kunnen programmeren, 
          dat je er zonder noemenswaardige voorkennis aan zou kunnen beginnen.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Maar is dat echt zo? Ja en nee. Ja: een simpel programma, zoals een spelletje dat je in je browser 
          kunt spelen, kun je nu werkelijk in een-twee-drie maken met alleen een prompt. Wil je iets ambitieuzers,
          dan helpt het dat je leert nadenken in componenten en stappen.
        </p>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 my-6">
          <p className="text-green-900 font-medium">
            💡 De nieuwste versies van Claude, Gemini en ChatGPT kunnen zo betrouwbaar programmeren, 
            dat je er zonder noemenswaardige voorkennis aan zou kunnen beginnen.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
          Een eenvoudig spel maken
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Hoe klein kun je beginnen? Wel, laten we beginnen met een spelletje. Open een chatbot 
          naar keuze: Gemini, ChatGPT, Copilot, Claude. De gratis versie volstaat.
        </p>

        <Figure
          src="/images/Foto article 2.1.png"
          alt="Voorbeeld van een eenvoudig dinosaurusspel"
          caption="Dit spel in Javascript is gegenereerd door Gemini met één prompt: “Maak een spel waarbij een t-rex een bal moet koppen.” "
        />

        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <p className="font-mono text-sm text-gray-800 mb-3 font-medium">Voorbeeld prompt:</p>
          <p className="text-blue-900 italic">
            "Schrijf een spel waarbij een dinosaurus een bal moet koppen."
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Zowel Gemini als ChatGPT doet dat meestal in een paar seconden. Beide produceren dan 
          een hoop code in een combinatie van HTML (de opmaaktaal van het web) en Javascript (de programmeertaal).
        </p>

        {/* Steps */}
        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
          Hoe je de code gebruikt:
        </h3>
        <div className="space-y-3">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold">
                1
              </span>
            </div>
            <div>
              <p className="text-gray-700"><strong>Klik op de code</strong> die de chatbot genereerde (meestal op het 'copy'-knopje)</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold">
                2
              </span>
            </div>
            <div>
              <p className="text-gray-700"><strong>Plak de code</strong> in Windows Kladblok of TextEdit</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold">
                3
              </span>
            </div>
            <div>
              <p className="text-gray-700"><strong>Bewaar het bestand</strong> met de extensie '.html' (bijvoorbeeld 'dinospel.html')</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold">
                4
              </span>
            </div>
            <div>
              <p className="text-gray-700"><strong>Klik op het bestand</strong> en het spel opent in je browser</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold">
                5
              </span>
            </div>
            <div>
              <p className="text-gray-700"><strong>Speel en test</strong> in je standaardbrowser, en pas je prompt aan voor verbeteringen</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-500 my-6">
          <p className="text-sm text-amber-900">
            ⚠️ <strong>Let op:</strong> Windows Kladblok voegt soms stiekem '.txt' toe. 
            Zorg ervoor dat je bestand echt 'dinospel.html' heet, niet 'dinospel.html.txt'
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Ik vibecode het liefst op mijn laptop, maar het kan ook op een smartphone. Wil je een programma 
          dat je op je pc maakte op je smartphone spelen, dan kun je het bijvoorbeeld naar jezelf mailen 
          en daar de bijlage bewaren.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Lukt het elke keer meteen? Nee, maar meestal wel. Soms begrijpt de chatbot je verkeerd en moet 
          je preciezer zijn: “Schrijf het programma in Javascript en zet alles in één bestand.” Je kunt ook 
          heel gericht sturen op stijl, bediening en spelverloop.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Vaak zit de eerste versie niet helemaal goed: geen score, verkeerde snelheid, of rommelige controls. 
          Dan doe je een tweede ronde met concrete aanpassingen. Voor meer originele games helpt een 
          gedetailleerde prompt en stapsgewijs uitbreiden met extra functies of effecten, zoals geluid.
        </p>

        {/* Section 2 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
          Verfijnen en uitbreiden
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Soms zit de eerste versie niet helemaal goed: er wordt geen score bijgehouden, 
          of de voorwerpen bewegen te snel of traag. Dan doe je een tweede ronde en vraag je 
          aan ChatGPT of Gemini om de aanpassingen.
        </p>

        <blockquote className="border-l-4 border-purple-500 pl-6 py-4 my-8 bg-purple-50 italic text-gray-800">
          "Elke keer dat een programma een foutmelding geeft, kleef je die foutmelding in ChatGPT 
          met de vraag om die fout te repareren."
        </blockquote>

        <p className="text-gray-700 leading-relaxed">
          Dat lukt vaak meteen, soms na een paar pogingen. Zo bouwde ik in enkele iteraties een cocktailspel 
          dat eerst vrij basic was, maar daarna extra opties kreeg zoals schudden en een parasolletje.
        </p>

        {/* Section 3 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
          Ambitieuzers: Een gezinskalender
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Na een tijdje durfde de auteur iets complexere apps aan. Een app voor gezinsleden 
          waarin ze elkaars activiteiten zien, en bijvoorbeeld kunnen zien wie de kinderen 
          naar voetbaltraining brengt – dat is veel ingewikkelder dan een simpel spelletje.
        </p>
        <Figure
          src="/images/Foto article 2.3.png"
          alt="Voorbeeld van een eenvoudig dinosaurusspel"
          caption="Deze gezinskalender draait op smartphone en pc, de gegevens worden in de “cloud” bewaard. De eerste versie werd geschreven door ChatGPT, maar de afwerking gebeurde met hulp van ChatGPT Codex."
        />
        <p className="text-gray-700 leading-relaxed mt-4">
          Dat is te ingewikkeld voor een programma van één bestand. De app moet gebruik maken 
          van een cloud-database (Supabase) en moet gehost worden op een website als Vercel. 
          Beide bieden gratis accounts aan.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          Voor zo&apos;n app koos ik er ook voor om de code op Github te bewaren. Zo blijven alle wijzigingen 
          bewaard en kun je altijd terugkeren naar een eerdere, werkende versie.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          De eerste werkende versie bestond al uit meerdere bestanden die je correct moet beheren. Met 
          handmatig knippen en plakken kost dat veel tijd: het resultaat werkt, maar mist vaak nog polish
          en functies zoals activiteiten wijzigen of wissen.
        </p>

        {/* Section 4 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
          Agentic werken: de volgende stap
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Wie verder wil gaan – zonder zelf te gaan programmeren – moet 'agentic' gaan werken: 
          met een AI-systeem dat zelfstandig aan de slag gaat en je programmabestanden kan zien 
          en zelf kan wijzigen.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 my-6">
          <h3 className="font-bold text-blue-900 mb-3">Opties voor agentic programmeren:</h3>
          <ul className="space-y-2 text-blue-900">
            <li>✓ <strong>ChatGPT Codex</strong> (€23/maand) – via ChatGPT Plus</li>
            <li>✓ <strong>Claude Code</strong> – via Claude</li>
            <li>✓ <strong>Cursor</strong> – gespecialiseerde tool</li>
            <li>✓ <strong>Replit</strong> – rijkere interface</li>
            <li>✓ <strong>Lovable</strong> – goed alternatief</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Gespecialiseerde tools zoals Replit en Lovable werken vaak uitstekend, maar in de gratis versie raak 
          je meestal niet tot een volledig afgewerkt eindresultaat. Daarom kiezen veel gebruikers uiteindelijk 
          toch voor een betaald plan bij één centraal platform.
        </p>

        {/* Section 5 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
          De magie van agentic AI
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Wat dan gebeurde, lijkt wel toverij. Stap voor stap begon de AI het programma te verbeteren, 
          op basis van suggesties maar ook op eigen initiatief. Twintig minuten later leek de app 
          eigenlijk klaar om in de app stores aan te bieden.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Strikt genomen gaat het vaak om een Progressive Web App: je bewaart ze als icoon op je 
          smartphonescherm, zonder klassieke appstore-download.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 my-8 bg-indigo-50 italic text-gray-800">
          "In totaal kostte mijn afgewerkte Gezinskalender een halve dag werk. Maar ik weet zeker 
          dat ik een app van deze complexiteit een volgende keer in de helft van die tijd in elkaar 
          gestoken krijg."
        </blockquote>

        {/* Section 6 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
          Voorkennis helpt, maar is niet nodig
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Hoe groot je voorkennis is, maakt een verschil. De auteur heeft in zijn jeugd wat 
          leren programmeren in Basic – net voldoende om te begrijpen wat er gebeurt als een 
          chatbot code genereert. Maar mensen zonder enige programmeerkennis slagen erin om 
          gelijkaardige apps te vibecoden.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          Met Codex, VS Code en Github kun je haast alles bouwen. Letterlijk zonder een lijn 
          code te schrijven, of zelfs maar te lezen.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          Tussen een eerste eenvoudige Javascript-game en een complexere app zit wel degelijk leertijd. 
          In mijn geval ging er een paar dagen naar het begrijpen van tooling, workflows en deployment.
        </p>

        {/* Final insight */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200 bg-green-50 p-6 rounded-lg">
          <p className="text-gray-800 font-medium mb-2">
            ⚡ <strong>Let op:</strong> Agentic programmeren evolueert momenteel razendsnel.
          </p>
          <p className="text-gray-700">
            Wat zes maanden geleden uren werk kostte, komt nu in één keer uit ChatGPT gerold. 
            Een app als de Gezinskalender kan nu binnen enkele uren gebouwd worden, en over een paar weken 
            waarschijnlijk met twee-drie prompts.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <p className="text-sm text-gray-600 font-medium">
            ✍️ Dominique Deckmyn schrijft wekelijks over technologie.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Rubrieken: De Helpdesk, Artificiële intelligentie, Technologie
          </p>
        </div>
      </section>
    </ArticleLayout>
  )
}
