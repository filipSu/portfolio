import * as React from 'react';
import {Link} from 'react-router';

interface IProjectsTopNavigationState {
}
interface IProjectsTopNavigationProps {
  previousProject?: string;
  nextProject?: string;
}


export default class ProjectsTopNavigation extends React.Component<IProjectsTopNavigationProps, IProjectsTopNavigationState> {

  private static PROJECT_URL = '/project/';

  constructor(props: IProjectsTopNavigationProps) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    let {previousProject, nextProject} = this.props;
    let previousClass = 'previous previous_project';

    let nextClass = 'next next_project';
    let allProjects = <Link to='/' className='all-projects'/>;

    let previousProjectPath = ProjectsTopNavigation.PROJECT_URL + previousProject;
    let nextProjectPath = ProjectsTopNavigation.PROJECT_URL + nextProject;

    let previousLinkStyle, nextLinkStyle;

    if (previousProject == null) {
      previousLinkStyle = {opacity: 0, visibility: 'hidden'};
    }
    if (nextProject === null) {
      nextLinkStyle = {opacity: 0, visibility: 'hidden'};
    }

    return (
      <div className='navigation-panel top hide-xs show-md row middle between'>
        <Link style={previousLinkStyle} to={previousProjectPath} className={previousClass} />
        {allProjects}
        <Link style={nextLinkStyle} to={nextProjectPath} className={nextClass} />
      </div>
    );
  }
}
