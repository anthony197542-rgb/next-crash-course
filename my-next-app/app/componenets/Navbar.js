function Navbar(){
    return (
        <nav className="bg-blue-400">
            <ul className="flex justify-center space-x-4 text-xl p-3">
                <Link href={"/"}>
                <li>Home</li>
                </Link>
                <Link href={"Posts"}>
                <li>Posts</li>
                </Link>
                <Link href={"/contact"}>
                <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar