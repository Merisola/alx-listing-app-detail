🏡 ALX Listing App – Property Detail Page
📋 Project Description
This project is a responsive Property Detail Page built with Next.js and Tailwind CSS, designed for a real estate listing application. It dynamically displays detailed information about a property, such as images, amenities, reviews, and a booking section. The layout is modular, using reusable components and best practices in modern React development.

🎯 Objectives
Implement dynamic routing using [id].tsx in Next.js.

Display property data from a sample data file.

Create reusable and styled components for:

Property details

Booking section

Review section

Ensure full mobile responsiveness using Tailwind CSS.

Follow good code structure and best practices with TypeScript.

🧱 Tech Stack
Next.js

TypeScript

Tailwind CSS

React Hooks

File-based Routing

Modular Component Design

📁 Project Structure
python
Copy
Edit
alx-listing-app-01/
├── components/
│   └── property/
│       ├── PropertyDetail.tsx
│       ├── BookingSection.tsx
│       └── ReviewSection.tsx
├── constants/
│   └── index.ts          // Sample property data
├── interfaces/
│   └── index.ts          // Type definitions
├── pages/
│   └── property/
│       └── [id].tsx      // Dynamic property page
├── public/
│   └── assets/images/    // Property & user images
├── styles/
├── README.md
⚙️ Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/alx-listing-app-01.git
cd alx-listing-app-01
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the development server
bash
Copy
Edit
npm run dev
4. View in browser
Go to http://localhost:3000/property/PROPERTY_NAME

🧪 Features
✅ Dynamic route for each property (/property/[id])

🖼️ Image grid layout

📜 Description tabs

🛏️ Amenities listing

📅 Booking form with check-in/out date pickers

⭐ Review section with avatars and ratings

📱 Fully responsive for all screen sizes

📦 Sample Data
Sample property data is stored in constants/index.ts. You can update it to add more properties.

🧠 Learning Points
Using Next.js dynamic routing

Structuring clean reusable components

Working with Tailwind CSS utility classes

Managing component props and types using TypeScript

Building a real-world UI layout

🧑‍💻 Author
Meron Solomon Tsegay
LinkedIn | GitHub

📜 License
This project is licensed under the MIT License.