export interface PostProps {
    userUrl: string;
    content: string;
    likes: number;
    image: string;
}

export interface CertificateProps {
    attributeImg: string;
    name: string;
}

export interface UserType {
    firstName: string;
    lastName: string;
    followers: number;

    merits: number;
    certificates: CertificateProps[];
    socialImpacts: number;
    profileImg: string;
    post: PostProps[];
}
