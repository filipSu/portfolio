import * as React from 'react';
import ArrowDirection from '../misc/ArrowDirection';
import ArrowButton from './ArrowButton';
import ProjectCard from './ProjectCard';
import {ProjectCardInfo} from '../misc/ProjectCardInfo';
import Utilities from '../misc/Utilities';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Navigation from './Navigation';
import VisibilitySensor = require('react-visibility-sensor');
import BottomBar from './BottomBar';

interface IProjectsState {
  displayedProjects?: ProjectCardInfo[];
  currentPage?: number;
  lastPage?: number;
  showBottomBar?: boolean;
}
interface IProjectsProps {
  location: any;
  history: any;
}


export default class Projects extends React.Component<IProjectsProps, IProjectsState> {

  static contextTypes = {router: React.PropTypes.object};

  private static ITEMS_PER_PAGE = 3;
  private static DEFAULT_PAGE = 0;
  private _projects: ProjectCardInfo[];

  constructor(props: IProjectsProps) {
    super(props);
    this._projects = this.parseProjects();
    this.handleBottomBarVisibility = this.handleBottomBarVisibility.bind(this);
    this.state = {
      displayedProjects: [],
      currentPage: 0,
      lastPage: 0,
      showBottomBar: false
    };
  }

  componentDidMount() {
    this.updateDisplayedProjects(this.props);
  }

  componentWillReceiveProps(nextProps: IProjectsProps) {
    this.updateDisplayedProjects(nextProps);
  }

  render() {
    let {currentPage} = this.state;
    const previousPage = +currentPage - 1;
    const nextPage = +currentPage + 1;
    const cards = this.state.displayedProjects.map(function(project: any) {
      return (
        <div key={project.id} className='col-xs-12 row middle center'>
          <ProjectCard
            name={project.title}
            description={project.description}
            platformType={project.platform}
            url={project.url}
            thumbnail={project.thumbnail} />
        </div>
      );
    });
    const arrowLeft = +this.state.currentPage !== +Projects.DEFAULT_PAGE ?
      (<ArrowButton to={{ pathname: '/', query: {page: previousPage}}} direction={ArrowDirection.LEFT} />) : ('');
    const arrowRight = +this.state.currentPage !== +this.state.lastPage ?
      (<ArrowButton to={{ pathname: '/', query: {page: nextPage}}} direction={ArrowDirection.RIGHT} />) : ('');
    const bottomBar = this.state.showBottomBar ?
      (<BottomBar pagesMode={true} currentPage={+this.state.currentPage} lastPage={+this.state.lastPage} />) : ('');
    const visibilitySensor = (
      <VisibilitySensor
        onChange={this.handleBottomBarVisibility}
        partialVisibility={true}
        minTopValue={-300}
        scrollCheck={true}
        scrollDelay={50}/>
    );

    return (

      <div className='col-xs-12 row middle-xs start-lg projects no-padding'>
        <div className='row start middle projects-top'>
        </div>

        <div className='row center middle projects-middle'>
          <div className='col-xs-0 col-sm-1 no-padding hide-xs show-sm'>
            {arrowLeft}
          </div>
          <ReactCSSTransitionGroup
              component='div'
              className='col-xs-12 col-sm-10 projects-cards row no-padding center middle'
              transitionName='project-card'
              transitionAppear={false}
              transitionLeave={false}
              transitionEnterTimeout={400}>
              {cards}
          </ReactCSSTransitionGroup>
          <div className='col-xs-0 col-sm-1 no-padding hide-xs show-sm'>
            {arrowRight}
          </div>
        </div>
        {visibilitySensor}
        <div className='row middle center projects-bottom'>
          <div className='col-xs-5'>
            <Navigation currentPage={+this.state.currentPage} totalPages={+this.state.lastPage + 1} />
          </div>
        </div>
        {bottomBar}
      </div>
    );
  }

  private handleBottomBarVisibility(isVisible: boolean) {
    this.setState({
      showBottomBar: isVisible
    });
  }

  private updateDisplayedProjects(props: IProjectsProps) {
    // get page number - default is 0
    let {page = Projects.DEFAULT_PAGE} = props.location.query;
    // get pages count
    let pageCount = Utilities.getPageCount(this._projects.length, Projects.ITEMS_PER_PAGE);
    let newPage = false;
    // determine if given page number is in acceptable range
    if ( page < Projects.DEFAULT_PAGE) {
      newPage = true;
      page = 0;
    }else if (page > (pageCount - 1)) {
      newPage = true;
      page = pageCount - 1;
    }
    // if it isn't in range, change URL query
    if (newPage) {
      let {router} = this.context;
      router.replace({
        pathname: props.location.pathname,
        query: { page: page}
      });
    }else {
      // determine which projects should be shown
      this.updateProjects(page, pageCount);
    }
  }

  private updateProjects(startingPage: number, pageCount: number) {
    let projectsCount = this._projects.length;
    let chosenProjects = [];
    // should it display anything?
    if (projectsCount < 1) {
      return;
    }
    // determine array position of first project to be shown
    let startingNumber = startingPage * Projects.ITEMS_PER_PAGE;
    // try to get all displayable projects
    for (let _i = startingNumber; _i < (startingNumber + Projects.ITEMS_PER_PAGE); _i++) {
      // are there any more projects in array ?
      if (_i > (projectsCount - 1)) {
        break;
      }
      // add project to be displayed in temporary array
      chosenProjects.push(this._projects[_i]);
    }
    // should we show anything ?
    if (chosenProjects.length > 0) {
      this.setState({
        displayedProjects: chosenProjects,
        lastPage: (pageCount - 1),
        currentPage: startingPage
      });
    }
  }

  private parseProjects() {
    let projects = [];
    Utilities.getRawProjectsList().map(function(projectRaw: any) {
      projects.push(
        new ProjectCardInfo(
          projectRaw.id,
          projectRaw.title,
          projectRaw.url,
          projectRaw.description.short,
          projectRaw.imageType,
          projectRaw.thumbnail
        ));
    });
    return projects;
  }
}
