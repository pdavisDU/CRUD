import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
      <h1>Create a post</h1>
      <Form>
        <Form.Group>
          <Form.Control
            name="title"
            placeholder="Title"
            style={{ marginBottom: "1rem" }}
          />
          <Form.Control
            name="description"
            placeholder="Description"
            style={{ marginBottom: "1rem" }}
          />
        </Form.Group>
      </Form>
      <Button
        variant="outline-dark"
        style={{ width: "100%" }}
        onClick={() => navigate(-1)}
      >
        BACK
      </Button>
    </div>
  );
}

export default CreatePost;
