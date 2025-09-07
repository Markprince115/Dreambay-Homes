'use client'
import React from 'react'
import { Lightbulb, PawPrint, ShieldCheck, Wifi } from "lucide-react";
import { Button } from '@/components/ui/button';

const properties = () => {
  return (
    <div className="bg-white py-16">
        <div className="container mx-auto px-8 max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Properties</h2>
          <div className="w-16 h-1 bg-teal-500"></div>
        </div>

        <div className="space-y-16">
          {/* Properties for Lease - Rent */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Properties for Lease - Rent</h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Looking for long-term stay or a space you can truly call home?
              </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our Lease & Rent collection offers a variety of modern apartments tailored to our lifestyle. From luxury living to standard rooms, find your perfect home with all the necessary comfort, security and prime location.
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">Features: <span className='flex-1 max-w-[300px]'><hr className='border-t-2 border-teal-500'/></span></h4>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-5 h-5 text-teal-500" />
                    <span className="text-neutral-800">security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-5 h-5 text-teal-500" />
                    <span className="text-neutral-800">Stable Electricity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <PawPrint className="w-5 h-5 text-teal-500" />
                    <span className="text-neutral-800">Pet-friendly</span>
                  </div>
                </div>
              </div>

              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium">
                Book an Appointment
              </Button>
            </div>

            {/* Image */}
            <div className="lg:order-last">
              <div className="relative">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f8fafc'/%3E%3Crect x='50' y='50' width='500' height='300' rx='12' fill='%23e2e8f0'/%3E%3Crect x='80' y='80' width='120' height='80' rx='8' fill='%23cbd5e1'/%3E%3Crect x='220' y='80' width='120' height='80' rx='8' fill='%23cbd5e1'/%3E%3Crect x='360' y='80' width='120' height='80' rx='8' fill='%23cbd5e1'/%3E%3Crect x='80' y='180' width='200' height='120' rx='8' fill='%2314b8a6'/%3E%3Crect x='300' y='180' width='180' height='120' rx='8' fill='%23059669'/%3E%3Ccircle cx='150' cy='320' r='15' fill='%23065f46'/%3E%3Ccircle cx='300' cy='320' r='15' fill='%23065f46'/%3E%3Ccircle cx='450' cy='320' r='15' fill='%23065f46'/%3E%3Ctext x='300' y='50' text-anchor='middle' fill='%23374151' font-family='sans-serif' font-size='18' font-weight='bold'%3EModern Apartment Complex%3C/text%3E%3C/svg%3E"
                  alt="Modern apartment building for long-term rent"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Properties for Short-let - Airbnb */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <div className="relative">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f8fafc'/%3E%3Crect x='50' y='50' width='500' height='300' rx='12' fill='%23e2e8f0'/%3E%3Crect x='80' y='80' width='200' height='150' rx='8' fill='%23fbbf24'/%3E%3Crect x='300' y='80' width='180' height='150' rx='8' fill='%23f59e0b'/%3E%3Crect x='80' y='250' width='120' height='80' rx='8' fill='%23ef4444'/%3E%3Crect x='220' y='250' width='120' height='80' rx='8' fill='%23dc2626'/%3E%3Crect x='360' y='250' width='120' height='80' rx='8' fill='%23b91c1c'/%3E%3Ccircle cx='180' cy='140' r='25' fill='%23ffffff' opacity='0.8'/%3E%3Ccircle cx='390' cy='140' r='25' fill='%23ffffff' opacity='0.8'/%3E%3Ctext x='300' y='40' text-anchor='middle' fill='%23374151' font-family='sans-serif' font-size='18' font-weight='bold'%3EBoutique Short-Stay Suite%3C/text%3E%3C/svg%3E"
                  alt="Luxury short-term rental suite"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Properties for Short-let - Airbnb</h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Need a space for a few nights, weeks or months?
              </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our Short-let & Airbnb collection is designed for business travelers, tourists and anyone looking for a premium stay experience. Whether for work or leisure, enjoy modern amenities, stylish interiors, prime locations, and truly stellar hospitality in every space that makes it feel just like home.
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">Features: <span className='flex-1 max-w-[300px]'><hr className='border-t-2 border-teal-500'/></span></h4>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center space-x-1">
                    <ShieldCheck className="w-5 h-5 text-teal-500" />
                    <span className="text-neutral-800">security</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Lightbulb className="w-5 h-5 text-teal-500" />
                    <span className="text-neutral-800">Stable Electricity</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <PawPrint className="w-5 h-5 text-teal-500" />
                    <span className="text-neutral-800">Pet-Friendly</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Wifi className="w-5 h-5 text-teal-500" />
                    <span className="text-neutral-800">Free wifi</span>
                  </div>
                </div>
              </div>

              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium">
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default properties
