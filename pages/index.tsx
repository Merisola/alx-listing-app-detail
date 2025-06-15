import Head from "next/head";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-500">
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>

      <Card title="Sample Property" description="A beautiful house for rent." />
      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert("Booking...")} />
      </div>
    </div>
  );
}
