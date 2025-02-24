import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 prose max-w-none">
          <p>
            Welcome to Free Mushroom Identifier, your educational resource for AI-powered fungi identification.
            We're passionate about helping people learn about the fascinating world of mushrooms through
            technology, while promoting safe and responsible mushroom observation.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to make mushroom education accessible to everyone by providing a free, easy-to-use
            identification tool. We aim to foster appreciation for fungi while emphasizing the importance of
            safety and proper identification practices. Our tool is designed for educational purposes only,
            helping nature enthusiasts, students, and curious minds learn about different mushroom species.
          </p>

          <h2>Why Choose Our Tool?</h2>
          <ul>
            <li>Advanced AI mushroom recognition technology</li>
            <li>Detailed species information</li>
            <li>Educational insights about fungi</li>
            <li>Safety information</li>
            <li>Habitat and ecology details</li>
            <li>Completely free to use</li>
            <li>No registration required</li>
            <li>Privacy-focused approach</li>
            <li>Regular updates to improve accuracy</li>
          </ul>

          <div className="bg-red-50 p-6 rounded-lg my-8">
            <h2 className="text-red-800 mt-0">⚠️ Important Safety Disclaimer</h2>
            <p className="mb-0">
              This mushroom identification tool is for educational purposes only. Never eat or consume
              wild mushrooms based on digital identification alone. Misidentification of mushrooms can
              be extremely dangerous and potentially lethal. Always consult with qualified mycologists
              or experts for edibility confirmation, and never consume wild mushrooms without proper
              expert verification.
            </p>
          </div>

          <h2>Support Our Project</h2>
          <p>
            We're committed to keeping this mushroom identification tool free and accessible to everyone.
            If you find our educational tool useful, consider supporting us by buying us a coffee.
            Your support helps us maintain and improve the service, ensuring it remains available to all
            fungi enthusiasts who want to learn.
          </p>

          <div className="mt-8 text-center">
            <a
              href="https://roihacks.gumroad.com/l/dselxe?utm_campaign=donation-home-page&utm_medium=website&utm_source=mushroom-identifier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}