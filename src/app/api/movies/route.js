import { getAllMovieData } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const data = await getAllMovieData();
        const resData = data.results.reduce((acc, cur) => {
            acc.push({
                id: cur.id,
                title: cur.title,
                poster_path: cur.poster_path,
                backdrop_path: cur.backdrop_path,
                vote_average: cur.vote_average,
                overview: cur.overview,
            })

            return acc;
        }, [])

        return NextResponse.json(resData);
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
}