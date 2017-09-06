enum PlatformType {
  NONE,
  AVATAR,
  ANDROID,
  BROWSER,
  PC
}

namespace PlatformType {
  export function getImageSrc(type: PlatformType) {
    let source = '';
    switch (type) {
      case PlatformType.ANDROID:
        source = 'app/assets/images/android.svg';
        break;
      case PlatformType.BROWSER:
        source = 'app/assets/images/browser.svg';
        break;
      case PlatformType.PC:
        source = 'app/assets/images/pc.svg';
        break;
      case PlatformType.AVATAR:
      case PlatformType.NONE:
        source = '';
        break;
      default:
        source = '';
        break;
    }
    return source;
  }

  export function getDeviceImageSrc(type: PlatformType) {
    let source = '';
    switch (type) {
      case PlatformType.ANDROID:
        source = 'app/assets/images/devices_android.svg';
        break;
      case PlatformType.BROWSER:
        source = 'app/assets/images/devices_browser.svg';
        break;
      case PlatformType.PC:
        source = 'app/assets/images/devices_pc.svg';
        break;
      case PlatformType.AVATAR:
      case PlatformType.NONE:
        source = '';
        break;
      default:
        source = '';
        break;
    }
    return source;
  }
}

export default PlatformType;
