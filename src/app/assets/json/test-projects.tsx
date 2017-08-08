import PlatformType from '../../misc/PlatformType';

const projects = [
  {
    id: 0,
    url: 'dragon-boat-manager',
    title: 'Dragon Boat Manager',
    subtitle: 'School project',
    imageType: PlatformType.ANDROID,
    imageSrc: 'app/assets/images/devices_android.svg', /* OBSOLETE / delete when time */
    thumbnail: 'app/assets/images/projects/dragon-boat-manager/thumbnail.svg',
    description: {
      short: 'Application helping dragon boat trainers manage their crews and trainings',
      platform: ['Android'],
      techs: ['Java', 'Android Studio', 'Photoshop'],
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
    id: 1,
    url: 'intelligent-home-emulator',
    title: 'Intelligent home emulator',
    subtitle: 'Bachelor\'s thesis',
    imageType: PlatformType.PC,
    imageSrc: 'app/assets/images/devices_browser.svg',
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
    id: 2,
    url: 'another-project2',
    title: 'Another project2',
    subtitle: 'School project',
    imageType: PlatformType.BROWSER,
    imageSrc: 'app/assets/images/devices_browser.svg',
    thumbnail: 'app/assets/images/projects/dragon-boat-manager/thumbnail.svg',
    description: {
      short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vestibulum sodales.' +
      ' Nulla interdum libero eu porta varius. Nullam velit arcu, rhoncus ut enim sed1',
      platform: ['Any web browser'],
      techs: ['Java', 'Android Studio', 'Photoshop'],
      goal: 'Help dragon boat trainers manage their crews and trainings',
      role: 'UI/UX design, implementation of several screens',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
      'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
      'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
      'velit esse cillum dolore. '
    },
    screens : [
      {original: 'app/assets/images/projects/dragon-boat-manager/1.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/2.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/3.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/4.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/detailed.png'}
    ]
  },
  {
    id: 3,
    url: 'another-project3',
    title: 'Another project3',
    subtitle: 'School project',
    imageType: PlatformType.BROWSER,
    imageSrc: 'app/assets/images/devices_browser.svg',
    thumbnail: 'app/assets/images/projects/dragon-boat-manager/thumbnail.svg',
    description: {
      short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vestibulum sodales.' +
      ' Nulla interdum libero eu porta varius. Nullam velit arcu, rhoncus ut enim sed1',
      platform: ['Any web browser'],
      techs: ['Java', 'Android Studio', 'Photoshop'],
      goal: 'Help dragon boat trainers manage their crews and trainings',
      role: 'UI/UX design, implementation of several screens',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
      'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
      'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
      'velit esse cillum dolore. '
    },
    screens : [
      {original: 'app/assets/images/projects/dragon-boat-manager/1.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/2.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/3.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/4.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/detailed.png'}
    ]
  },
  {
    id: 4,
    url: 'another-project4',
    title: 'Another project4',
    subtitle: 'School project',
    imageType: PlatformType.BROWSER,
    imageSrc: 'app/assets/images/devices_browser.svg',
    thumbnail: 'app/assets/images/projects/dragon-boat-manager/thumbnail.svg',
    description: {
      short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vestibulum sodales.' +
      ' Nulla interdum libero eu porta varius. Nullam velit arcu, rhoncus ut enim sed1',
      platform: ['Any web browser'],
      techs: ['Java', 'Android Studio', 'Photoshop'],
      goal: 'Help dragon boat trainers manage their crews and trainings',
      role: 'UI/UX design, implementation of several screens',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
      'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
      'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
      'velit esse cillum dolore. '
    },
    screens : [
      {original: 'app/assets/images/projects/dragon-boat-manager/1.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/2.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/3.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/4.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/detailed.png'}
    ]
  },
  {
    id: 5,
    url: 'another-project5',
    title: 'Another project5',
    subtitle: 'School project',
    imageType: PlatformType.BROWSER,
    imageSrc: 'app/assets/images/devices_browser.svg',
    thumbnail: 'app/assets/images/projects/dragon-boat-manager/thumbnail.svg',
    description: {
      short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vestibulum sodales.' +
      ' Nulla interdum libero eu porta varius. Nullam velit arcu, rhoncus ut enim sed1',
      platform: ['Any web browser'],
      techs: ['Java', 'Android Studio', 'Photoshop'],
      goal: 'Help dragon boat trainers manage their crews and trainings',
      role: 'UI/UX design, implementation of several screens',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
      'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
      'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
      'velit esse cillum dolore. '
    },
    screens : [
      {original: 'app/assets/images/projects/dragon-boat-manager/1.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/2.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/3.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/4.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/detailed.png'}
    ]
  },
  {
    id: 6,
    url: 'another-project6',
    title: 'Another project6',
    subtitle: 'School project',
    imageType: PlatformType.BROWSER,
    imageSrc: 'app/assets/images/devices_browser.svg',
    thumbnail: 'app/assets/images/projects/dragon-boat-manager/thumbnail.svg',
    description: {
      short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vestibulum sodales.' +
      ' Nulla interdum libero eu porta varius. Nullam velit arcu, rhoncus ut enim sed1',
      platform: ['Any web browser'],
      techs: ['Java', 'Android Studio', 'Photoshop'],
      goal: 'Help dragon boat trainers manage their crews and trainings',
      role: 'UI/UX design, implementation of several screens',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
      'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
      'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
      'velit esse cillum dolore. '
    },
    screens : [
      {original: 'app/assets/images/projects/dragon-boat-manager/1.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/2.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/3.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/4.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/detailed.png'}
    ]
  },
  {
    id: 7,
    url: 'another-project7',
    title: 'Another project7',
    subtitle: 'School project',
    imageType: PlatformType.BROWSER,
    imageSrc: 'app/assets/images/devices_browser.svg',
    thumbnail: 'app/assets/images/projects/dragon-boat-manager/thumbnail.svg',
    description: {
      short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vestibulum sodales.' +
      ' Nulla interdum libero eu porta varius. Nullam velit arcu, rhoncus ut enim sed1',
      platform: ['Any web browser'],
      techs: ['Java', 'Android Studio', 'Photoshop'],
      goal: 'Help dragon boat trainers manage their crews and trainings',
      role: 'UI/UX design, implementation of several screens',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
      'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
      'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
      'velit esse cillum dolore. '
    },
    screens : [
      {original: 'app/assets/images/projects/dragon-boat-manager/1.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/2.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/3.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/4.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/detailed.png'}
    ]
  },
  {
    id: 8,
    url: 'another-project8',
    title: 'Another project8',
    subtitle: 'School project',
    imageType: PlatformType.BROWSER,
    imageSrc: 'app/assets/images/devices_browser.svg',
    thumbnail: 'app/assets/images/projects/dragon-boat-manager/thumbnail.svg',
    description: {
      short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vestibulum sodales.' +
      ' Nulla interdum libero eu porta varius. Nullam velit arcu, rhoncus ut enim sed1',
      platform: ['Any web browser'],
      techs: ['Java', 'Android Studio', 'Photoshop'],
      goal: 'Help dragon boat trainers manage their crews and trainings',
      role: 'UI/UX design, implementation of several screens',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
      'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
      'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
      'velit esse cillum dolore. '
    },
    screens : [
      {original: 'app/assets/images/projects/dragon-boat-manager/1.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/2.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/3.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/4.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/detailed.png'}
    ]
  },
  {
    id: 9,
    url: 'another-project9',
    title: 'Another project9',
    subtitle: 'School project',
    imageType: PlatformType.BROWSER,
    imageSrc: 'app/assets/images/devices_browser.svg',
    thumbnail: 'app/assets/images/projects/dragon-boat-manager/thumbnail.svg',
    description: {
      short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vestibulum sodales.' +
      ' Nulla interdum libero eu porta varius. Nullam velit arcu, rhoncus ut enim sed1',
      platform: ['Any web browser'],
      techs: ['Java', 'Android Studio', 'Photoshop'],
      goal: 'Help dragon boat trainers manage their crews and trainings',
      role: 'UI/UX design, implementation of several screens',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
      'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
      'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
      'velit esse cillum dolore. '
    },
    screens : [
      {original: 'app/assets/images/projects/dragon-boat-manager/1.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/2.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/3.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/4.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/detailed.png'}
    ]
  },
  {
    id: 10,
    url: 'another-project10',
    title: 'Another project10',
    subtitle: 'School project',
    imageType: PlatformType.BROWSER,
    imageSrc: 'app/assets/images/devices_browser.svg',
    thumbnail: 'app/assets/images/projects/dragon-boat-manager/thumbnail.svg',
    description: {
      short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis vestibulum sodales.' +
      ' Nulla interdum libero eu porta varius. Nullam velit arcu, rhoncus ut enim sed1',
      platform: ['Any web browser'],
      techs: ['Java', 'Android Studio', 'Photoshop'],
      goal: 'Help dragon boat trainers manage their crews and trainings',
      role: 'UI/UX design, implementation of several screens',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
      'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
      'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
      'velit esse cillum dolore. '
    },
    screens : [
      {original: 'app/assets/images/projects/dragon-boat-manager/1.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/2.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/3.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/4.png'},
      {original: 'app/assets/images/projects/dragon-boat-manager/detailed.png'}
    ]
  }
];

export default projects;
