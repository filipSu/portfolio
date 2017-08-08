import * as React from 'react';
import {Project} from '../misc/Project';
import Utilities from '../misc/Utilities';
import PlatformType from '../misc/PlatformType';
import ProjectDescription from './ProjectDescription';
import ProjectsSideNavigation from './ProjectsSideNavigation';

interface IProjectInfoPanelState {
  project: Project;
}
interface IProjectInfoPanelProps {
  params: any;
}


export class ProjectInfoPanel extends React.Component<IProjectInfoPanelProps, IProjectInfoPanelState> {

  static contextTypes = {router: React.PropTypes.object};

  constructor(props: IProjectInfoPanelProps) {
    super(props);
    const params = props.params;
    this.state = {
      project: Utilities.getProject(params.id)
    };
    if (this.state.project === null) {
      this.context.router.replace({ pathname: '/' });
    }
  }

  componentWillReceiveProps(newProps: IProjectInfoPanelProps) {
    let params = newProps.params;
    let project = Utilities.getProject(params.id);
    if (project !== null) {
      this.setProject(project);
    } else {
      this.context.router.replace({ pathname: '/' });
    }
  }

  render() {
    const sidebarColumnStyle = 'col-xs-12 row ';
    let project = this.state.project;

    return (
      <div className='sidebar row center col-xs-12 no-padding'>
        <div className='col-xs-2 no-padding row hide-xs show-md'>
          <ProjectsSideNavigation previousProject={project.previousProjectUrl} nextProject={project.nextProjectUrl}/>
        </div>
        <div className='col-xs-12 col-md-10 no-padding row'>
          {/*<ProjectsTopNavigation previousProject={project.previousProjectUrl} nextProject={project.nextProjectUrl}/>*/}
          <div className={sidebarColumnStyle + 'start bottom info-header'}>
            <h1>{project.title}</h1>
            <h2>{project.subtitle}</h2>
          </div>
          <div className={sidebarColumnStyle + 'center middle avatar-wrapper'}>
            <div className={'project-info-image ' + PlatformType[project.imageType]}>
              <img className={project.imageType === PlatformType.NONE ? 'hidden' : ''} src={PlatformType.getDeviceImageSrc(project.imageType)} />
            </div>
          </div>
          <div className={sidebarColumnStyle + 'start middle'}>
            <ProjectDescription
              platform={project.platforms}
              techs={project.technologies}
              goal={project.goal}
              role={project.role}>{project.description}</ProjectDescription>
          </div>
        </div>
      </div>
    );
  }

  private setProject(proj: Project) {
    this.setState({
      project: proj
    });
  }
}
