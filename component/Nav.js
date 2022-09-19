import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector } from "react-redux";
const Nav = () => {
    const state = useSelector((state)=> state.handleCart)
    const router = useRouter();
    const isActive = (route) =>{
        if(route === router.pathname){
            return "active"
        }
        else {
            return ""
        }
    }
    return (
        <div>
            <nav>
                <div className="nav-wrapper #2196f3 blue">
                    <Link href="/"><a className="brand-logo">VKMART</a></Link>
                    <ul id="nav-mobile" className="right ">
                        <li className={isActive('/login')}> <Link href="/login"><a >Login</a></Link></li>
                        <li> <Link href="/signup"><a>Signup</a></Link></li>
                        <li>
                            <Link href="/cart">
                                <a>
                            <i className="material-icons left" style={{margin:"2px 4px"}}>add_shopping_cart</i>
                            Cart ({state.length})
                            </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>

    )
}

export default Nav 