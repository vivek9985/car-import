"use client"

import { useState } from "react"
import { sendCarRequest } from "@/app/actions/actions"
import { CheckCircle2, AlertCircle } from "lucide-react"

export default function CarRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(formData) {
    setIsSubmitting(true)
    setError(null)

    try {
      await sendCarRequest(formData)
      setIsSuccess(true)
      // Reset form
      const form = document.getElementById("car-request-form")
      form.reset()
    } catch (err) {
      setError("Došlo je do greške prilikom slanja zahteva. Molimo pokušajte ponovo.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Zahtev uspešno poslat!</h3>
        <p className="text-gray-600 mb-6">Hvala vam na interesovanju. Kontaktiraćemo vas u najkraćem mogućem roku.</p>
        <button
          onClick={() => setIsSuccess(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Pošalji novi zahtev
        </button>
      </div>
    )
  }

  return (
    <form id="car-request-form" action={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="carBrand" className="block text-sm font-medium text-gray-700 mb-1">
            Marka automobila *
          </label>
          <input
            type="text"
            id="carBrand"
            name="carBrand"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="npr. Volkswagen, Audi, BMW..."
          />
        </div>

        <div>
          <label htmlFor="carType" className="block text-sm font-medium text-gray-700 mb-1">
            Model automobila *
          </label>
          <input
            type="text"
            id="carType"
            name="carType"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="npr. Golf, A4, X5..."
          />
        </div>

        <div>
          <label htmlFor="productionYear" className="block text-sm font-medium text-gray-700 mb-1">
            Godina proizvodnje *
          </label>
          <input
            type="number"
            id="productionYear"
            name="productionYear"
            required
            min="1990"
            max={new Date().getFullYear()}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="npr. 2018"
          />
        </div>

        <div>
          <label htmlFor="kilometers" className="block text-sm font-medium text-gray-700 mb-1">
            Kilometraža *
          </label>
          <input
            type="number"
            id="kilometers"
            name="kilometers"
            required
            min="0"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="npr. 120000"
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
            Budžet (EUR) *
          </label>
          <input
            type="number"
            id="budget"
            name="budget"
            required
            min="0"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="npr. 15000"
          />
        </div>

        <div>
          <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700 mb-1">
            Kontakt informacije *
          </label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Telefon ili email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
          Dodatne informacije
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Navedite dodatne zahteve ili informacije (tip motora, oprema, boja...)..."
        ></textarea>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          {error}
        </div>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Slanje..." : "Pošalji zahtev"}
        </button>
      </div>
    </form>
  )
}

