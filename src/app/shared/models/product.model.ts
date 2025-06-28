export interface IProduct {
  id: string;
  examID: string;
  title: string;
  items?: string[];
  video: [
    {
      ru: string,
      kz: string
    }
  ];
  audio: [
    {
      ru: string,
      kz: string
    }
  ];
  books: {
      ru: IFile[];
      kz: IFile[]
    };
  laws: {
    ru: IFile[];
    kz: IFile[]
  };
  price: number;
  duration: number;
}

export interface IFile {
  name: string;
  file: string;
}
