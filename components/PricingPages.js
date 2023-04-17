import { useState } from 'react'
import { Dialog, Disclosure, RadioGroup } from '@headlessui/react'
import {
  Bars3Icon,
  MinusSmallIcon,
  PlusSmallIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {


  return (
    <div className="bg-white">
      <main>
        {/* Pricing section */}
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              KOMMANDE RESOR
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Våra utvalda golfdestinationer
          </p>
        
        </div>

        {/* Logo cloud */}
        <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://heygolfguide.se/wp-content/uploads/2023/04/alicante-golf-alicante-1-1-1024x799.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://heygolfguide.se/wp-content/uploads/2023/04/MELIA-VILLAITANA-ALICANTE-%E2%80%8B.jpeg"
              alt="Barcelona"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://heygolfguide.se/wp-content/uploads/2023/04/NEW-LOS-NARANJOS-MALAGA%E2%80%8B.jpeg"
              alt="Alicante"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://heygolfguide.se/wp-content/uploads/2023/04/DUBAI-CREEK-DUBAI%E2%80%8B-900x600.jpeg"
              alt="Dubai"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://heygolfguide.se/wp-content/uploads/2023/04/LA-RESERVA-MALAGA%E2%80%8B.jpeg"
              alt="FINCA CORTESIN GOLF CLUB – MALAGA"
              width={158}
              height={48}
            />
          </div>
        </div>

        {/* Testimonial section */}
        <div className="mx-auto mt-24 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <img
              className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
              src="https://heygolfguide.se/wp-content/uploads/2023/04/las-colinas-slide-2-1024x682.jpeg"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
            <div
              className="absolute -left-80 -top-56 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div
              className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
                alt=""
              />
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                  <p>
                    “LAS COLINAS GOLF & COUNTRY CLUB – EN OAS AV LYX OCH GOLF I
                    HJÄRTAT AV COSTA BLANCA Las Colinas Golf & Country Club är
                    en exklusiv och prisbelönt golfanläggning belägen i hjärtat
                    av Costa Blanca, Spanien. Med sin topprankade 18-hålsbana,
                    imponerande faciliteter och enastående miljö, är Las Colinas
                    den perfekta destinationen för golfare som söker en
                    avkopplande och lyxig golfsemester. I denna artikel
                    utforskar vi vad som gör Las Colinas så speciellt och varför
                    det är ett måste-besök för golfentusiaster över hela
                    världen. Banans utformning och kvalitet: Las Colinas Golf &
                    Country Club är stolt över sin 18-håls par-71-bana, som är
                    utformad av den berömda golfbanearkitekten Cabell B.
                    Robinson. Banan, som öppnade 2010, erbjuder en blandning av
                    utmanande hål och vacker natur, vilket ger en oförglömlig
                    upplevelse för spelare på alla nivåer. Banan är känd för sin
                    väl underhållna kondition, med snabba, släta greener och
                    fairways som smälter harmoniskt in i landskapet.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white">
                  <div className="font-semibold">Judith Black</div>
                  <div className="mt-1">CEO of Workcation</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
