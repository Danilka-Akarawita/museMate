import { StudioType } from "../types/selectedPageEnums";

 const SampleData:Array<StudioType> = [
  {
    id:"1",
      name: "RecordEase ",
      description:
        "Your sonic haven for pristine recordings. Unparalleled clarity, advanced acoustics, and cutting-edge equipment create a masterpiece recording environment."
      //image: image1,
    ,
    chargePerHr: "2500",
    instruments: [
      {  
        itemName: "Keyboard",
        itemCount: 2,
        itemModel: "Motif",
        // itemImage: Keyboards,
      },
      {
        itemName: "Drum",
        itemCount: 1,
        itemModel: "Pearl",
        // itemImage: drum,
      },
      {
        itemName: "Rythem Guitar",
        itemCount: 2,
        itemModel: "Yamaha",
        // itemImage: rythem,
      },
      {
        itemName: "Bass Guitar",
        itemCount: 1,
        itemModel: "Yamaha",
        // itemImage: Bass,
      },
      {
        itemName: "Bass Amp",
        itemCount: 2,
        itemModel: "yamaha",
        // itemImage: bassAmp,
      },
    ],
  },
  {
    id:"2",
      name: "JamJive Lounge",
      description:"Versatile studio designed for lively band practices, where musicians jam, jive, and celebrate their shared musical language.",
    chargePerHr: "2500",
    instruments: [
      {
        itemName: "Keyboard",
        itemCount: 2,
        itemModel: "Motif",
        // itemImage: Keyboards,
      },
      {
        itemName: "Drum",
        itemCount: 1,
        itemModel: "Perl",
        // itemImage: drum,
      },
      {
        itemName: "Rythem Guitar",
        itemCount: 2,
        itemModel: "Yamaha",
        // itemImage: rythem,
      },
      {
        itemName: "Bass Guitar",
        itemCount: 1,
        itemModel: "Yamaha",
        // itemImage: Bass,
      },
      {
        itemName: "Bass Amp",
        itemCount: 2,
        itemModel: "yamaha",
        // itemImage: bassAmp,
      },
    ],
  },
  {
    id:"3",
      name: "RhythmRoost ",
      description:
        " Dynamic space for vibrant band practices, fostering collaboration and creativity for bands to refine their sound.",
    chargePerHr: "2500",
    instruments: [
      {
        itemName: "Keyboard",
        itemCount: 2,
        itemModel: "Motif",
        // itemImage: Keyboards,
      },
      {
        itemName: "Drum",
        itemCount: 1,
        itemModel: "Perl",
        // itemImage: drum,
      },
      {
        itemName: "Rythem Guitar",
        itemCount: 2,
        itemModel: "Yamaha",
        // itemImage: rythem,
      },
      {
        itemName: "Bass Guitar",
        itemCount: 1,
        itemModel: "Yamaha",
        // itemImage: Bass,
      },
      {
        itemName: "Bass Amp",
        itemCount: 2,
        itemModel: "yamaha",
        // itemImage: bassAmp,
      },
    ],
  },
    
];

export default SampleData;
