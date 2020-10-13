type MixContent = string | JSX.Element;
type CellContent = string | JSX.Element | JSX.Element[] | MixContent[];

declare interface IRowProps {
  contentList: CellContent[];
  rowStyle?: IObj;
}
