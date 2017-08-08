import * as React from 'react';
import Utilities from '../misc/Utilities';


interface IProjectDescriptionState {

}
interface IProjectDescriptionProps {
  platform?: string[];
  techs?: string[];
  goal?: string;
  role?: string;
}


export default class ProjectDescription extends React.Component<IProjectDescriptionProps, IProjectDescriptionState> {

  constructor(props: IProjectDescriptionProps) {
    super(props);
  }

  render() {
    const text = this.props.children,
      goal = this.props.goal,
      platforms = this.props.platform,
      techs = this.props.techs,
      role = this.props.role;
    const style = {
      category: 'project-info-text col-xs-2 description-category',
      categoryText: 'project-info-text col-sm-9 col-xs-8 description-category-text',
      text: 'project-info-text col-xs-11 description-text no-padding'
    };
    return (
      <div className='row center top col-xs-12'>
        <div className='row start top col-xs-11 no-padding'>
          {platforms && platforms.length > 0 ? (
            <div className='project-info-text col-sm-3 col-xs-2 description-category'>
              Platform:
            </div>
          ) : ('')}
          {platforms && platforms.length > 0 ? (
            <div className='project-info-text col-sm-offset-0 col-sm-8 col-xs-7 col-xs-offset-1 description-category-text'>
              {platforms.map((platform,key) =>
                <span key={key} >{Utilities.isLastIn(platforms,key) ? platform : platform + ', '}</span>
              )}
            </div>
          ) : ('')}
          {techs && techs.length > 0 ? (
            <div className={style.category}>
              Techs:
            </div>
          ) : ('')}
          {techs && techs.length > 0 ? (
            <div className={style.categoryText}>
              {techs.map((tech,key) =>
                <span key={key} >{Utilities.isLastIn(techs,key) ? tech : tech + ', ' }</span>
              )}
            </div>
          ) : ('')}
          <div className={style.category}>
            Goal:
          </div>
          <div className={style.categoryText} dangerouslySetInnerHTML={{__html: goal}}>
          </div>
          <div className={style.category}>
            Role:
          </div>
          <div className={style.categoryText} dangerouslySetInnerHTML={{__html: role}}>
          </div>
        </div>
        <div className={style.text}>
          {text}
        </div>
      </div>
    );
  }
}
