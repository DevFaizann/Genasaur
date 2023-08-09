import { Suspense } from "react";

import Loading from "./loading";

const LandingLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
    return ( 
        <main className="h-full bg-[#111827] overflow-auto">
            <div className="mx-auto max-w-screen-xl h-full w-full">
            <Suspense fallback={<Loading />}>{children}</Suspense>
            </div>

        </main>
     );
}
 
export default LandingLayout;