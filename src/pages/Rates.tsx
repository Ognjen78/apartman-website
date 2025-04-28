import { FaTag } from "react-icons/fa";

const Rates = () => {
  const additionalGuestRate = 35;
  const currency = "€";

  const ratesData = [
    {
      season: "Off-Season",
      period: "March – April, November",
      price: 195,
      details: "Lowest Rate",
    },
    {
      season: "Mid-Season",
      period: "May, October",
      price: 235,
      details: "Pleasant Weather",
      dates: ["May 1 - May 31, 2025", "Oct 1 - Oct 31, 2025"],
    },
    {
      season: "High-Season",
      period: "June, September",
      price: 275,
      details: "Popular Time",
      dates: ["June 1 - June 30, 2025", "Sept 1 - Sept 30, 2025"],
    },
    {
      season: "Peak-Season",
      period: "July – August",
      price: 315,
      details: "Most Demand",
      dates: ["July 1 - Aug 31, 2025"],
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800 font-sans py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <h1 className="text-5xl font-bold text-primary text-center tracking-tight mb-12 leading-tight">
          Pricing & Availability
        </h1>

        {/* Rates Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ratesData.map((rate) => (
            <div
              key={rate.season}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col"
            >
              <div className="p-8 flex flex-col gap-4 flex-grow">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-1">{rate.season}</h3>
                  <p className="text-gray-500 text-sm">{rate.period}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaTag className="text-primary" />
                    <span>{rate.details}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-900">
                      {currency} {rate.price}
                    </p>
                    <span className="text-xs text-gray-500">per night</span>
                  </div>
                </div>

                {rate.dates && (
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-4">
                    {rate.dates.map((date) => (
                      <li key={date}>{date}</li>
                    ))}
                  </ul>
                )}

                <p className="text-sm text-gray-500 mt-4">
                  +{currency} {additionalGuestRate} per guest (after 2 guests)
                </p>
              </div>
              <div className="bg-primary/5 px-8 py-4 text-right rounded-b-2xl">
                <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition duration-300">
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="backdrop-blur-lg bg-white/60 rounded-3xl shadow-2xl p-10 border border-gray-300">
  <h2 className="text-3xl font-bold text-center text-secondary mb-10 tracking-tight">Good to Know</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800">
    <div className="pl-6 space-y-3">
      <h3 className="text-xl font-semibold text-primary">Payment Schedule</h3>
      <ul className="list-disc list-inside text-sm leading-relaxed">
        <li><span className="font-bold">Deposit:</span> 10% at booking.</li>
        <li><span className="font-bold">Balance:</span> Due 30 days before arrival.</li>
      </ul>
    </div>

    <div className="pl-6 space-y-3">
      <h3 className="text-xl font-semibold text-primary">Cancellation Policy</h3>
      <ul className="list-disc list-inside text-sm leading-relaxed">
        <li><span className="font-bold">Full Refund:</span> 30+ days prior.</li>
        <li><span className="font-bold">50% Refund:</span> 10-29 days prior.</li>
        <li><span className="font-bold">No Refund:</span> Within 10 days.</li>
      </ul>
    </div>

    <div className="pl-6 space-y-3">
      <h3 className="text-xl font-semibold text-primary">Extra Guests</h3>
      <p className="text-sm leading-relaxed">
        <span className="font-bold">Fee:</span> {currency} {additionalGuestRate} per guest after the first two.
      </p>
    </div>

    <div className="pl-6 space-y-3">
      <h3 className="text-xl font-semibold text-primary">Security Deposit</h3>
      <p className="text-sm leading-relaxed">None required.</p>
    </div>
  </div>
</div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 mt-10">
          All prices in {currency}. Availability can be checked by clicking the button above.
        </p>
      </div>
    </main>
  );
};

export default Rates;
