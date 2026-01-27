"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Generic Card Wrapper
const Card = ({ children, title, className, icon: Icon }: any) => (
    <div className={cn("bg-white text-zinc-900 rounded-2xl overflow-hidden shadow-sm flex flex-col p-5 border border-zinc-100", className)}>
        <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">{title}</span>
        </div>
        {children}
    </div>
);

// Flight Status Card
export const FlightCard = () => (
    <Card title="Flight Status">
        <div className="flex items-center gap-2 mb-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rotate-90 text-zinc-900"
            >
                <path d="M2 12h20" />
                <path d="M19 12l-7-7" />
                <path d="M19 12l-7 7" />
            </svg>
            <span className="text-2xl font-bold">OS 87</span>
            <span className="text-xs text-zinc-400 ml-auto">Mon, Dec 15</span>
        </div>
        <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col">
                <span className="text-xl font-bold">Vienna</span>
            </div>
            <div className="h-[1px] bg-zinc-200 flex-1 mx-4 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-zinc-300" />
            </div>
            <div className="flex flex-col items-end">
                <span className="text-xl font-bold">New York</span>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 border-t border-zinc-100 pt-4">
            <div>
                <div className="text-[10px] text-zinc-400 font-bold uppercase">Departs</div>
                <div className="text-sm font-bold">10:15 AM</div>
            </div>
            <div>
                <div className="text-[10px] text-zinc-400 font-bold uppercase text-center">Status</div>
                <div className="text-sm font-bold text-center">On Time</div>
            </div>
            <div className="text-right">
                <div className="text-[10px] text-zinc-400 font-bold uppercase">Arrives</div>
                <div className="text-sm font-bold">2:30 PM</div>
            </div>
        </div>
    </Card>
);

// Task Card
export const TaskCard = () => (
    <Card title="Task Card">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold leading-tight">Review pull request</h3>
            <span className="text-xl">!</span>
        </div>
        <p className="text-zinc-500 text-sm mb-6">Review and approve the authentication module changes.</p>
        <div className="flex gap-2">
            <span className="text-[10px] uppercase bg-zinc-100 px-2 py-1 rounded font-bold text-zinc-500 italic">Today</span>
            <span className="text-[10px] uppercase bg-zinc-100 px-2 py-1 rounded font-bold text-zinc-500 italic">Backend</span>
        </div>
    </Card>
);

// Coffee order
export const CoffeeCard = () => (
    <Card title="Coffee Order">
        <div className="flex items-start gap-3 mb-6">
            <div className="w-10 h-10 bg-zinc-50 flex items-center justify-center rounded-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-400"
                >
                    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                    <line x1="6" x2="6" y1="2" y2="4" />
                    <line x1="10" x2="10" y1="2" y2="4" />
                    <line x1="14" x2="14" y1="2" y2="4" />
                </svg>
            </div>
            <div>
                <h3 className="text-xl font-bold">Sunrise Coffee</h3>
            </div>
        </div>

        <div className="space-y-3 mb-12 border-b border-zinc-100 pb-4">
            <div className="flex justify-between text-sm">
                <span className="text-zinc-600">Oat Milk Latte</span>
                <span className="font-bold">$6.45</span>
            </div>
            <p className="text-[11px] text-zinc-400 italic -mt-2 ml-1">Grande, Extra Shot</p>

            <div className="flex justify-between text-sm">
                <span className="text-zinc-600">Chocolate Croissant</span>
                <span className="font-bold">$4.25</span>
            </div>
            <p className="text-[11px] text-zinc-400 italic -mt-2 ml-1">Warmed</p>
        </div>

        <div className="space-y-1 mb-6">
            <div className="flex justify-between text-[11px] text-zinc-400 font-bold uppercase">
                <span>Subtotal</span>
                <span>$10.70</span>
            </div>
            <div className="flex justify-between text-[11px] text-zinc-400 font-bold uppercase">
                <span>Tax</span>
                <span>$0.96</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2">
                <span>Total</span>
                <span>$11.66</span>
            </div>
        </div>

        <div className="flex gap-2">
            <button className="flex-1 bg-indigo-500 text-white text-[10px] font-bold py-2 rounded-lg">PURCHASE</button>
            <button className="flex-1 bg-indigo-100 text-indigo-600 text-[10px] font-bold py-2 rounded-lg">ADD TO CART</button>
        </div>
    </Card>
);

// User Profile
export const ProfileCard = () => (
    <Card title="User Profile">
        <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-2xl bg-zinc-200 mb-4 overflow-hidden">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200')" }} />
            </div>
            <h3 className="text-xl font-bold">Sarah Chen</h3>
            <span className="text-xs text-zinc-400 font-bold italic mb-4">@sarahchen</span>
            <p className="text-[11px] text-zinc-400 text-center mb-6 leading-relaxed">
                Product Designer at Tech Co. Creating delightful experiences.
            </p>
            <div className="grid grid-cols-3 w-full border-y border-zinc-100 py-4 mb-6">
                <div className="text-center font-bold">
                    12.4K <br /> <span className="text-[9px] uppercase text-zinc-400">Followers</span>
                </div>
                <div className="text-center font-bold border-x border-zinc-100">
                    892 <br /> <span className="text-[9px] uppercase text-zinc-400">Following</span>
                </div>
                <div className="text-center font-bold">
                    347 <br /> <span className="text-[9px] uppercase text-zinc-400">Posts</span>
                </div>
            </div>
            <button className="w-full bg-indigo-500 text-white text-[10px] font-bold py-2 rounded-lg uppercase tracking-wider">Follow</button>
        </div>
    </Card>
);

// Track List Card
export const TrackListCard = () => (
    <Card title="Track List">
        <div className="flex items-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-900"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
            <span className="text-xl font-bold">Focus Flow</span>
        </div>
        <div className="space-y-4">
            {[
                { id: 1, title: "Weightless", artist: "Marconi Union", time: "8:09", img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=100&h=100" },
                { id: 2, title: "Clair de Lune", artist: "Debussy", time: "5:12", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=100&h=100" },
                { id: 3, title: "Ambient Light", artist: "Brian Eno", time: "6:45", img: "https://images.unsplash.com/photo-1459749411177-d4a428c37792?auto=format&fit=crop&q=80&w=100&h=100" }
            ].map((track) => (
                <div key={track.id} className="flex items-center gap-3">
                    <span className="text-xs text-zinc-400 italic font-mono w-4">{track.id}</span>
                    <div className="w-8 h-8 rounded bg-zinc-100 overflow-hidden">
                        <img src={track.img} alt={track.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold truncate">{track.title}</div>
                        <div className="text-[10px] text-zinc-400 italic truncate">{track.artist}</div>
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono">{track.time}</div>
                </div>
            ))}
        </div>
    </Card>
);

// Recipe Card
export const RecipeCard = () => (
    <Card title="Recipe Card">
        <div className="w-full h-32 rounded-xl bg-zinc-100 mb-4 overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500&h=300" alt="Food" className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-bold mb-2">Mediterranean Quinoa Bowl</h3>
        <div className="flex items-center gap-4 text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-4">
            <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                4.9 (1,247)
            </div>
            <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                15 min prep
            </div>
        </div>
        <div className="text-xs text-zinc-400 italic">Serves 4</div>
    </Card>
);

// Email Compose Card
export const EmailCard = () => (
    <Card title="Email Compose">
        <div className="space-y-3 mb-6">
            <div className="flex gap-2 text-xs">
                <span className="text-zinc-400 w-12 text-right uppercase font-bold text-[10px] pt-0.5">From</span>
                <span className="font-medium text-zinc-800">alex@acme.com</span>
            </div>
            <div className="flex gap-2 text-xs">
                <span className="text-zinc-400 w-12 text-right uppercase font-bold text-[10px] pt-0.5">To</span>
                <span className="font-medium text-zinc-800">jordan@acme.com</span>
            </div>
            <div className="flex gap-2 text-xs">
                <span className="text-zinc-400 w-12 text-right uppercase font-bold text-[10px] pt-0.5">Subject</span>
                <span className="font-medium text-zinc-800">Q4 Revenue Forecast</span>
            </div>
        </div>
        <div className="bg-zinc-50 rounded-lg p-3 text-xs text-zinc-600 mb-4 leading-relaxed">
            <p className="mb-2">Hi Jordan,</p>
            <p className="mb-2">Following up on our call. Please review the attached Q4 forecast and let me know if you have questions before the board meeting.</p>
            <p>Best,<br />Alex</p>
        </div>
        <div className="flex gap-2">
            <button className="bg-indigo-500 text-white text-[10px] font-bold py-1.5 px-4 rounded-lg">Send email</button>
            <button className="bg-zinc-100 text-zinc-500 text-[10px] font-bold py-1.5 px-4 rounded-lg">Discard</button>
        </div>
    </Card>
);

// Sports Player Card
export const SportsCard = () => (
    <Card title="Sports Player Card">
        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-zinc-900 group">
            <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=400&h=500" alt="Player" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-bold">Marcus Johnson</h3>
                <div className="flex items-baseline gap-2 text-white/80">
                    <span className="text-2xl font-bold font-mono">#23</span>
                    <span className="text-sm font-bold uppercase tracking-wider">LA Lakers</span>
                </div>
            </div>
            <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Live</div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
            <div>
                <div className="text-xl font-bold font-mono">28.4</div>
                <div className="text-[9px] uppercase font-bold text-zinc-400">PPG</div>
            </div>
            <div>
                <div className="text-xl font-bold font-mono">7.2</div>
                <div className="text-[9px] uppercase font-bold text-zinc-400">RPG</div>
            </div>
            <div>
                <div className="text-xl font-bold font-mono">6.8</div>
                <div className="text-[9px] uppercase font-bold text-zinc-400">APG</div>
            </div>
        </div>
    </Card>
);

// Software Purchase
export const SoftwarePurchaseCard = () => (
    <Card title="Software Purchase Form">
        <div className="mb-6">
            <p className="text-[10px] uppercase font-bold text-zinc-400 mb-1">Product</p>
            <h3 className="text-xl font-bold leading-tight">Design Suite Pro License</h3>
        </div>
        <div className="space-y-4 mb-6 border-y border-zinc-100 py-4">
            <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500">Number of seats</span>
                <span className="font-bold">10 seats</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500">Billing period</span>
                <span className="font-bold">Annual</span>
            </div>
        </div>
        <div className="flex justify-between items-end mb-6">
            <span className="text-sm font-bold text-zinc-400 uppercase">Total</span>
            <span className="text-2xl font-bold">$1,188/year</span>
        </div>
        <div className="flex gap-2">
            <button className="flex-1 bg-indigo-500 text-white text-[10px] font-bold py-2.5 rounded-lg">Confirm Purchase</button>
            <button className="flex-1 bg-zinc-100 text-zinc-500 text-[10px] font-bold py-2.5 rounded-lg">Cancel</button>
        </div>
    </Card>
);

// Contact Card
export const ContactCard = () => (
    <Card title="Contact Card">
        <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-zinc-200 mb-3 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200" alt="Person" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold">David Park</h3>
            <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Engineering Manager</span>
        </div>
        <div className="space-y-3 pl-2">
            <div className="flex items-center gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <span className="text-zinc-600 font-medium">+1 (555) 234-5678</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                <span className="text-zinc-600 font-medium">david.park@company.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                <span className="text-zinc-600 font-medium">San Francisco, CA</span>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-6">
            <button className="flex items-center justify-center gap-2 bg-indigo-50 text-indigo-600 text-[10px] font-bold py-2 rounded-lg">Call</button>
            <button className="flex items-center justify-center gap-2 bg-indigo-500 text-white text-[10px] font-bold py-2 rounded-lg">Message</button>
        </div>
    </Card>
);

// Calendar Day
export const CalendarCard = () => (
    <Card title="Calendar Day">
        <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-bold text-zinc-900">12</span>
            <div className="text-right">
                <div className="text-xs font-bold uppercase text-zinc-400">Wednesday</div>
                <div className="text-sm font-bold">February 2024</div>
            </div>
        </div>
        <div className="space-y-2">
            <div className="flex gap-3 text-xs">
                <span className="text-zinc-400 font-mono w-8 pt-1">09:00</span>
                <div className="bg-indigo-50 rounded p-2 flex-1">
                    <div className="font-bold text-indigo-900">Team Standup</div>
                </div>
            </div>
            <div className="flex gap-3 text-xs">
                <span className="text-zinc-400 font-mono w-8 pt-1">10:30</span>
                <div className="bg-green-50 rounded p-2 flex-1">
                    <div className="font-bold text-green-900">Design Review</div>
                </div>
            </div>
            <div className="flex gap-3 text-xs">
                <span className="text-zinc-400 font-mono w-8 pt-1">14:00</span>
                <div className="bg-amber-50 rounded p-2 flex-1">
                    <div className="font-bold text-amber-900">Client Call</div>
                </div>
            </div>
        </div>
    </Card>
);

// Login Form
export const LoginCard = () => (
    <Card title="Login Form">
        <h3 className="text-xl font-bold mb-1">Welcome Back</h3>
        <p className="text-xs text-zinc-500 mb-6">Please enter your details.</p>
        <div className="space-y-4 mb-6">
            <div>
                <label className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">Email</label>
                <input type="email" placeholder="name@company.com" className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 transition-colors" />
            </div>
            <div>
                <label className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">Password</label>
                <input type="password" placeholder="••••••••" className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 transition-colors" />
            </div>
        </div>
        <button className="w-full bg-zinc-900 text-white text-xs font-bold py-2.5 rounded-lg">Sign In</button>
        <div className="mt-4 text-center">
            <span className="text-[10px] text-zinc-400 font-bold cursor-pointer hover:text-zinc-600">Forgot password?</span>
        </div>
    </Card>
);

export const CardLibrary = () => {
    return (
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
            <FlightCard />
            <TrackListCard />
            <TaskCard />
            <CoffeeCard />
            <RecipeCard />
            <ProfileCard />
            <EmailCard />
            <SoftwarePurchaseCard />
            <SportsCard />
            <ContactCard />
            <CalendarCard />
            <LoginCard />
        </div>
    );
};
