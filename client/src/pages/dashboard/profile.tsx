import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Button } from "@components/common/button";
import { Typography } from "@components/common/typography";
import { Card, CardContent } from "@components/common/card";
import { Spinner } from "@components/common/spinner";
import { Box, Main, Section, Wrapper } from "@components/common/containers";

import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/firebase/firebase";

import { toast } from "react-hot-toast";
import { UserType } from "@/constants/type";

export default function Profile() {
    const { id } = useParams();
    const [user, setUser] = useState<UserType | null>(null);

    const abortController = new AbortController();
    const signal = abortController.signal;          // to be added

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem("token");

                if (userId === null) {
                    toast.error("User not found", {
                        position: "bottom-right",
                    });
                    return;
                }

                const userDocRef = doc(firestore, "user", userId);
                const userDocSnapshot = await getDoc(userDocRef);

                if (userDocSnapshot.exists()) {
                    setUser(userDocSnapshot.data() as UserType);
                } else {
                    console.error("User document not found");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();

        return () => {
            abortController.abort();
            setUser(null);
        };
    }, []);

    return (
        <Main className="flex flex-col justify-center items-center">
            <Section className="flex flex-col gap-4 max-w-[800px]">
                {user !== null ? (
                    <Card className="m-2">
                        <CardContent className="flex flex-row p-3 gap-10">
                            <Box className="flex-1 rounded-md overflow-hidden object-cover bg-red-100">
                                <img
                                    src={user.profileImg}
                                    className="object-fill w-full h-full object-center"
                                    alt="User"
                                />
                            </Box>
                            <Box className="flex-1 flex flex-col justify-center overflow-hidden gap-5 lg:py-8 md:py-5 sm:py-3 py-2">
                                <Box>
                                    <Typography
                                        variant="h3"
                                        className="max-sm:text-xl">
                                        {`${user.firstName} ${user.lastName}`}
                                    </Typography>
                                </Box>
                                <Box className="bg-pure-gray-100 overflow-hidden max-md:flex-col rounded-md flex flex-row gap-2 p-2 justify-around">
                                    <Box className="flex flex-col items-start">
                                        <Wrapper className="font-bold">
                                            Merits
                                        </Wrapper>
                                        <Wrapper>{user.merits}</Wrapper>
                                    </Box>
                                    <Box className="flex flex-col items-start">
                                        <Wrapper className="font-bold">
                                            Social Impacts
                                        </Wrapper>
                                        <Wrapper>{user.socialImpacts}</Wrapper>
                                    </Box>
                                    <Box className="flex flex-col items-start">
                                        <Wrapper className="font-bold">
                                            Certificates
                                        </Wrapper>
                                        <Wrapper>
                                            {user.certificates.length}
                                        </Wrapper>
                                    </Box>
                                </Box>

                                {id !== undefined ? (
                                    <Button className="btn btn-primary">
                                        Follow
                                    </Button>
                                ) : (
                                    <Box className="flex justify-center items-center flex-col gap-3">
                                        <Button
                                            className="btn btn-primary"
                                            disabled>
                                            Edit Profile
                                        </Button>

                                        <Box className="font-bold">
                                            {user.followers} Followers
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        </CardContent>
                    </Card>
                ) : (
                    <Spinner />
                )}
            </Section>
        </Main>
    );
}
