import { Loader } from "@/components/page-loader";

export default function Loading() {
    return (
        // <div className="fixed inset-0 bg-blue-500 z-[10000] flex flex-1 items-center justify-center">
        // Loading
        // </div>
        <div className="space-y-4 mt-4">

            <div className="p-8 rounded-lg w-full flex items-center
            justify-center bg-muted">
                <Loader/>
            </div>
        </div>

    );
}