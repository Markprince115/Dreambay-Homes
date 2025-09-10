'use client'
import React from 'react'
import { properties } from '../data/propertyCard'
import PropertyCard from './PropertyCard'

const Service = () => {

  return (
    <section className='w-full bg-neutral-100'>
      {/* sub title */}
      <div className='flex items-center justify-center text-center py-7'>
        <p className='border border-green-300/50 rounded-full text-sm px-7 py-2'> Services We Provide</p>
      </div>

    {/* Responsive grid section */}
    <div className='w-full pb-8'>
      {/* The key change is here, replacing the flexbox with a responsive grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 md:px-10 justify-items-center'>
          {properties.map((property, index) => (
              <PropertyCard key={index}
                image={property.image}
                title={property.title}
                description={property.description}
                features={property.features}
                buttonText={property.buttonText} />
          ))}
      </div>
    </div>

    </section>
  )
}

export default Service