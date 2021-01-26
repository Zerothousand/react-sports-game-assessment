import React from 'react'
import ScoreBoard from '../Scoreboard/Scoreboard'
import Team from '../Team/Team'


class Game extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            resetCount: 0,
            homeTeamStats: {
                shots: 0,
                score: 0
            },
            visitingTeamStats: {
                shots: 0,
                score: 0
            }
        }
        this.shootSound = new Audio('./assets/audio/sword-swing.wav')
        this.scoreSound = new Audio()
    }

    shoot = (team) => {
        const teamStatsKey = `${team}TeamStats`
        // console.log(teamStatsKey)
        // console.log(this.state[teamStatsKey])
        let score = this.state[teamStatsKey].score
        this.shootSound.play()

        if (Math.random() > 0.5){
            score +=1

            setTimeout(() => {
                this.scoreSound.play()
            }, 275)

        }
        this.setState((state, props) => ({
            [teamStatsKey] : {
            shots: state[teamStatsKey].shots + 1,
            score
            }
        }))
    }

    resetGame = () => {
        this.setState((state, props) => ({
            resetCount: state.resetCount += 1,
            homeTeamStats: {
                shots: 0,
                score: 0
            },
            visitingTeamStats: {
                shots: 0,
                score: 0
            }
        }))
    }

    render() {
        return (
            <div className="Game">
                <ScoreBoard 
                    visitingTeamStats={this.state.visitingTeamStats}
                    homeTeamStats={this.state.homeTeamStats}
                />
                <h1>Welcome to {this.props.venue}</h1>
                <div className="stats">
                    <Team
                        name={this.props.homeTeam.name}
                        logo={this.props.homeTeam.logoSrc}
                        stats={this.state.homeTeamStats}
                        shotHandler={() => this.shoot('home')}
                    />
                    <div className="versus">
                        <h1>VS</h1>
                        <div>
                            <strong>Resets:</strong> {this.state.resetCount}
                            <button onClick={this.resetGame}>Reset Game</button>
                        </div>
                    </div>
                    <Team
                        name={this.props.awayTeam.name}
                        logo={this.props.awayTeam.logoSrc}
                        stats={this.state.visitingTeamStats}
                        shotHandler={() => this.shoot('visiting')}
                    />
                </div>
            </div>
        )
    }
}

export default Game 