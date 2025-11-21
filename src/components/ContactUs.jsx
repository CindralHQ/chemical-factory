// import React from "react";
// import { Phone, Mail, MapPin, Globe, Share2, Send, Pin } from "lucide-react";

// const ContactUs = () => {
//   return (
//     <div className="w-full py-16 bg-[#0f1216] text-white">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 item-start">

//         {/* LEFT PANEL */}
//         <div className="bg-[#1a1d23] p-10 rounded-2xl shadow-lg border border-gray-700 flex flex-col">
//           <div className="space-y-8">

//             {/* Phone */}
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
//                 <Phone size={22} />
//               </div>
//               <div>
//                 <p className="text-gray-300 text-sm">Have any question?</p>
//                 <p className="font-semibold text-white">Free + 23 (000)-8050</p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
//                 <Mail size={22} />
//               </div>
//               <div>
//                 <p className="text-gray-300 text-sm">Send email</p>
//                 <p className="font-semibold text-white">demo@gmail.com</p>
//               </div>
//             </div>

//             {/* Location */}
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
//                 <MapPin size={22} />
//               </div>
//               <div>
//                 <p className="text-gray-300 text-sm">Visit anytime</p>
//                 <p className="font-semibold text-white">86391 Elgin St. Delaware</p>
//               </div>
//             </div>

//           </div>

//           {/* Image */}
//           {/* <div className="mt-10">
//             <img
//               src="/images/research-scientist-lab.webp"
//               alt="lab-scientist"
//               className="rounded-xl w-full object-cover"
//             />
//           </div> */}

//           {/* Social Icons */}
//           <div className="flex gap-6 mt-6 text-gray-300 justify-center">
//             <Globe className="hover:text-white cursor-pointer" size={22} />
//             <Share2 className="hover:text-white cursor-pointer" size={22} />
//             <Send className="hover:text-white cursor-pointer" size={22} />
//             <Pin className="hover:text-white cursor-pointer" size={22} />
//           </div>
//         </div>

//         {/* RIGHT PANEL */}
//         <div className="p-4">
//           <p className="text-purple-400 font-semibold tracking-widest">
//             CONTACT WITH US
//           </p>

//           <h2 className="text-4xl font-bold mt-2 text-white">
//             Feel free to write us anytime
//           </h2>

//           <div className="mt-8 space-y-6">

//             {/* Row 1 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 className="bg-[#1a1d23] p-4 rounded-xl border border-gray-700 text-white placeholder-gray-400"
//                 placeholder="Your name"
//               />
//               <input
//                 className="bg-[#1a1d23] p-4 rounded-xl border border-gray-700 text-white placeholder-gray-400"
//                 placeholder="Email address"
//               />
//             </div>

//             {/* Row 2 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 className="bg-[#1a1d23] p-4 rounded-xl border border-gray-700 text-white placeholder-gray-400"
//                 placeholder="Phone"
//               />
//               <input
//                 className="bg-[#1a1d23] p-4 rounded-xl border border-gray-700 text-white placeholder-gray-400"
//                 placeholder="Subject"
//               />
//             </div>

//             {/* Message */}
//             <textarea
//               rows={6}
//               className="bg-[#1a1d23] w-full p-4 rounded-xl border border-gray-700 text-white placeholder-gray-400"
//               placeholder="Write a message"
//             />

//             {/* Submit */}
//             <button className="bg-purple-600 hover:bg-purple-700 transition text-white font-semibold px-8 py-3 rounded-xl">
//               Send a message
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React from "react";
import { Phone, Mail, MapPin, Globe, Share2, Send, Pin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="w-full py-16 bg-[#0f1216] text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-start">

        {/* LEFT PANEL */}
        <div className="bg-[#1a1d23] p-10 rounded-2xl shadow-lg border border-gray-700">
          <div className="space-y-8">

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Have any question?</p>
                <p className="font-semibold">Free + 23 (000)-8050</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Send email</p>
                <p className="font-semibold">demo@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Visit anytime</p>
                <p className="font-semibold">86391 Elgin St. Delaware</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-gray-300 justify-center">
            <Globe className="hover:text-white cursor-pointer" size={22} />
            <Share2 className="hover:text-white cursor-pointer" size={22} />
            <Send className="hover:text-white cursor-pointer" size={22} />
            <Pin className="hover:text-white cursor-pointer" size={22} />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-4">
          <p className="text-purple-400 font-semibold tracking-widest">
            CONTACT WITH US
          </p>

          <h2 className="text-4xl font-bold mt-2 text-white">
            Feel free to write us anytime
          </h2>

          <div className="mt-8 space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="bg-[#1a1d23] p-4 rounded-xl border border-gray-700 text-white placeholder-gray-400" placeholder="Your name" />
              <input className="bg-[#1a1d23] p-4 rounded-xl border border-gray-700 text-white placeholder-gray-400" placeholder="Email address" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="bg-[#1a1d23] p-4 rounded-xl border border-gray-700 text-white placeholder-gray-400" placeholder="Phone" />
              <input className="bg-[#1a1d23] p-4 rounded-xl border border-gray-700 text-white placeholder-gray-400" placeholder="Subject" />
            </div>

            <textarea rows={6} className="bg-[#1a1d23] w-full p-4 rounded-xl border border-gray-700 text-white placeholder-gray-400" placeholder="Write a message" />

            <button className="bg-purple-600 hover:bg-purple-700 transition text-white font-semibold px-8 py-3 rounded-xl">
              Send a message
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
