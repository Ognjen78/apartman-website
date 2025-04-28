"use client"

import { useState } from "react"
import { Calendar, Check, Info, Tag, Users } from "lucide-react"

const Rates = () => {
  const additionalGuestRate = 35
  const currency = "€"
  const [activeTab, setActiveTab] = useState("Off-Season")

  const ratesData = [
    {
      season: "Off-Season",
      period: "March – April, November",
      price: 195,
      details: "Lowest Rate",
      color: "from-emerald-500 to-teal-600",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200",
      dates: ["Mar 1 - Apr 30, 2025", "Nov 1 - Nov 30, 2025"],
    },
    {
      season: "Mid-Season",
      period: "May, October",
      price: 235,
      details: "Pleasant Weather",
      color: "from-amber-500 to-orange-600",
      lightColor: "bg-amber-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
      dates: ["May 1 - May 31, 2025", "Oct 1 - Oct 31, 2025"],
    },
    {
      season: "High-Season",
      period: "June, September",
      price: 275,
      details: "Popular Time",
      color: "from-rose-500 to-pink-600",
      lightColor: "bg-rose-50",
      textColor: "text-rose-700",
      borderColor: "border-rose-200",
      dates: ["June 1 - June 30, 2025", "Sept 1 - Sept 30, 2025"],
    },
    {
      season: "Peak-Season",
      period: "July – August",
      price: 315,
      details: "Most Demand",
      color: "from-violet-500 to-purple-600",
      lightColor: "bg-violet-50",
      textColor: "text-violet-700",
      borderColor: "border-violet-200",
      dates: ["July 1 - Aug 31, 2025"],
    },
  ]

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-800 font-sans py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">            Pricing & Availability
          </span>
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
        Find the perfect time for your stay with our seasonal rates. All prices include utilities, WiFi, and
        standard cleaning.
        </p>
      </div>

        {/* Season Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {ratesData.map((rate) => (
            <button
              key={rate.season}
              onClick={() => setActiveTab(rate.season)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === rate.season
                  ? `bg-gradient-to-r ${rate.color} text-white shadow-md`
                  : `${rate.lightColor} ${rate.textColor} hover:shadow-sm`
              }`}
            >
              {rate.season}
            </button>
          ))}
        </div>

        {/* Rates Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ratesData.map((rate) => (
            <div
              key={rate.season}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border ${
                activeTab === rate.season ? rate.borderColor : "border-gray-100"
              } flex flex-col transform ${
                activeTab === rate.season ? "scale-105 md:scale-110 z-10" : "scale-100 opacity-80"
              }`}
            >
              <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${rate.color}`}></div>
              <div className="p-6 md:p-8 flex flex-col gap-6 flex-grow">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-bold ${rate.textColor}`}>{rate.season}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${rate.lightColor} ${rate.textColor}`}>
                      {rate.details}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{rate.period}</p>
                </div>

                <div className="flex flex-col items-center text-center py-4">
                  <p className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {currency} {rate.price}
                  </p>
                  <span className="text-xs text-gray-500 mt-1">per night</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <div className="space-y-1">
                      {rate.dates.map((date) => (
                        <p key={date} className="text-sm">
                          {date}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Users className="h-4 w-4 text-gray-400" />
                    <p>
                      +{currency} {additionalGuestRate} per additional guest
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`px-6 md:px-8 py-5 rounded-b-2xl border-t border-gray-100 ${
                  activeTab === rate.season ? rate.lightColor : "bg-gray-50"
                }`}
              >
                <button
                  className={`w-full bg-gradient-to-r ${rate.color} text-white px-6 py-3 rounded-xl text-sm font-medium hover:shadow-lg transition duration-300 flex items-center justify-center gap-2`}
                >
                  <Check className="h-4 w-4" />
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-10 bg-gray-200 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Good to Know
            </h2>
            <div className="h-1 w-10 bg-gray-200 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-gray-50 rounded-2xl p-6 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-3 rounded-xl">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">Payment Schedule</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span>
                        <span className="font-medium">Deposit:</span> 10% at booking
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span>
                        <span className="font-medium">Balance:</span> Due 30 days before arrival
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-3 rounded-xl">
                  <Info className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">Cancellation Policy</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-amber-500" />
                      <span>
                        <span className="font-medium">Full Refund:</span> 30+ days prior
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-amber-500" />
                      <span>
                        <span className="font-medium">50% Refund:</span> 10-29 days prior
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-amber-500" />
                      <span>
                        <span className="font-medium">No Refund:</span> Within 10 days
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white p-3 rounded-xl">
                  <Users className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">Extra Guests</h3>
                  <p className="text-gray-600">
                    <span className="font-medium">Fee:</span> {currency} {additionalGuestRate} per guest after the first
                    two. Maximum occupancy is 6 guests total.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white p-3 rounded-xl">
                  <Tag className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">Security Deposit</h3>
                  <p className="text-gray-600">
                    No security deposit required. We trust our guests to treat our apartment with care and respect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-500">
            All prices in {currency}. Rates are subject to change until booking is confirmed.
          </p>
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-1 mx-auto">
            <Calendar className="h-4 w-4" />
            View Full Availability Calendar
          </button>
        </div>
      </div>
    </main>
  )
}

export default Rates
