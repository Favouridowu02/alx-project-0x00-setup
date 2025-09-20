import Card from "@/components/Card";
import React from "react";
import Button from "@/components/Button";


const Landing: React.FC = () => {
    return (
        <div>
            <Button sizes="small" shapes="rounded-full" title="Get Started"/>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <Card />
        </div>
    )
};
export default Landing;