export default function Footer() {
  return (
    <>
    <div className="position-relative">
      <div className="shape shape-bottom shape-fluid-x text-dark">
        <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"/>
        </svg>
      </div>
    </div>
    <footer className="py-5 pt-6 bg-dark">
      <p className="text-center text-white mb-0">
        Copyright &copy; 2021. All Rights Reserved. Developed by Cooper Beltrami & Robert Bisset
      </p>
    </footer>
    </>
  );
};