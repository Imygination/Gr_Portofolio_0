import "./MyProjectSect.css";

export default function MyProjectSect() {
  return (
    <>
      <section className="MyProject">
        <div className="row">
          <div className="col-5 mb-5">
            <h3>02. My Stuff Things</h3>
          </div>
          <div className="row">
            <div className="col-sm-4 mb-3 mb-sm-3">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-6 text-start">
                      <i className="bi bi-folder-fill"></i>
                    </div>
                    <div className="col-6 text-end">
                      <a
                        href="https://github.com/Imygination/ThriftyBite-Server.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-github" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Thrifty-Bite</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil ut cupiditate, velit vero aspernatur consequuntur
                    illum quasi quam necessitatibus consectetur repellat
                    laboriosam ea suscipit facere tempora possimus, quia libero
                    optio.
                  </p>
                </div>
                <div className="card-footer">JavaScript NodeJs ExpressJs</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
