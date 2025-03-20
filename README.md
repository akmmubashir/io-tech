Next.js CRUD Application with Mock API
Project Setup

1. Install and Configure Next.js with TypeScript

Install Next.js with TypeScript:
npx create-next-app@latest my-app --typescript
cd my-app

Install dependencies:
npm install

2. Integrate Tailwind CSS

Install Tailwind CSS:
npm install -D tailwindcss postcss autoprefixer

Initialize Tailwind CSS:
npx tailwindcss init -p

Configure tailwind.config.js:
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
Add Tailwind CSS to styles/globals.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

Mock API
We will use JSONPlaceholder for simulating API interactions.

Endpoints:
Fetch all items: GET https://jsonplaceholder.typicode.com/posts
Create a new item: POST https://jsonplaceholder.typicode.com/posts
Update an item: PUT https://jsonplaceholder.typicode.com/posts/{id}
Delete an item: DELETE https://jsonplaceholder.typicode.com/posts/{id}

Component Structure
ItemList.tsx – Displays a list of items.
ItemForm.tsx – Form to add a new item.
Item.tsx – Single item component.
MainPage.tsx – Main page that manages state and API interactions.

Functionality
Fetch and display items from the mock API.
Add a new item using the form.
Delete an item from the list.
Basic error handling for API failures.

Styling
Uses Tailwind CSS for styling.
Ensures a responsive design for desktop and mobile.

Deployment
The application can be deployed on Vercel.

Deployment steps for Vercel:
npm install -g vercel
vercel

Deployed Application URL: https://io-tech-gxm5snnvg-mubashirmubis-projects.vercel.app/login

License
This project is open-source and available for personal or commercial use.
