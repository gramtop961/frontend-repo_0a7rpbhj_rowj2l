import React from 'react';
import { Menu, X } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
  >
    {children}
  </a>
);

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-semibold text-white tracking-tight">
          <span className="text-indigo-400">/</span> Portfolio
        </a>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/5"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 flex flex-col">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
