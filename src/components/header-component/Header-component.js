import React from "react";
import "./Header-styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/Firebase.utils";
//here link is used to point out to another page

const Header = ({ currentUser }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			{" "}
			{/*to is used to point to some page here */}
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/shop">
				CONTACT
			</Link>

			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					{" "}
					signOut
				</div>
			) : (
				<Link className="option" to="/signin">
					{" "}
					SIGNIN
				</Link>
			)}
		</div>
	</div>
);
export default Header;
