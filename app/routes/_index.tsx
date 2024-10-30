import { useState } from 'react';
import { Link } from '@remix-run/react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion'; // Importa motion
import CloudTextBlock from '~/components/showcase/CloudTextBlock';
import CloudTextBlock2 from '~/components/showcase/CloudTextBlock2';
import CloudTextBlock3 from '~/components/showcase/CloudTextBlock3';
import CloudTextBlock4 from '~/components/showcase/CloudTextBlock4';
import CloudTextBlock5 from '~/components/showcase/CloudTextBlock5';
import CloudTextBlock6 from '~/components/showcase/CloudTextBlock6';


const components = [
    { name: '', Component: CloudTextBlock, code: `// Código de CloudTextBlock` },
    { name: '', Component: CloudTextBlock4, code: `// Código de CloudTextBlock4` },
    { name: '', Component: CloudTextBlock5, code: `// Código de CloudTextBlock5` },
    { name: '', Component: CloudTextBlock3, code: `// Código de CloudTextBlock3` },
    { name: '', Component: CloudTextBlock6, code: `// Código de CloudTextBlock6` },
    { name: '', Component: CloudTextBlock2, code: `// Código de CloudTextBlock2` },


];

export default function Index() {


  return (
    <div className="min-h-screen bg-animated-gradient bg-400% animate-gradientAnimation relative overflow-auto">

      <header className="p-0">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {components.map(({ name, Component, code }, index) => (
          <div key={index} className="mb-12 bg-white bg-opacity-90 shadow-lg overflow-hidden sm:rounded-lg transition-all hover:shadow-xl">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-xl leading-6 font-semibold text-gray-900">{name}</h2>
            </div>
  
              <div className="px-4 py-5 sm:p-6">
                <Component />
              </div>
      
            </div>

        ))}
      </main>
    </div>
  );
}
