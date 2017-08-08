import * as React from 'react';
import {Link} from 'react-router';

interface IProjectsSideNavigationState {
}
interface IProjectsSideNavigationProps {
  previousProject?: string;
  nextProject?: string;
}


export default class ProjectsSideNavigation extends React.Component<IProjectsSideNavigationProps, IProjectsSideNavigationState> {

  private static PROJECT_URL = '/project/';

  constructor(props: IProjectsSideNavigationProps) {
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

    let previousProjectPath = ProjectsSideNavigation.PROJECT_URL + previousProject;
    let nextProjectPath = ProjectsSideNavigation.PROJECT_URL + nextProject;

    let previousLinkStyle, nextLinkStyle;

    if (previousProject == null) {
      previousLinkStyle = {opacity: 0, visibility: 'hidden'};
    }
    if (nextProject === null) {
      nextLinkStyle = {opacity: 0, visibility: 'hidden'};
    }

    return (
      <div className='projects-navigation-side row middle-xs center-xs'>
        <div className='row col-xs-12 center no-padding'>
          <Link style={previousLinkStyle} to={previousProjectPath} className={previousClass} />
          {allProjects}
          <Link style={nextLinkStyle} to={nextProjectPath} className={nextClass} />
        </div>
      </div>
    );
  }
}
