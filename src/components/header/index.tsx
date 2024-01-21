import React from "react";

interface Heading {
    title: string;
    level?: number;
}
export default function Heading({title, level = 1}:Heading)
{
    return React.createElement(`h${level}`, {}, title)
}