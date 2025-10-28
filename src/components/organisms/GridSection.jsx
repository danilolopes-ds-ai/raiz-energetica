import React from 'react';
import { motion } from 'framer-motion';
import Text from '@/components/atoms/Text';

const GridSection = ({ title, subtitle, items, renderItem, gridCols = 3, children }) => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          {title && <Text as="h2" variant="h2" className="mb-4" dangerouslySetInnerHTML={{ __html: title }} />}
          {subtitle && <Text variant="lead" className="max-w-3xl mx-auto">{subtitle}</Text>}
        </motion.div>

        <div className={`grid grid-cols-1 lg:grid-cols-${gridCols} gap-8`}>
          {items.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="h-full"
            >
              {renderItem(item)}
            </motion.div>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
};

export default GridSection;