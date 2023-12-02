import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router"
import { Comment, Post } from "../../../../types";
import dayjs from 'dayjs';
import { useAuthState } from "../../../../context/auth";
import { FormEvent, useState } from "react";
import classNames from 'classnames';
import useSWR from 'swr';

const PostPage = () => {
    const router = useRouter();
    const { identifier, sub, slug } = router.query;
    const { authenticated, user } = useAuthState();
    const fetcher = async (url: string) => {
        try{
            const res = await axios.get(url);
            return res.data
        } catch(error: any){    
            throw error.response.data
        }
    }
    const { data: post, error, mutate: postMutate } = useSWR<Post>(identifier && slug ? `/posts/${identifier}/${slug}` : null,fetcher);
    return(
        <div className="flex max-w-5xl px-4 pt-5 mx-auto">
            <div className="w-full md:mr-3 md:w-8/12">
                <div className="bg-white rounded">
                    {post && (
                        <> 
                            <div className="flex">
                                 <div className="py-2 pr-2">
                                    <div className="flex items-center">
                                        <p className="text-xs text-gray-400">
                                            Posted by 
                                            <Link href={`/u/${post.username}`}>
                                           
                                                    /u/{post.username}
                                                
                                            </Link>

                                            <Link href={`${post.url}`}>
            
                                                    {dayjs(post.createdAt).format("YYYY-MM-DD HH:mm")}
                                                
                                            </Link>
                                           
                                        </p>

                                    </div>
                                    
                            <h1 className="my-1 text-xl font-medium">{post.title}</h1>
                            <p className="my-3 text-sm">{post.body}</p>
                            <div className="flex">
                            <button>
                                <i className="mr-1 fas fa-comment-alt fa-xs"></i>
                                <span className="font-bold">
                                    {post.commentCount} Comments
                                </span>
                            </button>
                            </div>
                                 </div>
                            </div>


                        </>

                    )}



                </div>
            </div>
        </div>
    )
 

}

export default PostPage