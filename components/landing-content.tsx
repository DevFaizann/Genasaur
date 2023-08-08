"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
    {
        name: "Mahir",
        avatar: "M",
        title: "Backend Developer",
        description: "best AI tool I've ever used!"
    },
    {
        name: "Gaurav",
        avatar: "G",
        title: "Marketing Executive",
        description: "It literally makes my work 10 TIMES FASTER!!"
    },
    {
        name: "Rajneesh",
        avatar: "R",
        title: "Software Engineer",
        description: "It has been a great experience with Genasaur."
    },
    {
        name: "Praneet",
        avatar: "P",
        title: "Stock Market Analyst",
        description: "its quite handful what you have got there"
    },
    {
        name: "Ritika",
        avatar: "R",
        title: "Blockchain Developer",
        description: "The code generation completed my work so quick that now i dont even have any more tasks to work on!!"
    },
]

export const LandingContent = () => {
    return(
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center  gap-x-2">
                                <div>
                                    <p className="text-lg">
                                        {item.name}
                                    </p>
                                    <p className="text-zinc-400 text-sm">
                                        {item.title}
                                    </p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}