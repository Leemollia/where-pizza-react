import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={0.5}
    width={560}
    height={139}
    viewBox="0 0 560 139"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="135" y="83" rx="6" ry="6" width="88" height="29" /> 
    <rect x="135" y="11" rx="3" ry="3" width="422" height="19" /> 
    <rect x="135" y="44" rx="3" ry="3" width="422" height="27" /> 
    <rect x="10" y="158" rx="3" ry="3" width="178" height="6" /> 
    <rect x="9" y="8" rx="0" ry="0" width="115" height="105" />
  </ContentLoader>
)

export default MyLoader