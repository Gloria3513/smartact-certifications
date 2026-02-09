import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">SMARTACT</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              디지털 격차 해소, 교육 현장 혁신,<br />
              사람 중심 기술 활용을 목표로 활동하는<br />
              교육·에듀테크 기반 조직
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              quick links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-teal-400 transition-colors">
                  자격증 소개
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-sm hover:text-teal-400 transition-colors">
                  자격증 과정
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-sm hover:text-teal-400 transition-colors">
                  취득 안내
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-teal-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:smatact@gmail.com" className="text-sm hover:text-teal-400 transition-colors">
                  smatact@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:010-4782-3513" className="text-sm hover:text-teal-400 transition-colors">
                  010-4782-3513
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SMARTACT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
