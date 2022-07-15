export function Footer() {
  return (
    <footer className="mt-6 h-16 bg-[rgba(0,0,0,0.3)] flex items-center justify-center py-12  ">
      <div className="lg:flex gap-7">
        <p>Desenvolvedor Web e Mobile</p>

        <p>
          Criado com ♥ pelo{' '}
          <a
            href="https://github.com/x-speedblack-x"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-purple-600 hover:text-purple-200">
              Isaque.S
            </span>
          </a>{' '}
        </p>
        <p>Copyright © 2022 </p>
      </div>
    </footer>
  );
}
