// import { Loader } from "../components/Layout";
import AppLayout from "../components/Layout/AppLayout";
import { Card } from "../components/homepage/";

function Homepage() {
  return (
    <AppLayout>
      <div className="homepage">
        <div className="introduction">
          <div className="about">
            <h2>About Student Companion</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates fugiat ipsum et facilis repellat cupiditate doloribus
              aut, neque inventore animi, dolorum, delectus odio aliquid maxime
              quod fuga incidunt voluptate similique! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maxime, veritatis culpa.
              Voluptatibus distinctio voluptate ut nobis quis provident dolores
              inventore neque. Rem officia sint accusantium necessitatibus
              perspiciatis quibusdam reprehenderit provident. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Impedit aliquam, dolorum
              ducimus, enim ipsum dolores dolore repellat facilis eius doloribus
              ut labore, modi quos eos quam minima reprehenderit sint tenetur?
            </p>
          </div>
        </div>

        {/* THe feaatures part of the page, where more details will be provided about the application's features */}
        <div className="features">
          <h2>Features of Student Companion</h2>
          <div className="cards">
            <Card cardName="Forums" />
            <Card cardName="Planer" />
            <Card
              cardName="Resources"
              cardDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus id earum..."
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Homepage;
