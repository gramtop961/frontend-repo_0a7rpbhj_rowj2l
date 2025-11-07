import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For this static portfolio, just simulate a send
    setTimeout(() => setSent(true), 600);
  };

  if (sent) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
          <Send size={18} className="text-emerald-400" />
        </div>
        <h3 className="text-lg font-semibold">Message sent!</h3>
        <p className="mt-1 text-slate-300">Thanks for reaching out. I’ll get back to you soon.</p>
        <button
          onClick={() => setSent(false)}
          className="mt-4 inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
      <p className="mt-1 text-slate-300">Have a project in mind or just want to say hello?</p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="block text-sm text-slate-300">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500"
            placeholder="Your name"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm text-slate-300">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500"
            placeholder="you@example.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-slate-300">Message</label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border border-white/10 bg-slate-950/60 px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500"
            placeholder="Tell me about your project..."
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400"
          >
            <Mail size={16} /> Send message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
