export default function Header({ heading, subheading, sidenav }) {
 return (
  <header className="pt-9 pb-11 d-none d-md-block" style={{position: 'relative'}}>
    <div className="bg-image banner-image"></div>
    <div className="container-md">
      <div className="row align-items-center">
        {sidenav ? <div className="col-12 col-md-3"></div> : ''}
        <div className={sidenav ? "col-12 col-md-9" : "col-12 col-md-12"}>
          <h1 className="fw-bold text-white mb-2">{heading}</h1>
          <p className="fs-lg text-white mb-0">{subheading}</p>
        </div>
      </div>
    </div>
  </header>
 );
}