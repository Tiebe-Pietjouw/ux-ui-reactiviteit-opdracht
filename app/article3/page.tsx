import { ArticleLayout } from "@/components/Article"

export default function Article3() {
  return (
    <ArticleLayout
      title={`Was het verzet van Dario Amodei tegen minister Hegseth het “Ik ben Spartacus!”-moment van Silicon Valley?`}
      subtitle="Het verzet van Dario Amodei tegen minister van 'Oorlog' Pete Hegseth lijkt een keerpunt in de relatie tussen big tech en de regering."
      date="13 maart 2026"
      author="Dominique Deckmyn"
      heroImage="/images/Foto article 3.png"
    >
      <section className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Big tech schaarde zich deze week haast eenstemmig achter Dario Amodei, de bevlogen en 
          tegendraadse oprichter van Anthropic, die de confrontatie met minister Pete Hegseth 
          aandurft. Dat is opmerkelijk en geeft aanleiding tot de vraag of dit het moment is waarop 
          Silicon Valley publiekelijk stelling neemt.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Die steun komt niet via luidruchtige persconferenties, maar via juridische documenten: 
          zogenoemde <em>amicus briefs</em>, waarin bedrijven hun steun uitspreken in de rechtszaak 
          tussen Anthropic en het Pentagon.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">Amodei's juridische strijd en steun van big tech</h2>
        <p className="text-gray-700 leading-relaxed">
          De strafmaatregel die minister Hegseth Anthropic oplegt — het labelen als "risico voor de 
          toeleveringsketen" — creëert volgens sommige documenten een cultuur van dwang en stilte. 
          In amicus briefs spreken bedrijven als Amazon, Google en Apple (via belangenclubs) hun 
          steun uit voor Anthropic in deze juridische strijd.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Eén van die teksten, gelinkt aan de belangengroep Chamber of Progress, stelt dat de maatregel 
          een signaal geeft dat de overheid alle beschikbare middelen inzet om critici te straffen.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 my-6">
          <p className="text-blue-900 font-medium">
            "De strafmaatregel creëert een cultuur van dwang, medeplichtigheid en stilte..."
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">Is dit het 'Ik ben Spartacus!'-moment?</h2>
        <p className="text-gray-700 leading-relaxed">
          Nee — het is nog te voorzichtig om dat te noemen. De steun van big tech is veelal omfloerst en 
          juridisch gekleurd: men verdedigt vooral het recht op vrije meningsuiting en formuleert ethische 
          bezwaren met veel mitsen en maren.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Opvallend is wel dat Microsoft iets verder gaat dan puur procedurele argumenten en in voorzichtige 
          taal ook inhoudelijke steun uitspreekt voor ethische bezwaren over AI-toepassingen.
        </p>

        <p className="text-gray-700 leading-relaxed">
          In de VS is vrije meningsuiting politiek sterk beladen. Net daardoor is het betekenisvol dat bedrijven 
          hier, weliswaar behoedzaam, toch een grens proberen te trekken.
        </p>

        <blockquote className="border-l-4 border-amber-500 pl-6 py-4 my-8 bg-amber-50 italic text-gray-800">
          "Amodei neemt heel nadrukkelijk en moedig een ethisch standpunt in over AI."
        </blockquote>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">Waarom dit wél belangrijk is</h2>
        <p className="text-gray-700 leading-relaxed">
          Hoewel ceo's zich doorgaans niet politiek uitlaten, is het opvallend dat dit keer enkele 
          technologiebedrijven publiekelijk hun steun tonen voor een ethisch debat over AI. De echte 
          verandering komt misschien doordat slechts een klein aantal top-ingenieurs werkelijk de macht 
          heeft om vooruitgang te boeken — en die experts handelen soms naar hun overtuiging.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Dat contrasteert met vroeger, toen werknemers in Silicon Valley veel collectiever druk konden zetten 
          op bedrijfsbeslissingen. Vandaag is die brede werknemersmacht kleiner, maar een beperkte groep 
          top-experts heeft juist méér onderhandelingsruimte gekregen.
        </p>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 my-6">
          <p className="text-green-900 font-medium">
            Belangrijk: de steun is deels strategisch — bedrijven beschermen hun belangen, maar tonen 
            ook een bereidheid om ethische bezwaren over AI te erkennen.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">Conclusie</h2>
        <p className="text-gray-700 leading-relaxed">
          Of dit het definitieve keerpunt is, valt nog te bezien. Wel lijkt duidelijk dat Silicon Valley 
          niet meer hetzelfde is als vroeger: werknemers hebben minder invloed, maar de schaarse 
          elite van AI-experts behoudt een unieke invloed. Amodei's standpunt lijkt in ieder geval een 
          katalysator voor gesprekken over ethiek en politieke druk rond AI.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Een volledige terugkeer naar het oude Silicon Valley is onwaarschijnlijk. Maar net daarom is dit 
          dossier belangrijk: het toont dat ethische posities rond AI nog altijd verschil kunnen maken, 
          zelfs in een sterk gepolariseerd politiek klimaat.
        </p>

        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <p className="text-sm text-gray-600 font-medium">✍️ Dominique Deckmyn</p>
          <p className="text-sm text-gray-600 mt-2">Rubrieken: De Technocraat, Cultuur en media, Artificiële intelligentie</p>
        </div>
      </section>
    </ArticleLayout>
  )
}
