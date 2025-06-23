export interface WorkItem {
    name: string;
    desc: string;
}

export interface JobCategory {
    name: string;
    desc: string;
    jobs: string;
}

export interface Testimonial {
    name: string;
    testimonial: string;
    rating: number;
}

export interface FooterLink {
    title: string;
    links: string[];
}