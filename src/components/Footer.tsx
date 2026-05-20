export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/70 border-t border-stone/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <a href="#" className="font-serif text-2xl text-ivory">
              mcf.webs
            </a>
            <p className="text-sm text-ivory/50 mt-2 max-w-xs">
              Websites, digital menus, booking systems and digital products.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 text-sm">
            <a
              href="#capabilities"
              className="text-ivory/50 hover:text-ivory transition-colors duration-300"
            >
              Capabilities
            </a>
            <a
              href="#pricing"
              className="text-ivory/50 hover:text-ivory transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-ivory/50 hover:text-ivory transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-ivory/30">
          <p>&copy; {new Date().getFullYear()} mcf.webs. All rights reserved.</p>
          <p>Crafted with restraint.</p>
        </div>
      </div>
    </footer>
  );
}
