import { useState, useEffect } from 'react';

import { DownloadIcon } from '@heroicons/react/outline';
import { Socials } from '../Socials';
import { Motion } from '../Motion';

export function ContactContainer() {
  const [image, setImage] = useState({ avatar: '' });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.github.com/users/x-speedblack-x'
      );
      const data = await response.json();

      setImage({ avatar: data.avatar_url });
    }
    fetchData();
  }, []);

  return (
    <Motion className="mt-10 p-[45px]">
      <div className="flex flex-col justify-center items-center text-center gap-3 mt-16">
        <h2 className="text-3xl">
          Como <span className="text-purple-200">você</span> pode entrar em
          contato <span className="text-purple-200">comigo</span>?
        </h2>

        <img
          src={image.avatar}
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
    </Motion>
  );
}
