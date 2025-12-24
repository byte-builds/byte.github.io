import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-2xl font-bold text-foreground">Byte</div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Byte. {t('footer.rights')}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
