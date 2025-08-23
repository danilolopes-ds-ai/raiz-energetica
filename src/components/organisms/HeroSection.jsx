import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppButton from '@/components/atoms/AppButton';
import { Badge } from '@/components/ui/badge';
import Text from '@/components/atoms/Text';

const HeroSection = ({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  stats,
  extraContent,
}) => {
  return (
    <section className="hero-pattern relative overflow-hidden pt-20 pb-16 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center sm:text-left space-y-8 pb-16"
          >
            <div className="space-y-4">
              {badge && (
                <Badge className={badge.className}>
                  {badge.icon && <badge.icon className="w-4 h-4 mr-2" />}
                  {badge.text}
                </Badge>
              )}
              <Text as="h1" variant="h1" dangerouslySetInnerHTML={{ __html: title }} />
              <Text variant="lead">{subtitle}</Text>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              {primaryCta && (
                <AppButton
                  asChild
                  size="lg"
                  variant="primary"
                  className="pulse-glow transition-transform duration-200 ease-in-out hover:scale-105"
                >
                  <a href={primaryCta.link} target="_blank" rel="noopener noreferrer">
                    {primaryCta.text}
                  </a>
                </AppButton>
              )}
              {secondaryCta && (
                <AppButton
                  asChild
                  size="lg"
                  variant="secondary"
                  className="transition-transform duration-200 ease-in-out hover:scale-105"
                >
                  <Link to={secondaryCta.link}>
                    {secondaryCta.icon && <secondaryCta.icon className="w-5 h-5 mr-2" />}
                    {secondaryCta.text}
                  </Link>
                </AppButton>
              )}
            </div>

            {stats && (
              <div className="bg-[#1b413a] border border-white/10 rounded-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 * index, duration: 0.6 }}
                      className="text-left"
                    >
                      <div className="font-bold text-lg text-[#99CD85] mb-1">{stat.title}</div>
                      <Text variant="caption" className="text-gray-300">{stat.description}</Text>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="floating-animation">
              <img  
                className="rounded-2xl shadow-2xl w-full h-[350px] sm:h-[450px] lg:h-[500px] object-contain"
                alt={image.alt} src={image.src} />
            </div>
            {extraContent && (
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  {extraContent.icon && <extraContent.icon className="w-6 h-6 text-[#B8950A]" />}
                  <span className="font-semibold text-sm">{extraContent.text}</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;