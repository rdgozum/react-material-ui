import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Main from './Main'
import { muscles, exercises } from '../store.js'

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise]

        return exercises
      }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
        category
    })
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state

    console.log(this.state)

    return (
      <Fragment>
        <Header />

        <Main
          exercise={ exercise }
          category={ category }
          exercises={ exercises }
          onSelect={ this.handleExerciseSelected }
        />

        <Footer
          muscles={ muscles }
          category={ category }
          onSelect={ this.handleCategorySelected }
        />
      </Fragment>
    )
  }
}
