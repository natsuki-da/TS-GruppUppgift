

const Navbar= () => {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Dear Ask-Me Anything</a>
            <ul>
                <li>
                    <a href="/">Help Me</a>    
                </li>
                <li>        
                    <a href="/List">Questions-List</a>    
                </li>    
                <li>    
                    <a href="/Detail/:id">Q & A</a>    
                </li>        
            </ul>
        </nav>
    );
};

export default Navbar;