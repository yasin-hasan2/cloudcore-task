import React from "react";

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; {new Date().getFullYear()} StyleAura. All rights reserved.</p>
      </footer>
    </div>
  );
}
