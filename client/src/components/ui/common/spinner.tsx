import { ColorRing } from "react-loader-spinner";
import { cn } from "@/lib/utils";
import React from "react";

import { Box } from "@components/common/containers";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

const Spinner = React.forwardRef<HTMLDivElement, BoxProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <Box className={cn(className)} {...props} ref={ref}>
                <ColorRing
                    colors={[
                        "#000000",
                        "#000000",
                        "#000000",
                        "#000000",
                        "#000000",
                    ]}
                />
                {children}
            </Box>
        );
    },
);

export { Spinner };
