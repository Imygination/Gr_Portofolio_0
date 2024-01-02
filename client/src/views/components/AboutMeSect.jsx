import "./AboutMeSect.css"

export default function AboutMeSect() {
  return (
    <>
      <section className="About-me">
        <div className="row pt-5">
          <div className="col-5 offset-2">
            <h3 className="pb-3">01. About me</h3>
            <h5>
              Hi! My name is Gema, I make things on Internet, It can be
              something usefull, or its just something crossed my mind.
            </h5>
            <h5>
              Create things such as Website application or Mobile Application is
              one of the things that fills my life. I enjoy when people have fun
              with my work.
            </h5>
            <h5>
              My interest on Programming started back when I was in collage,
              starting from programming a robot using C++, realizing that I can
              do more with programming make me here today.
            </h5>
          </div>
          <div className="col-3 ms-5">
            <img
              src="https://drive.google.com/uc?id=1K9dV62p-ZWW4kLLmxUXfs29uq6Aad4gu"
              className="img-fluid rounded-4"
              alt="Photo Profile"
            />
          </div>
        </div>
      </section>
    </>
  );
}
