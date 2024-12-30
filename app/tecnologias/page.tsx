'use client';

import tecnologias from '@/app/data/tecnologias.json';
import Card from '@/app/components/Card/Card';

export default function TecnologiasPage() {
  return (
    <div>
      <h1>Tecnologias</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {tecnologias.map((tecnologia) => (
          <Card
            key={tecnologia.title}
            title={tecnologia.title}
            image={tecnologia.image}
            description={tecnologia.description}
            price={tecnologia.rating} // Substitua "price" por "rating" no componente Card.
          />
        ))}
      </div>
    </div>
  );
}