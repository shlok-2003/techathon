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
        username: "Sandeep Yadav",
        image: "https://www.americamagazine.org/sites/default/files/main_image/20170316T1124-575-CNS-LENT-HELP-HOMELESS.jpg",
        text: "Spreading warmth, one meal at a time. 🍲 #FeedingHope",
    },
    {
        id: 2,
        username: "Shreyansh Shukla",
        image: "https://i0.wp.com/blog.giveindia.org/wp-content/uploads/cropped-YKW.jpg?fit=778%2C437&ssl=1",
        text: "Igniting minds with knowledge, one session at a time.📚 #Empowerment",
    },
    {
        id: 3,
        username: "Nikhil Sharma",
        image: "https://th.bing.com/th/id/R.a0d9e7f8f383d7dde3674a112bb2464d?rik=H3R%2b4fViJJvwug&riu=http%3a%2f%2fwww.theglobalrealty.com%2fwp-content%2fuploads%2f2018%2f04%2fClothes-Distribution-Drive-by-Emaar-India-at-Gurgaon-Greens-on-Dwarka__-Expressway-01.jpg&ehk=Ev9Zidv%2fxWibeqLUQfBr7gbsID6rLeUU90qAVZvajDY%3d&risl=&pid=ImgRaw&r=0",
        text: "Bringing warmth and dignity through clothing donations. #ClotheTheNeedy",
    },
    {
        id: 4,
        username: "Shlok Prajapati",
        image: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2015/12/soundofhope.jpg",
        text: "Dressing dreams, one garment at a time. #ClotheWithLove",
    },
    {
        id: 5,
        username: "Virat Kohli",
        image: "https://staticg.sportskeeda.com/wp-content/uploads/2016/06/vkf-1465130100-800.jpg",
        text: "This is a post",
    },
    {
        id: 6,
        username: "MS Dhoni",
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
                                    <Link to={`/dashboard/profile/${post?.id}`}>
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
