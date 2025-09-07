import {ShieldCheck, Wifi, Lightbulb, PawPrint } from 'lucide-react';
import HEROBG from '@/assets/images/herobg.jpg'

export const properties = [
    {
      image: HEROBG,
      title: "Property for Lease - Rent",
      description: "Find your perfect rental space at one of these spectacular new locations to satisfy month your unique preferences.",
      features: [
        { icon: <ShieldCheck className="w-4 h-4 text-teal-500" />, label: "Security" },
        { icon: <Lightbulb className="w-4 h-4 text-teal-500" />, label: "Stable Electricity" },
        { icon: <PawPrint className="w-4 h-4 text-teal-500" />, label: "Pet-Friendly" }
      ],
      buttonText: "Book an Appointment"
    },
    {
      image: HEROBG,
      title: "Property for Shortlet - Air BNB",
      description: "Experience luxury with our short-term rental options that perfectly match your unique preferences and requirements.",
      features: [
        { icon: <ShieldCheck className="w-4 h-4 text-teal-500" />, label: "Security" },
        { icon: <Lightbulb className="w-4 h-4 text-teal-500" />, label: "Stable Electricity" },
        { icon: <PawPrint className="w-4 h-4 text-teal-500" />, label: "Pet-Friendly" },
        { icon: <Wifi className="w-4 h-4 text-teal-500" />, label: "Free Wifi" }
      ],
      buttonText: "Book an Appointment"
    }
  ];