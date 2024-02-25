export interface PostProps {
    uid: string;
    postText: string;
    likes: number;
    picture: string;
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
