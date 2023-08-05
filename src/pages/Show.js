import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const chs = useLoaderData();
  console.log(chs);

  return (
    <div className="chs">
      <h1>{chs.name}</h1>
      <h2>{chs.title}</h2>
      <img src={chs.image} alt={chs.name} />

    <h2>Update {chs.name}</h2>
    <Form action={`/update/${chs._id}`} method="post">
        <input type="text" name="name" placeholder="cheese name" defaultValue={chs.name}/>
        <input type="text" name="title" placeholder="cheese title" defaultValue={chs.title}/>
        <input type="text" name="image" placeholder="cheese image" defaultValue={chs.image}/>
        <input type="submit" value="Update Cheese"/>
    </Form>

    <h2>Delete Cheese</h2>
    <Form action={`/delete/${chs._id}`} method="post">
        <input type="submit" value="Delete Cheese"/>
    </Form>
    </div>
  );
}

export default Show;