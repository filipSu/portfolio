import * as React from 'react';
import my_info from '../assets/json/me';
import SocialIcon from './SocialIcon';

interface IMyInfoPanelState {}
interface IMyInfoPanelProps {
  isWide: boolean;
}


export class MyInfoPanel extends React.Component<IMyInfoPanelProps, IMyInfoPanelState> {

  constructor(props: IMyInfoPanelProps) {
    super(props);
  }

  render() {
    const sidebarColumnStyle = 'col-xs-12 row ';
    return (
      <div className='sidebar row center'>
        <div className={sidebarColumnStyle + 'start bottom info-header'}>
          <h1>{my_info.first_name}</h1>
          <h2>{my_info.last_name}</h2>
        </div>
        <div className={sidebarColumnStyle + 'center middle avatar-wrapper'}>
          <div className='col-xs-7 avatar'>
            <img src={my_info.portrait} />
          </div>
        </div>
        <div className={sidebarColumnStyle + 'start middle'}>
          <div className='col-xs-12  info-description' dangerouslySetInnerHTML={{__html: my_info.description}}>
          </div>
        </div>
        <div className={sidebarColumnStyle + 'around middle info-socials'}>
          {my_info.accounts.map(function(account: any, i: number) {
            return (
              <SocialIcon
                key={i}
                url={account.url}
                css_class={account.css_class}
                src={account.icon}
                title={account.name} />
            );
          })}
        </div>
      </div>
    );
  }
}
