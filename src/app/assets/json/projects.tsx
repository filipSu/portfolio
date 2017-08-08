import PlatformType from '../../misc/PlatformType';

const projects = [
  {
    id: 0,
    url: 'home-control-web-application',
    title: 'Home control web application',
    subtitle: 'Work',
    imageType: PlatformType.BROWSER,
    imageSrc: 'app/assets/images/devices_browser.svg', /* OBSOLETE / delete when time */
    thumbnail: 'app/assets/images/projects/beeeon/thumbnail.png',
    description: {
      short: 'Web application controlling modular, easily extensible and secure system for home control and automation',
      platform: ['All major browsers'],
      techs: ['AngularJS 1.x', 'ExpressJS 4.x', 'Grunt', 'npm', 'Bower', 'PostgreSQL', 'Photoshop'],
      goal: 'Reproduce <a href=\"http://www.beeeon.org\" target="_blank">BeeeOn</a> ' +
      '<a href="https://play.google.com/store/apps/details?id=com.rehivetech.beeeon" target="_blank">Android application</a> ' +
      'for home control as <a href="https://github.com/BeeeOn/server/tree/master/webapp" target="_blank">web application</a>',
      role: 'UI/UX design of new features, full front-end and partial back-end development',
      text: ''
    },
    screens : [
      {original: 'app/assets/images/projects/beeeon/1.png'},
      {original: 'app/assets/images/projects/beeeon/2.png'},
      {original: 'app/assets/images/projects/beeeon/3.png'},
      {original: 'app/assets/images/projects/beeeon/4.png'},
      {original: 'app/assets/images/projects/beeeon/5.png'},
      {original: 'app/assets/images/projects/beeeon/6.png'},
      {original: 'app/assets/images/projects/beeeon/7.png'},
      {original: 'app/assets/images/projects/beeeon/8.png'},
      {original: 'app/assets/images/projects/beeeon/9.png'},
      {original: 'app/assets/images/projects/beeeon/10.png'}
    ]
  },
  {
    id: 1,
    url: 'dragon-boat-manager',
    title: 'Dragon Boat Manager',
    subtitle: 'School project',
    imageType: PlatformType.ANDROID,
    imageSrc: 'app/assets/images/devices_android.svg', /* OBSOLETE / delete when time */
    thumbnail: 'app/assets/images/projects/dragon-boat-manager/thumbnail.png',
    description: {
      short: 'Application helping dragon boat trainers manage their crews and trainings',
      platform: ['Android'],
      techs: ['Java', 'Gradle', 'Android Studio', 'Photoshop'],
      goal: 'Help dragon boat trainers manage their crews and trainings',
      role: 'Full UI/UX design, implementation of several screens',
      text: 'Application capable of managing dragon boat crews and their training sessions. It provides classical sport' +
      ' statistical data (duration, speed, etc.), as well as in-boat weight distribution calculation.'
    },
    screens : [
      {original: 'app/assets/images/projects/dragon-boat-manager/1.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/2.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/3.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/4.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/5.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/6.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/7.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/8.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/9.png'}
    ]
  },
  {
    id: 2,
    url: 'intelligent-home-emulator',
    title: 'Intelligent home emulator',
    subtitle: 'Bachelor\'s thesis',
    imageType: PlatformType.PC,
    imageSrc: 'app/assets/images/devices_pc.svg',
    thumbnail: 'app/assets/images/projects/intelligent-home-emulator/thumbnail1.png',
    description: {
      short: 'Complex emulator of intelligent home hardware components to provide thorough system testing capabilities',
      platform: ['All operating systems'],
      techs: ['Java SE 8', 'JavaFX 2.2', 'Photoshop'],
      goal: 'Testing of other system layers and recording of statistical data about emulation' +
      ' contributing to system analysis',
      role: 'UI/UX design, full implementation',
      text: 'Complex emulator of intelligent home hardware components providing thorough system testing capabilities. ' +
      'Emulator can test end stations with detailed simulation or server capabilities with performance simulation ' +
      '(1000+ simultaneous connections to server).'
    },
    screens : [
      {original: 'app/assets/images/projects/intelligent-home-emulator/1.png'},
      {original: 'app/assets/images/projects/intelligent-home-emulator/2.png'},
      {original: 'app/assets/images/projects/intelligent-home-emulator/3.png'},
      {original: 'app/assets/images/projects/intelligent-home-emulator/4.png'}
    ]
  },
  {
    id: 3,
    url: 'risk-management',
    title: 'Risk management in projects',
    subtitle: 'School project',
    imageType: PlatformType.BROWSER,
    imageSrc: 'app/assets/images/devices_browser.svg',
    thumbnail: 'app/assets/images/projects/risk-management/thumbnail.png',
    description: {
      short: 'Information system created to support risk management in projects\n',
      platform: ['All major browsers'],
      techs: ['Nette framework', 'PHP', 'HTML', 'CSS', 'Photoshop'],
      goal: 'Application that would help mostly project managers to support risk management in projects',
      role: 'Full UI/UX design, logo design, partial implementation',
      text: ''
    },
    screens : [
      {original: 'app/assets/images/projects/risk-management/1.png'},
      {original: 'app/assets/images/projects/risk-management/2.png'},
      {original: 'app/assets/images/projects/risk-management/3.png'},
      {original: 'app/assets/images/projects/risk-management/4.png'},
      {original: 'app/assets/images/projects/risk-management/5.png'},
      {original: 'app/assets/images/projects/risk-management/6.png'},
      {original: 'app/assets/images/projects/risk-management/7.png'}
    ]
  },
  {
    id: 4,
    url: 'miscellaneous',
    title: 'Miscellaneous',
    subtitle: 'Freelance',
    imageType: PlatformType.BROWSER,
    imageSrc: 'app/assets/images/devices_browser.svg',
    thumbnail: 'app/assets/images/projects/miscellaneous/thumbnail.png',
    description: {
      short: 'All kinds of projects that I created over the years. Mainly websites of course :)',
      platform: [],
      techs: [],
      goal: '\"Practise makes the masters\" - Patrick Rothfuss',
      role: 'Full UI design and implementation',
      text: ''
    },
    screens : [
      {original: 'app/assets/images/projects/miscellaneous/hdc.png'},
      {original: 'app/assets/images/projects/miscellaneous/hcb.png'}
    ]
  }
];

export default projects;
