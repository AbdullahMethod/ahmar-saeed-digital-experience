import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
  texts: string[];
  className?: string;
}

const TypeWriter = ({ texts, className = '' }: Props) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setCharIndex(c => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && charIndex > 0) {
        setCharIndex(c => c - 1);
      } else {
        setDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, textIndex, texts]);

  return (
    <span className={className}>
      {texts[textIndex].slice(0, charIndex)}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-0.5 h-[1em] bg-primary ml-0.5 align-middle"
      />
    </span>
  );
};

export default TypeWriter;
