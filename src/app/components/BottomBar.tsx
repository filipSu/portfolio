import * as React from 'react';
import {Link} from 'react-router';

interface IBottomBarState {
}
interface IBottomBarProps {
  lastPage?: number;
  currentPage?: number;
  pagesMode?: boolean;
  projectsMode?: boolean;
  previousProject?: string;
  nextProject?: string;
}


export default class BottomBar extends React.Component<IBottomBarProps, IBottomBarState> {

  private static PROJECT_URL = '/project/';

  constructor(props: IBottomBarProps) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    let {pagesMode = false, projectsMode = false, previousProject, nextProject} = this.props;
    let previousClass = 'previous' + (pagesMode ? ' previous_page' : '') + (projectsMode ? ' previous_project' : '');
    let nextClass = 'next' + (pagesMode ? ' next_page' : '') + (projectsMode ? ' next_project' : '');
    let allProjects = projectsMode ? (<Link to='/' className='all-projects'/>) : '';

    let {currentPage = 0, lastPage = -1} = this.props;
    let previousPagePath = { pathname: '/', query: {page: (+currentPage - 1)}};
    let nextPagePath = { pathname: '/', query: {page: (+currentPage + 1)}};

    let previousProjectPath = BottomBar.PROJECT_URL + previousProject;
    let nextProjectPath = BottomBar.PROJECT_URL + nextProject;

    let previousLinkStyle, nextLinkStyle;
    if (pagesMode) {
      if (currentPage === 0) {
        previousLinkStyle = {opacity: 0, visibility: 'hidden'};
      }
      if (currentPage === lastPage) {
        nextLinkStyle = {opacity: 0, visibility: 'hidden'};
      }
    }else if (projectsMode) {
      if (previousProject == null) {
        previousLinkStyle = {opacity: 0, visibility: 'hidden'};
      }
      if (nextProject === null) {
        nextLinkStyle = {opacity: 0, visibility: 'hidden'};
      }
    }

    return (
      <div className='navigation-panel show-xs hide-md row middle between'>
        <Link style={previousLinkStyle} to={pagesMode ? previousPagePath : previousProjectPath} className={previousClass} />
        {allProjects}
        <Link style={nextLinkStyle} to={pagesMode ? nextPagePath : nextProjectPath} className={nextClass} />
      </div>
    );
  }
}
