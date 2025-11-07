import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Landing Page Redesign',
    description:
      'A responsive marketing site built with React, Tailwind, and smooth scroll animations.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: 'https://example.com',
  },
  {
    title: 'E-commerce Dashboard',
    description:
      'Data-rich admin dashboard with charts, filters, and dark mode UI patterns.',
    tags: ['React', 'Recharts', 'Dark Mode'],
    link: 'https://example.com',
  },
  {
    title: 'Portfolio Template',
    description:
      'A clean, modern portfolio starter with sections for work, about, and contact.',
    tags: ['Vite', 'Tailwind', 'Accessibility'],
    link: 'https://example.com',
  },
];

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300">
      {children}
    </span>
  );
}

function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">Selected Projects</h2>
      <p className="mt-1 text-slate-300">A few things I’ve worked on recently.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.description}</p>
              </div>
              <Code2 className="text-indigo-400" size={20} />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200"
            >
              Visit project <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
