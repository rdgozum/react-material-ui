import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Main from './Main'
import { muscles, exercises } from '../store.js'

export default class extends Component {
  state = {
    exercises,
    category: ''
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

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category } = this.state

    return (
      <Fragment>
        <Header />

        <Main exercises={ exercises } category={ category }/>

        <Footer muscles={ muscles } category={ category } onSelect={ this.handleCategorySelected }/>
      </Fragment>
    )
  }
}
