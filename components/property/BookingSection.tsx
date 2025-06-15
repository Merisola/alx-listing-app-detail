const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-20">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      {/* Check-in */}
      <div className="mt-4">
        <label className="block text-sm">Check-in</label>
        <input type="date" className="border p-2 w-full mt-1 rounded" />
      </div>

      {/* Check-out */}
      <div className="mt-4">
        <label className="block text-sm">Check-out</label>
        <input type="date" className="border p-2 w-full mt-1 rounded" />
      </div>

      {/* Total cost */}
      <div className="mt-4">
        <p>
          Total payment: <strong>${price * 7}</strong>
        </p>
      </div>

      {/* Button */}
      <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
