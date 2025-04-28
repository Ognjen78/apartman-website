import React from "react";
import { FaMapMarkerAlt, FaUmbrellaBeach, FaWifi } from "react-icons/fa";

const Highlights: React.FC = () => {
    return (
        <section className="bg-white py-20 text-center"> {/* Removed font-body here */}
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12"> {/* Reduced gap slightly */}
                <div className="p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"> {/* Added shadow and hover effect */}
                    <div className="flex items-center justify-center h-16 w-16 mx-auto bg-primary/10 text-primary rounded-full mb-4">
                        <FaMapMarkerAlt className="text-3xl" />
                    </div>
                    <h3 className="text-xl font-semibold font-serif text-primary mb-2">Prime Location</h3> {/* Using font-serif */}
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Ideally situated steps from the stunning coast and local attractions.
                    </p>
                </div>
                <div className="p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"> {/* Added shadow and hover effect */}
                    <div className="flex items-center justify-center h-16 w-16 mx-auto bg-primary/10 text-primary rounded-full mb-4">
                        <FaUmbrellaBeach className="text-3xl" />
                    </div>
                    <h3 className="text-xl font-semibold font-serif text-primary mb-2">Exclusive Beach Access</h3> {/* More evocative */}
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Enjoy effortless access to pristine beaches for ultimate relaxation and sun-soaked days.
                    </p>
                </div>
                <div className="p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"> {/* Added shadow and hover effect */}
                    <div className="flex items-center justify-center h-16 w-16 mx-auto bg-primary/10 text-primary rounded-full mb-4">
                        <FaWifi className="text-3xl" />
                    </div>
                    <h3 className="text-xl font-semibold font-serif text-primary mb-2">Complimentary High-Speed Wi-Fi</h3> {/* More specific */}
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Stay seamlessly connected with our fast and reliable internet throughout the apartment.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Highlights;