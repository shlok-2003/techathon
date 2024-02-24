import { IoBagHandle, IoPieChart, IoPeople } from "@/icons";
import { Box, Section, Wrapper } from "@components/common/containers";

export default function DashboardStatsGrid() {
    return (
        <Section className="flex gap-4">
            <Box className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
                <Box className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                    <IoBagHandle className="text-2xl text-white" />
                </Box>
                <Box className="pl-4">
                    <Wrapper className="text-sm text-gray-500 font-light">
                        Total impacts
                    </Wrapper>
                    <Box className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            54232
                        </strong>
                        <Wrapper className="text-sm text-green-500 pl-2">
                            +343
                        </Wrapper>
                    </Box>
                </Box>
            </Box>
            <Box className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
                <Box className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
                    <IoPieChart className="text-2xl text-white" />
                </Box>
                <Box className="pl-4">
                    <Wrapper className="text-sm text-gray-500 font-light">
                        Efforts Taken
                    </Wrapper>
                    <Box className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            3423
                        </strong>
                        <Wrapper className="text-sm text-green-500 pl-2">
                            -343
                        </Wrapper>
                    </Box>
                </Box>
            </Box>
            <Box className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
                <Box className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
                    <IoPeople className="text-2xl text-white" />
                </Box>
                <Box className="pl-4">
                    <Wrapper className="text-sm text-gray-500 font-light">
                        Helps Given
                    </Wrapper>
                    <Box className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            12313
                        </strong>
                        <Wrapper className="text-sm text-red-500 pl-2"></Wrapper>
                    </Box>
                </Box>
            </Box>
        </Section>
    );
}
