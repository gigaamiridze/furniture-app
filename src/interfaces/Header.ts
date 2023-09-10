import { FontWeightType } from './Font';

export interface IHeaderProps {
  title: string;
  type: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  numberOfLines?: number;
  fontWeight?: FontWeightType; 
}
