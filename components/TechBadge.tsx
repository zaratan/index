import React, { ReactNode } from 'react';

const TechBadge = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
    {children}
  </span>
);

export default TechBadge;
