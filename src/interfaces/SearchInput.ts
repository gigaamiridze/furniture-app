export interface ISearchInputProps {
  placeholder: string;
  firstIcon: string;
  secondIcon: string;
  onPress?: () => void; 
  onSearch?: (searchValue: string) => void;
}
