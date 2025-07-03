import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocale } from "../src/locale";

const RecruitSection: React.FC = () => {
  const { t } = useLocale();
  return (
    <section className="py-24" style={{ backgroundColor: "#F2F6F8" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Text Content Section */}
          <div className="text-left">
            <h2 className="inline-block text-3xl font-light text-gray-800 tracking-widest relative pb-4 mb-8">
              飛び級
              <span className="absolute bottom-0 left-0 w-1/2 h-px bg-gray-400"></span>
            </h2>
            <h3 className="text-2xl font-semibold text-sky-600 mb-6 leading-relaxed">
              卓越した才能を、最短距離で開花させる。
            </h3>
            <p className="text-gray-600 leading-relaxed mb-10">
              私たちのプログラムでは、年齢や学年にとらわれず、個々の能力と情熱に応じて学習を進めることができます。優れた才能を持つ者が、その能力を最大限に発揮し、早期に専門分野で活躍するための環境を提供します。
            </p>
            <Link
              to="/tobikyu"
              className="group relative inline-block text-sky-600 font-medium border border-sky-600 px-12 py-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-sky-600 transform origin-bottom-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                {t("view_more")}
              </span>
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
              alt="Recruit Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruitSection;
