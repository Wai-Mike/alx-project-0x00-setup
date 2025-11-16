import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <div className="mt-4 flex gap-2 flex-wrap">
        <Button title="Small" styles="px-3 py-1 text-sm rounded-sm border" />
        <Button title="Medium" styles="px-4 py-2 text-base rounded-md border" />
        <Button title="Large" styles="px-5 py-3 text-lg rounded-full border" />
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;


