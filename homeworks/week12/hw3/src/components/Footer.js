import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="row" style={{margin: '2rem auto 0', width: '100%'}}>
            <div className="col-10">
                <p>Mentor-Program Week12 Homework3. Made by <a href="https://github.com/Lidemy/mentor-program-2nd-zzly00">Lin <i className="fab fa-github"></i></a>.</p>
                <p>Based on <a href="https://getbootstrap.com" rel="nofollow" target="_blank">Bootstrap</a>. Icons from <a href="http://fontawesome.io/" rel="nofollow" target="_blank">Font Awesome</a>. Web fonts from <a href="https://fonts.google.com/" rel="nofollow" target="_blank">Google</a>.</p>
            </div>
            <div className="col-2">
                <a href="#top" className="float-right" style={{fontSize: '2rem'}}><i className="far fa-arrow-alt-circle-up"></i></a>
            </div>
        </div>
      </footer>
    )
  }
}