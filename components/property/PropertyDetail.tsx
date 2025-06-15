import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500">{property.rating} stars</span>
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img
            src={property.image}
            alt={property.name}
            className="col-span-2 w-full h-96 object-cover rounded-lg"
          />
          {/* More images can go here later */}
        </div>

        {/* Description */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p>{property.description}</p>
        </div>

        {/* Amenities */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">
            What this place offers
          </h2>
          <ul className="flex flex-wrap gap-2">
            {property.category.map((amenity, index) => (
              <li key={index} className="bg-gray-200 p-2 rounded-md">
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        {/* Reviews */}
        <ReviewSection reviews={property.reviews} />
      </div>

      {/* Booking Section on the right */}
      <div>
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
