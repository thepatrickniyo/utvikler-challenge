import React from 'react';
import Link from 'next/link';

interface BreadCrumbProps {
  links: Array<{ label: string, url: string }>,
  children?: React.ReactNode
}

export default function BreadCrumb({ links, children }: BreadCrumbProps) {
  return (
    <menu className="flex px-[8%] py-4 justify-between border-b">
      <section>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center">
            {links.map((link, index) => {
              const isLastItem = index === links.length - 1;
              
              return (
                <li key={link.url} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-2 text-gray-400">/</span>
                  )}
                  
                  {isLastItem ? (
                    <span className="text-xl  text-black">
                      {link.label}
                    </span>
                  ) : (
                    <Link 
                      href={link.url}
                      className="text-primary hover:underline"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </section>
      
      {children}
    </menu>
  );
}