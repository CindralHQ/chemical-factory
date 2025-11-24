import React from "react";
import { PhoneCall, Mail, MessageCircle, Headset } from "lucide-react";
import siteConfig from "../config/siteConfig.js";

const ConnectFab = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="dropdown dropdown-top dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-primary btn-circle btn-lg shadow-2xl p-5"
          aria-label="Open contact options"
        >
          <Headset className="h-6 w-6" />
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-2xl z-[1] w-64 p-4 border border-base-200 shadow-xl space-y-2"
        >
          <li>
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="flex items-center gap-3"
            >
              <PhoneCall className="h-4 w-4" />
              Phone Call
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.contact.salesEmail}`}
              className="flex items-center gap-3"
            >
              <Mail className="h-4 w-4" />
              Mail
            </a>
          </li>
          <li>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ConnectFab;
