import { html, render } from 'lit-html'
import aboutMeHTML from '../components/about-me.html'
import navbarHTML from '../components/navbar.html'
import skillsHTML from '../components/skills.html'
import experienceHTML from '../components/experience.html'
import projectsHTML from '../components/projects.html'
import contactHTML from '../components/contact.html'
import footerHTML from '../components/footer.html'

class Layout {
  PageLayout = () => {
    return html`
      <div>
        <div id="about-me">
          ${html([aboutMeHTML])}
        </div>
        ${html([navbarHTML])}
        <div id="skills">
          ${html([skillsHTML])}
        </div>
        <div id="experience">
          ${html([experienceHTML])}
        </div>
        <div id="projects">
          ${html([projectsHTML])}
        </div>
        <div id="contact">
          ${html([contactHTML])}
        </div>
        <div id="footer">
          ${html([footerHTML])}
        </div>
      </div>
    `
  }

  render() {
    render(this.PageLayout(), document.querySelector('#app'))
  }
}

export default Layout
