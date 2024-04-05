import { getAllMovieData, getSingleMovieData } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const movieId = params?.id;
    try {
        const data = await getSingleMovieData(movieId);

        if (data) {
            return NextResponse.json(data);
        } else {
            return NextResponse.json({
                status: 404,
                message: `This movie with ${movieId} id was not found!`,
            });
        }
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
}

//patch with title
export async function PATCH(req, { params }) {
    const movieId = params?.id;
    const title = await req.json();

    try {
        const data = await getSingleMovieData(movieId);
        if (data) {
            data.title = title.title;
            return NextResponse.json(data);
        } else {
            return NextResponse.json({
                status: 404,
                message: `This movie with ${movieId} id was not found!`,
            });
        }
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
}

//delete the movie
export async function DELETE(req, { params }) {
    const movieId = parseInt(params?.id);
    try {
        const data = await getAllMovieData();
        const movieIndex = data.results.findIndex((movie) => movie.id === movieId);
        if (movieIndex !== -1) {
            data.results.splice(movieIndex, 1);
            return NextResponse.json({
                status: 200,
                message: `Movie with ${movieId} id has been deleted!`,
            });
        } else {
            return NextResponse.json({
                status: 404,
                message: `This movie with ${movieId} id was not found!`,
            });
        }
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
}
