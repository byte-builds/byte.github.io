import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const ContactSection = () => {
  const { t, isRTL } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('contact.title')}
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {isRTL
              ? 'دعنا نحول أفكارك إلى واقع رقمي'
              : "Let's turn your ideas into digital reality"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="group px-10 py-7 text-lg font-semibold"
            >
              {t('contact.cta')}
              <Arrow className="ms-2 h-5 w-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/2 left-10 w-20 h-20 border border-border/50 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.5, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-12 h-12 border border-border/50 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
      />
    </section>
  );
};

export default ContactSection;
