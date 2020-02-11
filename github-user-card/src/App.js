import React, { Component } from 'react';
import axios from 'axios';
import GitHubCards from './components/GithubCards';

class App extends Component {
  state = {
    selfCard: [],
    followersArray: [],
    users: [
      "garybot",
      "Nobro777",
      "amberlowe1001",
      "tdefriess",
      "MarioR81",
      "kaverndsp",
      "KrystalGuzman",
      "tetondan",
      "dustinmyers",
      "justsml",
      "luishrd",
      "bigknell"
  ]

  }

  componentDidMount(){
    axios.get('https://api.github.com/users/steven-matos')
    .then(res => {
      this.setState({
        selfCard: res.data
      })
    })
    .catch(err => {
      console.error('you are getting an error of ', err);
    })

    this.state.users.forEach(data => {
      axios.get(`https://api.github.com/users/${data}`)
        .then(res => {
          console.log(res.data)
          this.setState({
            followersArray: [...this.state.followersArray, res.data]
        });
      })
        .catch(err => {
          console.error('you are getting an error of ', err);
        })
    }, [])
  }

  render() {
    console.log('this is my card info',this.state.followersArray)
    return (
      <div>
      <h1>GitHub User Cards</h1>
        <div className='container'>
            <GitHubCards  key={this.state.selfCard.id}
                          img={this.state.selfCard.avatar_url}
                          name={this.state.selfCard.name}
                          username={this.state.selfCard.login}
                          location={this.state.selfCard.location}
                          profile_url={this.state.selfCard.html_url}
                          followers={this.state.selfCard.followers}
                          following={this.state.selfCard.following}
                          bio={this.state.selfCard.bio}
            />
            {this.state.followersArray.map(data => 
              <GitHubCards key={data.id}
                           img={data.avatar_url}
                           name={data.name}
                           username={data.login}
                           location={data.location}
                           profile_url={data.html_url}
                           followers={data.followers}
                           following={data.following}
                           bio={data.bio}
              />
            )}
        </div>
      </div>
    );
  }
}

export default App;