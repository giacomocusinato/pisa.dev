import Head from "next/head";
import AdminOnly from "../../components/adminOnly";
import EventAdminInfo from "../../components/eventAdminInfo";
import EventbriteCheckout from "../../components/eventbriteCheckout";
import EventContent from "../../components/eventContent";
import EventLocationInfo from "../../components/eventLocationInfo";
import Footer from "../../components/footer";
import Header from "../../components/header";
import SpeakerInfo from "../../components/speakerInfo";

const event = {
  speaker: {
    name: "Alessandro Berti",
    title: "PhD Student in Quantum Computing @ UniPi",
    imageUrl: "/alessandro.webp",
  },
  title: "Quantum Computing: Lov Grover",
  location: "Borgo Stretto 3, Pisa",
  date: new Date(2022, 6, 15, 18, 30),
  eventbriteId: "380159706917",
  abstract: `Quanto costa cercare classicamente un elemento in un array non ordinato? Nel peggiore dei casi, dovrai guardare tutti gli elementi del tuo array, uno ad uno. Questo però non è vero con la computazione quantistica!`,
  description: `
In questo talk sarà presentato uno degli algoritmi quantistici più dirompenti di tutto il mondo quantum, l’algoritmo di Grover!

#### Che cosa fa questo algoritmo?

Beh! Permette di avere uno speedup polinomiale rispetto alla ricerca effettuata dai computer classici.

#### Ovvero?
Astraendo significa che, riesce a trovare l’elemento che stavi cercando senza dover guardare tutti gli elementi del tuo array non ordinato.

#### Come è possibile questa magia?
Beh, non ti rimane che venire al talk!

### Informazioni utili
Questo è il primo di molti eventi gratuiti di cui si renderà protagonista Pisa.dev: la nuova fantastica community degli sviluppatori pisani! 🎉🎉

Pisa.dev nasce dall'esigenza di formare un gruppo di professionisti, studenti ed appassionati del mondo IT sul territorio pisano con il chiaro obiettivo di condividere idee, conoscenze e curiosità.

L'evento sarà ospitato da Geckosoft, uno dei principali partner della community e sponsor delle sue attività, che ringraziamo per il supporto. La sala a nostra disposizione si trova al primo piano del centralissimo Casino dei Nobili, in via Borgo Stretto, 3.

Terminato l'evento ci sarà un aperitivo, così da discutere gli argomenti trattati (e non), condividere le proprie impressioni e fare conoscenza 🍻🍻🍻

Ti abbiamo incuriosito? Ottimo, vieni a trovarci venerdì 15 alle ore 18:30!
  `,
};

const EventPage = () => {
  return (
    <>
      <Head>
        <title>{event.title} - pisa.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-16">
            <div className="mt-8 w-full items-center justify-between">
              <div className="flex flex-col col-span-2 gap-6">
                <AdminOnly>
                  <EventAdminInfo eventId={event.eventbriteId} />
                </AdminOnly>
                <SpeakerInfo speaker={event.speaker} />
                <h1 className="my-3 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
                  {event.title}
                </h1>

                <EventLocationInfo
                  location={event.location}
                  date={event.date}
                />
              </div>
            </div>

            <div className="sticky flex flex-col gap-2 py-4 mt-4 items-center w-full bg-white dark:bg-slate-900 dark:text-gray-300 border-slate-200 dark:border-slate-700 dark:bg-opacity-60 bg-opacity-90 backdrop-blur-sm top-0 left-0 border-y">
              <EventbriteCheckout eventId={event.eventbriteId} />
              <span className="text-xs">
                Evento gratuito previa registrazione
              </span>
            </div>

            <EventContent
              abstract={event.abstract}
              description={event.description}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventPage;
