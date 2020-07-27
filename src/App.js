import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/shop-Component";
import Header from "./components/header-component/Header-component";
import SignInAndSignUpPage from "../src/pages/sign-in-and-sign-up/Sign-in-and-sign-up-Component";
import { auth, createUserProfileDocument } from "./firebase/Firebase.utils";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unSubscribeFromAuth = null;

	componentDidMount() {
		this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
			createUserProfileDocument(user);
			//this.setState({ currentUser: user });

			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					{/*we are using exact key here means excat ga path lo / undali ledha /shop undali ani*/}
					<Route exact path="/" component={Homepage} />
					<Route eaxct path="/shop" component={ShopPage} />
					<Route eaxct path="/signIn" component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
