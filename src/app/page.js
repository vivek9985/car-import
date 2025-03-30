import Link from "next/link";
import CarRequestForm from "@/components/car-request-form";
import { Car, CheckCircle, ShieldCheck, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <section className="relative bg-blue-700 text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div
            className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/217326/pexels-photo-217326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              filter: "brightness(0.4)",
            }}
          ></div>
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Uvoz automobila iz Evrope po vašoj meri
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Profesionalna usluga uvoza kvalitetnih polovnih automobila iz
                Nemačke, Austrije, Švajcarske i drugih evropskih zemalja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#zahtev"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 text-center"
                >
                  Pošalji zahtev
                </Link>
                <Link
                  href="/o-nama"
                  className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 text-center"
                >
                  Saznaj više
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">1200+</p>
                <p className="text-gray-600">Uvezenih vozila</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
                <p className="text-gray-600">Zadovoljnih klijenata</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">15+</p>
                <p className="text-gray-600">Godina iskustva</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">7</p>
                <p className="text-gray-600">Evropskih zemalja</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Naše usluge
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pružamo kompletnu uslugu uvoza automobila po vašim željama, od
                pronalaženja do registracije.
              </p>
            </div>

            <div className="w-10/12 md:w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
                <div className="h-3 bg-blue-600"></div>
                <div className="p-8">
                  <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Car className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Pronalaženje vozila
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Na osnovu vaših zahteva i budžeta, pronalazimo najbolja
                    vozila na evropskom tržištu koja odgovaraju vašim potrebama.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Detaljna provera istorije vozila
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Provera tehničke ispravnosti
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Fotografije i video pregled
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
                <div className="h-3 bg-blue-600"></div>
                <div className="p-8">
                  <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Transport i carinjenje
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Organizujemo kompletan transport vozila iz inostranstva i
                    obavljamo sve carinske formalnosti.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Siguran transport specijalnim vozilima
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Kompletna carinska dokumentacija
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Obračun i plaćanje svih dažbina
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
                <div className="h-3 bg-blue-600"></div>
                <div className="p-8">
                  <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <ShieldCheck className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Registracija i garancija
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Pomažemo u procesu registracije vozila i pružamo garanciju
                    na uvezena vozila.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Priprema dokumentacije za registraciju
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Tehnički pregled i homologacija
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Garancija na motor i menjač
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Kako funkcioniše uvoz?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Jednostavan proces u nekoliko koraka do vašeg novog automobila
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

              <div className="space-y-12 md:space-y-0">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      1. Pošaljite zahtev
                    </h3>
                    <p className="text-gray-600">
                      Popunite formular sa vašim željama i budžetom. Što više
                      detalja navedete, to ćemo bolje razumeti vaše potrebe.
                    </p>
                  </div>
                  <div className="md:w-16 relative flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl z-10">
                      1
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-16 md:text-left">
                    <img
                      src="https://www.importmarques.com/media/cebhxezn/grey-porsche-taycan-gts.jpg?width=404&height=269&v=1da8045c8f74d00"
                      alt="Slanje zahteva"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right order-1 md:order-3">
                    <img
                      src="https://www.importmarques.com/media/8130/a526c82c-81e9-4d09-9c97-6388decf3d8a.jpg?width=404&height=269&v=1d9b27e301646d0"
                      alt="Pretraga vozila"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-16 relative flex justify-center order-2">
                    <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl z-10">
                      2
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-16 md:text-left order-3 md:order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      2. Pronalazimo vozila
                    </h3>
                    <p className="text-gray-600">
                      Naš tim pretražuje tržište i pronalazi nekoliko vozila
                      koja odgovaraju vašim zahtevima. Šaljemo vam detaljne
                      informacije i fotografije.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      3. Odaberite vozilo
                    </h3>
                    <p className="text-gray-600">
                      Nakon što odaberete vozilo koje vam najviše odgovara, mi
                      obavljamo detaljnu proveru i dogovaramo kupovinu.
                    </p>
                  </div>
                  <div className="md:w-16 relative flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl z-10">
                      3
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-16 md:text-left">
                    <img
                      src="https://www.importmarques.com/media/8362/blue-mercedes-glc.jpg?width=404&height=269&v=1d9b27e2aa5c270"
                      alt="Odabir vozila"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right order-1 md:order-3">
                    <img
                      src="https://www.importmarques.com/media/1rdlzalf/blue-mercedes-g580-eq-on-rugged-terrain.jpg?width=404&height=269&v=1da9afe60abe660"
                      alt="Transport vozila"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-16 relative flex justify-center order-2">
                    <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl z-10">
                      4
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-16 md:text-left order-3 md:order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      4. Transport i carinjenje
                    </h3>
                    <p className="text-gray-600">
                      Organizujemo transport vozila do Srbije i obavljamo sve
                      carinske formalnosti. Redovno vas obaveštavamo o statusu.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      5. Preuzimanje i registracija
                    </h3>
                    <p className="text-gray-600">
                      Preuzimate vozilo u našem salonu, a mi vam pomažemo oko
                      registracije i svih potrebnih dokumenata.
                    </p>
                  </div>
                  <div className="md:w-16 relative flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl z-10">
                      5
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-16 md:text-left">
                    <img
                      src="https://cdn.dealeraccelerate.com/vcc/1/2750/184858/790x1024/1957-cadillac-eldorado-brougham-northstar-v8-powered"
                      alt="Preuzimanje vozila"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Šta kažu naši klijenti
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Iskustva zadovoljnih klijenata koji su uvezli automobile preko
                naše agencije
              </p>
            </div>

            <div className="w-10/12 md:w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 relative">
                <div className="text-blue-600 absolute -top-4 left-8 text-6xl">
                  &quot;
                </div>
                <p className="text-gray-600 mb-6 pt-4">
                  Izuzetno sam zadovoljan uslugom. Pronašli su mi tačno onakav
                  automobil kakav sam želeo, a ceo proces je bio jednostavan i
                  transparentan. Preporučujem svima!
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">MJ</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Marko Jovanović</h4>
                    <p className="text-gray-500 text-sm">
                      Uvezao: Audi A4 2019
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 relative">
                <div className="text-blue-600 absolute -top-4 left-8 text-6xl">
                  &quot;
                </div>
                <p className="text-gray-600 mb-6 pt-4">
                  Već drugi put koristim usluge Auto Import Srbija.
                  Profesionalni su, pouzdani i uvek dostupni za sva pitanja. Ceo
                  proces je prošao bez ikakvih problema.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">JP</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Jelena Petrović</h4>
                    <p className="text-gray-500 text-sm">
                      Uvezla: VW Tiguan 2020
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 relative">
                <div className="text-blue-600 absolute -top-4 left-8 text-6xl">
                  &quot;
                </div>
                <p className="text-gray-600 mb-6 pt-4">
                  Nisam znao šta očekivati od uvoza automobila, ali su me
                  stručno vodili kroz ceo proces. Dobio sam odličan automobil po
                  mnogo boljoj ceni nego na domaćem tržištu.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">NS</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      Nikola Stanković
                    </h4>
                    <p className="text-gray-500 text-sm">Uvezao: BMW X3 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Car Brands */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Popularne marke automobila
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Uvozimo automobile svih brendova, a ovo su neki od
                najpopularnijih
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              {["Audi", "BMW", "Mercedes", "Volkswagen", "Škoda", "Volvo"].map(
                (brand, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-24"
                  >
                    <span className="text-xl font-bold text-gray-700">
                      {brand}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Request Form Section */}
        <section
          id="zahtev"
          className="py-16 bg-gradient-to-r from-blue-700 to-blue-600 text-white"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pošaljite zahtev za uvoz automobila
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Popunite formular ispod i naš tim će vas kontaktirati u
                najkraćem mogućem roku
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
              <CarRequestForm />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Često postavljana pitanja
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o uvozu automobila
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Koliko traje proces uvoza automobila?
                </h3>
                <p className="text-gray-600">
                  Proces uvoza automobila obično traje između 2 i 4 nedelje, u
                  zavisnosti od zemlje iz koje se uvozi, dostupnosti vozila i
                  carinskih procedura. Naš tim će vam dati precizniju procenu
                  nakon što primimo vaš zahtev.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Koje troškove mogu očekivati prilikom uvoza?
                </h3>
                <p className="text-gray-600">
                  Ukupni troškovi uvoza uključuju: cenu vozila, transport,
                  carinu (koja zavisi od vrednosti, starosti i kubikaže vozila),
                  PDV, troškove homologacije i registracije. Naša usluga
                  uključuje transparentan obračun svih troškova pre nego što se
                  odlučite za kupovinu.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Da li mogu uvesti bilo koji automobil?
                </h3>
                <p className="text-gray-600">
                  Možete uvesti većinu automobila koji ispunjavaju ekološke
                  standarde Republike Srbije (minimum EURO 4). Postoje određena
                  ograničenja za vozila starija od 10 godina. Naš tim će vas
                  savetovati o svim ograničenjima koja mogu uticati na vaš
                  izbor.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Kako se proverava stanje vozila pre kupovine?
                </h3>
                <p className="text-gray-600">
                  Naš tim stručnjaka detaljno proverava svako vozilo pre
                  kupovine. To uključuje proveru istorije vozila, tehničku
                  inspekciju, proveru kilometraže i testiranje svih važnih
                  komponenti. Šaljemo vam detaljne fotografije i video snimke
                  vozila.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Da li pružate garanciju na uvezena vozila?
                </h3>
                <p className="text-gray-600">
                  Da, pružamo garanciju na motor i menjač u trajanju od 6 meseci
                  za vozila mlađa od 5 godina. Za starija vozila, garancija se
                  određuje individualno. Takođe, ako vozilo još uvek ima
                  fabričku garanciju, ona ostaje važeća i nakon uvoza.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Spremni da uvezete svoj novi automobil?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Kontaktirajte nas danas i započnite proces uvoza automobila po
              vašoj meri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#zahtev"
                className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 text-center"
              >
                Pošalji zahtev
              </Link>
              <Link
                href="/kontakt"
                className="bg-transparent hover:bg-blue-600 border-2 border-white text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 text-center"
              >
                Kontaktiraj nas
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
