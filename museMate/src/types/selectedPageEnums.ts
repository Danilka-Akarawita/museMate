export  enum SELECTEDPAGE{
    HOME="home",
    STUDIOS="studios",
    CONTACTUS="contactus",
    ABOUTUS="aboutus",
    BENEFITS="benefits"
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface StudioType {
    id:string,
    name: string;
  description: string;
  image?: string;
  }
  
  