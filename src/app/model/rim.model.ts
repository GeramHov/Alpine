export default interface IRim {
  name: string;
  selection: string
  price: number;
  option: string;
  photos: Array<{
    color: string,
    photo: string
  }>

}