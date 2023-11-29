import React from 'react';  
import Link from 'next/link';
import Image from 'next/image';
import { useAuthState } from '../context/auth';
const NavBar: React.FC = () => {
    const {loading, authenticated} = useAuthState();

    return (
        <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between px-5 bg-white h-13">
        <span className="text-2xl font-semibold text-gray-400">
        <Link href="/">
        
                    <Image
                        src="/asset1.svg"
                        alt="logo"
                        width={80}
                        height={45}
                    >
                    </Image>
                    <h1>UINONE</h1>
                    
                </Link>
        </span>

    
        <div className="max-w-full px-4">
            <div className="relative flex items-center bg-gray-100 border rounded hover:border-gray-700 hover:bg-white">
            
                <input
                    type="text"
                    placeholder="Search.."
                    className="px-3 py-1 bg-transparent rounded h-7 focus:outline-none"
                />
            </div>
        </div>

        <div className="flex">
            {!loading && (
                authenticated ? (
                    <button
                        className="w-20 px-2 mr-2 text-sm text-center text-white bg-gray-400 rounded h-7"

                    >
                        로그아웃
                    </button>
                ) : (<>
                    <Link href="/login">
                        <p className="w-20 px-2 pt-1 mr-2 text-sm text-center text-blue-500 border border-blue-500 rounded h-7">
                            로그인
                        </p>
                    </Link>
                    <Link href="/register">
                        <p className="w-20 px-2 pt-1 text-sm text-center text-white bg-gray-400 rounded h-7">
                            회원가입
                        </p>
                    </Link>
                </>)
            )}
        </div>
    </div>
    )
}

export default NavBar