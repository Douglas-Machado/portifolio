import styled from "styled-components";

export const ProjectsMain= styled.section`
  margin: 0 auto;
  padding-top: 80px;
  text-align: center;
  margin-bottom: 104px;
  min-height: 740px;
`

export const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
`

export const PictureLink = styled.a`
  text-decoration: none;
  `

export const ProjectPicture = styled.img`
  width: calc(1200px/3);
  height: 211px;
  border: 2px solid black;
  border-radius: 20px;
`