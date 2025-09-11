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
      <div className='flex flex-col md:flex-row items-center justify-center gap-5 p-4'>
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