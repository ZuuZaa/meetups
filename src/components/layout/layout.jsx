import MainNavigation from "../../components/main-navigation";
import Container from "../ui/container";

const Layout = (props) => {
    return (
        <div>
            <MainNavigation />
            <Container>
                {props.children}
            </Container>
        </div>
    )
}

export default Layout;