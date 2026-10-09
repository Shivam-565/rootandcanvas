'use client';
import React, { useState } from 'react';

const verticals = ['ROOTS', 'AWARE', 'CANVAS'];

const productsData = [
  // ROOTS
  {
    id: 1,
    vertical: 'ROOTS',
    category: 'Archives & Experiences',
    title: 'The Recipe Archive Project',
    image: 'https://images.unsplash.com/photo-1544378730-1b5101072fe5?q=80&w=1000&auto=format&fit=crop',
    description: 'Documenting and preserving culinary traditions that deserve to be remembered.',
    aspectRatio: '1/1.2'
  },
  {
    id: 2,
    vertical: 'ROOTS',
    category: 'Books & Resources',
    title: 'Heritage Cookbook Vol. 1',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop',
    description: 'Curated publications exploring culture, food and everyday knowledge.',
    aspectRatio: '1/1'
  },
  {
    id: 3,
    vertical: 'ROOTS',
    category: 'Heritage & Food',
    title: 'Culinary Workshop Series',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop',
    description: 'Thoughtfully designed experiences centered around cultural stories.',
    aspectRatio: '1/1.5'
  },
  // AWARE
  {
    id: 4,
    vertical: 'AWARE',
    category: 'Learning & Awareness',
    title: 'Conscious Living Guide',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1000&auto=format&fit=crop',
    description: 'Educational resources encouraging greater awareness of our environment and systems.',
    aspectRatio: '1/1'
  },
  {
    id: 5,
    vertical: 'AWARE',
    category: 'Workshops & Programmes',
    title: 'Practical Knowledge Workshop',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop',
    description: 'Interactive learning experiences designed for meaningful action.',
    aspectRatio: '1/1.3'
  },
  {
    id: 6,
    vertical: 'AWARE',
    category: 'Digital Resources',
    title: 'Everyday Systems Toolkit',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop',
    description: 'Accessible learning materials and downloadable resources.',
    aspectRatio: '1/0.8'
  },
  // CANVAS
  {
    id: 7,
    vertical: 'CANVAS',
    category: 'Art & Photography',
    title: 'Original Fine Art Print',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop',
    description: 'Visual work presented through high-quality archival prints.',
    aspectRatio: '1/1.4'
  },
  {
    id: 8,
    vertical: 'CANVAS',
    category: 'Designed Products',
    title: 'Artisan Ceramic Set',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1000&auto=format&fit=crop',
    description: 'Thoughtfully designed everyday objects inspired by culture and ideas.',
    aspectRatio: '1/1'
  },
  {
    id: 9,
    vertical: 'CANVAS',
    category: 'Books & Stationery',
    title: 'Minimalist Planner 2027',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
    description: 'Creative paper goods including journals, planners and bookmarks.',
    aspectRatio: '1/1.2'
  }
];

export default function ProductsSection() {
  const [activeVertical, setActiveVertical] = useState('ROOTS');

  const filteredProducts = productsData.filter(p => p.vertical === activeVertical);

  return (
    <section id="products" style={{ padding: '8rem 5%', backgroundColor: 'var(--_color---whitness)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header & Tabs */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-prata)', fontSize: '3rem', marginBottom: '2rem', color: 'var(--_color---black)' }}>
            Services & Products
          </h2>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {verticals.map(vertical => (
              <button
                key={vertical}
                onClick={() => setActiveVertical(vertical)}
                style={{
                  padding: '0.75rem 2rem',
                  border: '1px solid var(--_color---black)',
                  borderRadius: '30px',
                  fontFamily: 'var(--font-bricolage)',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: activeVertical === vertical ? 'var(--_color---black)' : 'transparent',
                  color: activeVertical === vertical ? 'var(--_color---whitness)' : 'var(--_color---black)',
                }}
              >
                {vertical}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div 
          style={{ 
            columnCount: 3, 
            columnGap: '2rem',
            width: '100%',
          }}
          className="masonry-grid"
        >
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              style={{ 
                breakInside: 'avoid', 
                marginBottom: '2rem',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                backgroundColor: '#f5f5f5',
                cursor: 'pointer'
              }}
              className="product-card"
            >
              <div style={{ position: 'relative', aspectRatio: product.aspectRatio, width: '100%' }}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }} 
                  className="product-image"
                />
              </div>
              
              <div style={{ padding: '1.5rem' }}>
                <p style={{ 
                  fontFamily: 'var(--font-bricolage)', 
                  fontSize: '0.75rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  color: '#666',
                  marginBottom: '0.5rem'
                }}>
                  {product.category}
                </p>
                <h3 style={{ 
                  fontFamily: 'var(--font-prata)', 
                  fontSize: '1.5rem', 
                  marginBottom: '1rem',
                  color: 'var(--_color---black)'
                }}>
                  {product.title}
                </h3>
                <p style={{ 
                  fontFamily: 'var(--font-bricolage)', 
                  fontSize: '0.9rem', 
                  lineHeight: '1.5',
                  color: '#444'
                }}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Add a little style tag for responsive masonry and hover effects */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 1024px) {
            .masonry-grid { column-count: 2 !important; }
          }
          @media (max-width: 640px) {
            .masonry-grid { column-count: 1 !important; }
          }
          .product-card:hover .product-image {
            transform: scale(1.05);
          }
        `}} />
      </div>
    </section>
  );
}
