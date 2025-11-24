import React from "react";
import { Phone, Mail, MapPin, Globe, Share2, Send, Pin } from "lucide-react";
import siteConfig from "../config/siteConfig.js";

const contactDetails = [
  {
    icon: Phone,
    label: "Chat with us",
    value: siteConfig.contact.phone,
    helper: "Dedicated chemical specialists",
    href: `tel:${siteConfig.contact.phoneHref}`,
  },
  {
    icon: Mail,
    label: "Mail a brief",
    value: siteConfig.contact.salesEmail,
    helper: "Responses within 24 hours",
    href: `mailto:${siteConfig.contact.salesEmail}`,
  },
  {
    icon: MapPin,
    label: "Visit our lab",
    value: siteConfig.contact.address,
    helper: "Mon - Fri, 9 am to 7 pm",
  },
];

const socialIcons = [
  { icon: Globe, href: siteConfig.social.website || "#" },
  { icon: Share2, href: siteConfig.social.twitter || "#" },
  { icon: Send, href: siteConfig.social.linkedin || "#" },
  { icon: Pin, href: siteConfig.social.instagram || "#" },
];

const ContactUs = () => {
  return (
    <section className="bg-base-200 py-16 text-base-content">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-start">
        <div className="rounded-3xl border border-base-200 bg-base-100 p-10 shadow-lg">
          <h3 className="text-xl font-semibold">
            Let&apos;s build your next formulation
          </h3>
          <p className="mt-2 text-sm text-base-content/70">
            Share your spec sheet or request a callback. Our chemists love
            complex challenges.
          </p>

          <div className="mt-8 space-y-6">
            {contactDetails.map(({ icon: Icon, label, value, helper, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-base-content/60">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-lg font-semibold text-base-content hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-base-content">
                      {value}
                    </p>
                  )}
                  <p className="text-sm text-base-content/60">{helper}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4 text-base-content/70">
            {socialIcons.map(({ icon: Icon, href }, index) => (
              <a
                key={Icon.displayName || Icon.name || index}
                href={href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-base-200 bg-base-100 hover:border-primary/50"
                target="_blank"
                rel="noreferrer"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-base-200 bg-base-100 p-6 sm:p-10 shadow-lg">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/80">
            contact {siteConfig.company.name}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-base-content">
            Kick-start a project
          </h2>
          <p className="mt-2 text-sm text-base-content/70">
            Fill the form and we will respond with data sheets, samples or a
            call—whatever you prefer.
          </p>

          <form className="mt-8 space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="input input-bordered border-base-200 bg-base-100 text-base-content placeholder:text-base-content/50"
                placeholder="Your name"
              />
              <input
                className="input input-bordered border-base-200 bg-base-100 text-base-content placeholder:text-base-content/50"
                placeholder="Email address"
                type="email"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="input input-bordered border-base-200 bg-base-100 text-base-content placeholder:text-base-content/50"
                placeholder="Phone"
                type="tel"
              />
              <input
                className="input input-bordered border-base-200 bg-base-100 text-base-content placeholder:text-base-content/50"
                placeholder="Company"
              />
            </div>

            <textarea
              rows={5}
              className="textarea textarea-bordered w-full border-base-200 bg-base-100 text-base-content placeholder:text-base-content/50"
              placeholder="Tell us about the molecule or grade you need"
            />

            <button type="submit" className="btn btn-primary w-full">
              Send a message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
