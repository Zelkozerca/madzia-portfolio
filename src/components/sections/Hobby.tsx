import { FC } from 'react';
import Image from 'next/image';
import { hobbies } from '@config';

const Hobby: FC = () => {
  return (
    <div className="flex flex-col text-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-white">Hobby</h2>
      <div className="w-full flex flex-wrap items-center justify-center py-8 md:py-16">
        {hobbies.map(hobby => (
          <div className="relative bg-yellow w-48 h-48 sm:w-44 sm:h-44 md:w-40 md:h-40 m-2">
            <Image
              src={hobby.img}
              alt={`hobby-${hobby.name}`}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bg-yellow flex items-center justify-center w-full h-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p>{hobby.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobby;