import {Project} from './Project';
/*import projects from '../assets/json/test-projects';*/
import projects from '../assets/json/projects';
import ReactGA from 'react-ga';

export default class Utilities {
  static isLastIn(arr: any[], item: number) {
    return item === arr.length - 1;
  }

  static fromRawToProject(projectRaw: any) {
    return new Project(projectRaw.id, projectRaw.url, projectRaw.title, projectRaw.subtitle, projectRaw.imageType,
      projectRaw.imageSrc, projectRaw.description.short, projectRaw.description.platform, projectRaw.description.techs,
      projectRaw.description.goal, projectRaw.description.role, projectRaw.description.text,
      projectRaw.screens,
      projectRaw.previousProjectUrl ? projectRaw.previousProjectUrl : null,
      projectRaw.nextProjectUrl ? projectRaw.nextProjectUrl : null);
  }

  static getPageCount(itemsCount: number, itemsPerPage: number) {
    let fullPages = Math.floor(itemsCount / itemsPerPage);
    let rest = itemsCount % itemsPerPage > 0;
    return rest ? (fullPages + 1) : fullPages;
  }

  static getRawProjectObject(url: string) {
    let filteredProjects = projects.filter(function (item: any) {
      if (item.url === url) {
        let currentIndex = projects.indexOf(item);
        let previousIndex = +currentIndex - 1, nextIndex = +currentIndex + 1;
        if (previousIndex >= 0) {
          item.previousProjectUrl = projects[previousIndex].url;
        }
        if (nextIndex < projects.length) {
          item.nextProjectUrl = projects[nextIndex].url;
        }
        return true;
      }
      return false;
    });
    if (filteredProjects.length > 0) {
      return filteredProjects[0];
    }else {
      return null;
    }
  }

  static getProject(url: string) {
    let rawProject = Utilities.getRawProjectObject(url);
    if (rawProject === null) {
      return null;
    }
    return Utilities.fromRawToProject(rawProject);
  }

  static getRawProjectsList() {
    return projects;
  }

  static initGa() {
    console.log('GA init');
    ReactGA.initialize('UA-103566093-1');
  }

  static logPageView() {
    console.log('Logging pageview for ' + window.location.pathname);
    ReactGA.set({ page: window.location.pathname});
    ReactGA.pageview(window.location.pathname);
  }
}
