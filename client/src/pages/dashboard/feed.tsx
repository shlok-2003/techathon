import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { PostForm } from "@components/core/dashboard";
import { FaHeart } from "@/icons";

import { cn } from "@/lib/utils";

import { Box, Section, Main } from "@components/common/containers";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@components/common/card";

import { firestore } from "@/firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { toast } from "react-hot-toast";
import { PostProps } from "@/constants/type";

export default function Feed() {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const userId = localStorage.getItem("token");

                if (userId === null) {
                    toast.error("User not found", {
                        position: "bottom-right",
                    });
                    return;
                }

                const userDocRef = doc(firestore, "user", userId);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    const userData = userDocSnap.data();
                    setPosts(userData?.post);
                }

                toast.success("Posts fetched successfully", {
                    position: "bottom-right",
                });
            } catch (error) {
                toast.error("Failed to fetch posts", {
                    position: "bottom-right",
                });
            }
        }

        fetchPosts();
    }, []);

    async function handleLike(index: number) {
        try {
            const userId = localStorage.getItem("token");

            if (userId === null) {
                toast.error("User not found", {
                    position: "bottom-right",
                });
                return;
            }

            const userDocRef = doc(firestore, "user", userId);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                const updatedPosts = userData?.post.map((p, idx) => {
                    if (idx === index) {
                        return {
                            ...p,
                            likes: toggle ? p.likes - 1 : p.likes + 1,
                        };
                    }
                    return p;
                });

                await updateDoc(userDocRef, {
                    post: updatedPosts,
                });

                setToggle((prevState) => !prevState);

                toast.success("Post liked successfully", {
                    position: "bottom-right",
                });

                setPosts(updatedPosts);
            }
        } catch (error) {
            toast.error("Failed to fetch posts", {
                position: "bottom-right",
            });
        }
    }

    return (
        <Main className="space-y-6">
            <Section>
                <PostForm />
            </Section>
            <Section className="flex flex-col justify-center items-center">
                <Box>
                    <Box className="flex flex-col self-center gap-10">
                        {posts.map((post, index) => (
                            <Card
                                key={index}
                                className="flex flex-col gap-4 lg:w-[500px] md:w-[300px] w-[150px]">
                                <CardHeader>
                                    <Link
                                        to={`/dashboard/profile/${post?.uid}`}>
                                        Click to view User
                                    </Link>
                                    <img src={post.picture} alt="post" />
                                </CardHeader>
                                <CardContent>
                                    <CardTitle>{post.postText}</CardTitle>
                                </CardContent>
                                <CardFooter className="flex gap-2">
                                    <FaHeart
                                        className={cn("cursor-pointer", {
                                            "text-red-500": toggle,
                                            "text-gray-500": !toggle,
                                        })}
                                        onClick={() => handleLike(index)}
                                    />
                                    <span>{post.likes}</span>
                                </CardFooter>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Section>
        </Main>
    );
}
