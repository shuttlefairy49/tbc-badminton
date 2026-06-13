import Link from "next/link";
import { Instagram, Facebook, Mail, Zap, Heart } from "lucide-react";

const footerLinks = {
  Club: [
    { href: "/about", label: "About TBC" },
    { href: "/membership", label: "Membership" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/spotlight", label: "Player Spotlight" },
  ],
  Play: [
    { href: "/games", label: "Upcoming Games" },
    { href: "/events", label: "Tournaments" },
    { href: "/gallery", label: "Gallery" },
    { href: "/learn", label: "Learn Badminton" },
  ],
  Connect: [
    { href: "/contact", label: "Contact Us" },
    { href: "https://instagram.com", label: "Instagram", external: true },
    { href: "https://facebook.com", label: "Facebook", external: true },
    { href: "mailto:hello@tbcbadminton.com", label: "Email Us", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-tbc-black dark:bg-tbc-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-tbc-orange flex items-center justify-center shadow-orange">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">
                  The Breakfast Club
                </div>
                <div className="text-tbc-orange text-xs font-semibold tracking-widest uppercase">
                  Badminton
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Where Great Days Begin. A community of passionate badminton players
              built on great games, great people, and great vibes.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-tbc-gray-800 flex items-center justify-center text-gray-400 hover:text-tbc-orange hover:bg-tbc-orange/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-tbc-gray-800 flex items-center justify-center text-gray-400 hover:text-tbc-orange hover:bg-tbc-orange/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@tbcbadminton.com"
                className="w-9 h-9 rounded-lg bg-tbc-gray-800 flex items-center justify-center text-gray-400 hover:text-tbc-orange hover:bg-tbc-orange/10 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-gray-400 hover:text-tbc-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-tbc-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} The Breakfast Club Badminton. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5 text-gray-500 text-sm">
            Made with <Heart className="w-3.5 h-3.5 text-tbc-orange fill-tbc-orange" /> for the TBC community
          </p>
        </div>
      </div>
    </footer>
  );
}
