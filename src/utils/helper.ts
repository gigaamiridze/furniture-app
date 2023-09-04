/**
* Returns the appropriate font family based on the weight.
* @param {string} baseFont - The desired font in case you're using something
  different in your later projects
* @param {string} weight - The desired font weight(e.g., 'normal', 'bold', '600')
* @returns {string} - The appropriate font family for the platform.
*/

type FontWeightType = 
  'thin' | '100' | 
  'extraLight' | '200' | 
  'light' | '300' | 
  'normal' | '400' | 
  'medium' | '500' | 
  'semiBold' | '600' | 
  'bold' | '700' | 
  'extraBold' | '800' | 
  'black' | '900'
;
type FontFamilyType = 'Poppins';

export const getFontFamily = (baseFont: FontFamilyType = 'Poppins', weight: FontWeightType) => {
  switch (weight) {
    case 'thin':
    case '100':
      return `${baseFont}-Thin`;
    case 'extraLight':
    case '200':
      return `${baseFont}-ExtraLight`;
    case 'light':
    case '300':
      return `${baseFont}-Light`;
    case 'normal':
    case '400':
      return `${baseFont}-Regular`;
    case 'medium':
    case '500':
      return `${baseFont}-Medium`;
    case 'semiBold':
    case '600':
      return `${baseFont}-SemiBold`;
    case 'bold':
    case '700':
      return `${baseFont}-Bold`;
    case 'extraBold':
    case '800':
      return `${baseFont}-ExtraBold`;
    case 'black':
    case '900':
      return `${baseFont}-Black`;
    default:
      return `${baseFont}-Regular`;
  }
}