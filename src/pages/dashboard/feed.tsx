import { Link } from "react-router-dom";
import { PostForm } from "@components/core/dashboard";
import { FaHeart } from "@/icons";

import { Box, Section, Main } from "@components/common/containers";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@components/common/card";

const postData = [
    {
        id: 1,
        username: "John Doe",
        image: "https://media.istockphoto.com/id/1691437841/photo/african-american-student-wearing-eyeglasses-holding-finger-near-face-looking-for-creative.jpg?s=2048x2048&w=is&k=20&c=igLAjgoXGEVvHavAUMHxeez4K2h852HH1tMTBbHuZQk=",
        text: "This is a post",
    },
    {
        id: 1,
        username: "John Doe",
        image: "https://media.istockphoto.com/id/1691437841/photo/african-american-student-wearing-eyeglasses-holding-finger-near-face-looking-for-creative.jpg?s=2048x2048&w=is&k=20&c=igLAjgoXGEVvHavAUMHxeez4K2h852HH1tMTBbHuZQk=",
        text: "This is a post",
    },
    {
        id: 1,
        username: "John Doe",
        image: "https://media.istockphoto.com/id/1691437841/photo/african-american-student-wearing-eyeglasses-holding-finger-near-face-looking-for-creative.jpg?s=2048x2048&w=is&k=20&c=igLAjgoXGEVvHavAUMHxeez4K2h852HH1tMTBbHuZQk=",
        text: "This is a post",
    },
    {
        id: 1,
        username: "John Doe",
        image: "https://media.istockphoto.com/id/1691437841/photo/african-american-student-wearing-eyeglasses-holding-finger-near-face-looking-for-creative.jpg?s=2048x2048&w=is&k=20&c=igLAjgoXGEVvHavAUMHxeez4K2h852HH1tMTBbHuZQk=",
        text: "This is a post",
    },
    {
        id: 1,
        username: "John Doe",
        image: "https://media.istockphoto.com/id/1691437841/photo/african-american-student-wearing-eyeglasses-holding-finger-near-face-looking-for-creative.jpg?s=2048x2048&w=is&k=20&c=igLAjgoXGEVvHavAUMHxeez4K2h852HH1tMTBbHuZQk=",
        text: "This is a post",
    },
    {
        id: 1,
        username: "John Doe",
        image: "https://media.istockphoto.com/id/1691437841/photo/african-american-student-wearing-eyeglasses-holding-finger-near-face-looking-for-creative.jpg?s=2048x2048&w=is&k=20&c=igLAjgoXGEVvHavAUMHxeez4K2h852HH1tMTBbHuZQk=",
        text: "This is a post",
    },
];

export default function Feed() {
    return (
        <Main className="space-y-6">
            <Section>
                {/* User post data in this component */}
                <PostForm />
            </Section>
            <Section className="flex flex-col justify-center items-center">
                <Box>
                    <Box className="flex flex-col self-center gap-10">
                        {postData.map((post, index) => (
                            <Card
                                key={index}
                                className="flex flex-col gap-4 lg:w-[500px] md:w-[300px] w-[150px]">
                                <CardHeader>
                                    <Link to={`/profile/${post?.id}`}>
                                        {post?.username}
                                    </Link>
                                    <img src={post.image} alt="post" />
                                </CardHeader>
                                <CardContent>
                                    <CardTitle>{post.text}</CardTitle>
                                </CardContent>
                                <CardFooter>
                                    <FaHeart className="text-red-500 cursor-pointer" />
                                </CardFooter>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Section>
        </Main>
    );
}
