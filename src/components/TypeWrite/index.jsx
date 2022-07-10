import TypewriterComponent from 'typewriter-effect'

export function Typewriter() {
  return (
    <span className=" text-green-300 ">
      {' '}
      <TypewriterComponent
        options={{
          strings: ['Front-end Junior', 'Desenvolvedor Web e Mobile', ''],

          autoStart: true,
          loop: true,
          cursorStyle: '_',
          typeSpeed: 70,
          deleteSpeed: 55,
          delaySpeed: 1000
        }}
      />
    </span>
  )
}

/* 
import React from 'react'
import TypewriterComponent from 'typewriter-effect'

export function Typewriter() {
  return (
    <TypewriterComponent
      options={{
        strings: [
          'Developer',
          'Deep Learning Engineer',
          'MERN Stack Developer',
          'Open Source Contributor'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  )
}
 */
