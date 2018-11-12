import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div style={{textAlign:'left', textDecoration: 'none', position: 'absolute', bottom: '1rem', left: '1rem'}}>
            <div>
                <p>Mentor-Program Week12 Homework1. Made by <a href="https://github.com/Lidemy/mentor-program-2nd-zzly00" style={{color: '#ff9280',textDecoration: 'none'}}>Lin <i className="fab fa-github"></i></a>.</p>
            </div>
        </div>
      </footer>
    )
  }
}