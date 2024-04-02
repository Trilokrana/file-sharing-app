<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>File Sharing Application - Upload, Share, and Collaborate</title>  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">  </head>
<body class="bg-gray-100 p-4">

  <header class="flex justify-between items-center mb-8">  <h1 class="text-3xl font-bold text-gray-800">File Share</h1>  <img src="your_logo.png" alt="File Share Logo" class="w-12 h-12 rounded-full" />  </header>

  <section class="mb-8">  <h2 class="text-2xl font-semibold mb-4">Tech Stack</h2>
    <div class="flex flex-wrap gap-2">
      <span class="inline-block bg-blue-500 text-white px-2 py-1 rounded-full">Next.js</span>
      <span class="inline-block bg-green-500 text-white px-2 py-1 rounded-full">React</span>
      <span class="inline-block bg-purple-500 text-white px-2 py-1 rounded-full">Firebase</span>
      <span class="inline-block bg-orange-500 text-white px-2 py-1 rounded-full">Clerk</span>
      <span class="inline-block bg-indigo-500 text-white px-2 py-1 rounded-full">Tailwind CSS</span>
      <span class="inline-block bg-red-500 text-white px-2 py-1 rounded-full">Axios</span>
      <span class="inline-block bg-teal-500 text-white px-2 py-1 rounded-full">Flowbite-React</span>
      </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">Features</h2>
    <ul class="list-disc space-y-2">
      <li>Upload files of various formats (documents, images, videos, etc.)</li>
      <li>Generate secure short URLs for sharing uploaded files</li>
      <li>Send file access links via email</li>
      <li>User authentication and authorization (Clerk)</li>
      <li>Modern and responsive UI with Tailwind CSS</li>
      <li>Data storage and access management with Firebase</li>
      <li>Animations and transitions with Framer Motion (optional)</li>
      <li>User notifications with React Toastify</li>
      </ul>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">How to Use</h2>
    <p>Getting started with File Share is simple!</p>
    <ol class="list-decimal space-y-2">
      <li>Create an account or sign in (if you already have one).</li>
      <li>Click the upload button and select the file you want to share.</li>
      <li>Once uploaded, a short URL will be generated.</li>
      <li>Copy the URL and share it with anyone you want to grant access.</li>
      <li>(Optional) Alternatively, enter an email address and send a direct access link.</li>
    </ol>
  </section>

  <footer class="text-center text-gray-500 mt-8">
    &copy; 2024 - Built with ❤️ by You
  </footer>
</body>
</html>
