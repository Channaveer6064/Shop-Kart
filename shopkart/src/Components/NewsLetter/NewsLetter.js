import "./NewsLetter.css";
import { Form } from "../../Components/Form/Form";
export default function NewsLetter() {
  return (
    <div className="newsletter-container">
      <img
        src="/img/newsletter-background.png"
        className="newsletter-background"
      />
      <div className="newsletter-form-container">
        <div>
          <span id="newsletter-text">Newslleter</span>
          <p>
            Get news about articles and updates
            <br />
            in your inbox.
          </p>
        </div>
        <Form />
      </div>
      <h1>
        get <br />
        in touch
      </h1>
      <button>send</button>
    </div>
  );
}
