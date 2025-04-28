import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">AquaSol</h3>
            <p className="text-blue-200 text-sm">
              Providing innovative water solutions for farmers and rural communities since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">System Installation</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Maintenance & Repair</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Water Quality Testing</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Consultation Services</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">System Upgrades</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-300" />
                <span className="text-blue-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-300" />
                <a href="mailto:contact@aquasol.com" className="text-blue-200 hover:text-white transition-colors">
                  contact@aquasol.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-300" />
                <span className="text-blue-200">
                  123 Water Street, Suite 100<br />
                  Riverside, CA 92501
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2025 AquaSol. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;