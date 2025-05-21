import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Calendar, Search, Filter, SlidersHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "Tour Packages | Wanderlust",
  description: "Explore our handpicked tour packages for unforgettable travel experiences.",
};

// Mock data for packages
const packages = [
  {
    id: 1,
    name: "Bali Adventure: Island Hopping",
    image: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    location: "Bali, Indonesia",
    duration: "7 Days",
    groupSize: "10 People",
    price: 1299,
    discount: 15,
    startDate: "2025-05-15",
    featured: true,
    description: "Experience the best of Bali with this 7-day island hopping adventure, including temples, beaches, and local culture.",
    activities: ["Beach", "Culture", "Adventure"],
    rating: 4.8,
  },
  {
    id: 2,
    name: "Greek Islands Discovery",
    image: "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    location: "Santorini & Mykonos, Greece",
    duration: "10 Days",
    groupSize: "12 People",
    price: 2199,
    discount: 0,
    startDate: "2025-06-10",
    featured: true,
    description: "Explore the stunning Greek islands with this 10-day tour, including Santorini's sunset views and Mykonos' vibrant nightlife.",
    activities: ["Beach", "Culture", "Romantic"],
    rating: 4.9,
  },
  {
    id: 3,
    name: "Japan Heritage Tour",
    image: "https://images.pexels.com/photos/5340085/pexels-photo-5340085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    location: "Tokyo, Kyoto & Osaka, Japan",
    duration: "12 Days",
    groupSize: "14 People",
    price: 2799,
    discount: 10,
    startDate: "2025-04-01",
    featured: true,
    description: "Immerse yourself in Japanese culture with this 12-day tour, visiting ancient temples, modern cities, and serene gardens.",
    activities: ["Culture", "History", "Food"],
    rating: 4.7,
  },
  {
    id: 4,
    name: "Machu Picchu & Sacred Valley",
    image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    location: "Cusco & Machu Picchu, Peru",
    duration: "8 Days",
    groupSize: "8 People",
    price: 1799,
    discount: 0,
    startDate: "2025-07-20",
    featured: false,
    description: "Hike the Inca Trail and discover the mysteries of Machu Picchu and the Sacred Valley on this 8-day adventure.",
    activities: ["Hiking", "History", "Adventure"],
    rating: 4.9,
  },
  {
    id: 5,
    name: "African Safari: Wildlife Discovery",
    image: "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    location: "Kenya & Tanzania",
    duration: "10 Days",
    groupSize: "6 People",
    price: 3299,
    discount: 5,
    startDate: "2025-09-05",
    featured: false,
    description: "Witness the Big Five and the Great Migration on this 10-day safari adventure through Kenya and Tanzania.",
    activities: ["Wildlife", "Nature", "Photography"],
    rating: 4.8,
  },
  {
    id: 6,
    name: "Northern Lights Expedition",
    image: "https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    location: "Iceland",
    duration: "6 Days",
    groupSize: "12 People",
    price: 2499,
    discount: 0,
    startDate: "2025-01-15",
    featured: false,
    description: "Chase the Northern Lights, explore ice caves, and relax in geothermal hot springs on this 6-day Icelandic adventure.",
    activities: ["Nature", "Photography", "Adventure"],
    rating: 4.7,
  },
];

export default function PackagesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="relative overflow-hidden rounded-xl mb-16">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Tour packages around the world"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center p-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Curated Tour Packages</h1>
              <p className="text-lg text-white/90 mb-8">
                Discover our expertly designed travel packages, each crafted to deliver exceptional experiences and unforgettable memories.
              </p>
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search tour packages..."
                  className="pl-10 bg-white/90 backdrop-blur-sm border-none h-12"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  Reset All
                </Button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-4">Price Range</h3>
                <Slider defaultValue={[1500]} max={5000} step={100} />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm">$0</span>
                  <span className="text-sm">$5,000</span>
                </div>
              </div>

              {/* Duration */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Duration</h3>
                <div className="space-y-2">
                  {["1-3 Days", "4-7 Days", "8-14 Days", "15+ Days"].map((duration) => (
                    <div key={duration} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`duration-${duration}`}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor={`duration-${duration}`}
                        className="ml-2 text-sm text-foreground"
                      >
                        {duration}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Activities</h3>
                <div className="space-y-2">
                  {["Adventure", "Beach", "Culture", "Food", "Hiking", "History", "Nature", "Photography", "Romantic", "Wildlife"].map((activity) => (
                    <div key={activity} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`activity-${activity}`}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor={`activity-${activity}`}
                        className="ml-2 text-sm text-foreground"
                      >
                        {activity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destinations */}
              <div>
                <h3 className="text-sm font-medium mb-3">Destinations</h3>
                <div className="space-y-2">
                  {["Asia", "Europe", "North America", "South America", "Africa", "Oceania"].map((continent) => (
                    <div key={continent} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`continent-${continent}`}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor={`continent-${continent}`}
                        className="ml-2 text-sm text-foreground"
                      >
                        {continent}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full mt-6">Apply Filters</Button>
            </div>
          </div>

          {/* Packages Grid */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <p className="text-muted-foreground mb-4 sm:mb-0">
                Showing <span className="font-medium text-foreground">{packages.length}</span> packages
              </p>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Sort by:</span>
                <select className="text-sm border-0 bg-transparent focus:ring-0 cursor-pointer">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration: Short to Long</option>
                  <option>Rating: High to Low</option>
                </select>
              </div>
            </div>

            {/* Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Link href={`/packages/${pkg.id}`} key={pkg.id}>
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                      {pkg.discount > 0 && (
                        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1">
                          {pkg.discount}% OFF
                        </Badge>
                      )}
                      <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-sm font-medium">
                        ★ {pkg.rating}
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-1">{pkg.name}</h3>
                      
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-xs">{pkg.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-xs">{pkg.duration}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Users className="h-4 w-4 mr-1" />
                          <span className="text-xs">{pkg.groupSize}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-xs">{new Date(pkg.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {pkg.activities.map((activity, index) => (
                          <span
                            key={index}
                            className="text-xs bg-muted px-2 py-0.5 rounded-full"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {pkg.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">From</p>
                          <div className="flex items-baseline">
                            {pkg.discount > 0 ? (
                              <>
                                <span className="text-lg font-bold">${Math.round(pkg.price * (1 - pkg.discount / 100))}</span>
                                <span className="text-xs line-through text-muted-foreground ml-1">${pkg.price}</span>
                              </>
                            ) : (
                              <span className="text-lg font-bold">${pkg.price}</span>
                            )}
                          </div>
                        </div>
                        <Button size="sm" className="px-3">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination would go here */}
            <div className="mt-10 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" disabled>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m15 18-6-6 6-6"></path></svg>
                  <span className="sr-only">Previous</span>
                </Button>
                <Button variant="outline" size="sm" className="h-9 w-9 bg-primary text-primary-foreground">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-9 w-9">
                  2
                </Button>
                <Button variant="outline" size="sm" className="h-9 w-9">
                  3
                </Button>
                <Button variant="outline" size="sm" className="h-9 w-9">
                  4
                </Button>
                <Button variant="outline" size="sm" className="h-9 w-9">
                  5
                </Button>
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m9 18 6-6-6-6"></path></svg>
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}