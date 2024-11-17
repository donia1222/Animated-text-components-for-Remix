'use client'
import Timeline1 from '~/components/timeline/timeline1'
import Timeline2 from '~/components/timeline/timeline2'

export default function Index() {


  return (
    <div className="">

       <Timeline1 />
       <Timeline2 />
      <footer className="bg-blue-200 bg-opacity-50 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mt-2 text-sm text-blue-600">Crafted with care for developers and designers alike.</p>
        </div>
      </footer>
    </div>
  )
}