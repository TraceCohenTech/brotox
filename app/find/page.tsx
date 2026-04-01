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

// Group zips by city for the browse section
function getCityGroups() {
  const cityMap = new Map<string, { state: string; region: string; zips: string[] }>();
  for (const z of zipCodes) {
    const key = `${z.city}, ${z.state}`;
    if (!cityMap.has(key)) {
      cityMap.set(key, { state: z.state, region: z.region, zips: [] });
    }
    cityMap.get(key)!.zips.push(z.zip);
  }
  return Array.from(cityMap.entries()).map(([name, data]) => ({
    name,
    ...data,
  }));
}

export default function FindPage() {
  const cities = getCityGroups();
  const sfCities = cities.filter((c) => c.region === "South Florida");
  const nyCities = cities.filter((c) => c.region === "New York Tristate");

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
              Currently serving NYC, tristate area, and South Florida
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-4 mb-4">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl px-6 py-4 text-center">
              <p className="text-3xl font-black text-blue-400">{zipCodes.length}+</p>
              <p className="text-sm text-blue-300 font-medium">Zip Codes</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl px-6 py-4 text-center">
              <p className="text-3xl font-black text-amber-400">2</p>
              <p className="text-sm text-amber-300 font-medium">Regions</p>
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

          <div className="grid gap-10">
            {/* South Florida */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <h3 className="text-2xl font-bold text-amber-400">South Florida</h3>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {sfCities.map((city) => (
                  <Link
                    key={city.name}
                    href={`/find/${city.zips[0]}`}
                    className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 group hover:scale-[1.03] transition-all"
                  >
                    <h4 className="text-white font-bold group-hover:text-amber-400 transition-colors">
                      {city.name}
                    </h4>
                    <p className="text-amber-300 text-xs">
                      {city.zips.length} zip code{city.zips.length !== 1 ? "s" : ""}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* NY Tristate */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <h3 className="text-2xl font-bold text-blue-400">New York Tristate</h3>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {nyCities.map((city) => (
                  <Link
                    key={city.name}
                    href={`/find/${city.zips[0]}`}
                    className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 group hover:scale-[1.03] transition-all"
                  >
                    <h4 className="text-white font-bold group-hover:text-blue-400 transition-colors">
                      {city.name}
                    </h4>
                    <p className="text-blue-300 text-xs">
                      {city.zips.length} zip code{city.zips.length !== 1 ? "s" : ""}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
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
