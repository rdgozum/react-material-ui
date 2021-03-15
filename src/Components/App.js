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

  handleCategorySelect = category => {
    this.setState({
        category
    })
  }

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state

    console.log(this.state)

    return (
      <Fragment>
        <Header
          muscles={ muscles }
          onExerciseCreate = {this.handleExerciseCreate}
        />

        <Main
          exercise={ exercise }
          category={ category }
          exercises={ exercises }
          onSelect={ this.handleExerciseSelect }
        />

        <Footer
          muscles={ muscles }
          category={ category }
          onSelect={ this.handleCategorySelect }
        />
      </Fragment>
    )
  }
}
