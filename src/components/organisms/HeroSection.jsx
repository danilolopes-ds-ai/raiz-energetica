import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppButton from '@/components/atoms/AppButton';
import { Badge } from '@/components/ui/badge';
import Text from '@/components/atoms/Text';
import AnimatedCounter from '@/components/atoms/AnimatedCounter';

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
    <section className="hero-pattern relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-white to-amber-50/20"></div>
      
      <div className="relative pt-24 pb-12 sm:pt-32 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Content Side - Mobile First */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left space-y-6 sm:space-y-8"
            >
              {/* Badge */}
              {badge && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex justify-center lg:justify-start"
                >
                  <Badge className={`${badge.className} px-4 py-2 text-sm font-medium rounded-full border-2 backdrop-blur-sm`}>
                    {badge.icon && <badge.icon className="w-4 h-4 mr-2" />}
                    {badge.text}
                  </Badge>
                </motion.div>
              )}

              {/* Main Headline - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-4"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900">
                  <span dangerouslySetInnerHTML={{ __html: title }} />
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {subtitle}
                </p>
              </motion.div>

              {/* CTA Buttons - Mobile First */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {primaryCta && (
                  <AppButton
                    asChild
                    size="lg"
                    variant="primary"
                    className="group relative overflow-hidden pulse-glow transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] text-base sm:text-lg font-semibold px-8 py-4"
                  >
                    <a href={primaryCta.link} target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10">{primaryCta.text}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </AppButton>
                )}
                {secondaryCta && (
                  <AppButton
                    asChild
                    size="lg"
                    variant="secondary"
                    className="group transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] text-base sm:text-lg font-medium px-8 py-4 border-2 border-emerald-200 hover:border-emerald-300 bg-white/80 backdrop-blur-sm"
                  >
                    <Link to={secondaryCta.link}>
                      {secondaryCta.icon && <secondaryCta.icon className="w-5 h-5 mr-2" />}
                      {secondaryCta.text}
                    </Link>
                  </AppButton>
                )}
              </motion.div>

              {/* Stats - Mobile Optimized */}
              {stats && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="mt-8 sm:mt-12"
                >
                  <div className="bg-gradient-to-r from-emerald-900/95 to-emerald-800/95 backdrop-blur-md border border-emerald-700/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + 0.1 * index, duration: 0.6 }}
                          className="text-center sm:text-left group"
                        >
                          <div className="font-bold text-lg sm:text-xl text-emerald-200 mb-2 group-hover:text-emerald-100 transition-colors duration-200">
                            {stat.emoji}{' '}
                            {stat.number ? (
                              <>
                                <AnimatedCounter value={stat.number} suffix={stat.suffix || ''} /> {stat.label}
                              </>
                            ) : (
                              <>
                                {stat.label} {stat.labelSuffix && <span className="text-emerald-400/60 text-sm">{stat.labelSuffix}</span>}
                              </>
                            )}
                          </div>
                          <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
                            {stat.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Image Side - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-amber-400/20 rounded-3xl transform rotate-3 scale-105 blur-sm"></div>
                
                {/* Main image container */}
                <div className="relative floating-animation bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/50">
                  <img  
                    className="rounded-2xl w-full h-[280px] sm:h-[350px] lg:h-[420px] object-contain"
                    alt={image.alt} 
                    src={image.src} 
                  />
                </div>

                {/* Extra content badge */}
                {extraContent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                    className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-xl border border-white/50"
                  >
                    <div className="flex items-center space-x-2">
                      {extraContent.icon && <extraContent.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />}
                      <span className="font-semibold text-sm sm:text-base text-gray-800">{extraContent.text}</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;