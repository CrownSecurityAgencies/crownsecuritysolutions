export interface Testimonial {
  id: number;
  quote: string;
  companyLogo: string;
  companyName: string;
  personName: string;
  title: string;
  rating: number;
}

export interface VideoTestimonial {
  id: number;
  thumbnail: string;
  videoUrl?: string;
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    thumbnail: "https://placehold.co/300x600.webp",
    videoUrl: "/videos/sample.mp4",
  },
  {
    id: 2,
    thumbnail: "https://placehold.co/300x600.webp",
    videoUrl: "/videos/sample.mp4",
  },
  {
    id: 3,
    thumbnail: "https://placehold.co/300x600.webp",
    videoUrl: "/videos/sample.mp4",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We are pleased and contended with the professionalism display by Crown, their staffs is well groomed and are doing a great job under trying circumstances.",
    companyLogo: "https://placehold.co/400x400.webp",
    companyName: "TVS",
    personName: "Mr. S. G. Chakalabi",
    title: "Sr. General Manager, TVS",
    rating: 5,
  },
  {
    id: 2,
    quote: "I would like to put on record my appreciation and thanks for the work you are doing and support you had given us over the past few years.",
    companyLogo: "https://placehold.co/400x400.webp",
    companyName: "DHL",
    personName: "Mr. Harshul Ashar",
    title: "Head – Security & Ops, DHL",
    rating: 5,
  },
  {
    id: 3,
    quote: "We are always keen to add our associates to our 'PREFERRED VENDORS LIST' but I must say very few make it, Crown Security Agencies did.",
    companyLogo: "https://placehold.co/400x400.webp",
    companyName: "MAHINDRA",
    personName: "Mr. Vijay Pawar",
    title: "Sr. Manager, Mahindra",
    rating: 5,
  },
    {
    id: 4,
    quote: "We are in SAFE hands since 13 years. Thank you being a PARTNER.",
    companyLogo: "https://placehold.co/400x400.webp",
    companyName: "ALF Engg Pvt Ltd.",
    personName: "Vinod Tipre",
    title: "Plant Head, ALF Engg Pvt Ltd.",
    rating: 5,
  },
];