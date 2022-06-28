import { ProjectsMain, Projects, PictureLink, ProjectPicture } from "./styles"
import { Title, Subtitle} from "../../styles"
import "animate.css"

import CurrencyConverterPicture from '../../../assets/static/currency-converter.png'
import DwayPicture from '../../../assets/static/dway.png'
import SocialFriendsPicture from '../../../assets/static/social-friends.png'

export function ProjectsSection(){
  return(
    <ProjectsMain id="projects">
      <Title>Projects</Title>
      <Projects>
        <div>
          <h2>Currency Converter</h2>
          <div>
          <PictureLink target="_blank" href="https://github.com/Douglas-Machado/currency-web">
            <ProjectPicture src={CurrencyConverterPicture} alt="currency-converter-picture" />
          </PictureLink>  
          </div>
        </div>
        <div>
          <h2>Dway</h2>
          <PictureLink target="_blank" href="https://github.com/Douglas-Machado/dway">
            <ProjectPicture src={DwayPicture} alt="dway-picture" />
          </PictureLink>
        </div>
        <div>
          <h2>College API</h2>
          <PictureLink target="_blank" href="https://github.com/Douglas-Machado/college-node">
            <div style={{
              borderRadius: "20px",
              width: "calc(1260px/3)",
              height: "211px",
              background: "lightgrey",
              paddingTop: "20%",
            }}>
              <Subtitle>API Backend</Subtitle>
            </div>
          </PictureLink>
        </div>
        <div>
          <h2>Social Friends(Coming soon)</h2>
          <PictureLink target="_blank" href="#">
            <ProjectPicture src={SocialFriendsPicture} alt="social-friends-picture" />
          </PictureLink>
        </div>
      </Projects>
    </ProjectsMain>
  )
}