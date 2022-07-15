import { motion } from 'framer-motion';
import { DownloadIcon } from '@heroicons/react/outline';
import { Socials } from '../Socials';

export function ContactContainer() {
  return (
    <motion.div
      animate="rotateEnd"
      initial="rotateInitial"
      transition={{ duration: 0.7 }}
      variants={{
        rotateEnd: { rotateY: 0 },
        rotateInitial: { rotateY: 200 },
      }}
      className="mt-10 p-[45px]"
    >
      <div className="flex flex-col justify-center items-center text-center gap-3">
        <h2 className="text-3xl">
          Como <span className="text-purple-200">você</span> pode entrar em
          contato <span className="text-purple-200">comigo</span>?
        </h2>

        <img
          src="assets/profile.jpeg"
          alt="foto de perfil pessoal"
          width={130}
          height={130}
          className="rounded-full border-2 border-green-300 "
        />

        <a
          href="assets/Curriculo.pdf"
          download
          className="flex justify-center items-center gap-2 bg-green-500 text-violet-900 hover:bg-green-400 transition-colors w-44 h-14 rounded-md"
        >
          Baixar CV
          <DownloadIcon className="w-6 h-6" />
        </a>
      </div>
      <div>
        <Socials />
      </div>
    </motion.div>
  );
}
