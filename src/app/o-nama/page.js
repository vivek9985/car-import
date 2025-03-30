import Link from "next/link";
import { CheckCircle, Shield, Truck, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <h1 className="text-2xl font-bold">Auto Import Srbija</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="hover:text-blue-200 font-medium text-white"
            >
              Početna
            </Link>
            <Link
              href="/o-nama"
              className="hover:text-blue-200 font-medium text-white"
            >
              O nama
            </Link>
            <Link
              href="/usluge"
              className="hover:text-blue-200 font-medium text-white"
            >
              Usluge
            </Link>
            <Link
              href="/galerija"
              className="hover:text-blue-200 font-medium text-white"
            >
              Galerija
            </Link>
            <Link
              href="/faq"
              className="hover:text-blue-200 font-medium text-white"
            >
              FAQ
            </Link>
            <Link
              href="/kontakt"
              className="hover:text-blue-200 font-medium text-white"
            >
              Kontakt
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-blue-700 text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/217326/pexels-photo-217326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              filter: "brightness(0.4)",
            }}
          ></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">O nama</h1>
              <p className="text-xl mb-8 text-blue-100">
                Auto Import Srbija je specijalizovana kompanija za uvoz
                automobila po želji klijenata. Sa višegodišnjim iskustvom,
                pružamo kompletnu uslugu od pronalaženja do registracije vozila.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <img
                  src="https://framerusercontent.com/images/FFqAn5YpWbovBdSd89Sp4ak.png?scale-down-to=1024"
                  alt="Naš tim"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Naša priča
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Auto Import Srbija je osnovana 2008. godine sa ciljem da
                    olakša proces uvoza kvalitetnih polovnih automobila iz
                    inostranstva. Naš tim čine stručnjaci sa dugogodišnjim
                    iskustvom u automobilskoj industriji koji poznaju tržište i
                    mogu da prepoznaju kvalitetna vozila koja odgovaraju
                    potrebama i budžetu naših klijenata.
                  </p>
                  <p>
                    Kroz godine rada, izgradili smo mrežu pouzdanih partnera
                    širom Evrope, što nam omogućava pristup širokom izboru
                    kvalitetnih vozila. Naša misija je da svakom klijentu
                    pružimo transparentnu i profesionalnu uslugu, od prvog
                    kontakta do isporuke vozila.
                  </p>
                  <p>
                    Verujemo da svako zaslužuje pouzdano vozilo po fer ceni, i
                    posvećeni smo tome da taj proces učinimo jednostavnim i
                    bezbrižnim za naše klijente. Do danas, uspešno smo uvezli
                    preko 1200 vozila i stekli poverenje brojnih zadovoljnih
                    klijenata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Naše vrednosti
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Principi kojima se vodimo u svakodnevnom radu
              </p>
            </div>

            <div className="w-10/12 md:w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Pouzdanost
                </h3>
                <p className="text-gray-600">
                  Uvek ispunjavamo svoja obećanja i trudimo se da nadmašimo
                  očekivanja naših klijenata. Transparentnost i poštenje su
                  temelji našeg poslovanja.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Kvalitet
                </h3>
                <p className="text-gray-600">
                  Ne pravimo kompromise kada je u pitanju kvalitet vozila koja
                  uvozimo. Svako vozilo prolazi detaljnu proveru pre nego što ga
                  ponudimo našim klijentima.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Klijent na prvom mestu
                </h3>
                <p className="text-gray-600">
                  Naš pristup je uvek fokusiran na potrebe klijenta. Slušamo
                  vaše želje i trudimo se da pronađemo najbolje rešenje za vas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Naš tim</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Upoznajte stručnjake koji će vam pomoći da pronađete savršen
                automobil
              </p>
            </div>

            <div className="w-10/12 sm:w-8/12 md:w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-5 xl:gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Marko Petrović"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    Marko Petrović
                  </h3>
                  <p className="text-blue-600 mb-4">Direktor</p>
                  <p className="text-gray-600 mb-4">
                    Sa 20 godina iskustva u automobilskoj industriji, Marko vodi
                    naš tim i osigurava da svaki klijent dobije vrhunsku uslugu.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/775279/pexels-photo-775279.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Ana Jovanović"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    Ana Jovanović
                  </h3>
                  <p className="text-blue-600 mb-4">Menadžer prodaje</p>
                  <p className="text-gray-600 mb-4">
                    Ana je zadužena za komunikaciju sa klijentima i pronalaženje
                    vozila koja odgovaraju njihovim potrebama i budžetu.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Nikola Stanković"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    Nikola Stanković
                  </h3>
                  <p className="text-blue-600 mb-4">Tehnički stručnjak</p>
                  <p className="text-gray-600 mb-4">
                    Nikola je naš glavni tehnički stručnjak koji detaljno
                    proverava svako vozilo pre kupovine i osigurava njegov
                    kvalitet.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/713520/pexels-photo-713520.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Jelena Marković"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    Jelena Marković
                  </h3>
                  <p className="text-blue-600 mb-4">Korisnička podrška</p>
                  <p className="text-gray-600 mb-4">
                    Jelena je zadužena za korisničku podršku i pomoć klijentima
                    tokom celog procesa uvoza automobila.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Zašto izabrati nas?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Prednosti saradnje sa Auto Import Srbija
              </p>
            </div>

            <div className="w-10/12 md:w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Iskustvo i stručnost
                </h3>
                <p className="text-gray-600">
                  Naš tim ima višegodišnje iskustvo u uvozom automobila i
                  detaljno poznaje tržište polovnih vozila u Evropi.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Sigurnost i transparentnost
                </h3>
                <p className="text-gray-600">
                  Pružamo detaljne informacije o svakom vozilu i garantujemo
                  transparentnost tokom celog procesa uvoza.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Kompletna usluga
                </h3>
                <p className="text-gray-600">
                  Od pronalaženja vozila do registracije - brinemo o svim
                  koracima procesa uvoza i štedimo vaše vreme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Spremni da uvezete svoj novi automobil?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Kontaktirajte nas danas i započnite proces uvoza automobila po
              vašoj meri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#zahtev"
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
