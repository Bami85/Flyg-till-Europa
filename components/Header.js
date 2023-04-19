
import Link from 'next/link'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="text-sm font-semibold leading-6 text-white"   style={{
         Image:
            "url('https://heygolfguide.se/wp-content/uploads/2023/04/DUBAI-CREEK-DUBAI%E2%80%8B-900x600.jpeg')",
        }}>
         Hey Golf Flyg <span aria-hidden="true"></span>
         
          </a>
        
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
     
      
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/paket" className="text-sm font-semibold leading-6 text-white">
          Bokning  <span aria-hidden="true"></span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/PutResor" className="text-sm font-semibold leading-6 text-white">
          Add resor  <span aria-hidden="true"></span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/paket/malaga" className="text-sm font-semibold leading-6 text-white">
          Resor paket  <span aria-hidden="true"></span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/admin" className="text-sm font-semibold leading-6 text-white">
          Login  <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          focus="true"
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
        >
        
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}



