
export  interface HeadingsTypes{
  Heading: string;
  Title: string;
  Description?: string;
  align?: "left" | "center";
  button?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}



export    interface ImageTextSectionProps {
  imageSrc: string;
  heading: string;
  description: string;
  buttonText?: string;
  reverse?: boolean; 
}




export    interface HeroSectionProps{
  Heading : string
  description : string
  ButtonText : string
  LeftHeading : string
  LeftDesciption: string
  cardDescOne: string
  cardDescTwo: string
  cardDescThree:string
}
