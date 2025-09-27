"use client";

import { siteConfig } from "@/config/site";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
} from "lucide-react";

interface ContactInfoProps {
  productName?: string;
  brand?: string;
  brandColor?: string;
}

export function ContactInfoSection({
  brand,
  brandColor = "blue",
}: Omit<ContactInfoProps, "productName">) {
  const colorClasses = {
    blue: "from-blue-600 to-blue-800",
    purple: "from-purple-600 to-purple-800",
    red: "from-red-600 to-red-800",
    emerald: "from-emerald-600 to-emerald-800",
    yellow: "from-yellow-600 to-orange-600",
    indigo: "from-indigo-600 to-indigo-800",
  };

  const bgGradient =
    colorClasses[brandColor as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <div className="relative">
      {/* Main Contact Card */}
      <div
        className={`bg-gradient-to-r ${bgGradient} rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-2xl`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                🚀 Get {brand} Lift
              </h3>
              <p className="text-white/90 text-sm">
                Professional Installation & 24/7 Support
              </p>
            </div>
          </div>

          {/* Quick Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phone Contact */}
            <a
              href="tel:+8801920883427"
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Call Now</p>
                  <p className="text-xs text-white/80">+880 1920-883427</p>
                </div>
              </div>
            </a>

            {/* WhatsApp Contact */}
            <a
              href="https://wa.me/8801920883427"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-green-600 p-2 rounded-full">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <p className="text-xs text-white/80">Chat Instantly</p>
                </div>
              </div>
            </a>

            {/* Email Contact */}
          </div>

          {/* Quick Info */}
          <div className="mt-6 pt-4 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center  gap-5 text-sm">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Emergency</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{siteConfig.contact.address}</span>
                </div> 
              </div>
              
          </div>
        </div>
      </div>

      {/* Bottom Info Cards */}
    </div>
  );
}
