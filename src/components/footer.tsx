import Link from "next/link"
import { Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import { siteConfig, navigation } from "@/config/site"
import { companyHighlights } from "@/lib/data"

export function Footer() {
    return (
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {siteConfig.description}
              </p>

              {/* Company Highlights */}
              <div className="space-y-2 mb-6">
                {companyHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {highlight}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Link
                  href={siteConfig.links.facebook}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 mt-1 text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-300">Phone</div>
                    <Link
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 mt-1 text-red-400" />
                  <div>
                    <div className="text-sm text-gray-300">Emergency</div>
                    <Link
                      href={`tel:${siteConfig.contact.emergency}`}
                      className="text-white hover:text-red-400 transition-colors"
                    >
                      {siteConfig.contact.emergency}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 mt-1 text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-300">Email</div>
                    <Link
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-300">Address</div>
                    <div className="text-white text-sm">
                      {siteConfig.contact.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.main.slice(0, 6).map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Lift Installation & Maintenance</li>
                <li>• Generator Solutions</li>
                <li>• HVAC Systems</li>
                <li>• Solar Energy Solutions</li>
                <li>• Forklift Services</li>
                <li>• 24/7 Technical Support</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 text-sm text-gray-400">
            <div className="text-center">© 2024. All Rights Reserved - {siteConfig.name}</div>
          </div>
        </div>
      </footer>
    );
}
