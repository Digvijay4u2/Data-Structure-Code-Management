import React, { useEffect, useState } from "react";
import "./QuestionForm.css";

function QuestionForm({ handleQuestionState }) {
  
  const [questionDetails, setQuestionDetails] = useState([
    { title: "", link: "", topic: "", id: 0, details: "" },
  ]);

  const [errorMessage, setErrorMessage] = useState("");


  const addMoreQuestion = () => {
    if (questionDetails.length > 5) {
      setErrorMessage("Max No. Of Questions Reached");
      return;
    }

    setQuestionDetails((prevState) => [
      ...prevState.concat([
        {
          title: "",
          link: "",
          topic: "array",
          id: prevState[prevState.length - 1].id + 1,
          details: "",
        },
      ]),
    ]);
  };

  useEffect(() => {
    handleQuestionState(questionDetails)

  },[questionDetails])

  const cancelQues = (index) => {
    setQuestionDetails((prevState) => prevState.filter((q) => q.id !== index));
  };
  
  

  return (
    <div className="question__form__main__container">
      {errorMessage && (
        <div className="error__container">
          {errorMessage}
          <div className="cross__btn" onClick={() => setErrorMessage("")}>
            X
          </div>
        </div>
      )}
      <form method="POST">
        {questionDetails.map((q, qIndex) => (
          <div className="question__form__sub__container">
            <div className="question__form__header">
              <div className="question__form__header__text">{`Add No. ${
                qIndex + 1
              } Question: `}</div>
              {qIndex > 0 && (
                <div className="cross__btn" onClick={() => cancelQues(q.id)}>
                  X
                </div>
              )}
            </div>
            <div className="input__container">
              <label>Title: </label>
              <input
                value={q.title}
                onChange={(e) => {
                  setQuestionDetails((prevState) => {
                    let tempState = [...prevState];
                    tempState.splice(qIndex, 1, {
                      ...q,
                      title: e.target.value,
                    });
                    return tempState;
                  });
                }}
              />
            </div>
            <div className="input__container">
              <label>Link: </label>
              <input
                value={q.link}
                onChange={(e) => {
                  setQuestionDetails((prevState) => {
                    let tempState = [...prevState];
                    tempState.splice(qIndex, 1, {
                      ...q,
                      link: e.target.value,
                    });
                    return tempState;
                  });
                }}
              />
            </div>
            <div className="input__container">
              <label>Topic: </label>
              <select
                onChange={(e) => {
                  setQuestionDetails((prevState) => {
                    let tempState = [...prevState];
                    tempState.splice(qIndex, 1, {
                      ...q,
                      topic: e.target.value,
                    });
                    return tempState;
                  });
                }}
              >
                {["array", "linked list", "graph"].map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="input__container details__container">
              <label>Details: </label>
              <textarea
                value={q.details}
                onChange={(e) => {
                  setQuestionDetails((prevState) => {
                    let tempState = [...prevState];
                    tempState.splice(qIndex, 1, {
                      ...q,
                      details: e.target.value,
                    });
                    return tempState;
                  });
                }}
              />
            </div>
          </div>
        ))}
      </form>

      <button onClick={addMoreQuestion} className="add__more__button">
        Add More...
      </button>
    </div>
  );
}

export default QuestionForm
