import React from "react";
import { useRouter } from "next/router";

export default function ImageId(){

    const router = useRouter();
    const {blog_slug, image_id} = router.query;

    return (
        <>
            <div>This is {image_id} image of blog {blog_slug}</div>
        </>
    )
}