import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, LineChart } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Code,
      title: t('services.development'),
      description: t('services.development.desc'),
    },
    {
      icon: Palette,
      title: t('services.design'),
      description: t('services.design.desc'),
    },
    {
      icon: LineChart,
      title: t('services.strategy'),
      description: t('services.strategy.desc'),
    },
  ];

  return (
    <section id="services" className="py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {t('services.title')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t('services.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-background border border-border rounded-2xl p-8 hover:border-foreground/20 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-primary-foreground transition-all duration-300"
              >
                <service.icon className="w-6 h-6" />
              </motion.div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                  <span className="text-foreground">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
