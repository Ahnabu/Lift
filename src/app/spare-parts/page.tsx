"use client";

import Link from "next/link";
import Image from "next/image";

// Spare parts data with high-quality images
const sparePartsData = [
  {
    id: "avr",
    name: "AVR",
    image:
      "https://image.made-in-china.com/202f0j00dbqcpKTjyZzA/Elevator-Use-Three-Phase-AVR-10kVA-Servo-Control-Voltage-Regulator-Voltage-Stabilizer.webp",
    description:
      "Automatic Voltage Regulator - Stabilizes power supply for smooth elevator operation",
  },
  {
    id: "ard",
    name: "ARD",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0uJJiXfFBQ4Mv_mHMjRzalOYz4ohOpt6hxAUzO9lFSk3Aj4wy2lw50fXmyOdkKVcSKk&usqp=CAU",
    description:
      "Automatic Rescue Device - Emergency power backup system for passenger safety",
  },
  {
    id: "controller",
    name: "Controller",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vKvbAUZfoZzAI0XUAq3_a_lAc5p8D_9Ojg&s",
    description:
      "Lift Control System - Advanced microprocessor-based elevator controller",
  },
  {
    id: "door-operator",
    name: "Door Operator",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758805528/DSC03714-min_blxqhr.jpg",
    description:
      "Automatic Door Opening System - Smooth and reliable door operation mechanism",
  },
  {
    id: "door-hanger",
    name: "Door Hanger",
    image:
      "https://s.alicdn.com/@sc04/kf/H3799085ecd6944ebbd73c3c9a468e5d7r/Lift-Door-Heavy-Duty-Flap-Hydraulic-Support-Soft-Close-System-Hardware-Swing-Lift-up-Cabinet-Vertical-Mechanism-for-Kitchen.jpg_600x600.jpg",
    description:
      "Door Mounting Hardware - Precision engineered door suspension system",
  },
  {
    id: "door-inverter",
    name: "Door Inverter",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1759074708/1705025471681_mxilyk.jpg",
    description:
      "Door Motor Control Unit - Variable frequency drive for door motor control",
  },
  {
    id: "gearless-traction-machine",
    name: "Gearless Traction Machine",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758889504/DSC03748-min_uenpmv.jpg",
    description:
      "Main Lifting Motor - High-efficiency permanent magnet synchronous motor",
  },
  {
    id: "speed-governor",
    name: "Speed Governor",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1759075015/download_vsyo44.jpg",
    description:
      "Safety Speed Control Device - Overspeed protection system for passenger safety",
  },
  {
    id: "cop-lop",
    name: "COP & LOP",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1758889502/DSC03768-min_dci2yn.jpg",
    description:
      "Car & Landing Operating Panels - User-friendly control interfaces",
  },
  {
    id: "suspension-rod",
    name: "Suspension Rod",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1759075268/download_dm5b0d.jpg",
    description:
      "Car Suspension Component - High-strength steel suspension system",
  },
  {
    id: "steel-rope",
    name: "Steel Rope",
    image:
      "https://res.cloudinary.com/brotherslift/image/upload/v1759075348/images_ukiqyg.jpg",
    description:
      "High-Strength Lifting Cable - Premium grade steel wire ropes for reliable operation",
  },
];

export default function SparePartsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Moving Background */}
      <div className="relative h-96 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center moving-bg "
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/brotherslift/image/upload/v1758993190/IMG-20250927-WA0008_ldjlim.jpg')",
          }}
        />
        <div className="relative max-w-[1320px] mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">SPARE PARTS</h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-orange-400">
                  HOME
                </Link>
              </li>
              <li className="text-gray-400">&gt;</li>
              <li className="text-gray-800 font-medium">SPARE PARTS</li>
            </ol>
          </nav>

          {/* Spare Parts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sparePartsData.map((part) => (
              <div key={part.id} className="group cursor-pointer">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-square bg-gray-100 overflow-hidden relative">
                    <Image
                      src={part.image}
                      alt={part.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                      {part.name}
                    </h3>
                    <p className="text-sm text-gray-600">{part.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Need Help Finding Parts?
            </h2>
            <p className="text-gray-600 mb-6">
              Our experienced team can help you find the right spare parts for
              your lift system. Contact us for professional assistance and
              genuine parts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                Contact Our Experts
              </Link>
              <Link
                href="tel:+0800-7777777"
                className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Call: +0800-7777777
              </Link>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quality Assurance
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Genuine OEM parts from trusted manufacturers
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Rigorous quality testing and certification
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Warranty coverage on all spare parts
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Compatible with all major lift brands
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Expert Services
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Professional installation services
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  24/7 emergency support available
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Preventive maintenance programs
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Technical consultation and support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
