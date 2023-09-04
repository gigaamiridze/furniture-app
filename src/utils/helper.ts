/**
* Returns the appropriate font family based on the weight.
* @param {string} baseFont - The desired font in case you're using something
  different in your later projects
* @param {string} weight - The desired font weight(e.g., 'normal', 'bold', '600')
* @returns {string} - The appropriate font family for the platform.
*/

type FontWeightType = '100' | '200' | '300' | 'normal' | '400' | '500' | '600' | 'bold' | '700' | '800' | '900';
type FontFamilyType = 'Poppins';

export const getFontFamily = (baseFont: FontFamilyType = 'Poppins', weight: FontWeightType) => {
  switch (weight) {
    case '100':
      return `${baseFont}-Thin`;
    case '200':
      return `${baseFont}-ExtraLight`;
    case '300':
      return `${baseFont}-Light`;
    case 'normal':
    case '400':
      return `${baseFont}-Regular`;
    case '500':
      return `${baseFont}-Medium`;
    case '600':
      return `${baseFont}-SemiBold`;
    case 'bold':
    case '700':
      return `${baseFont}-Bold`;
    case '800':
      return `${baseFont}-ExtraBold`;
    case '900':
      return `${baseFont}-Black`;
    default:
      return `${baseFont}-Regular`;
  }
}
