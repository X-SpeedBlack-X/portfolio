import { motion } from 'framer-motion'

export function Projects() {
  return (
    <>
      <motion.div
        animate="translateEnd"
        initial="translateInitial"
        transition={{ duration: 0.7 }}
        variants={{
          translateEnd: { translateY: 0 },
          translateInitial: { translateY: 290 }
        }}
        className="mt-10 p-[45px]"
      >
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl">
            Meus <span className="text-purple-200">projetos</span>
          </h2>
          <p className="text-lg p-4">
            Aqui estão alguns projetos em que trabalhei recentemente
          </p>
        </div>
        <div className="flex justify-center">
          {' '}
          <img
            className="animate-float "
            src="assets/computerFloat.png"
            alt=""
            width={200}
            height={200}
          />
        </div>

        {/*  <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 ">
          <div className="bg-slate-900 p-3 flex flex-col items-center justify-center rounded-lg">
            <img src="assets/ignitelab.jpeg" alt="" width={200} />
            <h2>Uma plataforma de evento</h2>
          </div>
          <div className="bg-slate-900">io</div>
          <div className="bg-slate-900">io</div>
          <div className="bg-slate-900">io</div>
          <div className="bg-slate-900">io</div>
        </div> */}
      </motion.div>
    </>
  )
}
