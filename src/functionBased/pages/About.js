import React from "react"
import { Link, Route, useRouteMatch } from "react-router-dom"
import SinglePage from "./SinglePage"

const About = (props) => {
    //console.log(props)
    //console.log(useRouteMatch)
    const { url, path } = useRouteMatch()
    //Then, Update the return statement so you have:
    return (
        <div className="about__content">
            <ul className="about__list">
                <li>
                    <Link to={`${url}/about-app`}>About App</Link>
                </li>
                <li>
                    <Link to={`${url}/about-author`}>About Author</Link>
                </li>
            </ul>
            <Route path={`${path}/:slug`}>
                <SinglePage />
            </Route>
        </div>
    )
}

export default About