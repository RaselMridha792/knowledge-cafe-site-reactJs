import Body from "../body/body";
import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-5">
            <header className="flex border-b py-5 justify-between items-center">
                <h1  className="font-bold md:text-4xl text-2xl">Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </header>
            <Body></Body>
        </div>
    );
};

export default Header;