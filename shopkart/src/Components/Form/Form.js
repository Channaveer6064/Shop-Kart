import "./Form.css";
export const Form = () => {
  return (
    <form className="form-container">
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="form-input"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="form-input"
      />
      <input
        name="message"
        type="text"
        placeholder="Message"
        className="form-input"
      />
    </form>
  );
};
