export interface ZipCode {
  zip: string;
  city: string;
  neighborhood?: string;
  state: string;
  region: string;
  lat?: number;
  lng?: number;
}

export const zipCodes: ZipCode[] = [
  // ===== MANHATTAN =====
  { zip: "10001", city: "New York", neighborhood: "Chelsea", state: "NY", region: "New York Tristate" },
  { zip: "10002", city: "New York", neighborhood: "Lower East Side", state: "NY", region: "New York Tristate" },
  { zip: "10003", city: "New York", neighborhood: "Gramercy / Union Square", state: "NY", region: "New York Tristate" },
  { zip: "10004", city: "New York", neighborhood: "Financial District", state: "NY", region: "New York Tristate" },
  { zip: "10005", city: "New York", neighborhood: "Financial District", state: "NY", region: "New York Tristate" },
  { zip: "10006", city: "New York", neighborhood: "Wall Street", state: "NY", region: "New York Tristate" },
  { zip: "10007", city: "New York", neighborhood: "Tribeca / City Hall", state: "NY", region: "New York Tristate" },
  { zip: "10010", city: "New York", neighborhood: "Gramercy Park", state: "NY", region: "New York Tristate" },
  { zip: "10011", city: "New York", neighborhood: "West Village / Chelsea", state: "NY", region: "New York Tristate" },
  { zip: "10012", city: "New York", neighborhood: "SoHo / NoHo", state: "NY", region: "New York Tristate" },
  { zip: "10013", city: "New York", neighborhood: "Tribeca / SoHo", state: "NY", region: "New York Tristate" },
  { zip: "10014", city: "New York", neighborhood: "West Village", state: "NY", region: "New York Tristate" },
  { zip: "10016", city: "New York", neighborhood: "Murray Hill", state: "NY", region: "New York Tristate" },
  { zip: "10017", city: "New York", neighborhood: "Midtown East", state: "NY", region: "New York Tristate" },
  { zip: "10018", city: "New York", neighborhood: "Midtown / Garment District", state: "NY", region: "New York Tristate" },
  { zip: "10019", city: "New York", neighborhood: "Midtown West / Hell's Kitchen", state: "NY", region: "New York Tristate" },
  { zip: "10020", city: "New York", neighborhood: "Rockefeller Center", state: "NY", region: "New York Tristate" },
  { zip: "10021", city: "New York", neighborhood: "Upper East Side", state: "NY", region: "New York Tristate" },
  { zip: "10022", city: "New York", neighborhood: "Midtown East / Sutton Place", state: "NY", region: "New York Tristate" },
  { zip: "10023", city: "New York", neighborhood: "Upper West Side", state: "NY", region: "New York Tristate" },
  { zip: "10024", city: "New York", neighborhood: "Upper West Side", state: "NY", region: "New York Tristate" },
  { zip: "10025", city: "New York", neighborhood: "Upper West Side / Morningside", state: "NY", region: "New York Tristate" },
  { zip: "10028", city: "New York", neighborhood: "Upper East Side", state: "NY", region: "New York Tristate" },
  { zip: "10029", city: "New York", neighborhood: "East Harlem", state: "NY", region: "New York Tristate" },
  { zip: "10036", city: "New York", neighborhood: "Times Square / Midtown", state: "NY", region: "New York Tristate" },
  { zip: "10065", city: "New York", neighborhood: "Upper East Side / Lenox Hill", state: "NY", region: "New York Tristate" },
  { zip: "10075", city: "New York", neighborhood: "Upper East Side", state: "NY", region: "New York Tristate" },
  { zip: "10128", city: "New York", neighborhood: "Upper East Side / Yorkville", state: "NY", region: "New York Tristate" },
  // ===== BROOKLYN =====
  { zip: "11201", city: "Brooklyn", neighborhood: "Brooklyn Heights / Downtown", state: "NY", region: "New York Tristate" },
  { zip: "11205", city: "Brooklyn", neighborhood: "Fort Greene / Clinton Hill", state: "NY", region: "New York Tristate" },
  { zip: "11206", city: "Brooklyn", neighborhood: "Williamsburg", state: "NY", region: "New York Tristate" },
  { zip: "11211", city: "Brooklyn", neighborhood: "Williamsburg", state: "NY", region: "New York Tristate" },
  { zip: "11215", city: "Brooklyn", neighborhood: "Park Slope", state: "NY", region: "New York Tristate" },
  { zip: "11217", city: "Brooklyn", neighborhood: "Boerum Hill / Park Slope", state: "NY", region: "New York Tristate" },
  { zip: "11231", city: "Brooklyn", neighborhood: "Carroll Gardens / Red Hook", state: "NY", region: "New York Tristate" },
  { zip: "11238", city: "Brooklyn", neighborhood: "Prospect Heights", state: "NY", region: "New York Tristate" },
  { zip: "11249", city: "Brooklyn", neighborhood: "Williamsburg Waterfront", state: "NY", region: "New York Tristate" },
  // ===== LONG ISLAND =====
  { zip: "11021", city: "Great Neck", state: "NY", region: "New York Tristate" },
  { zip: "11030", city: "Manhasset", state: "NY", region: "New York Tristate" },
  { zip: "11050", city: "Port Washington", state: "NY", region: "New York Tristate" },
  { zip: "11101", city: "Long Island City", state: "NY", region: "New York Tristate" },
  { zip: "11530", city: "Garden City", state: "NY", region: "New York Tristate" },
  { zip: "11548", city: "Greenvale", state: "NY", region: "New York Tristate" },
  { zip: "11577", city: "Roslyn Heights", state: "NY", region: "New York Tristate" },
  { zip: "11590", city: "Westbury", state: "NY", region: "New York Tristate" },
  { zip: "11743", city: "Huntington", state: "NY", region: "New York Tristate" },
  { zip: "11747", city: "Melville", state: "NY", region: "New York Tristate" },
  { zip: "11797", city: "Woodbury", state: "NY", region: "New York Tristate" },
  // ===== WESTCHESTER =====
  { zip: "10530", city: "Hartsdale", state: "NY", region: "New York Tristate" },
  { zip: "10543", city: "Mamaroneck", state: "NY", region: "New York Tristate" },
  { zip: "10580", city: "Rye", state: "NY", region: "New York Tristate" },
  { zip: "10583", city: "Scarsdale", state: "NY", region: "New York Tristate" },
  { zip: "10601", city: "White Plains", state: "NY", region: "New York Tristate" },
  { zip: "10604", city: "West Harrison", state: "NY", region: "New York Tristate" },
  { zip: "10708", city: "Bronxville", state: "NY", region: "New York Tristate" },
  { zip: "10804", city: "New Rochelle", state: "NY", region: "New York Tristate" },
  // ===== NEW JERSEY =====
  { zip: "07030", city: "Hoboken", state: "NJ", region: "New York Tristate" },
  { zip: "07302", city: "Jersey City", state: "NJ", region: "New York Tristate" },
  { zip: "07042", city: "Montclair", state: "NJ", region: "New York Tristate" },
  { zip: "07039", city: "Livingston", state: "NJ", region: "New York Tristate" },
  { zip: "07078", city: "Short Hills", state: "NJ", region: "New York Tristate" },
  { zip: "07901", city: "Summit", state: "NJ", region: "New York Tristate" },
  { zip: "07652", city: "Paramus", state: "NJ", region: "New York Tristate" },
  { zip: "07450", city: "Ridgewood", state: "NJ", region: "New York Tristate" },
  { zip: "07940", city: "Madison", state: "NJ", region: "New York Tristate" },
  { zip: "07932", city: "Florham Park", state: "NJ", region: "New York Tristate" },
  { zip: "07960", city: "Morristown", state: "NJ", region: "New York Tristate" },
  { zip: "07631", city: "Englewood", state: "NJ", region: "New York Tristate" },
  // ===== CONNECTICUT =====
  { zip: "06830", city: "Greenwich", state: "CT", region: "New York Tristate" },
  { zip: "06902", city: "Stamford", state: "CT", region: "New York Tristate" },
  { zip: "06840", city: "New Canaan", state: "CT", region: "New York Tristate" },
  { zip: "06820", city: "Darien", state: "CT", region: "New York Tristate" },
  { zip: "06880", city: "Westport", state: "CT", region: "New York Tristate" },
  { zip: "06851", city: "Norwalk", state: "CT", region: "New York Tristate" },
  { zip: "06460", city: "Milford", state: "CT", region: "New York Tristate" },
  // ===== MIAMI =====
  { zip: "33101", city: "Miami", neighborhood: "Downtown Miami", state: "FL", region: "South Florida" },
  { zip: "33129", city: "Miami", neighborhood: "Brickell", state: "FL", region: "South Florida" },
  { zip: "33130", city: "Miami", neighborhood: "Brickell / Downtown", state: "FL", region: "South Florida" },
  { zip: "33131", city: "Miami", neighborhood: "Brickell", state: "FL", region: "South Florida" },
  { zip: "33132", city: "Miami", neighborhood: "Downtown / Edgewater", state: "FL", region: "South Florida" },
  { zip: "33133", city: "Miami", neighborhood: "Coconut Grove", state: "FL", region: "South Florida" },
  { zip: "33134", city: "Miami", neighborhood: "Coral Gables", state: "FL", region: "South Florida" },
  { zip: "33139", city: "Miami Beach", neighborhood: "South Beach", state: "FL", region: "South Florida" },
  { zip: "33140", city: "Miami Beach", neighborhood: "Mid-Beach", state: "FL", region: "South Florida" },
  { zip: "33141", city: "Miami Beach", neighborhood: "North Beach", state: "FL", region: "South Florida" },
  { zip: "33143", city: "Miami", neighborhood: "South Miami", state: "FL", region: "South Florida" },
  { zip: "33146", city: "Miami", neighborhood: "Coral Gables", state: "FL", region: "South Florida" },
  { zip: "33154", city: "Miami Beach", neighborhood: "Bay Harbor Islands", state: "FL", region: "South Florida" },
  { zip: "33156", city: "Miami", neighborhood: "Pinecrest", state: "FL", region: "South Florida" },
  { zip: "33160", city: "North Miami Beach", neighborhood: "Sunny Isles", state: "FL", region: "South Florida" },
  { zip: "33180", city: "Miami", neighborhood: "Aventura", state: "FL", region: "South Florida" },
  // ===== FORT LAUDERDALE =====
  { zip: "33301", city: "Fort Lauderdale", neighborhood: "Downtown / Las Olas", state: "FL", region: "South Florida" },
  { zip: "33304", city: "Fort Lauderdale", neighborhood: "Victoria Park", state: "FL", region: "South Florida" },
  { zip: "33305", city: "Fort Lauderdale", neighborhood: "Wilton Manors", state: "FL", region: "South Florida" },
  { zip: "33306", city: "Fort Lauderdale", neighborhood: "East Fort Lauderdale", state: "FL", region: "South Florida" },
  { zip: "33308", city: "Fort Lauderdale", neighborhood: "Lauderdale-by-the-Sea", state: "FL", region: "South Florida" },
  { zip: "33309", city: "Fort Lauderdale", neighborhood: "North Fort Lauderdale", state: "FL", region: "South Florida" },
  { zip: "33316", city: "Fort Lauderdale", neighborhood: "Harbor Beach", state: "FL", region: "South Florida" },
  { zip: "33324", city: "Fort Lauderdale", neighborhood: "Plantation", state: "FL", region: "South Florida" },
  { zip: "33326", city: "Fort Lauderdale", neighborhood: "Weston", state: "FL", region: "South Florida" },
  { zip: "33019", city: "Hollywood", state: "FL", region: "South Florida" },
  { zip: "33020", city: "Hollywood", state: "FL", region: "South Florida" },
  { zip: "33009", city: "Hallandale Beach", state: "FL", region: "South Florida" },
  // ===== BOCA RATON =====
  { zip: "33427", city: "Boca Raton", state: "FL", region: "South Florida" },
  { zip: "33428", city: "Boca Raton", neighborhood: "West Boca", state: "FL", region: "South Florida" },
  { zip: "33431", city: "Boca Raton", neighborhood: "East Boca", state: "FL", region: "South Florida" },
  { zip: "33432", city: "Boca Raton", neighborhood: "Downtown Boca", state: "FL", region: "South Florida" },
  { zip: "33433", city: "Boca Raton", neighborhood: "West Boca", state: "FL", region: "South Florida" },
  { zip: "33434", city: "Boca Raton", neighborhood: "Northwest Boca", state: "FL", region: "South Florida" },
  { zip: "33486", city: "Boca Raton", neighborhood: "East Boca / Royal Palm", state: "FL", region: "South Florida" },
  { zip: "33487", city: "Boca Raton", neighborhood: "Highland Beach", state: "FL", region: "South Florida" },
  { zip: "33496", city: "Boca Raton", neighborhood: "West Boca / Broken Sound", state: "FL", region: "South Florida" },
  // ===== DELRAY BEACH =====
  { zip: "33444", city: "Delray Beach", neighborhood: "Downtown Delray", state: "FL", region: "South Florida" },
  { zip: "33445", city: "Delray Beach", state: "FL", region: "South Florida" },
  { zip: "33446", city: "Delray Beach", neighborhood: "West Delray", state: "FL", region: "South Florida" },
  { zip: "33483", city: "Delray Beach", neighborhood: "East Delray / Beach", state: "FL", region: "South Florida" },
  { zip: "33484", city: "Delray Beach", state: "FL", region: "South Florida" },
  // ===== WEST PALM BEACH / PALM BEACH =====
  { zip: "33401", city: "West Palm Beach", neighborhood: "Downtown", state: "FL", region: "South Florida" },
  { zip: "33405", city: "West Palm Beach", neighborhood: "South End", state: "FL", region: "South Florida" },
  { zip: "33407", city: "West Palm Beach", neighborhood: "Northwood", state: "FL", region: "South Florida" },
  { zip: "33409", city: "West Palm Beach", state: "FL", region: "South Florida" },
  { zip: "33410", city: "Palm Beach Gardens", state: "FL", region: "South Florida" },
  { zip: "33411", city: "West Palm Beach", neighborhood: "Royal Palm Beach", state: "FL", region: "South Florida" },
  { zip: "33412", city: "Palm Beach Gardens", neighborhood: "PGA / Alton", state: "FL", region: "South Florida" },
  { zip: "33418", city: "Palm Beach Gardens", neighborhood: "North Palm Beach Gardens", state: "FL", region: "South Florida" },
  { zip: "33458", city: "Jupiter", state: "FL", region: "South Florida" },
  { zip: "33469", city: "Jupiter", neighborhood: "Tequesta", state: "FL", region: "South Florida" },
  { zip: "33477", city: "Jupiter", neighborhood: "Jupiter Island", state: "FL", region: "South Florida" },
  { zip: "33480", city: "Palm Beach", neighborhood: "Palm Beach Island", state: "FL", region: "South Florida" },
  // ===== BOYNTON BEACH =====
  { zip: "33435", city: "Boynton Beach", state: "FL", region: "South Florida" },
  { zip: "33436", city: "Boynton Beach", state: "FL", region: "South Florida" },
  { zip: "33437", city: "Boynton Beach", neighborhood: "West Boynton", state: "FL", region: "South Florida" },
];

export function getZipByCode(zip: string): ZipCode | undefined {
  return zipCodes.find((z) => z.zip === zip);
}

export function getZipsByCity(city: string): ZipCode[] {
  return zipCodes.filter((z) => z.city.toLowerCase() === city.toLowerCase());
}

export function getZipsByRegion(region: string): ZipCode[] {
  return zipCodes.filter((z) => z.region === region);
}
