import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Train, Coffee, Utensils, Calendar, PlaneTakeoff, Bed, Landmark, ShoppingBag } from "lucide-react";

const itinerary = [
  {
    date: "Sunday, 04 May 2025",
    location: "Osaka",
    activities: [
      "Arrive at Kansai International Airport and transfer to hotel",
      {
        name: "Explore Dotonbori in the evening",
        duration: "1.5 hours",
        mapsLink: "https://www.google.com/maps/place/Dotonbori"
      }
    ],
    food: ["Ali's Kitchen", "Matsuri Halal Diner"],
    cafes: ["W/O STAND Namba", "PABLO Café"]
  },
  {
    date: "Monday, 05 May 2025",
    location: "Osaka",
    activities: [
      "Retro Osaka: Shinsekai district stroll",
      "Explore Hozenji Yokocho Alley",
      "Osaka Museum of Housing and Living",
      "Stroll Tenjinbashi-suji Shopping Street"
    ],
    food: ["Matsuri Halal Diner", "Ali's Kitchen Osaka"],
    cafes: ["PABLO Cheese Tart", "Brooklyn Roasting Company"]
  },
  {
    date: "Tuesday, 06 May 2025",
    location: "Nara (Day Trip)",
    activities: [
      "Travel Info: Osaka -> Nara via Kintetsu Ltd. Express (~40 min)",
      "Visit Nara Park, Todai-ji Temple (view only)",
      "Return to Osaka by evening"
    ],
    food: ["Le Marrakech", "Naan Inn"],
    cafes: ["Café Etranger Narad", "Nakanishi Yosaburo"]
  },
    {
    date: "Wednesday, 07 May 2025",
    location: "Osaka → Kyoto",
    activities: [
      {
        name: "Travel Info: Osaka -> Kyoto via JR Special Rapid Service (~30 min)",
        duration: "30 minutes",
        mapsLink: "https://www.google.com/maps/dir/Osaka+Station/Kyoto+Station"
      },
      {
        name: "Explore Gion District",
        duration: "2 hours",
        mapsLink: "https://www.google.com/maps/place/Gion,+Kyoto"
      }
    ],
    food: ["Ganko Sushi", "Narita-ya Ramen"],
    cafes: ["% Arabica Higashiyama", "Walden Woods Kyoto"]
  },
  {
    date: "Thursday, 08 May 2025",
    location: "Kyoto",
    activities: [
      {
        name: "Visit Arashiyama Bamboo Grove + Monkey Park Iwatayama",
        duration: "2.5 hours",
        mapsLink: "https://www.google.com/maps/place/Arashiyama+Bamboo+Grove"
      }
    ],
    food: ["Narita-ya Ramen", "Ganko Sushi"],
    cafes: ["KissaMaster", "% Arabica"]
  },
  {
    date: "Friday, 09 May 2025",
    location: "Kyoto → USJ (Day Trip)",
    activities: [
      {
        name: "Travel Info: Kyoto -> Universal Studios Japan (~1 hr)",
        duration: "1 hour",
        mapsLink: "https://www.google.com/maps/dir/Kyoto+Station/Universal+Studios+Japan"
      },
      "Enjoy Harry Potter World",
      "Return to Kyoto before 5 PM"
    ],
    food: ["Halal USJ or packed meal"],
    cafes: ["Station cafés"]
  },
  {
    date: "Saturday, 10 May 2025",
    location: "Kyoto → Hiroshima",
    activities: [
      {
        name: "Travel Info: Kyoto -> Hiroshima via Shinkansen (~1.5 hrs)",
        duration: "1.5 hours",
        mapsLink: "https://www.google.com/maps/dir/Kyoto+Station/Hiroshima+Station"
      },
      "Visit Hiroshima Peace Memorial Park",
      "Visit Atomic Bomb Dome"
    ],
    food: ["Ali Baba Turkish Restaurant", "Roti & Daal"],
    cafes: ["Obscura Coffee Roasters"]
  },
    {
    date: "Sunday, 11 May 2025",
    location: "Miyajima (Day Trip)",
    activities: [
      {
        name: "Travel Info: Hiroshima -> Miyajima via JR + Ferry (~45 min)",
        duration: "45 minutes",
        mapsLink: "https://www.google.com/maps/dir/Hiroshima+Station/Miyajimaguchi+Station"
      },
      {
        name: "Visit Itsukushima Shrine (view only) and stroll the island",
        duration: "2 hours",
        mapsLink: "https://www.google.com/maps/place/Itsukushima+Shrine"
      }
    ],
    food: ["Ali Baba Turkish Restaurant"],
    cafes: ["Obscura Coffee Roasters"]
  },
  {
    date: "Monday, 12 May 2025",
    location: "Hiroshima → Tokyo",
    activities: [
      {
        name: "Travel Info: Hiroshima → Tokyo via Shinkansen (~4 hrs)",
        duration: "4 hours",
        mapsLink: "https://www.google.com/maps/dir/Hiroshima+Station/Tokyo+Station"
      },
      "Check-in and relax at Tokyo hotel"
    ],
    food: ["Sekai Cafe Asakusa", "Halal Wagyu PANGA"],
    cafes: ["Blue Bottle Coffee Aoyama", "Cafe Kitsune"]
  },
  {
    date: "Tuesday, 13 May 2025",
    location: "Tokyo",
    activities: [
      "Explore Shibuya Crossing",
      "Visit Akihabara for anime and tech shopping"
    ],
    food: ["Gyumon Yakiniku", "Sekai Cafe Asakusa"],
    cafes: ["Cafe Kitsune", "Shiro-Hige Cream Puff Factory"]
  },
  {
    date: "Wednesday, 14 May 2025",
    location: "Tokyo",
    activities: [
      "Visit Detective Conan Plaza (if available)",
      "Visit Ghibli Museum Mitaka"
    ],
    food: ["Sekai Cafe", "Halal Wagyu PANGA"],
    cafes: ["Aoyama Flower Market Tea House", "Blue Bottle Coffee"]
  },
  {
    date: "Thursday, 15 May 2025",
    location: "Tokyo → Lake Biwa",
    activities: [
      {
        name: "Travel Info: Tokyo → Otsu (Lake Biwa) via Shinkansen + local train (~2 hrs)",
        duration: "2 hours",
        mapsLink: "https://www.google.com/maps/dir/Tokyo+Station/Otsu+Station"
      },
      "Stay at Yuzanso Ryokan (onsen + halal dinner)"
    ],
    food: ["Yuzanso Ryokan in-house halal meal"],
    cafes: ["Kanou Shoujuan"]
  },
  {
    date: "Friday, 16 May 2025",
    location: "Lake Biwa → Tokyo",
    activities: [
      {
        name: "Work-free day",
      },
      {
        name: "Return Travel: Otsu → Tokyo (~2 hrs)",
        duration: "2 hours",
        mapsLink: "https://www.google.com/maps/dir/Otsu+Station/Tokyo+Station"
      },
      {
        name: "Evening visit to Tokyo Skytree for night views",
        duration: "1.5 hours",
        mapsLink: "https://www.google.com/maps/place/Tokyo+Skytree"
      }
    ],
    food: ["Ariana Restaurant", "Sekai Cafe Asakusa"],
    cafes: ["Shiro-Hige Cream Puff Factory"]
  },
  {
    date: "Saturday, 17 May 2025",
    location: "Tokyo → Seoul",
    activities: [
      "Flight: Haneda → Incheon (~2.5 hrs)",
      "Visit Gyeongbokgung Palace, Bukchon Hanok Village",
      "Explore Myeongdong Shopping"
    ],
    food: ["Eid Halal Korean Food", "Makan Halal"],
    cafes: ["943 Kings Cross", "Anthracite Coffee"]
  },
  {
    date: "Sunday, 18 May 2025",
    location: "Seoul",
    activities: [
      "Visit N Seoul Tower",
      "Explore Ikseon-dong Hanok Street",
      "Visit Starfield Library at COEX Mall"
    ],
    food: ["Makan Halal", "Eid Halal Korean Food"],
    cafes: ["Greem Café", "Anthracite Coffee"]
  },
  {
    date: "Monday, 19 May 2025",
    location: "Seoul → Tokyo",
    activities: [
      "Flight: Incheon → Haneda (~2.5 hrs)",
      "Return to Tokyo and rest"
    ],
    food: ["Gyumon Yakiniku", "Sekai Cafe Asakusa"],
    cafes: ["Shiro-Hige Cream Puff Factory"]
  },
  {
    date: "Tuesday, 20 May 2025",
    location: "Tokyo",
    activities: [
      {
        name: "Visit teamLab Planets (digital art museum) or relax in Odaiba",
        duration: "2 hours",
        mapsLink: "https://www.google.com/maps/place/teamLab+Planets+TOKYO"
      },
      "Optional: Onsen experience at Oedo Onsen Monogatari (Spirited Away bathhouse vibes)"
    ],
    food: ["PANGA Halal Wagyu", "Sekai Cafe Asakusa"],
    cafes: ["Cafe Kitsune", "Blue Bottle Coffee"]
  },
  {
    date: "Wednesday, 21 May 2025",
    location: "Tokyo",
    activities: [
      "Final shopping at Ginza or Shinjuku",
      "Packing souvenirs",
      "Relax at hotel"
    ],
    food: ["Tendon Ginza Itsuki", "Sekai Cafe Asakusa"],
    cafes: ["Aoyama Flower Market Tea House"]
  },
  {
    date: "Thursday, 22 May 2025",
    location: "Tokyo → Haneda Airport",
    activities: [
      "Optional: Morning stroll around Asakusa or Sumida River",
      "Lunch at Ariana Restaurant or Sekai Cafe Asakusa",
      {
        name: "Travel Info: Hotel → Haneda Airport (leave by 2:30-3:00 PM)",
        duration: "30-45 minutes",
        mapsLink: "https://www.google.com/maps/dir/Tokyo+Hotel/Haneda+Airport"
      },
      "Flight at 8:00 PM from Haneda Airport"
    ],
    food: ["Ariana Restaurant", "Sekai Cafe Asakusa"],
    cafes: ["Blue Bottle Coffee Haneda Airport"]
  }
];

export default function ItineraryVisual() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {itinerary.map((day, index) => (
        <Card key={index} className="shadow-md">
          <CardContent className="space-y-2 p-4">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <Calendar className="w-5 h-5" /> {day.date}
            </div>
            <div className="flex items-center gap-2 text-lg text-muted-foreground">
              <MapPin className="w-4 h-4" /> {day.location}
            </div>
            <ul className="list-disc list-inside pl-2">
              {day.activities.map((act, i) => (
                typeof act === "string" ? (
                  <li key={i} className="flex items-start gap-1">
                    <Landmark className="w-4 h-4 mt-1 text-muted-foreground" /> <span>{act}</span>
                  </li>
                ) : (
                  <li key={i}>
                    <div className="flex flex-col">
                      <div className="flex gap-1 items-center font-medium">
                        <Train className="w-4 h-4 text-muted-foreground" /> {act.name}
                        {act.duration && (
                          <span className="text-sm text-muted-foreground ml-1"> &mdash; {act.duration}</span>
                        )}
                      </div>
                      {act.mapsLink && (
                        <a
                          href={act.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm pl-5"
                        >
                          View on Google Maps
                        </a>
                      )}
                    </div>
                  </li>
                )
              ))}
            </ul>

            <div>
              <h4 className="font-semibold mt-2 flex items-center gap-1">
                <Utensils className="w-4 h-4" /> Halal Food
              </h4>
              <ul className="list-disc list-inside pl-2">
                {day.food.map((place, i) => (
                  <li key={i} className="flex gap-1 items-start">
                    <ShoppingBag className="w-4 h-4 mt-1 text-muted-foreground" />
                    <a
                      href={`https://www.google.com/search?q=${encodeURIComponent(place + " " + day.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {place}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mt-2 flex items-center gap-1">
                <Coffee className="w-4 h-4" /> Cafés & Pastries
              </h4>
              <ul className="list-disc list-inside pl-2">
                {day.cafes.map((cafe, i) => (
                  <li key={i} className="flex gap-1 items-start">
                    <Coffee className="w-4 h-4 mt-1 text-muted-foreground" />
                    <a
                      href={`https://www.google.com/search?q=${encodeURIComponent(cafe + " " + day.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {cafe}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </CardContent>
        </Card>
      ))}

      {/* Trip To-Do List */}
      <details className="col-span-full mt-6">
        <summary className="text-xl font-bold cursor-pointer flex items-center gap-2">
          📝 Trip Preparation Checklist
        </summary>
        <ul className="list-disc list-inside pl-6 mt-2">
          <li>✅ Buy JR Pass (for long-distance Shinkansen travel)</li>
          <li>✅ Reserve Universal Studios Japan tickets online</li>
          <li>✅ Reserve Ghibli Museum tickets online</li>
          <li>✅ Book hotels in Osaka, Kyoto, Hiroshima, Tokyo, Seoul</li>
          <li>✅ Set up ICOCA card or Suica card (for local trains)</li>
          <li>✅ Download Google Maps Offline</li>
          <li>✅ Install apps: NAVITIME, KakaoMetro, Papago</li>
          <li>✅ Check halal food restaurant maps</li>
          <li>✅ Confirm pocket Wi-Fi or SIM card for internet</li>
          <li>✅ Bring international debit/credit cards</li>
          <li>✅ Double check passport, visa, flight bookings</li>
        </ul>
      </details>

      {/* Scenic Cafés */}
      <details className="col-span-full mt-6">
        <summary className="text-xl font-bold cursor-pointer flex items-center gap-2">
          ☕ Scenic Cafés & Family-Friendly Spots
        </summary>
        <ul className="list-disc list-inside pl-6 mt-2">
          <li><strong>May 4, Osaka:</strong> PABLO Café (Dotonbori) 🍰</li>
          <li><strong>May 7, Kyoto:</strong> % Arabica Higashiyama Kyoto 🌸</li>
          <li><strong>May 8, Kyoto:</strong> Mo-an Café (hilltop view) 🌳</li>
          <li><strong>May 16, Tokyo:</strong> Aoyama Flower Market Tea House 🌷</li>
          <li><strong>May 17, Seoul:</strong> 943 King's Cross Harry Potter Café 🧙‍♂️</li>
        </ul>
      </details>

    </div>
  );
}

