import { useParams } from "react-router";
import { Box, Section, Main, Wrapper } from "@components/common/containers";
import { Typography } from "@components/common/typography";
import { Card, CardContent } from "@components/common/card";
import { Button } from "@components/common/button";

export default function Profile() {
    const { id } = useParams();

    const user = {
        name: "Danny McLoan",
        merits: 200,
        socialImpacts: 200,
        certificates: 2,
        image: "https://media.istockphoto.com/id/1691437841/photo/african-american-student-wearing-eyeglasses-holding-finger-near-face-looking-for-creative.jpg?s=2048x2048&w=is&k=20&c=igLAjgoXGEVvHavAUMHxeez4K2h852HH1tMTBbHuZQk=",
    };

    return (
        <Main className="flex flex-col justify-center items-center">
            {id ? (
                <Section className="flex flex-col gap-4 max-w-[800px]">
                    <Card className="m-2">
                        <CardContent className="flex flex-row p-3 gap-10">
                            <Box className="flex-1 rounded-md overflow-hidden object-cover bg-red-100">
                                <img
                                    src={user.image}
                                    className="object-fill w-full h-full object-center"
                                />
                            </Box>
                            <Box className="flex-1 flex flex-col  justify-center overflow-hidden gap-5 lg:py-8 md:py-5 sm:py-3 py-2">
                                <Box>
                                    <Typography
                                        variant="h3"
                                        className="max-sm:text-xl">
                                        {user.name}
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
                                        <Wrapper>{user.certificates}</Wrapper>
                                    </Box>
                                </Box>
                                <Button className="btn btn-primary">
                                    Follow
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Section>
            ) : (
                <Section className="flex flex-col gap-4  max-w-[800px]">
                    <Card className="m-2">
                        <CardContent className="flex flex-row p-3 gap-10">
                            <Box className="flex-1 rounded-md overflow-hidden object-cover bg-red-100">
                                <img
                                    src={user.image}
                                    className="object-fill w-full h-full object-center"
                                />
                            </Box>
                            <Box className="flex-1 flex flex-col  justify-center overflow-hidden gap-5 lg:py-8 md:py-5 sm:py-3 py-2">
                                <Box>
                                    <Typography
                                        variant="h3"
                                        className="max-sm:text-xl">
                                        {user.name}
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
                                        <Wrapper>{user.certificates}</Wrapper>
                                    </Box>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Section>
            )}
        </Main>
    );
}
