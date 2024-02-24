import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

import { Box, Section, Wrapper } from "@components/common/containers";
import { Typography } from "@components/common/typography";
import LeaderboardData from "@/data/social-impact";

function Leaderboard() {
    return (
        <Section className="w-full bg-white p-4 rounded-sm border border-gray-200">
            <strong className="text-gray-700 font-medium">Leaderboard</strong>
            <Box className="mt-4 flex flex-col gap-3">
                {LeaderboardData?.map((product) => (
                    <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="flex items-start hover:no-underline">
                        <Box className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
                            <img
                                className="w-full h-full object-cover rounded-sm"
                                src={product.profile_picture}
                                alt={product.username}
                            />
                        </Box>
                        <Box className="ml-4 flex-1">
                            <Typography
                                variant="p"
                                className="text-sm text-gray-800">
                                {product.username}
                            </Typography>
                            <Wrapper
                                className={cn(
                                    product.total_hours_volunteered === 0
                                        ? "text-red-500"
                                        : product.eco_friendly_actions > 50
                                          ? "text-green-500"
                                          : "text-orange-500",
                                    "text-xs font-medium",
                                )}>
                                {product.total_hours_volunteered === 0
                                    ? "Out of Stock"
                                    : product.eco_friendly_actions + " Merits"}
                            </Wrapper>
                        </Box>
                        <Box className="text-xs text-gray-400 pl-1.5">
                            <Wrapper
                                className={cn(
                                    product.total_hours_volunteered === 0
                                        ? "text-red-500"
                                        : product.eco_friendly_actions > 50
                                          ? "text-green-500"
                                          : "text-orange-500",
                                    "text-xs font-medium",
                                )}>
                                Total donations:{" "}
                            </Wrapper>
                            {product.total_donations}
                        </Box>
                    </Link>
                ))}
            </Box>
        </Section>
    );
}

export default Leaderboard;
