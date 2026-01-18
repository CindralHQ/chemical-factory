import React from "react";
import { MoveRight, Download, Palette, Type, ShieldCheck } from "lucide-react";

const BrandGuidelines = () => {
    return (
        <div className="min-h-screen bg-base-100 font-sans text-base-content">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary text-primary-content py-24">
                <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-10"></div>
                <div className="relative max-w-6xl mx-auto px-6 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold tracking-wider mb-6">
                        DESIGN SYSTEM v1.0
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Brand Guidelines
                    </h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 font-light leading-relaxed">
                        The comprehensive guide to maintaining the integrity and consistency
                        of the Virendra Chemicals brand identity across all platforms.
                    </p>
                </div>
            </section>

            {/* Purpose Section */}
            <section className="py-20 max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <ShieldCheck className="w-8 h-8 text-primary" />
                            Why This Exists
                        </h2>
                        <p className="text-lg leading-relaxed text-base-content/80 mb-6">
                            Our brand is more than just a logo—it's the trust we've built over
                            decades in the chemical industry. These guidelines ensure that every
                            interaction with our brand reflects our core values of Quality,
                            Reliability, and Innovation.
                        </p>
                        <p className="text-lg leading-relaxed text-base-content/80">
                            By following these standards, we create a unified and professional
                            presence that resonates with our partners and clients worldwide.
                        </p>
                    </div>
                    <div className="bg-base-200 p-8 rounded-2xl border border-base-300 shadow-sm relative overflow-hidden group">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-4">Core Principles</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-primary text-primary-content flex items-center justify-center text-sm font-bold mt-1">1</span>
                                    <div>
                                        <span className="font-bold block">Consistency</span>
                                        <span className="text-sm opacity-70">Uniformity builds recognition and trust.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-primary text-primary-content flex items-center justify-center text-sm font-bold mt-1">2</span>
                                    <div>
                                        <span className="font-bold block">Clarity</span>
                                        <span className="text-sm opacity-70">Clear communication of our scientific expertise.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-primary text-primary-content flex items-center justify-center text-sm font-bold mt-1">3</span>
                                    <div>
                                        <span className="font-bold block">Quality</span>
                                        <span className="text-sm opacity-70">Visuals that reflect our premium chemical products.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Section */}
            <section className="py-20 bg-base-200">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-white rounded-xl shadow-sm">
                            <img src="/Virendra_Logo.png" alt="Icon" className="w-8 h-8 object-contain" />
                        </div>
                        <h2 className="text-4xl font-bold">Our Logo</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Logo Showcase */}
                        <div className="bg-white rounded-3xl p-12 flex items-center justify-center border border-base-300 shadow-sm min-h-[400px]">
                            <img
                                src="/Virendra_Logo.png"
                                alt="Virendra Chemicals Logo"
                                className="max-w-full max-h-[200px] object-contain drop-shadow-xl"
                            />
                        </div>

                        {/* Logo Rules */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Primary Usage</h3>
                                <p className="text-base-content/70">
                                    The full-color logo should be used on white or light backgrounds.
                                    Ensure adequate clear space around the logo to maintain legibility.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-base-100 rounded-xl border border-base-300">
                                    <h4 className="font-bold mb-2 text-sm uppercase tracking-wide text-error">Don't</h4>
                                    <p className="text-sm opacity-70">Do not stretch, rotate, or alter colors.</p>
                                </div>
                                <div className="p-6 bg-base-100 rounded-xl border border-base-300">
                                    <h4 className="font-bold mb-2 text-sm uppercase tracking-wide text-success">Do</h4>
                                    <p className="text-sm opacity-70">Use high-resolution files for print.</p>
                                </div>
                            </div>
                            <button className="btn btn-outline gap-2 self-start">
                                <Download className="w-4 h-4" />
                                Download Brand Assets
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Typography Section */}
            <section className="py-20 max-w-6xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <Type className="w-8 h-8 text-primary" />
                    <h2 className="text-4xl font-bold">Typography</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <div className="bg-base-200 rounded-2xl p-10 border border-base-300 mb-6">
                            <span className="text-9xl font-black opacity-10 block mb-4">Aa</span>
                            <h3 className="text-4xl font-bold mb-2">Inter</h3>
                            <p className="text-xl opacity-70">The primary typeface.</p>
                        </div>
                        <p className="text-base-content/70 leading-relaxed">
                            We use <strong>Inter</strong> for its clean, modern aesthetic and high readability across all digital and print mediums. It conveys a sense of scientific precision and approachability.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="border-b border-base-300 pb-6">
                            <p className="text-sm opacity-50 mb-2">Heading 1 / Bold / 48px</p>
                            <h1 className="text-5xl font-bold">Scientific Excellence</h1>
                        </div>
                        <div className="border-b border-base-300 pb-6">
                            <p className="text-sm opacity-50 mb-2">Heading 2 / Semibold / 32px</p>
                            <h2 className="text-3xl font-semibold">Chemical Innovation</h2>
                        </div>
                        <div className="border-b border-base-300 pb-6">
                            <p className="text-sm opacity-50 mb-2">Body / Regular / 16px</p>
                            <p className="text-base">
                                We are dedicated to providing the highest quality chemical solutions
                                to our partners. Our commitment to excellence drives everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Colors Section */}
            <section className="py-20 bg-base-200">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-12">
                        <Palette className="w-8 h-8 text-primary" />
                        <h2 className="text-4xl font-bold">Color Palette</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Primary Color */}
                        <div className="group space-y-3">
                            <div className="h-40 w-full rounded-2xl bg-[#005a9c] shadow-lg group-hover:scale-[1.02] transition-transform"></div>
                            <div>
                                <h4 className="font-bold text-lg">Royal Blue</h4>
                                <p className="text-xs uppercase opacity-60">Primary</p>
                                <p className="font-mono text-sm opacity-80 select-all">#005a9c</p>
                            </div>
                        </div>

                        {/* Secondary Color */}
                        <div className="group space-y-3">
                            <div className="h-40 w-full rounded-2xl bg-[#e31c23] shadow-lg group-hover:scale-[1.02] transition-transform"></div>
                            <div>
                                <h4 className="font-bold text-lg">Crimson Red</h4>
                                <p className="text-xs uppercase opacity-60">Accent</p>
                                <p className="font-mono text-sm opacity-80 select-all">#e31c23</p>
                            </div>
                        </div>

                        {/* Neutral */}
                        <div className="group space-y-3">
                            <div className="h-40 w-full rounded-2xl bg-[#1f2937] shadow-lg group-hover:scale-[1.02] transition-transform"></div>
                            <div>
                                <h4 className="font-bold text-lg">Dark Slate</h4>
                                <p className="text-xs uppercase opacity-60">Text / Neutral</p>
                                <p className="font-mono text-sm opacity-80 select-all">#1f2937</p>
                            </div>
                        </div>

                        {/* Background */}
                        <div className="group space-y-3">
                            <div className="h-40 w-full rounded-2xl bg-[#f3f4f6] border border-gray-200 shadow-lg group-hover:scale-[1.02] transition-transform"></div>
                            <div>
                                <h4 className="font-bold text-lg">Off White</h4>
                                <p className="text-xs uppercase opacity-60">Background</p>
                                <p className="font-mono text-sm opacity-80 select-all">#f3f4f6</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-8 bg-white rounded-2xl border border-base-300">
                        <h3 className="text-lg font-bold mb-4">Color Usage Balance</h3>
                        <div className="h-4 w-full rounded-full overflow-hidden flex">
                            <div className="h-full bg-[#005a9c] w-[60%]"></div>
                            <div className="h-full bg-[#f3f4f6] w-[30%]"></div>
                            <div className="h-full bg-[#e31c23] w-[10%]"></div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs opacity-60">
                            <span>60% Primary</span>
                            <span>30% White/Space</span>
                            <span>10% Spotlight</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Need creative assistance?</h2>
                <p className="text-lg opacity-70 mb-8 max-w-2xl mx-auto">
                    For any questions regarding the brand guidelines or to request specific design assets,
                    please contact our creative team.
                </p>
                <button className="btn btn-primary btn-lg rounded-full px-8">
                    Contact Design Team <MoveRight className="w-5 h-5 ml-2" />
                </button>
            </section>
        </div>
    );
};

export default BrandGuidelines;
