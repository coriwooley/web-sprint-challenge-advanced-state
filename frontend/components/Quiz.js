import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Quiz(props) {
  const {quiz, fetchQuiz, postAnswer, selectedAnswer, selectAnswer} = props

  useEffect(() => {
    fetchQuiz()
  }, [])

  const handleClick = (id) => {
    selectAnswer(id)
  }

  const handleSubmit = e => {
    e.preventDefault()
    postAnswer({quiz_id : quiz.quiz_id, answer_id: selectedAnswer})
  }
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`${selectAnswer === quiz.answers[0].answer_id ? 'answer selected' : 'answer'}`}>
                {quiz.answers[0].text}
                <button onClick={() => handleClick(quiz.answers[0].answer_id)}>
                  {selectedAnswer === quiz.answers[0].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`${selectAnswer === quiz.answers[1].answer_id ? 'answer selected' : 'answer'}`}>
                {quiz.answers[1].text}
                <button onClick={() => handleClick(quiz.answers[1].answer_id)}>
                  {selectedAnswer === quiz.answers[1].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={!selectedAnswer} onClick={handleSubmit}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actionCreators)(Quiz)
