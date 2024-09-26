import React from 'react';

function SocialLinks() {
  return (
    <section className="py-20 text-center bg-gray-700">
      <h2 className="text-3xl font-semibold">Connect with Me</h2>
      <div className="flex justify-center mt-4">
        <a href="https://github.com/yourgithub" className="mx-4 text-blue-500">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" className="mx-4 text-blue-700">
          LinkedIn
        </a>
        <a href="https://twitter.com/yourtwitter" className="mx-4 text-blue-400">
          Twitter
        </a>
      </div>
    </section>
  );
}

export default SocialLinks;
