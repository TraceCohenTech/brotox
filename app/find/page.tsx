import { Metadata } from "next";
import Link from "next/link";
import { zipCodes } from "@/app/data/zipcodes";

export const metadata: Metadata = {
  title: "Find Botox for Men Near You — Enter Your Zip Code",
  description:
    "Find the best Botox providers for men near you. Enter your zip code to get matched with vetted, board-certified providers in your area. NYC, South Florida, and tristate coverage.",
  keywords: [
    "botox for men near me",
    "botox near me",
    "men's botox near me",
    "brotox near me",
    "botox providers near me",
    "find botox for men",
    "male botox NYC",
    "male botox South Florida",
  ],
  alternates: {
    canonical: "https://brotoxofficial.com/find",
  },
};


const regionColors: Record<string, { bg: string; border: string; text: string }> = {
  "New York Tristate": { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
  "South Florida": { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400" },
  "Los Angeles": { bg: "bg-pink-500/10", border: "border-pink-500/20", text: "text-pink-400" },
  "San Francisco Bay Area": { bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400" },
  "San Diego": { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400" },
  "Chicago": { bg: "bg-red-500/10", border: "border-red-500/20", text: "text-red-400" },
  "Boston": { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
  "Washington DC": { bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-400" },
  "Dallas-Fort Worth": { bg: "bg-yellow-500/10", border: "border-yellow-500/20", text: "text-yellow-400" },
  "Houston": { bg: "bg-teal-500/10", border: "border-teal-500/20", text: "text-teal-400" },
  "Austin": { bg: "bg-lime-500/10", border: "border-lime-500/20", text: "text-lime-400" },
  "Atlanta": { bg: "bg-rose-500/10", border: "border-rose-500/20", text: "text-rose-400" },
  "Seattle": { bg: "bg-sky-500/10", border: "border-sky-500/20", text: "text-sky-400" },
  "Denver": { bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-400" },
  "Phoenix-Scottsdale": { bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400" },
  "Nashville": { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400" },
  "Philadelphia": { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
  "Tampa Bay": { bg: "bg-teal-500/10", border: "border-teal-500/20", text: "text-teal-400" },
  "Las Vegas": { bg: "bg-yellow-500/10", border: "border-yellow-500/20", text: "text-yellow-400" },
  "Minneapolis": { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400" },
  "Portland": { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
  "Charlotte": { bg: "bg-sky-500/10", border: "border-sky-500/20", text: "text-sky-400" },
  "Orlando": { bg: "bg-pink-500/10", border: "border-pink-500/20", text: "text-pink-400" },
  "Raleigh-Durham": { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
  "Salt Lake City": { bg: "bg-sky-500/10", border: "border-sky-500/20", text: "text-sky-400" },
  "New Orleans": { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400" },
  "Pittsburgh": { bg: "bg-yellow-500/10", border: "border-yellow-500/20", text: "text-yellow-400" },
  "Kansas City": { bg: "bg-red-500/10", border: "border-red-500/20", text: "text-red-400" },
  "Detroit": { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
  "Ohio": { bg: "bg-rose-500/10", border: "border-rose-500/20", text: "text-rose-400" },
  "Indianapolis": { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400" },
  "Honolulu": { bg: "bg-teal-500/10", border: "border-teal-500/20", text: "text-teal-400" },
  "Sacramento": { bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400" },
  "Milwaukee": { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
  "Louisville": { bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-400" },
  "Richmond": { bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-400" },
  "San Antonio": { bg: "bg-pink-500/10", border: "border-pink-500/20", text: "text-pink-400" },
  "Baltimore": { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400" },
};

const defaultRegionColor = { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" };

function getRegionGroups() {
  const regionMap = new Map<string, Map<string, string[]>>();
  for (const z of zipCodes) {
    if (!regionMap.has(z.region)) regionMap.set(z.region, new Map());
    const cities = regionMap.get(z.region)!;
    const cityKey = `${z.city}, ${z.state}`;
    if (!cities.has(cityKey)) cities.set(cityKey, []);
    cities.get(cityKey)!.push(z.zip);
  }
  return Array.from(regionMap.entries()).map(([region, cities]) => ({
    region,
    cities: Array.from(cities.entries()).map(([name, zips]) => ({ name, zips })),
  }));
}

export default function FindPage() {
  const regions = getRegionGroups();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero with zip search */}
      <section className="bg-gradient-to-b from-[#0f1219] via-[#1a1f2e] to-[var(--background)] pt-32 pb-20">
        <div className="container-main text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
            Find Botox for Men
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 max-w-3xl mx-auto">
            Get Matched with a{" "}
            <span className="text-gradient">Vetted Provider</span>{" "}
            Near You
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Enter your zip code below. We&apos;ll match you with board-certified
            providers who specialize in natural-looking Botox for men.
          </p>

          {/* Zip Code Search */}
          <div className="max-w-lg mx-auto mb-8">
            <form
              action="/find"
              method="GET"
              className="flex gap-3"
              onSubmit={undefined}
            >
              <input
                type="text"
                name="zip"
                placeholder="Enter your zip code..."
                maxLength={5}
                pattern="[0-9]{5}"
                className="flex-1 text-lg text-center tracking-widest !bg-white/10 !border-white/20"
                required
              />
              <button type="submit" className="btn-primary px-8 text-lg">
                Search
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-3">
              Serving 20+ major metros nationwide
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-4 mb-4">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl px-6 py-4 text-center">
              <p className="text-3xl font-black text-blue-400">{zipCodes.length}+</p>
              <p className="text-sm text-blue-300 font-medium">Zip Codes</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl px-6 py-4 text-center">
              <p className="text-3xl font-black text-amber-400">20+</p>
              <p className="text-sm text-amber-300 font-medium">Cities</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl px-6 py-4 text-center">
              <p className="text-3xl font-black text-green-400">100%</p>
              <p className="text-sm text-green-300 font-medium">Free</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by City */}
      <section className="py-16">
        <div className="container-main">
          <h2 className="text-3xl font-black text-white mb-2 text-center">
            Or Browse by City
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Click any city to find Botox providers for men in your area
          </p>

          <div className="grid gap-8">
            {regions.map((r) => {
              const color = regionColors[r.region] || defaultRegionColor;
              return (
                <div key={r.region}>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className={`text-xl font-bold ${color.text}`}>{r.region}</h3>
                    <span className="text-xs text-gray-500">{r.cities.reduce((a, c) => a + c.zips.length, 0)} zips</span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                    {r.cities.map((city) => (
                      <Link
                        key={city.name}
                        href={`/find/${city.zips[0]}`}
                        className={`${color.bg} border ${color.border} rounded-xl px-4 py-3 group hover:scale-[1.03] transition-all`}
                      >
                        <h4 className={`text-white text-sm font-bold group-hover:${color.text} transition-colors`}>
                          {city.name}
                        </h4>
                        <p className={`${color.text} text-[10px] opacity-80`}>
                          {city.zips.length} zip{city.zips.length !== 1 ? "s" : ""}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gradient-to-b from-[var(--background)] to-[#0f1219]">
        <div className="container-main max-w-4xl text-center">
          <h2 className="text-3xl font-black text-white mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Enter Your Zip</h3>
              <p className="text-gray-300 text-sm">Tell us where you are. We cover NYC, the tristate area, and South Florida.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-amber-400">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tell Us Your Goals</h3>
              <p className="text-gray-300 text-sm">Forehead lines? Crow&apos;s feet? Full refresh? We&apos;ll tailor your match.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Get Matched</h3>
              <p className="text-gray-300 text-sm">We connect you with a vetted, board-certified provider who specializes in men.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
