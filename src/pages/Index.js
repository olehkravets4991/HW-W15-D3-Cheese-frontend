import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const cheese = useLoaderData();

  return (
    <div>
        <h2>Create a Cheese</h2>
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="cheese name"/>
            <input type="text" name="title" placeholder="cheese title"/>
            <input type="text" name="image" placeholder="cheese image"/>
            <input type="submit" value="Create Cheese"/>
        </Form>
      {cheese.map((chs, index) => {
        return (
          <div key={chs._id} className="chs">
            <Link to={`/${chs._id}`}>
              <h1>{chs.name}</h1>
            </Link>
            <img src={chs.image} alt={chs.name} />
            <h3>{chs.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Index;