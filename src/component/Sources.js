import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

export class Source extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    var url = " https://newsapi.org/v1/sources?apiKey=73a15de7daa44888a6171f0b2f042a31";
    Request.get(url).then((response) => {
      this.setState({
        sources: response.body.sources
      });
    });
  }

  render() {
    var sources = _.map(this.state.sources, (source, i) => {
      return (
        <a key={i} onClick={() => this.props.onClick(source.id)} className="badge badge-pill badge-primary" style={{ marginRight: 5 }}>{source.id}</a>
      )
    });

    return (
      <div>{sources}</div>
    )
  }
}