import TypewriterComponent from 'typewriter-effect';

export function Typewriter() {
  return (
    <span className=" text-green-300 text-4xl lg:flex">
      {' '}
      <TypewriterComponent
        options={{
          strings: [
            'Front-end Junior',
            'Desenvolvedor Web e Mobile',
            'Entusiasta da tecnologia',
          ],
          autoStart: true,
          loop: true,
          cursorStyle: '_',
          typeSpeed: 70,
          deleteSpeed: 40,
          delaySpeed: 1000,
        }}
      />
    </span>
  );
}
