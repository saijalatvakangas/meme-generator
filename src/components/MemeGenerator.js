import React, { Component } from 'react';

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data;
        this.setState({allMemeImgs: memes})
      })
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // prevent page refresh
    const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randomImgUrl = this.state.allMemeImgs[randomNum].url;
    this.setState({ randomImg: randomImgUrl });
  }

  render() {
    return (
      <div className="main-content">
          <form className="meme-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="topText"
              placeholder="Top text"
              value={this.state.topText}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="bottomText"
              placeholder="Bottom text"
              value={this.state.bottomText}
              onChange={this.handleChange}
            />
            <button>Change picture</button>
          </form>
          <div className="meme">
            <img src={this.state.randomImg} alt="meme"/>
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
      </div>
    )
  }
}

export default MemeGenerator;
