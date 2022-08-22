import photoGrid from "../assets/photo-grid.png";

function Main() {
  return (
    <main>
      <div className="container">
        <div className="photo-grid">
          <img src={photoGrid} alt="photo" />
        </div>

        <div className="project-info">
          <h1 className="fs-primary-heading">Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Main;
