import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FloatingQuizCTA = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className=""
    >
      <Link to="/quiz">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 p-1.5 px-3 bg-white rounded-full shadow-lg border border-gray-200 cursor-pointer"
        >
          <span className="text-lg">✨</span>
          <span className="font-semibold text-xs text-gray-700">Quiz</span>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default FloatingQuizCTA;