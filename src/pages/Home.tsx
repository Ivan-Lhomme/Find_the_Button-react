import { useState, type JSX } from "react";

const MESSAGE = {
  right: ["Good click ! You pass to the second level !"],
  wrong: [
    "Good try !",
    "Nope !",
    "You did it ! ... No i just kidding xD !",
    "Re-try, you can did it !",
  ],
};

function getRandomIndex(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function Home(): JSX.Element {
  const [message, setMessage] = useState({
    show: false,
    text: "",
  });

  return (
    <>
      {message.show && (
        <div className="modals-message">
          <p>{message.text}</p>
        </div>
      )}
      <header>
        <h1>
          FIND THE{" "}
          <button
            onClick={() => {
              setMessage({
                show: true,
                text: MESSAGE.wrong[getRandomIndex(0, MESSAGE.wrong.length)],
              });

              setTimeout(
                () =>
                  setMessage({
                    show: false,
                    text: "",
                  }),
                3000,
              );
            }}
          >
            BUTTON
          </button>
        </h1>
      </header>

      <section>
        <h2>
          You have to find all hidden buttons on this site to win !{" "}
          <b>(WIP site)</b>
        </h2>

        <p>
          To start you have to click on the <i>start</i> button.
          <br />
          Oh and you have access to <i>hint</i> on the top right.
        </p>
      </section>

      <footer>
        <p>Created 9/06/2023 and not finished</p>
      </footer>
    </>
  );
}
