// src/js/components/Post.js

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions/index'

export class Post extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    // clling the new action creator
    this.props.getData('https://api.valentinog.com/api/link')
  }
  
  render() {
    return (
      <ul>
        {this.props.articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.main.remoteArticles.slice(0, 10)
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(Post)