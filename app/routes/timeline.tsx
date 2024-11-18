'use client'
import Timeline1 from '~/components/timeline/timeline1'
import Timeline2 from '~/components/timeline/timeline2'
import Timeline3 from '~/components/timeline/timeline3'
import Timeline4 from '~/components/timeline/timeline4'
import Timeline5 from '~/components/timeline/timeline5'
import Timeline6 from '~/components/timeline/timeline6'


export default function Index() {


  return (
    <div className="">

       <Timeline1 />

       <Timeline3 />
       <Timeline4 />
       <Timeline2 />
       <Timeline5 />

      <footer className="bg-blue-200 bg-opacity-50 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mt-2 text-sm text-blue-600">Crafted with care for developers and designers alike.</p>
        </div>
      </footer>
    </div>
  )
}